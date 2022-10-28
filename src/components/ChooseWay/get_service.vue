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
                <div>待领取：{{parseFloat(item.price).toFixed(10)}} USDT</div>
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
                    <span>总量：{{parseFloat(allPrice).toFixed(10)}} USDT</span>
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
               v-if="equityCardFlag.length=== 0">
            <van-empty class="custom-image"
                       :image="require('@/assets/img/cardPage/cardNull.png')"
                       description="暂无领取手续费的权益卡牌" />
          </div>
          <div v-else
               class="waitcard">

            <div class="waitcarditem"
                 v-for="item in equityCardFlag"
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
                                  @change="looks(item.address,item.num,$event)"
                                  v-model="item.ischecked"></van-checkbox>
                  </span>
                </div>
                <div>#{{ item.num.padStart(6, 0) }}</div>
                <div>待领取：{{parseFloat(item.price).toFixed(4)}} USDT</div>
              </div>

              <!-- 页脚 -->
              <div class="waitfooter">
                <!-- v-if="equityCardFlag.filter((data) => {return data.Activate==e}).length"> -->
                <div class="left">
                  <p>
                    <span class="sl">
                      <van-checkbox v-model="changeChecks">全选</van-checkbox>
                    </span>
                  </p>
                  <p>
                    <span>已选择 {{ seleckeds }} 个</span>
                    <span>总量：{{parseFloat(allPrices).toFixed(4)}} USDT</span>
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
import { multipleWithdraws, AllCards, AllCardTime, already, alreadySyn, amountAvailableLists, multipleWithdrawFees } from '@/utils/web3'
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
      rankCard: [],
      // 权益卡牌
      equityCard: [],
      equityCardFlag: [],
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
      addressEquity: [],
      idEquity: [],
      array: [[], []],
      arr: [[], []],
      flag: true
    }
  },
  created() {
    setTimeout(() => {
      this.hadReceive()
    }, 500)
  },
  methods: {
    // 已拥有等级卡牌(全部)
    async hadReceive() {
      Toast.loading({
        message: '数据更新中...',
        forbidClick: true,
        duration: 0
      })

      this.Array = []
      this.Arr = []
      this.array = [[], []]
      this.addressRank = []
      this.idRank = []
      this.rankCardFlag = []

      await already(0, 2, this.Array)
      await already(0, 3, this.Array)
      await already(0, 4, this.Array)
      // this.hadReceiveSyn()

      for (let i = 0; i < this.Array.length; i++) {
        await alreadySyn(this.Array[i].Activate - 1, this.Array[i].num, this.Arr)
      }
      for (let i of this.Arr) {
        const asd = {}
        asd.state = i.data
        asd.num = i.num + ''
        asd.price = 0
        asd.Activate = i.Activate
        asd.status = false
        asd.ischecked = false
        asd.address = contract[0][i.Activate - 1]
        if (asd.state) {
          asd.title = this.allCards[i.Activate - 1].title
          asd.image = this.allCards[i.Activate - 1].image
          asd.text = this.allCards[i.Activate - 1].text
        } else {
          asd.title = this.allCard[i.Activate - 1].title
          asd.image = this.allCard[i.Activate - 1].image
          asd.text = this.allCard[i.Activate - 1].text
        }

        this.rankCard.push(asd)
        this.addressRank.push(asd.address)
        this.idRank.push(asd.num)
      }
      this.getR()
    },
    // // 已拥有等级卡牌（已合成）
    // async hadReceiveSyn() {

    //   await alreadySyn(2, this.Arr)
    //   await alreadySyn(3, this.Arr)
    //   await alreadySyn(4, this.Arr)

    //   let list = this.Array.filter((items) => {
    //     if (!this.Arr.some((ele) => items.num == ele.num && items.Activate == ele.Activate)) return items
    //   })

    //   this.get(list, this.allCard)
    //   this.get(this.Arr, this.allCards)
    //   this.getR()
    // },
    // // 等级卡牌
    // async get(val, value1) {
    //   for (let i of val) {
    //     const asd = {}
    //     asd.num = i.num + ''
    //     asd.price = 0
    //     asd.Activate = i.Activate
    //     asd.title = value1[i.Activate - 1].title
    //     asd.image = value1[i.Activate - 1].image
    //     asd.ischecked = false
    //     asd.address = contract[0][i.Activate - 1]
    //     this.rankCard.push(asd)
    //     this.addressRank.push(asd.address)
    //     this.idRank.push(asd.num)
    //   }
    // },
    async getR() {
      await amountAvailableLists(0, this.addressRank, this.idRank, this.array)
      // console.log(this.array)
      for (let index = 0; index < this.rankCard.length; index++) {
        this.rankCard[index].price = this.array[1][index]
      }
      this.rankCardFlag = this.rankCard.filter((e) => e.price)
      Toast.clear()
    },
    // 创世会、联合会已拥有
    async hadLimitedFor() {
      let Array = []
      this.equityCard = []
      this.idEquity = []
      this.addressEquity = []
      this.equityCardFlag = []
      this.arr = [[], []]
      await already(1, 0, Array)
      await already(1, 1, Array)

      // console.log(Array)

      for (let i of Array) {
        const asd = {}
        asd.status = false
        asd.ischecked = false
        asd.key = Math.random()
        asd.num = i.num + ''
        asd.Activate = i.Activate
        asd.title = this.cardList[0][i.Activate - 1].title
        asd.image = this.cardList[0][i.Activate - 1].image
        asd.text = this.cardList[0][i.Activate - 1].text
        asd.address = contract[1][i.Activate - 1]
        asd.price = 0
        this.equityCard.push(asd)
        this.idEquity.push(asd.num)
        this.addressEquity.push(asd.address)
      }

      this.getE()
    },
    // 永久权益卡
    async limitedFor() {
      let Array = []
      await already(1, 5, Array)
      await already(1, 6, Array)
      await already(1, 7, Array)

      // console.log(Array)

      for (let i of Array) {
        const asd = {}
        asd.status = false
        asd.ischecked = false
        asd.key = Math.random()
        asd.num = i.num + ''
        asd.Activate = i.Activate
        asd.title = this.cardList[4][i.Activate - 6].title
        asd.image = this.cardList[4][i.Activate - 6].image
        asd.text = this.cardList[4][i.Activate - 6].text
        asd.address = contract[1][i.Activate - 1]
        asd.price = 0
        this.equityCard.push(asd)
        this.idEquity.push(asd.num)
        this.addressEquity.push(asd.address)
      }
    },
    async getE() {
      await amountAvailableLists(1, this.addressEquity, this.idEquity, this.arr)
      // console.log(this.arr)
      for (let index = 0; index < this.equityCard.length; index++) {
        this.equityCard[index].price = this.arr[1][index]
      }
      this.equityCardFlag = this.equityCard.filter((e) => e.price)
      Toast.clear()
    },

    // 权益卡牌
    equityCards() {
      this.equityCard = []
      // console.log(this.myEquity)
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
      // console.log(this.rank, this.address1)
    },
    looks(address, num, event) {
      // this.e = Activate
      if (event) {
        this.address2.push(address)
        this.equity.push(num)
      } else {
        this.equity.splice(
          this.equity.findIndex((item) => item === num),
          1
        )
        this.address2.splice(
          this.address2.findIndex((item) => item === address),
          1
        )
      }
      // if (this.equity.length == 0) (this.e = 0), (this.time = 0)
      // console.log(this.equity, this.address2)
    },
    changeLists(e) {
      this.e = e
      this.equity = []
      this.equityCardFlag.map((e) => (e.ischecked = false))
    },
    // 领取等级卡牌手续费
    getRank() {
      Toast.loading({
        message: '领取中...',
        forbidClick: true,
        duration: 0
      })

      multipleWithdraws(this.address1, this.rank, this.hadReceive, this.allPrice)
    },
    // 领取权益卡牌手续费
    getEquity() {
      Toast.loading({
        message: '领取中...',
        forbidClick: true,
        duration: 0
      })

      multipleWithdrawFees(this.address2, this.equity, this.hadLimitedFor, this.allPrices)
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
      return this.equityCardFlag.filter((card) => card.ischecked === true).length
    },
    // 用户选择的可领取手续费
    allPrice() {
      return this.rankCardFlag.filter((card) => card.ischecked === true).reduce((m, n) => m + n.price, 0)
    },
    allPrices() {
      return this.equityCardFlag.filter((card) => card.ischecked === true).reduce((m, n) => m + n.price, 0)
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
        return this.seleckeds == this.equityCardFlag.length
      },
      set(v) {
        this.equityCardFlag.forEach((e) => (e.ischecked = v))
      }
    }
  },
  watch: {
    synthActiveName(i) {
      // console.log(i)
      if (i == 2 && this.flag) {
        Toast.loading({
          message: '数据更新中...',
          forbidClick: true,
          duration: 0
        })
        this.hadLimitedFor()
        this.flag = !this.flag
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