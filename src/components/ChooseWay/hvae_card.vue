<template>
  <div class="mynft_container">
    <div class="haveCard">
      <div class="top">
        <van-nav-bar title="权益卡牌"
                     fixed
                     placeholder
                     z-index="99"
                     left-arrow
                     @click-left="onClickLeft" />
      </div>
      <!-- 切换 -->
      <div class="toggle">
        <van-tabs v-model="toggleActive"
                  @click="waitactiveHandle"
                  background="#121933"
                  title-inactive-color="#666"
                  title-active-color="#fff"
                  swipeable>
          <van-tab name="4"
                   title="已拥有">
            <div class="ownPage">
              <div class="no_card">
                <!-- <img src="@/assets/img/cardPage/cardNull.png" alt="" />
                <p>暂无权益卡牌</p> -->
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>
            </div>
          </van-tab>
          <van-tab name="3"
                   title="待领取">
            <div class="awaitPage">
              <div class="no_card"
                   v-if="cardState.length === 0">
                <!-- <div class="no_card" v-if="false"> -->
                <!-- <img src="@/assets/img/cardPage/cardNull.png" alt="" />
                <p>暂无权益卡牌</p> -->
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>
              <div v-else
                   class="awaitItem"
                   v-for="(item, i) in cardState"
                   :key="i">
                <template v-if="item.Activate === '1' && item.Type === '1'">
                  <div @click="cardDetailsHandler"
                       class="left">
                    <img src="../../assets/img/equityItem1.png"
                         alt="" />
                  </div>
                  <div class="right">
                    <div class="titleWarp">
                      <span>创世会权益卡</span>
                      <span>
                        <van-checkbox icon-size="16px"
                                      v-model="item.ischecked"></van-checkbox>
                      </span>
                    </div>
                    <section class="msg"
                             :class="{ 'van-multi-ellipsis--l2': item.isopen }"
                             @click="item.isopen = !item.isopen">
                      创世会，传说级卡牌，全球仅限 66 张,享有全网创世会 EOTC NFT
                      1% 手续费平均分红，EOTC DAO 治理投票权。
                      <span v-if="!item.isopen"
                            @click="item.isopen = false"
                            :style="{ color: '#fdd16a' }">收起.</span>
                    </section>
                  </div>
                </template>
                <template v-else-if="item.Activate === '1' && item.Type === '2'">
                  <div @click="cardDetailsHandler"
                       class="left">
                    <img src="../../assets/img/equityItem2.png"
                         alt="" />
                  </div>
                  <div class="right">
                    <div class="titleWarp">
                      <span>联合会权益卡</span>
                      <span>
                        <van-checkbox icon-size="16px"
                                      v-model="item.ischecked"></van-checkbox>
                      </span>
                    </div>
                    <section class="msg"
                             :class="{ 'van-multi-ellipsis--l2': item.isopen }"
                             @click="item.isopen = !item.isopen">
                      联合会，史诗级卡牌，全球仅限 666 张，享有全网联合会 EOTC
                      NFT 1% 手续费平均分红，EOTC DAO 治理投票权。
                      <span v-if="!item.isopen"
                            @click="item.isopen = false"
                            :style="{ color: '#fdd16a' }">收起.</span>
                    </section>
                  </div>
                </template>
              </div>
            </div>
          </van-tab>
          <van-tab name="2"
                   title="待铸造">
            <div class="waitcoin">
              <div v-if="coinFlag"
                   class="no_card">
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>
              <div v-if="!coinFlag"
                   class="coinwarp">
                <div v-for="(cast, index) in castDataList"
                     :key="cast.castid"
                     class="coineditem">
                  <div class="left">
                    <img :src="cast.castimg"
                         alt="卡牌" />
                  </div>
                  <div class="right">
                    <div>{{ cast.castname }}</div>
                    <div>数量：{{ cast.castnum }}</div>
                    <div v-if="currentIndex == index ? fontFlag : !fontFlag">
                      <span @click="coincardHandler(cast, index)"><img :src="cast.casticon"
                             alt="铸造" />铸造</span>
                    </div>
                    <div v-else
                         class="waitrank">
                      <p>铸造中…</p>
                      <p>铸造完成后可在待领取中进行领取</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab name="1"
                   title="待激活">
            <div class="waitActive">
              <div class="no_card"
                   v-if="Not_activatedList.length === 0">
                <!-- <img src="@/assets/img/cardPage/cardNull.png" alt="" />
                <p>暂无权益卡牌</p> -->
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>
              <div v-else
                   class="itemCard isgary"
                   v-for="(item, i) in Not_activatedList"
                   :key="i">
                <template>
                  <div>
                    <img src="../../assets/img/equityItem2.png"
                         alt="" />
                    <p>联合会权益NFT</p>
                  </div>
                </template>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <!-- 页脚 -->
      <div class="footer"
           v-if="showFooter">
        <div class="left">
          <p>已选择 {{ selecked }} 个</p>
          <p>提示:选择同种类NFT</p>
        </div>
        <div class="right">
          <van-button round
                      :disabled="isselect"
                      block
                      type="info"
                      @click="getCard()">领取</van-button>
        </div>
      </div>
    </div>

    <!-- 遮罩 -->
    <div v-show="maskFlag1"
         class="rankmask">
      <div class="maskbox">
        <div>
          本次铸造需要扣除20-50不等的TRX
          现在立即铸造？
        </div>
        <div>
          <p @click="cancelHandler">取消</p>
          <p @click="confirmHandler">确定</p>
        </div>
        <img class="img"
             src="../../assets/img/coincard/icon1.png"
             alt="警告">
      </div>
    </div>
    <div v-show="maskFlag2"
         class="rankmask">
      <div class="maskbox">
        <div>
          当前卡牌后期合成会销毁或升级，建议不进行铸造，未铸造仍可以在平台进行合成及交易，现在进行铸造？
        </div>
        <div>
          <p @click="jumpHandler">跳过铸造</p>
          <p @click="confirmRankHandler">确定铸造</p>
        </div>
        <img class="img"
             src="../../assets/img/coincard/icon1.png"
             alt="警告">
      </div>
    </div>
    <div v-show="maskFlag3"
         class="rankmask">
      <div class="maskbox">
        <div>
          已成功提交铸造，请等待铸造铸造完成后即可领取至钱包
        </div>
        <div>
          <p @click="cancelHandler">取消</p>
          <p @click="confirmSuccHandler">确定</p>
        </div>
        <img class="img"
             src="../../assets/img/coincard/icon2.png"
             alt="确认">
      </div>
    </div>
  </div>
