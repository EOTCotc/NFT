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

            <van-button v-if="true"
                        :disabled="false"
                        @click="jumporderHandler"
                        type="info"
                        :style="{ marginTop: '20px', width: '150px' }">去购买</van-button>
            <!-- <van-button :disabled="false"
                        type="info"
                        :style="{ marginTop: '20px', width: '150px' }">购买</van-button> -->
          </div>
        </van-tab>
        <van-tab title="我的盲盒">
          <div v-if="blinboxFlag"
               class="myblidbox">
            <div class="openbox">
              <img src="../../assets/img/blindbox/box1.png"
                   alt="" />
            </div>
            <div class="selectedboxnum">
              <p class="title">总数 {{ openBox }}/{{ totalBoxNum }}</p>
              <div class="scorllItem">
                <ul>
                  <li v-for="(item, index) in listData"
                      :class="{
                      blindboxActive: blindboxUid.indexOf(item.num) != -1,
                    }"
                      @click="listHandler(item.num, index)"
                      :key="item.id">
                    #{{ item.num }}
                  </li>
                  <!-- <li :class="{ blindboxActive: box.ID === '70' }"
                      v-for="(box, i) in filter_boxList"
                      :key="i">
                    #{{ box.ID.padStart(6, 0) }}
                  </li> -->
                </ul>
              </div>
            </div>
            <p @click="getElement"
               class="all">查看全部&nbsp;></p>
            <div class="footerBttn">
              <div class="openboxBtn">
                <van-button v-if="true"
                            :disabled="true"
                            @click="showHandler"
                            :style="{ marginTop: '20px', width: '150px' }">暂未开放</van-button>
                <!-- <button @click="showHandler">开盲盒</button> -->
              </div>
              <div class="owncard">
                <button>拥有卡牌: 0</button>
              </div>
            </div>
          </div>
          <!-- 空 -->
          <div v-if="!blinboxFlag"
               class="emptyPage">
            <van-empty class="custom-image"
                       :image="require('../../assets/img/blindbox/empty.png')"
                       description="暂无盲盒数据" />
          </div>
          <!-- 动画 -->
          <div class="shodw">
            <van-overlay :show="show"
                         @click="show = false">
              <div class="wrapper"
                   @click.stop>
                <div v-show="openFlag7"
                     class="bgbox">
                  <div v-show="openFlag1"
                       ref="bgimg"
                       class="bgimg"></div>
                  <div v-show="!openFlag2"
                       ref="bgimg2"
                       class="bgimg2">
                    <div class="card"></div>
                  </div>
                  <div v-show="!openFlag3"
                       class="showCard"></div>
                </div>
                <div v-show="!openFlag8"
                     class="getCard">
                  <div class="getLogo"></div>
                  <img class="img"
                       src="../../assets/img/blindbox/openbg.png"
                       alt="" />
                  <ul class="lottocard">
                    <li v-show="!openFlag5"
                        class="singlecard">
                      <img class="cards"
                           src="../../assets/img/blindbox/card1.png"
                           alt="" />
                      <p class="msg">5级黄金甲犀牛</p>
                    </li>
                    <li class="morecard"
                        v-show="!openFlag6">
                      <div class="itemcard">
                        <img class="moreimg"
                             src="../../assets/img/blindbox/card1.png"
                             alt="" />
                        <p class="moredmsg">5级黄金甲犀牛</p>
                      </div>
                      <div class="itemcard">
                        <img class="moreimg"
                             src="../../assets/img/blindbox/card1.png"
                             alt="" />
                        <p class="moredmsg">5级黄金甲犀牛</p>
                      </div>
                      <div class="itemcard">
                        <img class="moreimg"
                             src="../../assets/img/blindbox/card1.png"
                             alt="" />
                        <p class="moredmsg">5级黄金甲犀牛</p>
                      </div>
                      <div class="itemcard">
                        <img class="moreimg"
                             src="../../assets/img/blindbox/card1.png"
                             alt="" />
                        <p class="moredmsg">5级黄金甲犀牛</p>
                      </div>
                      <div class="itemcard">
                        <img class="moreimg"
                             src="../../assets/img/blindbox/card1.png"
                             alt="" />
                        <p class="moredmsg">5级黄金甲犀牛</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </van-overlay>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { myNft } from '@/api/newReqets'
