<template>
  <div class="rankCardPage">
    <div class="top">
      <van-nav-bar title="等级卡牌"
                   left-arrow
                   fixed
                   placeholder
                   @click-left="onClickLeft" />
    </div>
    <div class="haveRankCard">
      <van-tabs v-model="RankCardActive"
                background="#121933"
                title-inactive-color="#666"
                title-active-color="#fff"
                sticky
                :offset-top="46"
                swipeable>
        <van-tab title="已拥有"
                 name="3">
          <!-- 无已拥有卡牌 -->
          <div class="nowaitcard"
               v-if="rankCardFlag1.length=== 0">
            <van-empty class="custom-image"
                       :image="require('@/assets/img/cardPage/cardNull.png')"
                       description="暂无等级卡牌" />
          </div>
          <!-- 已拥有卡牌 -->
          <div v-else
               class="owncard">
            <div class="itemcard"
                 v-for="item in rankCardFlag1"
                 :key="item.id">
              <div class="img">
                <img :src="item.image"
                     @click="cardDetails(item.num, item.title, item.Activate, item.state)"
                     alt="卡片">
              </div>
              <p class="title">{{item.title }}</p>
              <p class="num">#{{item.num.padStart(6, 0) }}</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="待领取"
                 name="2">
          <div class="nowaitcard"
               v-if="rankCardFlag2.length=== 0">
            <van-empty class="custom-image"
                       :image="require('@/assets/img/cardPage/cardNull.png')"
                       description="暂无等级卡牌" />
          </div>
          <div v-else
               class="waitcard">

            <van-tabs v-model="activeKey"
                      background="#121933"
                      title-active-color="#fff"
                      sticky
                      :offset-top="90"
                      @change="changeList"
                      swipe-threshold>
              <van-tab :title="list.title"
                       :name="list.name"
                       v-for="list in activeTitle"
                       :key="list.id">
                <div class="waitcarditem"
                     v-for="item in rankCardFlag2.filter((e) => {return e.Activate==list.name})"
                     :key="item.num">
                  <div class="left">
                    <img :src="item.image">
                  </div>
                  <div class="right">
                    <div>
                      <span>{{ item.title }}</span>
                      <span>
                        <van-checkbox icon-size="16px"
                                      @change="look(item.Activate,item.num,$event)"
                                      v-model="item.ischecked"></van-checkbox>
                      </span>
                    </div>
                    <div>#{{ item.num.padStart(6, 0) }}</div>
                    <div>{{ item.text}}</div>
                  </div>

                  <!-- 页脚 -->
                  <div class="waitfooter">
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
                                  @click="getsCard">领取</van-button>
                    </div>
                  </div>

                </div>

                <div class="nowaitcard"
                     v-if="!rankCardFlag2.filter((e) => {return e.Activate==list.name}).length">
                  <van-empty class="custom-image "
                             :image="require('@/assets/img/cardPage/cardNull.png')"
                             description="暂无该等级卡牌，请重新选择等级" />
                </div>
              </van-tab>
            </van-tabs>

          </div>

        </van-tab>
        <van-tab name="1"
                 title="待铸造">
          <div class="nowaitcard"
               v-if="castDataList.length===0">
            <van-empty class="custom-image"
                       :image="require('@/assets/img/cardPage/cardNull.png')"
                       description="暂无等级卡牌" />
          </div>
          <div v-else
               class="coined">
            <div v-for="cast in castDataList"
                 :key="cast.num"
                 class="coineditem">
              <div class="left">
                <img :src="cast.image"
                     alt="卡牌">
              </div>
              <div class="right">
                <div>{{cast.title}}</div>
                <div>编号：{{cast.num.padStart(6, 0)}}</div>
                <div v-if="cast.type==4||cast.status"
                     class="waitrank">
                  <p>铸造中…</p>
                  <p>铸造完成后可在待领取中进行领取</p>
                </div>
                <div v-else>
                  <span @click="coincardHandler(cast.Activate,cast.num)">
                    <img src="@/assets/img/coincard/icon3.png"
                         alt="铸造">铸造
                  </span>
                </div>

              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 遮罩 -->
    <van-popup v-model="maskFlag1"
               round
               class="rankmask">
      <div class="maskbox">
        <div>
          本次铸造需要扣除20-50不等的TRX
          现在立即铸造？
        </div>
        <div>
          <p @click="cancelHandler">取消</p>
          <p @click="confirmHandler"
             style="color:red">确定</p>
        </div>
        <img class="img"
             src="@/assets/img/coincard/icon1.png"
             alt="警告">
      </div>
    </van-popup>
    <!-- <van-popup v-model="maskFlag2"
               round
               class="rankmask">
      <div class="maskbox">
        <div style="color:red">
          当前卡牌未铸造仍可以在平台进行交易，若无需进行合成建议不铸造，现在进行铸造？
        </div>
        <div>
          <p @click="cancelHandler">跳过铸造</p>
          <p @click="maskFlag2=false,maskFlag1=true"
             style="color:red">确定铸造</p>
        </div>
        <img class="img"
             src="@/assets/img/coincard/icon1.png"
             alt="警告">
      </div>
    </van-popup> -->
    <van-popup v-model="maskFlag3"
               round
               class="rankmask">
      <div class="maskbox">
        <div>
          已成功提交铸造，请等待铸造铸造完成后即可领取至钱包
        </div>
        <div>
          <p @click="maskFlag3 = false">确定</p>
        </div>
        <img class="img"
             src="@/assets/img/coincard/icon2.png"
             alt="确认">
      </div>
    </van-popup>

  </div>