</template>

<script>
import { myNft } from '@/api/newReqets'

export default {
  name: 'myNFT-list',
  data() {
    return {
      showFooter: false,
      cardList: [],
      contentFlag: true,
      toggleActive: '1',
      cardState: [],
      coinFlag: false,
      // activeName:'1'
      currentIndex: -1,
      index: -2,
      maskFlag1: false, //遮罩第一次状态
      maskFlag2: false, //遮罩第二次状态
      maskFlag3: false, //遮罩第三次状态
      fontFlag: false, //字体状态
      // 定义卡牌数据
      // castDataList: [],
      castDataList: [
        {
          castid: Math.floor(Math.random() * 100) + '',
          castname: '三级青铜甲犀牛',
          castnum: '1',
          casticon: require('../../assets/img/coincard/icon3.png'),
          castimg: require('../../assets/img/coincard/card1.png')
        },
        {
          castid: Math.floor(Math.random() * 100) + '',
          castname: '三级青铜甲犀牛',
          castnum: '1',
          casticon: require('../../assets/img/coincard/icon3.png'),
          castimg: require('../../assets/img/coincard/card1.png')
        },
        {
          castid: Math.floor(Math.random() * 100) + '',
          castname: '三级青铜甲犀牛',
          castnum: '1',
          casticon: require('../../assets/img/coincard/icon3.png'),
          castimg: require('../../assets/img/coincard/card1.png')
        },
        {
          castid: Math.floor(Math.random() * 100) + '',
          castname: '三级青铜甲犀牛',
          castnum: '1',
          casticon: require('../../assets/img/coincard/icon3.png'),
          castimg: require('../../assets/img/coincard/card1.png')
        }
      ]
    }
  },
  created() {
    this.getMyNFT()
    this.waitactiveHandle()
  },
  methods: {
    coincardHandler(item, index) {
      // console.log(item);
      // console.log('dddd');
      this.index = null
      // this.cardData.push(item)
      this.index = index
      this.maskFlag1 = true
    },
    cancelHandler() {
      this.maskFlag1 = false
      this.maskFlag3 = false
    },
    confirmHandler() {
      console.log('7')
      this.maskFlag2 = true
      this.maskFlag1 = false
    },
    jumpHandler() {
      this.maskFlag2 = false
    },
    confirmRankHandler() {
      this.currentIndex = this.index
      this.maskFlag2 = false
      this.maskFlag3 = true
    },
    confirmSuccHandler() {
      this.maskFlag3 = false
    },
    waitactiveHandle() {
      // if (this.toggleActive === '1') {
      //   this.showFooter = false
      // } else if (this.toggleActive === '2') {
      //   this.showFooter = false
      // } else if (this.toggleActive === '3') {
      //   this.showFooter = true
      // } else if (this.toggleActive === '4') {
      //   this.showFooter = false
      // }

      this.toggleActive === '3' ? (this.showFooter = true) : (this.showFooter = false)
    },
    onClickLeft() {
      this.$router.back()
    },
    cardDetailsHandler() {
      // this.$router.push({
      //   name: "card_details",
      // });
    },
    getCard() {
      // this.$toast.clear();
      // this.$toast.warning("卡牌暂不可领取!");
    },
    async getMyNFT() {
      const { data } = await myNft(1)
      console.log(data)
      this.cardList = data.reverse()
      this.pd_card.forEach((card) => {
        this.cardState.push({
          ...card,
          ischecked: false,
          isopen: true
        })
      })
    },
    createCard(item) {
      this.$toast.clear()
      this.$toast.warning('卡牌铸造中，敬请期待！')
    }
  },
  computed: {
    Not_activatedList() {
      return this.cardList.filter((card) => card.Activate === '0')
    },
    pd_card() {
      return this.cardList.filter((card) => card.Activate === '1')
    },
    selecked() {
      return this.cardState.filter((card) => card.ischecked === true).length
    },
    isselect() {
      // return this.selecked > 0 ? false : true;
      return true
    }
  }
}
</script>

