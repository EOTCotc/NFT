<template>
  <div class="blindboxPage">
    <div class="header">
      <img src="@/assets/img/nftlogo1.png"
           alt />
    </div>
    <div class="blinboxContent">
      <van-tabs background="transparent"
                title-inactive-color="#666"
                title-active-color="#fff"
                v-model="blinboxActive">
        <van-tab title="购买盲盒">
          <div class="mysteryBoxItem">
            <img src="@/assets/img/card/rhinoceros-grade.png"
                 width="50%"
                 alt />
            <div class="ti1"
                 :style="{ color: '#fc7542ff', marginTop: '15px' }">
              <span>50 USDT</span> +
              <span>50U（EOTC）</span>
            </div>

            <van-button :disabled="false"
                        @click="jumporderHandler"
                        type="info"
                        :style="{ marginTop: '20px' }">去购买</van-button>

          </div>
        </van-tab>
        <van-tab title="我的盲盒">
          <div v-if="boxList.length"
               class="myblidbox">
            <div class="openbox">
              <img src="../../assets/img/blindbox/box1.png"
                   alt="" />
            </div>
            <div class="selectedboxnum">
              <p class="title">总数 {{ openBox }}/{{ totalBoxNum }}</p>
              <div class="scorllItem">
                <ul>
                  <li v-for="item in boxList"
                      :class="{blindboxActive: blindboxUid.indexOf(item.id) != -1}"
                      @click="listHandler(item.id)"
                      :key="item.id">
                    #{{ item.num.padStart(6, 0)  }}
                  </li>
                </ul>
              </div>
            </div>
            <p @click="getElement"
               class="all">查看全部&nbsp;></p>
            <div class="footerBttn">
              <div class="openboxBtn">
                <van-button :disabled="blindboxUid.length?false:true"
                            @click="showCard(blindboxUid.length)">开盲盒</van-button>
              </div>
              <div class="owncard">
                <button>拥有卡牌: {{cardNum}}</button>
              </div>
            </div>
          </div>
          <!-- 空 -->
          <div v-else
               class="emptyPage">
            <van-empty class="custom-image"
                       :image="require('../../assets/img/blindbox/empty.png')"
                       description="暂无盲盒数据" />
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 动画 -->
    <van-popup v-model="shows"
               position="center"
               @click-overlay="closeAnimation">

      <div class="box">
        <img src="../../assets/img/blindBox.gif"
             v-show="show1"
             class="tupian" />

        <img class="images"
             v-show="show2"
             :src="listData[i].url">
      </div>
    </van-popup>

    <van-dialog v-model="showTime"
                width="100%"
                height="100%"
                @opened="closeCard"
                :show-cancel-button=false
                :showConfirmButton=false>
      <div class="card">
        <img src="../../assets/img/getCard.png"
             class="pic">
        <div class="wraps">
          <div class="wrap"
               v-for="item in listData"
               :key="item.id"
               :style="listData.length==1?'width:200px':listData.length==2?'width:40%':listData.length==3?'width:30%':'width:22%'">
            <img :src="item.url"
                 class="image">
            <p :class="listData.length==1?'bigF':listData.length==2?'largeF':listData.length==3?'mediumF':'sF'">{{item.title}}</p>
          </div>
        </div>

      </div>

    </van-dialog>

  </div>
