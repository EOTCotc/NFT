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
                  background="#121933"
                  title-inactive-color="#666"
                  title-active-color="#fff"
                  sticky
                  :offset-top="46"
                  swipeable>
          <van-tab name="4"
                   title="已拥有">
            <div class="ownPage">
              <div class="cartList"
                   v-if="cartItem.length">
                <div class="cartItem"
                     v-for="item in cartItem"
                     :key="item.id">
                  <img :src="item.img"
                       alt=""
                       @click="cardDetails(item.id)">
                  <p>{{item.title}}</p>
                  <img src="../../assets/img/link.png"
                       alt=""
                       class="image">
                </div>
              </div>
              <div class="no_card"
                   v-else>
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>
            </div>
          </van-tab>
          <van-tab name="3"
                   title="待领取">
            <div class="awaitPage">
              <!-- 无待领取卡牌 -->
              <div class="no_card"
                   v-if="cardState.length === 0">
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>

              <!-- 有待领取卡牌 -->
              <div class="cart"
                   :class="cardState.filter((e) => {return e.Activate==i}).length?'act':''"
                   v-else>

                <div class="waitcarditem"
                     v-for="item in cardState"
                     :key="item.id">
                  <div class="left">
                    <img :src="item.img">
                  </div>
                  <div class="right">
                    <div>
                      <span>{{ item.title }}</span>
                      <span @click="pro(i==0?i:item.Activate==i)">
                        <van-checkbox icon-size="16px"
                                      :disabled="i==0?false:item.Activate==i?false:true"
                                      @change="look(item.Activate,item.id,$event)"
                                      v-model="item.ischecked"></van-checkbox>
                      </span>
                    </div>
                    <!-- <div>#{{ item.id }}</div> -->
                    <div>{{ item.text}}</div>
                  </div>

                  <!-- 页脚 -->

                  <div class="waitfooter"
                       v-if="cardState.filter((e) => {return e.Activate==i}).length">
                    <div class="left">
                      <p><span class="sl">
                          <van-checkbox v-model="changeCheck">全选</van-checkbox>
                        </span>已选择 {{ selecked }} 个</p>
                      <p>提示:只能同时选择一种类型的NFT</p>
                    </div>
                    <div class="right">
                      <van-button round
                                  :disabled="isselect"
                                  block
                                  type="info"
                                  @click="getCard">领取</van-button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </van-tab>
          <van-tab name="2"
                   title="待铸造">
            <div class="waitcoin">
              <div v-if="castDataList.length==0"
                   class="no_card">
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>
              <div v-else
                   class="coinwarp">
                <div v-for="cast in castDataList"
                     :key="cast.id"
                     class="coineditem">
                  <div class="left">
                    <img :src="cast.img"
                         alt="卡牌" />
                  </div>
                  <div class="right">
                    <div>{{ cast.title }}</div>
                    <!-- <div>编号：{{cast.id}}</div> -->
                    <div v-if="cast.status ? fontFlag : !fontFlag">
                      <span @click="coincardHandler(cast.Activate, cast.id)">
                        <img src="../../assets/img/coincard/icon3.png"
                             alt="铸造" />铸造
                      </span>
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
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>
              <div v-else
                   class="cartList">
                <div class="cartItem"
                     v-for="item in Not_activatedList"
                     :key="item.id">
                  <img :src="item.img"
                       style="opacity: 0.5;" />
                  <p>{{item.title}}</p>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
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
    <div v-show="maskFlag3"
         class="rankmask">
      <div class="maskbox">
        <div>
          已成功提交铸造，请等待铸造铸造完成后即可领取至钱包
        </div>
        <div>
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
import { myNft, PayEotc } from '@/api/newReqets'
import { sfeotc1, getTrxBalance, getCard, getCards, getAllCards } from '@/utils/web3'
export default {
  name: 'myNFT-list',
  data() {
    return {
      cardList: [
        { status: false, title: '创世会权益卡', text: '创世会权益卡，全球仅限66张，享有全网EOTC NFT 1%手续费平均分红', ischecked: false, img: require('@/assets/img/equityItem1.png') },
        { status: false, title: '联合会权益卡', text: '联合会权益卡，全球仅限666张，享有全网EOTC NFT 1%手续费平均分红', ischecked: false, img: require('@/assets/img/equityItem2.png') },
        { status: false, title: '100天实时节点分红权益卡', text: '100天实时节点分红权益卡，全球仅限3960张', ischecked: false, img: require('@/assets/img/Compose/actual-100-before.jpg') },
        { status: false, title: '200天实时节点分红权益卡', text: '200天实时节点分红权益卡，全球仅限2310张', ischecked: false, img: require('@/assets/img/Compose/actual-200-before.jpg') },
        { status: false, title: '300天实时节点分红权益卡', text: '300天实时节点分红权益卡，全球仅限330张', ischecked: false, img: require('@/assets/img/Compose/actual-300-before.jpg') },
        { status: false, title: '实时节点永久分红权益卡', text: '实时节点永久分红权益卡，全球仅限330张', ischecked: false, img: require('@/assets/img/Compose/actual-forever.jpg') },
        { status: false, title: '100天中级节点分红权益卡', text: '100天中级节点分红权益卡，全球仅限600张', ischecked: false, img: require('@/assets/img/Compose/middle-100-before.jpg') },
        { status: false, title: '200天中级节点分红权益卡', text: '200天中级节点分红权益卡，全球仅限350张', ischecked: false, img: require('@/assets/img/Compose/middle-200-before.jpg') },
        { status: false, title: '300天中级节点分红权益卡', text: '300天中级节点分红权益卡，全球仅限50张', ischecked: false, img: require('@/assets/img/Compose/middle-300-before.jpg') },
        { status: false, title: '中级节点永久分红权益卡', text: '中级节点永久分红权益卡，全球仅限50张', ischecked: false, img: require('@/assets/img/Compose/middle-forever.jpg') },
        { status: false, title: '100天高级节点分红权益卡', text: '100天高级节点分红权益卡，全球仅限240张', ischecked: false, img: require('@/assets/img/Compose/high-100-before.jpg') },
        { status: false, title: '200天高级节点分红权益卡', text: '200天高级节点分红权益卡，全球仅限140张', ischecked: false, img: require('@/assets/img/Compose/high-200-before.jpg') },
        { status: false, title: '300天高级节点分红权益卡', text: '300天高级节点分红权益卡，全球仅限20张', ischecked: false, img: require('@/assets/img/Compose/high-300-before.jpg') },
        { status: false, title: '高级节点永久分红权益卡', text: '高级节点永久分红权益卡，全球仅限20张', ischecked: false, img: require('@/assets/img/Compose/high-eiky.jpg') }
      ],
      toggleActive: '3',
      // 待激活卡牌
      Not_activatedList: [],
      //已拥有卡牌
      cartItem: [
        { id: Math.random(), title: '创世会权益NFT', img: require('../../assets/img/equityItem1.png') },
        { id: Math.random(), title: '联合会权益NFT', img: require('../../assets/img/equityItem2.png') }
      ],
      //待领取卡牌
      cardState: [
        {
          Activate: 1,
          id: Math.random(),
          status: false,
          title: '联合会权益卡',
          text: '联合会权益卡，全球仅限66张，享有全网EOTC NFT 1%手续……',
          ischecked: false,
          img: require('@/assets/img/equityItem2.png')
        }
      ],
      coinFlag: false,
      currentIndex: -1,
      index: -2,
      maskFlag1: false, //遮罩第一次状态
      maskFlag2: false, //遮罩第二次状态
      maskFlag3: false, //遮罩第三次状态
      fontFlag: false, //字体状态
      //待铸造卡牌
      castDataList: [
        // { id: '1', status: false, img: require('@/assets/img/Compose/3-before.png'), title: '创世会权益卡', text: '联合会权益卡，全球仅限66张，享有全网EOTC NFT 1%手续……', ischecked: false },
      ],
      i: 0,
      equity: [],
      apphx: ''
    }
  },
  created() {
    this.getMyNFT()
  },
  methods: {
    // 点击“已拥有”卡牌中的图片，跳转至卡牌详情页面
    cardDetails(id) {
      console.log(id)
      // sessionStorage.setItem('toggle2', true)
      // this.$router.push({ name: 'card_details' })
    },
    // 点击铸造显示扣除TRX的提示
    coincardHandler(i, index) {
      this.index = null
      // this.cardData.push(item)
      this.index = index
      this.maskFlag1 = true
    },
    // 取消铸造
    cancelHandler() {
      this.maskFlag1 = false
      this.maskFlag3 = false
    },
    // 确定铸造
    confirmHandler() {
      getTrxBalance(() => {
        sfeotc1().then(
          (res) => {
            this.apphx = localStorage.getItem('apphx')
            PayEotc(this.index, this.apphx).then((res) => {
              // console.log(res)
              if (res.data.State > 0) {
                this.res()
              } else {
                this.$toast.error('铸造失败')
              }
            })
          },
          (rej) => {
            this.$toast.warning('取消铸造')
            this.maskFlag1 = false
          }
        )
      })
    },
    res() {
      this.currentIndex = this.index
      this.maskFlag1 = false
      this.maskFlag3 = true
      let status = this.castDataList.filter((e) => e.id == this.index)
      status[0].status = true
    },
    // 成功提交铸造后的提示
    confirmSuccHandler() {
      this.maskFlag3 = false
    },
    // 返回上一级
    onClickLeft() {
      this.$router.back()
    },
    look(a, b, c) {
      this.i = a
      console.log(a, b, c)
      if (c) {
        this.equity.push(b)
      } else {
        this.equity.splice(
          this.equity.findIndex((item) => item === b),
          1
        )
      }

      if (this.equity.length == 0) this.i = 0
      console.log(this.i, this.equity)
    },
    // “领取”卡牌
    getCard() {
      console.log(this.i, this.equity)
      this.$toast('领取成功')

      // if (this.changeCheck) {
      //        // 全部领取
      //   getAllCards(1, this.activate - 1)
      // } else {
      //   if (this.selecked > 1) {
      //     // 批量领取
      //     getCards(1, this.activate - 1, this.selecked)
      //   } else {
      //     // 单笔领取
      //     getCard(1, this.activate - 1)
      //   }
      // }
      // 领取成功后重新请求数据
    },
    async getMyNFT() {
      const { data } = await myNft(1)
      console.log(data)
      this.Not_activatedList = []
      this.castDataList = []
      // type 1是创世会，2是联合会
      // Activate 0是未激活，1是待铸造
      for (let i of data) {
        const asd = {}
        asd.Activate = i.Activate
        asd.id = Math.random()
        asd.title = this.cardList[i.Type - 1].title
        asd.text = this.cardList[i.Type - 1].text
        asd.status = this.cardList[i.Type - 1].status
        asd.img = this.cardList[i.Type - 1].img
        asd.ischecked = this.cardList[i.Type - 1].ischecked
        if (asd.Activate == 0) this.Not_activatedList.push(asd)
        if (asd.Activate == 1) this.castDataList.push(asd)
      }
    },
    pro(i) {
      console.log(i)
      if (i === false) this.$toast('只能同时选择一种类型的NFT')
    }
  },
  computed: {
    // // 待激活卡牌
    // Not_activatedList() {
    //   return this.cardList.filter((card) => card.Activate === '0')
    // },
    // 用户选择的领取卡牌数
    selecked() {
      return this.cardState.filter((card) => card.ischecked === true).length
    },
    // 用户是否可领取卡牌
    isselect() {
      return this.selecked > 0 ? false : true
    },
    changeCheck: {
      get() {
        return this.selecked == this.cardState.filter((e) => e.Activate == this.i).length
      },
      set(v) {
        if (v) {
          this.cardState.filter((e) => e.Activate == this.i).map((e) => (e.ischecked = true))
        } else {
          this.cardState.filter((e) => e.Activate == this.i).map((e) => (e.ischecked = false))
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-hairline--bottom::after {
  border-bottom: none !important;
}

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
    .ownPage {
      margin-top: 20px;
    }
    .no_card {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding-top: 2rem;
      font-size: 0.6rem;
      color: #e28c0a;
      p {
        margin-top: 25px;
      }
    }
    .cartList {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .cartItem {
        padding: 20px;
        margin-bottom: 24px;
        box-sizing: border-box;
        width: 48%;
        background: #1b2333;
        border-radius: 16px;
        position: relative;
        img {
          width: 100%;
        }
        p {
          margin-top: 10px;
          letter-spacing: 2px;
          font-size: 32px;
        }
        .image {
          width: 60px;
          position: absolute;
          right: 40px;
          bottom: 100px;
        }
      }
    }
    // ?待铸造
    .waitcoin {
      width: 100%;
      margin-top: 20px;
      // background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);
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
      margin-top: 20px;
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
      // margin-top: 80px;
      width: 100%;
      .cart {
        margin: 0.6em;
        box-sizing: border-box;
        .awaitItem {
          letter-spacing: 2px;
          // width: 650px;
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
      .act {
        padding-bottom: 108px;
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

/deep/ .van-dropdown-menu__bar {
  background: #121933;
  height: 70px;
  .van-dropdown-menu__title {
    color: #fff;
  }
  width: 100%;
  position: fixed;
  top: 178px;
  left: 0;
  box-sizing: border-box;
  // bottom: 0;
}
/deep/ .van-cell {
  background: #000;
  color: #fff;
}

/deep/ .van-dropdown-item__option--active {
  color: #237ff8;
}

/deep/ .van-cell.van-cell--clickable.van-dropdown-item__option::after {
  border: 0.02667rem solid #000;
  // z-index: 9999;
}

.waitcarditem {
  width: 690px;
  padding: 30px;
  margin: 0 auto;
  background: #1b2333;
  border-radius: 16px;
  display: flex;
  // justify-content: space-between;
  box-sizing: border-box;
  margin-top: 30px;
  .left {
    margin-right: 30px;
    img {
      width: 160px;
      height: 232px;
    }
  }
  .right {
    width: 100%;
    div {
      &:nth-child(1) {
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-size: 32px;
        margin-bottom: 20px;
        /deep/ .van-checkbox__icon--disabled .van-icon {
          color: #000;
          background: #000;
          border: none;
        }
      }
      &:nth-child(2) {
        font-size: 28px;
        color: #858992;
        margin-bottom: 20px;
      }
      &:nth-child(3) {
        font-size: 28px;
        color: #858992;
        margin-bottom: 20px;
      }
    }
  }
}

.waitfooter {
  width: 100vw;
  height: 120px;
  background: #11192b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0;
  z-index: 11;
  .left {
    width: 100%;
    margin-left: 40px;
    p {
      font-size: 28px;
      &:nth-child(1) {
        display: flex;
        .sl {
          display: flex;
          margin-right: 20px;
          /deep/ .van-checkbox__label {
            color: white;
          }
          /deep/ .van-checkbox__icon {
            font-size: 1em;
            margin-right: 10px;
          }
        }
        color: white;
        font-size: 28px;
      }
      &:nth-child(2) {
        word-break: break-all;
        color: #858992;
        font-size: 22px;
        margin-top: 10px;
        display: flex;
      }
    }
  }
  .right {
    width: 300px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    /deep/ .van-button {
      width: 260px;
      text-align: center;
      .van-button__text {
        width: 100%;
      }
    }
  }
}
</style>