<style lang="less" scoped>
.empry {
  text-align: center;
  margin-top: 1rem;
}
//无权益卡样式
.custom-image /deep/ .van-empty__image {
  width: 260px;
  height: 172px;
}
.mynft_container {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  color: #fff;
  background-color: rgb(8, 11, 19);
}

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

.title1 {
  font-size: 0.5rem;
  text-align: center;
}

// 遮罩样式
.rankmask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .maskbox {
    width: 590px;
    background-color: #fff;
    border-radius: 20px;
    position: relative;

    div {
      &:nth-child(1) {
        padding: 100px 30px 40px 30px;
        color: #333333;
        font-size: 32px;
        line-height: 53px;
        text-align: center;
      }
      &:nth-child(2) {
        width: 100%;
        height: 95px;
        line-height: 95px;
        display: flex;
        align-items: center;
        font-size: 32px;
        border-top: 1px solid #f3f4f5;

        p {
          flex: 1;
          text-align: center;
          font-size: 32px;
          height: 100%;
          &:nth-child(1) {
            color: #666666;
            border-right: 1px solid #f3f4f5;
          }
          &:nth-child(2) {
            color: #1b2945;
          }
        }
      }
    }
    .img {
      width: 200px;
      height: 200px;
      position: absolute;
      top: -25%;
      left: 50%;
      transform: translate(-50%, 0%);
    }
  }
}
.isgary {
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
}