import { Toast } from 'vant'
export default {
  data() {
    return {
      listData: [
        {
          id: Math.random() * 10 + '',
          num: '000001'
        },
        {
          id: Math.random() * 10 + '',
          num: '000002'
        },
        {
          id: Math.random() * 10 + '',
          num: '000003'
        },
        {
          id: Math.random() * 10 + '',
          num: '000004'
        },
        {
          id: Math.random() * 10 + '',
          num: '000005'
        },
        {
          id: Math.random() * 10 + '',
          num: '000006'
        },
        {
          id: Math.random() * 10 + '',
          num: '000007'
        },
        {
          id: Math.random() * 10 + '',
          num: '000008'
        },
        {
          id: Math.random() * 10 + '',
          num: '000009'
        },
        {
          id: Math.random() * 10 + '',
          num: '0000010'
        },
        {
          id: Math.random() * 10 + '',
          num: '000011'
        },
        {
          id: Math.random() * 10 + '',
          num: '000012'
        },
        {
          id: Math.random() * 10 + '',
          num: '0000013'
        }
      ],
      blindboxUid: [], //接收盒子编号
      boxList: [],
      allshow: false, //全部展示
      show: false,
      blinboxActive: '1',
      blinboxFlag: false, //是否有盲盒
      openFlag1: true, //显示第一个盒子
      openFlag2: true, //显示第二个盒子
      openFlag3: true, //显示卡片盒子
      openFlag4: true, //显示
      openFlag5: true, // 显示一张卡片
      openFlag6: true, //显示多张卡片
      openFlag7: true, //蓝光背景
      openFlag8: true //金光背景
    }
  },
  created() {
    this.getBox()
  },
  methods: {
    // 选中盲盒编码
    listHandler(index) {
      let num = this.blindboxUid.indexOf(index)
      if (num == -1) {
        if (this.blindboxUid.length < 10) {
          this.blindboxUid.push(index)
        } else {
          Toast({ message: '最多连开十个', duration: 800 })
        }
      } else {
        this.blindboxUid.splice(num, 1)
      }
    },
    jumporderHandler() {
      this.$router.push({
        name: 'order_page'
      })
    },
    getElement() {
      this.$router.push({
        name: 'look_all'
      })
    },
    showHandler() {
      let _this = this
      this.show = true
      let bgimg = this.$refs.bgimg
      let bgimg2 = this.$refs.bgimg2
      console.log(bgimg)
      bgimg.classList.add('animate__animated', 'animate__rotateIn')
      bgimg.style.setProperty('--animate-duration', '2s')
      bgimg.addEventListener('animationend', (e) => {
        console.log(e)
        let elapsedTime = e.elapsedTime
        if (elapsedTime == 2) {
          _this.openFlag1 = false
          _this.openFlag2 = false
          bgimg2.classList.add('animate__animated', 'animate__zoomIn')
          bgimg2.style.setProperty('--animate-duration', '0.5s')
          bgimg2.addEventListener('animationend', (e) => {
            let elapsedTime2 = e.elapsedTime
            if (elapsedTime2 == 0.5) {
              _this.openFlag7 = false
              _this.openFlag8 = false
              _this.openFlag2 = true
              _this.openFlag6 = false
            }
          })
        }
      })
      _this.openFlag1 = true
      _this.openFlag2 = true
      _this.openFlag6 = true
      _this.openFlag7 = true
      _this.openFlag8 = true
    },
    async getBox() {
      const { data } = await myNft(2)
      // console.log("开盲盒数据", data);
      this.boxList = data
    }
  },
  computed: {
    totalBoxNum() {
      return this.boxList.length
    },
    openBox() {
      return this.boxList.reduce((total, pre) => (pre.Activate === '0' ? (total += 1) : total), 0)
    },
    filter_boxList() {
      return this.boxList.filter((card) => card.Activate === '0')
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
    // 展示全部
    .look {
      width: 690px;
      /deep/ .van-popup {
        border-radius: 10px;
      }
      .lookContent {
        width: 690px;
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-around;
        align-items: center;
        padding: 0.2rem 0.3rem;
        box-sizing: border-box;
        div {
          margin: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 30px;
          font-size: 28px;
        }
      }
    }
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
      .equityBtn {
        padding: 13px 50px;
        background-color: #5d6c8a;
        margin-top: 20px;
        border-radius: 4px;
        opacity: 0.5;
        color: #fff;
        font-size: 0.3rem;
      }
      .equityTitle {
        margin-top: 16px;
        font-size: 0.5rem;
      }
      .ti1 {
        font-size: 0.4rem;
      }
      .sp {
        width: 50px;
        height: 50px;
        border: 2px solid #237ff8;
        text-align: center;
        color: #fff;
        display: inline-block;
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
          height: 250px;
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
        width: 160px;
        height: 40px;
        margin: 40px auto 0;
        font-size: 28px;
        // border: 1px solid red;
        line-height: 40px;
      }
      .footerBttn {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
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
    .shodw {
      .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background: url('../../assets/img/blindbox/bgbox.png') no-repeat center center;

        .bgbox {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 560px;
          height: 560px;
          background: url('../../assets/img/blindbox/bgbox.png') no-repeat center center;
          background-size: 560px, 560px;
          .bgimg {
            position: absolute;
            top: 30%;
            left: 30%;
            transform: translate(-50%, -50%);
            width: 236px;
            height: 215px;
            background: url('../../assets/img/blindbox/box1.png') no-repeat center center;
            background-size: 236px, 215px;
          }
          .bgimg2 {
            position: absolute;
            top: 15%;
            left: 20%;
            transform: translate(-50%, -50%);
            width: 336px;
            height: 315px;
            background: url('../../assets/img/blindbox/openbox3.png') no-repeat center center;
            background-size: 236px, 215px;
            .card {
              width: 46px;
              height: 65px;
              position: absolute;
              top: 35%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: url('../../assets/img/blindbox/card1.png') no-repeat center center;
              background-size: 46px, 65px;
            }
          }
          .showCard {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 236px;
            height: 315px;
            background: url('../../assets/img/blindbox/card1.png') no-repeat center center;
            background-size: 236px, 315px;
          }
        }
        .getCard {
          width: 750px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          .img {
            width: 100%;
            height: 100%;
          }
          .getLogo {
            width: 405px;
            height: 200px;
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url('../../assets/img/blindbox/logo.png') no-repeat center center;
            background-size: 405px, 200px;
          }
          .lottocard {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-sizing: border-box;
            display: flex;
            // justify-content: center;
            flex-wrap: wrap;
            .singlecard {
              width: 330px;
              height: 545px;
              margin: 0 auto;
              .cards {
                width: 100%;
                height: 480px;
                // margin: 0 auto;
                vertical-align: middle;
              }
              .msg {
                width: 100%;
                height: 65px;
                background: #080b13;
                font-size: 32px;
                font-family: PingFang SC-Regular, PingFang SC;
                font-weight: 400;
                color: #ffffff;
                text-align: center;
                line-height: 65px;
              }
            }
            .morecard {
              width: 100%;
              display: flex;
              align-content: flex-start;
              flex-wrap: wrap;
              margin: 0 22px;
              .itemcard {
                width: 170px;
                margin-right: 5px;
                margin-bottom: 30px;
                // &:nth-child(4) {
                //   margin-right: none;
                // }
                // height: 240px;
                .moreimg {
                  width: 100%;
                  height: 240px;
                  vertical-align: middle;
                }
                .moredmsg {
                  width: 170px;
                  height: 50px;
                  // padding: 0 7px;
                  background-color: #080b13;
                  font-size: 20px;
                  color: #ffffff;
                  text-align: center;
                  line-height: 50px;
                  border-radius: 0px 0px 8px 8px;
                  box-sizing: border-box;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
