<template>
  <div class="service">
    <!-- 头部 -->
    <div class="top">
      <van-nav-bar title="手续费领取"
                   left-arrow
                   z-index='9999'
                   placeholder
                   fixed
                   :border="false"
                   @click-left="onClickLeft" />
    </div>

    <!-- 内容 -->
    <div class="content">
      <van-tabs background="#121933"
                sticky
                color="#237FF8"
                offset-top="1.2rem"
                title-inactive-color="#666"
                title-active-color="#fff"
                v-model="synthActiveName">
        <van-tab title="等级卡牌"
                 name="1">

          <div class="nowaitcard"
               v-if="rankCardFlag.length=== 0">
            <van-empty class="custom-image"
                       :image="require('@/assets/img/cardPage/cardNull.png')"
                       description="暂无领取手续费的等级卡牌" />
          </div>
          <div v-else
               class="waitcard">

            <div class="waitcarditem"
                 v-for="item in rankCardFlag"
                 :key="item.id">
              <div class="left">
                <img :src="item.image">
              </div>
              <div class="right">
                <div>
                  <span>{{ item.title }}</span>
                  <span>
                    <van-checkbox icon-size="16px"
                                  :disabled="!item.price"
                                  @change="look(item.address,item.num,$event)"
                                  v-model="item.ischecked"></van-checkbox>
                  </span>
                </div>
                <div>#{{ item.num.padStart(6, 0) }}</div>
                <div>待领取：{{parseFloat(item.price).toFixed(2)}} USDT</div>
              </div>
              <!-- 页脚 -->
              <div class="waitfooter">
                <!-- v-if="rankCardFlag.filter((data) => {return data.Activate==i}).length"> -->
                <div class="left">
                  <p>
                    <span class="sl">
                      <van-checkbox v-model="changeCheck">全选</van-checkbox>
                    </span>
                  </p>
                  <p>
                    <span>已选择 {{ selecked }} 个</span>
                    <span>总量：{{parseFloat(allPrice).toFixed(2)}} USDT</span>
                  </p>
                </div>
                <div class="right">
                  <van-button round
                              :disabled="isselect"
                              block
                              type="info"
                              @click="getRank">领取</van-button>
                </div>
              </div>

            </div>

          </div>
        </van-tab>

        <van-tab title="权益卡牌"
                 name="2">

          <div class="nowaitcard"
               v-if="equityCard.length=== 0">
            <van-empty class="custom-image"
                       :image="require('@/assets/img/cardPage/cardNull.png')"
                       description="暂无领取手续费的权益卡牌" />
          </div>
          <div v-else
               class="waitcard"
               :class="equityCard.filter((data) => {return data.Activate==e}).length?'act':''">

            <div class="waitcarditem"
                 v-for="item in equityCard"
                 :key="item.id">
              <div class="left">
                <img :src="item.image">
              </div>
              <div class="right">
                <div>
                  <span>{{ item.title }}</span>
                  <span @click="pros(e==0?e:item.Activate==e)">
                    <van-checkbox icon-size="16px"
                                  :disabled="e==0?false:item.Activate!=e?true:item.time!=time?true:false"
                                  @change="looks(item.time,item.Activate,item.num,$event)"
                                  v-model="item.ischecked"></van-checkbox>
                  </span>
                </div>
                <div>#{{ item.num.padStart(6, 0) }}</div>
                <div>待领取：{{item.price}} USDT</div>
              </div>

              <!-- 页脚 -->
              <div class="waitfooter"
                   v-if="equityCard.filter((data) => {return data.Activate==e}).length">
                <div class="left">
                  <p>
                    <span class="sl">
                      <van-checkbox v-model="changeCheck">全选</van-checkbox>
                    </span>
                  </p>
                  <p>
                    <span>已选择 {{ selecked }} 个</span>
                    <span>总量：{{allPrices}} USDT</span>
                  </p>
                </div>
                <div class="right">
                  <van-button round
                              :disabled="isselects"
                              block
                              type="info"
                              @click="getEquity">领取</van-button>
                </div>
              </div>

            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