//内容不为空的样式
.haveCard {
  width: 100vw;
  .top {
    /deep/ .van-nav-bar__content {
      // background-color: #172C58;
      background: #1b2945;
    }
    /deep/ .van-nav-bar {
      background-color: none;
    }
    /deep/ .van-icon {
      color: #fff;
    }
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
  }
  //切换
  .toggle {
    /deep/ .van-tab__text {
      font-size: 36px;
    }
    /deep/ .van-tabs__line {
      background-color: #237ff8;
    }
    // /deep/ .van-tabs__wrap {
    // margin-bottom: 39px;
    // }
    .no_card {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding-top: 1.5rem;
      font-size: 0.6rem;
      color: #e28c0a;
      p {
        margin-top: 25px;
      }
    }
    // ?待铸造
    .waitcoin {
      width: 100%;
      padding-top: 40px;
      background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);
      .coineditem {
        width: 690px;
        margin: 0 auto 30px;
        background: #1b2333;
        border: 1px solid #333;
        border-radius: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        box-sizing: border-box;
        .left {
          img {
            width: 160px;
            height: 232px;
          }
        }
        .right {
          div {
            &:nth-of-type(1) {
              font-size: 32px;
              color: #ffffff;
              margin-bottom: 24px;
            }
            &:nth-of-type(2) {
              width: 440px;
              height: 40px;
              margin-bottom: 43px;
              font-size: 28px;
              color: #ffffff;
            }
            &:nth-of-type(3) {
              width: 440px;
              font-size: 28px;
              color: #227aee;
              display: flex;
              justify-content: flex-end;
              span {
                width: 210px;
                height: 80px;
                line-height: 80px;
                border-radius: 48px 48px 48px 48px;
                background: #112a4a;
                text-align: center;
                img {
                  vertical-align: middle;
                  width: 40px;
                  height: 43px;
                  margin-right: 10px;
                }
              }
            }
            &.waitrank {
              display: block;
              p {
                color: #fc7542;
                font-size: 28px;
              }
            }
          }
        }
      }
    }
    .ownPage,
    .waitActive {
      // display: grid;
      // grid-template: 1fr/1fr 1fr;
      // gap: 0.5rem;
      padding: 0 25px;
      justify-content: space-around;
      align-items: center;
      position: relative;
      .itemCard {
        flex: 1;
        background: #1b2333;
        text-align: center;
        border-radius: 16px;
        padding-top: 20px;

        img {
          width: 300px;
          height: 436.36px;
        }
        p {
          font-size: 32px;
          text-align: left;
          margin: 25px 0px 30px 15px;
        }
      }
      .shade {
        width: 330px;
        height: 572px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0px;
        left: 20px;
      }
      .shade2 {
        width: 330px;
        height: 572px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0px;
        right: 20px;
      }
    }
    .awaitPage {
      width: 100%;
      .awaitItem {
        width: 650px;
        background-color: #1b2333;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-radius: 16px;
        padding: 30px;
        margin-bottom: 30px;
        .left {
          img {
            width: 160px;
            height: 232px;
          }
        }
        .right {
          padding-left: 30px;
          box-sizing: border-box;

          .titleWarp {
            line-height: 0.5rem;
            display: flex;
            justify-content: space-between;
            span {
              color: #fff;
              font-size: 32px;
            }
          }
          .msg {
            margin-top: 30px;
            color: #858992;
            font-size: 28px;
          }
        }
      }
    }
  }
  //页脚
  .activefooter {
    width: 100vw;
    height: 120px;
    background: #11192b;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 12;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #fff;
      font-size: 32px;
      line-height: 120px;
    }
  }
  .footer {
    width: 100vw;
    height: 120px;
    background: #11192b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 11;
    .left {
      margin-left: 40px;
      p {
        &:nth-child(1) {
          color: white;
          font-size: 28px;
        }
        &:nth-child(2) {
          color: #858992;
          font-size: 22px;
          margin-top: 10px;
        }
      }
    }
    .right {
      margin-right: 20px;
      /deep/ .van-button {
        width: 260px;
      }
    }
  }
}
</style>