</template>
<script>
import { myNft } from '@/api/newReqets'
import { Toast } from 'vant'
export default {
  data() {
    return {
      blindboxUid: [], //接收盒子id
      //盲盒数据
      boxList: [
        { id: Math.random(), num: '00001' },
        { id: Math.random(), num: '00001' },
        { id: Math.random(), num: '00001' },
        { id: Math.random(), num: '00001' },
        { id: Math.random(), num: '00002' },
        { id: Math.random(), num: '00002' }
      ],
      blinboxActive: '1',
      cardNum: 0, //拥有卡牌数

      // 动画
      show: false,
      show1: false,
      show2: false,
      showTime: false,
      shows: false,
      i: 0,
      // 盲盒开出的卡牌数据
      listData: [
        { id: Math.random(), url: require('../../assets/img/equityItem1.png'), title: '5级黄金甲犀牛' },
        { id: Math.random(), url: require('../../assets/img/equityItem2.png'), title: '2级玄铁甲犀牛' }
      ]
    }
  },
  created() {
    // this.getBox()
  },
  methods: {
    // 选中开盲盒数
    listHandler(id) {
      let num = this.blindboxUid.indexOf(id)
      if (num == -1) {
        if (this.blindboxUid.length < 10) {
          this.blindboxUid.push(id)
        } else {
          Toast({ message: '最多连开十个', duration: 800 })
        }
      } else {
        this.blindboxUid.splice(num, 1)
      }
    },

    // 去购买盲盒，跳转至购买页面
    jumporderHandler() {
      this.$router.push({ name: 'order_page' })
    },

    // 查看全部盲盒，跳转至另一页面
    getElement() {
      this.$router.push({ name: 'look_all' })
    },

    // 开盲盒动画
    showCard(i) {
      this.i = i - 1
      console.log(i)
      this.show = false
      this.shows = true
      this.show1 = true

      setTimeout(() => {
        this.show2 = true
        setTimeout(() => {
          this.show2 = false
        }, 1500)
      }, 1500)

      setTimeout(() => {
        this.show1 = false
      }, 1800)

      let timer = setTimeout(() => {
        if (this.show == true) {
          clearInterval(timer)
        } else {
          if (i == 1) {
            this.closeAnimation()
          } else {
            this.shows = false
            i--
            setTimeout(() => {
              this.showCard(i)
            }, 500)
          }
        }
      }, 3000)
    },
    closeAnimation() {
      this.show = true
      this.shows = false
      this.showTime = true
    },
    closeCard() {
      setTimeout(() => {
        this.showTime = false
      }, 2000)

      // 重新请求用户盲盒数
    },

    // 获取盲盒数据
    async getBox() {
      const { data } = await myNft(2)
      // console.log("开盲盒数据", data);
      this.boxList = data
    }
  },
  computed: {
    // 用户拥有盲盒总数
    totalBoxNum() {
      return this.boxList.length
    },
    // 用户选择盲盒数（一次开几个盲盒）
    openBox() {
      return this.blindboxUid.length
    }
  }
}
</script>
<style lang="less" scoped>
.blindboxPage {
  margin-top: 80px;
  background: linear-gradient(174deg, #437fff 0%, #172d5a 0%, #06070a 100%);
  .header {
    width: 100vw;
    height: 460px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 5rem;
      height: 5rem;
    }
  }
  .blinboxContent {
    margin-top: 10px;
    /deep/ .van-tabs__line {
      background-color: #237ff8;
    }
    /deep/ .van-tab__text {
      font-size: 36px;
    }
    .mysteryBoxItem {
      margin-top: 80px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 2rem;
      .ti1 {
        font-size: 0.4rem;
      }
    }
    .myblidbox {
      .openbox {
        // border: 2px solid red;
        width: 560px;
        height: 320px;
        margin: 85px auto 0;
        background: url('../../assets/img/blindbox/bg.png') no-repeat center center;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 230px;
          height: 194px;
          text-align: center;
        }
      }
      .selectedboxnum {
        margin-top: 130px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        .title {
          text-align: center;
          color: #fff;
          font-size: 32px;
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
        }
        .scorllItem {
          width: 100%;
          max-height: 250px;
          // height: 100%;
          overflow-y: auto;
        }
        ul {
          width: 100%;
          color: #fff;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          padding: 0 40px;
          li {
            width: 160px;
            height: 64px;
            border: 1px solid #fff;
            margin-bottom: 30px;
            margin-right: 17px;
            font-size: 24px;
            text-align: center;
            line-height: 64px;
            border-radius: 50px;
            box-sizing: border-box;
          }
        }
        .blindboxActive {
          color: #ffb942;
          border: 1px solid #ffb942;
        }
      }
      .all {
        color: #fff;
        width: 100%;
        height: 40px;
        margin: 40px auto 0;
        font-size: 28px;
        text-align: center;
        line-height: 40px;
      }
      .footerBttn {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
        margin-bottom: 80px;
        .openboxBtn,
        .owncard {
          button {
            width: 330px;
            height: 88px;
            color: #fff;
            border-radius: 8px;
            font-size: 32px;
          }
        }
        .openboxBtn button {
          margin-bottom: 40px;
          background: #237ff8;
          border: none;
        }
        .owncard button {
          background-color: rgba(0, 0, 0, 0.5);
          border: 2px solid #ffffff;
        }
      }
    }
    .emptyPage {
      /deep/ .van-empty__image {
        width: 6.26667rem;
      }
    }
  }
}

.van-popup {
  width: 100%;
  height: 1000px;
  background-color: transparent !important;
  top: 0;
  overflow: hidden;
  position: relative;
  top: -600px;
  .box {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .tupian {
      width: 800px;
      height: 800px;
      background: url(../../assets/img/light.png) no-repeat 0 0 / 100%;
    }

    .images {
      position: absolute;
      animation: rotate 1.5s linear infinite;
    }
  }
}

@keyframes rotate {
  0% {
    top: 26%;
    left: 50%;
    width: 0px;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  4% {
    top: 26%;
    left: 50%;
    width: 20px;
    transform: translate(50%, 50%);
    opacity: 0.4;
  }

  70% {
    top: 0px;
    left: 0px;
    width: 330px;
    transform: translate(64%, 50%);
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 330px;
    transform: translate(64%, 50%);
  }
}

.van-dialog {
  padding-top: 6em;
  background: transparent !important;
  .card {
    padding-top: 3em;
    padding-bottom: 2em;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    background: url(../../assets/img/background.png) no-repeat 0 0 / 100% 100%;
    img {
      width: 400px;
    }
    .pic {
      position: absolute;
      top: 10%;
    }
    .wraps {
      padding: 0 10px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .wrap {
        margin: 4px;
        p {
          padding: 8px 0;
          width: 100%;
          text-align: center;
          border-radius: 0px 0px 10px 10px;
          margin: 0;
          background: #000;
          color: #fff;
        }
        .image {
          width: 100%;
        }

        .bigF {
          font-size: 36px;
        }
        .largeF {
          font-size: 30px;
        }
        .mediumF {
          font-size: 26px;
        }
        .sF {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