import { Toast } from 'vant'
import { multipleWithdraws, AllCards, AllCardTime, already, alreadySyn, amountAvailableLists } from '@/utils/web3'
import { allCard, allCards, cardList, contract } from '@/utils/options'
export default {
  data() {
    return {
      synthActiveName: '1',
      i: 0,
      e: 0,
      address1: [],
      address2: [],
      rank: [],
      equity: [],
      // 等级卡牌
      rankCardFlag: [],
      // 权益卡牌
      equityCard: [],
      // 全部等级卡牌
      allCard,
      allCards,
      myRanks: [],
      // 全部权益卡片
      cardList,
      myEquity: [],
      equitys: [],
      time: 0,
      Array: [],
      Arr: [],
      addressRank: [],
      idRank: [],
      array: [[], []]
    }
  },
  created() {
    setTimeout(() => {
      this.hadReceive()
    }, 500)
  },
  methods: {
    // 已拥有(全部)
    async hadReceive() {
      Toast.loading({
        message: '数据更新中...',
        forbidClick: true,
        duration: 0
      })

      this.Array = []
      this.array = [[], []]
      this.addressRank = []
      this.idRank = []

      // await already(0, 2, this.Array)
      await already(0, 3, this.Array)
      await already(0, 4, this.Array)
      this.hadReceiveSyn()
    },
    // 已拥有（已合成）
    async hadReceiveSyn() {
      this.Arr = []

      // await alreadySyn(2, this.Arr)
      await alreadySyn(3, this.Arr)
      await alreadySyn(4, this.Arr)

      let list = this.Array.filter((items) => {
        if (!this.Arr.some((ele) => items.num == ele.num && items.Activate == ele.Activate)) return items
      })

      this.get(list, this.allCard)
      this.get(this.Arr, this.allCards)
      this.getR()
    },
    // 等级卡牌
    async get(val, value1) {
      for (let i of val) {
        const asd = {}
        asd.num = i.num + ''
        asd.price = 0
        asd.Activate = i.Activate
        asd.title = value1[i.Activate - 1].title
        asd.image = value1[i.Activate - 1].image
        asd.ischecked = false
        asd.address = contract[0][i.Activate - 1]
        this.rankCardFlag.push(asd)
        this.addressRank.push(asd.address)
        this.idRank.push(asd.num)
      }
    },

    async getR() {
      await amountAvailableLists(this.addressRank, this.idRank, this.array)
      console.log(this.array)
      for (let index = 0; index < this.rankCardFlag.length; index++) {
        this.rankCardFlag[index].price = this.array[1][index]
        // console.log(this.rankCardFlag[index].num == this.array[0][index])
      }
      this.rankCardFlag = this.rankCardFlag.filter((e) => e.price)
      Toast.clear()
    },

    // 卡牌
    hallmark() {
      // GetAppStake({})
      //   .then((res) => {
      //     console.log(res.data)
      //     this.myRanks = res.data.filter((val) => val.type == 0)
      //     this.myEquity = res.data.filter((val) => val.type == 1)
      //     this.rankCard()
      //     this.equityCards()
      //   })
      //   .catch(() => {
      //     this.$toast('请刷新页面')
      //   })
    },
    // 等级卡牌
    rankCard() {
      this.rankCardFlag = []
      console.log(this.myRanks)
      for (let i of this.myRanks) {
        const com = {}
        com.num = i.id
        com.casting = i.ads.trim()
        com.type = i.num
        com.Activate = this.allCard[i.num - 1].Activate
        com.title = this.allCard[i.num - 1].title
        com.image = this.allCard[i.num - 1].image
        com.ischecked = false
        if (['3', '4', '5'].includes(com.type)) this.rankCardFlag.push(com)
      }
    },
    // 权益卡牌
    equityCards() {
      this.equityCard = []
      console.log(this.myEquity)
      for (let i of this.myEquity) {
        const com = {}
        com.id = Math.random()
        com.num = i.id
        com.ischecked = false
        com.casting = i.ads.trim()
        if (['1', '2'].includes(i.num)) {
          com.time = 0
          com.type = i.num - 1
          com.Activate = i.num
          com.image = this.cardList[0][com.type].image
          com.title = this.cardList[0][com.type].title
        } else if (['6', '7', '8'].includes(i.num)) {
          com.time = 0
          com.type = i.num - 6
          com.Activate = i.num
          com.image = this.cardList[4][com.type].image
          com.title = this.cardList[4][com.type].title
        } else if (['31', '32', '33'].includes(i.num)) {
          com.time = (i.num - 30) * 100
          com.type = i.num - 31
          com.Activate = 3
          com.image = this.cardList[1][com.type].image
          com.title = this.cardList[1][com.type].title
        } else if (['41', '42', '43'].includes(i.num)) {
          com.time = (i.num - 40) * 100
          com.type = i.num - 41
          com.Activate = 4
          com.image = this.cardList[2][com.type].image
          com.title = this.cardList[2][com.type].title
        } else if (['51', '52', '53'].includes(i.num)) {
          com.time = (i.num - 50) * 100
          com.type = i.num - 51
          com.Activate = 5
          com.image = this.cardList[3][com.type].image
          com.title = this.cardList[3][com.type].title
        }

        this.equityCard.push(com)
      }
    },
    look(address, num, event) {
      // this.i = Activate
      if (event) {
        this.rank.push(num)
        this.address1.push(address)
      } else {
        this.rank.splice(
          this.rank.findIndex((item) => item === num),
          1
        )
        this.address1.splice(
          this.address1.findIndex((item) => item === address),
          1
        )
      }
      // if (this.rank.length == 0) this.i = 0
      console.log(this.rank, this.address1)
    },
    looks(time, Activate, num, event) {
      console.log(Activate, event)
      this.e = Activate
      if (event) {
        if (time && this.time == 0) this.time = time

        this.equity.push(num)
        this.equitys.push(1)
        console.log(time)
      } else {
        this.equity.splice(
          this.equity.findIndex((item) => item === num),
          1
        )
        this.equitys.splice(
          this.equitys.findIndex((item) => item === 1),
          1
        )
      }
      if (this.equity.length == 0) (this.e = 0), (this.time = 0)
      console.log(this.equity, this.time)
    },
    pros(e) {
      console.log(e)
      if (e === false) this.$toast('只能同时选择一种类型的NFT')
    },
    changeLists(e) {
      this.e = e
      this.equity = []
      this.equityCard.map((e) => (e.ischecked = false))
    },

    reqRank() {
      // this.rank.unshift(localStorage.getItem('Token') + '_0')
      // UpdateStakeOrder(this.rank)
      //   .then(
      //     (res) => {
      //       Toast.clear()
      //       console.log(res)
      //       this.hallmark()
      //     },
      //     (rej) => {
      //       console.log(rej)
      //     }
      //   )
      //   .catch((err) => {
      //     console.log(err)
      //   })
    },
    // 领取等级卡牌手续费
    getRank() {
      Toast.loading({
        message: '领取中...',
        forbidClick: true,
        duration: 0
      })

      multipleWithdraws(this.address1, this.rank, this.hadReceive)
    },
    reqEquity() {},
    // 上传权益卡牌
    getEquity() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      // console.log(this.equity.length)
      // console.log(this.address2, [this.seleckeds], 1, this.e - 1)

      // 有限权益卡牌   :   // 非有限权益卡牌
      this.time ? AllCardTime(this.address2, this.equitys, this.time, this.e - 1, this.reqEquity) : AllCards(this.address2, this.equitys, 1, this.e - 1, this.reqEquity)
    },
    onClickLeft() {
      this.$router.back()
    }
  },
  computed: {
    // 用户选择的领取卡牌数
    selecked() {
      return this.rankCardFlag.filter((card) => card.ischecked === true).length
    },
    seleckeds() {
      return this.equityCard.filter((card) => card.ischecked === true).length
    },
    // 用户选择的可领取手续费
    allPrice() {
      return this.rankCardFlag.filter((card) => card.ischecked === true).reduce((m, n) => m + n.price, 0)
    },
    allPrices() {
      return this.equityCard.filter((card) => card.ischecked === true).reduce((m, n) => m + n.price, 0)
    },
    // 是否可领取手续费
    isselect() {
      return this.selecked > 0 ? false : true
    },
    isselects() {
      return this.seleckeds > 0 ? false : true
    },
    changeCheck: {
      get() {
        return this.selecked == this.rankCardFlag.length
      },
      set(v) {
        this.rankCardFlag.forEach((e) => (e.ischecked = v))
      }
    },
    changeChecks: {
      get() {
        return this.seleckeds == this.equityCard.length
      },
      set(v) {
        this.equityCard.forEach((e) => (e.ischecked = v))
      }
    }
  }
}
</script>