</template>
<script>
import { Toast } from 'vant'
import { myNft, PayEotc } from '@/api/newReqets'
import { allCard, allCards } from '@/utils/options'
import { sfeotc1, getTrxBalance, getCard, getCards, getAllCards, inquire, already, alreadySyn } from '@/utils/web3'
export default {
  data() {
    return {
      array: [],
      Array: [],
      Arr: [],
      //已拥有卡牌
      rankCardFlag1: [],
      //待领取卡牌
      rankCardFlag2: [],
      RankCardActive: '3',
      // ischecked: false,
      maskFlag1: false, //遮罩第一次状态
      maskFlag2: false, //遮罩第二次状态
      maskFlag3: false, //遮罩第三次状态
      fontFlag: false, //字体状态
      currentIndex: -1,
      index: -2,
      //待铸造、铸造中卡牌
      castDataList: [],
      // 全部未合成卡牌
      allCard,
      // 全部已合成卡牌
      allCards,
      select: [],
      activate: '',
      activeKey: 0,
      activeNum: 0,
      activeTitle: [
        { id: Math.random(), name: 3, title: '三级卡牌' },
        { id: Math.random(), name: 4, title: '四级卡牌' },
        { id: Math.random(), name: 5, title: '五级卡牌' }
      ],
      i: 3,
      apphx: '',
      flag: true
    }
  },
  created() {
    this.getRank()
  },
  methods: {
    get(val, value1, value2, state) {
      for (let i of val) {
        const asd = {}
        if (state) asd.state = state
        asd.num = i.num + ''
        asd.Activate = i.Activate
        asd.title = value1[i.Activate - 1].title
        asd.status = false
        asd.image = value1[i.Activate - 1].image
        asd.text = value1[i.Activate - 1].text
        asd.ischecked = false

        value2.push(asd)
      }
    },
    // 卡牌
    async getRank() {
      Toast.loading({
        message: '数据加载中...',
        forbidClick: true,
        duration: 0
      })
      this.castDataList = []
      this.rankCardFlag2 = []
      this.rankCardFlag1 = []
      const { data } = await myNft(3)
      this.hadReceive()

      console.log(data)
      for (let i of data) {
        // type 0、1待铸造（0是送的卡牌，1是开盲盒出来的） 4铸造中 5待领取
        // Activate 1、2级卡牌直接已拥有
        const asd = {}
        asd.num = i.ID
        asd.Activate = i.Activate
        asd.type = i.Type
        asd.title = this.allCard[i.Activate - 1].title
        asd.status = false
        asd.image = this.allCard[i.Activate - 1].image
        asd.text = this.allCard[i.Activate - 1].text
        asd.ischecked = false
        if (i.Type != -1) {
          if (['1', '2'].includes(asd.Activate)) {
            this.rankCardFlag1.unshift(asd)
          } else {
            if (['0', '1', '4'].includes(asd.type)) this.castDataList.push(asd)
          }
        }
      }
    },
    // 待领取
    async notReceive() {
      this.array = []
      this.rankCardFlag2 = []

      await inquire(2, this.array)
      await inquire(3, this.array)
      await inquire(4, this.array)
      Toast.clear()
      this.get(this.array, this.allCard, this.rankCardFlag2)
    },
    // 已拥有(全部)
    async hadReceive() {
      this.Array = []

      await already(0, 2, this.Array)
      await already(0, 3, this.Array)
      await already(0, 4, this.Array)
      // Toast.clear()
      this.hadReceiveSyn()
      // console.log(this.Array)
    },
    // 已拥有（已合成）
    async hadReceiveSyn() {
      this.Arr = []

      await alreadySyn(2, this.Arr)
      await alreadySyn(3, this.Arr)
      await alreadySyn(4, this.Arr)
      Toast.clear()

      let list = this.Array.filter((items) => {
        if (!this.Arr.some((ele) => items.num == ele.num && items.Activate == ele.Activate)) return items
      })

      this.get(list, this.allCard, this.rankCardFlag1)
      this.get(this.Arr, this.allCards, this.rankCardFlag1, 1)
    },
    // 点击“已拥有”卡牌中的图片，跳转至卡牌详情页面
    cardDetails(id, title, Activate, state) {
      console.log(id, title, Activate)
      this.$router.push({ name: 'card_details', query: { id: id, title: title, Activate: Activate + '', state: state, url: this.$route.name } })
    },
    // “领取”卡牌
    async getsCard() {
      console.log(this.rankCardFlag2)
      // this.select 选择的编号数组
      // console.log(this.select)
      Toast.loading({
        message: '领取中...',
        forbidClick: true,
        duration: 0
      })

      if (this.changeCheck) {
        // 全部领取
        await getAllCards(0, this.activate - 1, this.update)
      } else {
        if (this.selecked > 1) {
          // 批量领取
          await getCards(0, this.activate - 1, this.select, this.update)
        } else {
          // 单笔领取
          await getCard(0, this.activate - 1, ...this.select, this.update)
        }
      }
    },
    update() {
      this.rankCardFlag2.forEach((item, index) => {
        this.select.forEach((items) => {
          if (item.num == items && item.Activate == this.activate) delete this.rankCardFlag2[index]
        })
      })
      this.rankCardFlag2 = this.rankCardFlag2.filter((val) => {
        return val
      })
      this.i = 0
      console.log(this.rankCardFlag2)
    },
    // 返回上一级
    onClickLeft() {
      this.$router.push({
        name: 'userInfo'
      })
    },
    // 点击铸造显示扣除TRX的提示
    coincardHandler(i, index) {
      console.log(i)
      this.index = null
      this.index = index
      this.maskFlag1 = true
    },
    // 取消铸造
    cancelHandler() {
      this.maskFlag1 = false
      this.maskFlag2 = false
      this.maskFlag3 = false
    },
    // 确认铸造
    confirmHandler() {
      // console.log('铸造卡牌')
      // console.log(this.index, this.apphx)
      getTrxBalance(() => {
        sfeotc1().then(
          (res) => {
            this.apphx = localStorage.getItem('apphx')
            PayEotc(this.index, this.apphx, 0).then((res) => {
              // console.log(res)
              if (res.data.State > 0) {
                this.res()
              } else {
                this.maskFlag1 = false
                this.$toast.error('铸造失败')
              }
            })
          },
          (rej) => {
            this.cancelHandler()
            this.$toast.warning('取消铸造')
          }
        )
      })
    },
    res() {
      this.currentIndex = this.index
      this.maskFlag1 = false
      this.maskFlag3 = true
      let status = this.castDataList.filter((e) => e.num == this.index)
      status[0].status = true
      console.log(status)
    },
    look(Activate, num, event) {
      this.activate = Activate
      if (event) {
        this.select.push(num)
      } else {
        this.select.splice(
          this.select.findIndex((item) => item === num),
          1
        )
      }
      console.log(Activate, num, event)
    },
    changeList(i) {
      this.i = i
      this.changeCheck = false
      this.rankCardFlag2.map((e) => (e.ischecked = false))
    }
  },
  computed: {
    // 用户选择的领取卡牌数
    selecked() {
      return this.rankCardFlag2.filter((card) => card.ischecked === true).length
    },
    // 用户是否可领取卡牌
    isselect() {
      return this.selecked > 0 ? false : true
    },
    changeCheck: {
      get() {
        return this.selecked == this.rankCardFlag2.filter((e) => e.Activate == this.i).length
      },
      set(v) {
        if (v) {
          this.rankCardFlag2.filter((e) => e.Activate == this.i).map((e) => (e.ischecked = true))
        } else {
          this.rankCardFlag2.filter((e) => e.Activate == this.i).map((e) => (e.ischecked = false))
        }
      }
    }
  },
  watch: {
    RankCardActive(i) {
      if (i == 2 && this.flag) {
        this.flag = false
        Toast.loading({
          message: '数据加载中...',
          forbidClick: true,
          duration: 0
        })
        this.notReceive()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.rankCardPage {
  // 头部样式
  .top {
    /deep/ .van-nav-bar__content {
      background-color: #1b2945;
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
    /deep/ .van-hairline--bottom::after {
      border-bottom: none !important;
    }
  }

  // 有卡片样式
  .haveRankCard {
    /deep/ .van-tabs__wrap {
      margin-bottom: 0 !important;
    }
    /deep/ .van-tabs__nav {
      background-color: none !important;
    }
    /deep/ .van-tab__text {
      font-size: 36px;
    }
    /deep/ .van-tabs__line {
      background-color: #237ff8;
    }
    /deep/ .van-tabs__wrap {
      margin-bottom: 39px;
    }
    .owncard {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 30px;
      box-sizing: border-box;
      // background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);

      .itemcard {
        width: 330px;
        height: 587px;
        background: #1b2333;
        padding: 15px;
        margin-bottom: 30px;
        box-sizing: border-box;
        border-radius: 16px;
        img {
          width: 300px;
          height: 436px;
        }
        .title {
          margin-top: 20px;
          font-size: 32px;
          font-weight: 400;
          color: #ffffff;
          text-align: left;
        }
        .num {
          margin-top: 10px;
          font-size: 24px;
          font-weight: 400;
          color: #858992;
          text-align: left;
        }
      }
    }
    .waitcard {
      width: 100%;
      // padding-top: 40px;
      padding-bottom: 120px;
      background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);

      /deep/ .van-tabs__nav {
        align-items: center;
      }

      /deep/ .van-tab {
        margin: 0 4px;
        margin-top: 2px;
        height: 70px;
        opacity: 0.8;
        border-radius: 35px;
      }

      /deep/ .van-tab--active {
        background: #237ff8;
        opacity: 1;
      }

      /deep/ .van-tabs__line {
        width: 0;
        height: 0;
      }

      /deep/ .van-tab__text {
        font-size: 34px;
      }

      .waitcarditem {
        width: 690px;
        padding: 30px;
        margin: 0 auto 30px;
        background: #1b2333;
        border-radius: 16px;
        display: flex;
        justify-content: space-between;
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
          div {
            &:nth-child(1) {
              display: flex;
              justify-content: space-between;
              color: #fff;
              font-size: 32px;
              margin-bottom: 20px;
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
    }
    .waitfooter {
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
          text-align: center;
          .van-button__text {
            width: 100%;
          }
        }
      }
    }
    .coined {
      width: 100%;
      padding-top: 40px;
      background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);

      .coineditem {
        width: 690px;
        margin: 0 auto 30px;
        background: #1b2333;
        border-radius: 16px;
        border: 1px solid #333;
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
  }
  // 遮罩样式
  .rankmask {
    background-color: rgba(0, 0, 0, 0.1);
    .maskbox {
      padding-top: 90px;
      width: 590px;
      background: transparent;
      border-radius: 20px;
      position: relative;
      div {
        background-color: #fff;
        &:nth-child(1) {
          padding: 100px 30px 40px 30px;
          color: #333333;
          font-size: 32px;
          line-height: 53px;
          text-align: center;
          border-top-right-radius: 36px;
          border-top-left-radius: 36px;
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
        top: 0%;
        left: 50%;
        transform: translate(-50%, 0%);
      }
    }
  }
  //无卡样式
  .nowaitcard {
    margin-top: 2.8rem;
    .custom-image /deep/ .van-empty__image {
      width: 260px;
      height: 172px;
    }
    .custom-image /deep/ .van-empty__description {
      font-size: 28px;
    }
  }
}
</style>