<style lang="less" scoped>
.service {
  // 头部
  .top {
    height: 45px;
    /deep/ .van-nav-bar__content {
      background-color: #1b2945;
    }
    /deep/ .van-nav-bar__title,
    /deep/ .van-icon:before {
      color: #fff;
      letter-spacing: 2px;
    }
  }

  // 内容
  .content {
    background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);

    /deep/ .van-dropdown-menu__bar {
      background: #121933;
      height: 70px;
      .van-dropdown-menu__title {
        color: #fff;
      }
      width: 100%;
      position: fixed;
      top: 178px;
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

    //无卡样式
    .nowaitcard {
      padding-top: 2.8rem;
      .custom-image /deep/ .van-empty__image {
        width: 260px;
        height: 172px;
      }
      .custom-image /deep/ .van-empty__description {
        font-size: 28px;
      }
    }

    .waitcard {
      width: 100%;
      background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);
      padding-top: 30px;
      padding-bottom: 116px;
      .waitcarditem {
        width: 690px;
        padding: 30px;
        margin: 0 auto 30px;
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
          padding: 30px 0;
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
              color: #00b87a;
            }
          }
        }
      }
    }

    .act {
      padding-bottom: 118px;
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
        display: flex;
        justify-content: space-around;
        font-size: 28px;
        color: white;
        /deep/ .van-checkbox__label {
          color: white;
        }
        p {
          display: flex;
          flex-direction: column;
          justify-content: center;
          &:nth-last-of-type(1) {
            span:nth-of-type(1) {
              color: #fc7542;
            }
            span:nth-of-type(2) {
              color: #00b87a;
              font-size: 24px;
              margin-top: 10px;
            }
          }
        }
      }
      .right {
        width: 280px !important;
        margin-right: 20px;
        display: flex;
        justify-content: flex-end;
        /deep/ .van-button {
          width: 260px;
          text-align: center;
          .van-button__text {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>