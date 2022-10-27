<template>
  <div id="admin">
    <div class="top">
      <van-nav-bar title="管理数据上传"
                   fixed
                   right-text="手续费"
                   @click-right="onClickRight"
                   :border=false
                   z-index='99'
                   placeholder />
    </div>

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
                       description="暂无需上传的等级卡牌" />
          </div>
          <div v-else
               class="waitcard"
               :class="rankCardFlag.filter((data) => {return data.Activate==i}).length?'act':''">

            <div class="waitcarditem"
                 v-for="item in rankCardFlag"
                 :key="item.num">
              <div class="left">
                <img :src="item.image">
              </div>
              <div class="right">
                <div>
                  <span>{{ item.title }}</span>
                  <span @click="pro(i==0?i:item.Activate==i)">
                    <van-checkbox icon-size="16px"
                                  :disabled="i==0?false:item.Activate==i?false:true"
                                  @change="look(item.Activate,item.num,item.casting,$event)"
                                  v-model="item.ischecked"></van-checkbox>
                  </span>
                </div>
                <div>#{{ item.num.padStart(6, 0) }}</div>
                <div>钱包地址：{{ item.casting|ellipsis}}</div>
              </div>

              <!-- 页脚 -->
              <div class="waitfooter"
                   v-if="rankCardFlag.filter((data) => {return data.Activate==i}).length">
                <div class="left">
                  <p><span class="sl">
                      <van-checkbox v-model="changeCheck">全选</van-checkbox>
                    </span>已选择 {{ selecked }} 个</p>
                </div>
                <div class="right">
                  <van-button round
                              :disabled="isselect"
                              block
                              type="info"
                              @click="getRank">上传</van-button>
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
                       description="暂无需上传的权益卡牌" />
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
                                  @change="looks(item.time,item.Activate,item.num,item.casting,$event)"
                                  v-model="item.ischecked"></van-checkbox>
                  </span>
                </div>
                <div>数量：1</div>
                <div>钱包地址：{{ item.casting|ellipsis}}</div>
              </div>

              <!-- 页脚 -->
              <div class="waitfooter"
                   v-if="equityCard.filter((data) => {return data.Activate==e}).length">
                <div class="left">
                  <p><span class="sl">
                      <van-checkbox v-model="changeChecks">全选</van-checkbox>
                    </span>已选择 {{ seleckeds }} 个</p>
                </div>
                <div class="right">
                  <van-button round
                              :disabled="isselects"
                              block
                              type="info"
                              @click="getEquity">上传</van-button>
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
import { AllCards, AllCardTime } from '@/utils/web3'
import { Toast } from 'vant'
import { GetAppStake, UpdateStakeOrder } from '@/api/newReqets'
import { allCard, cardList } from '@/utils/options'

export default {
  data() {
    return {
      synthActiveName: '1',
      i: 0,
      e: 0,
      value1: 3,
      value2: 1,
      casting1: [],
      casting2: [],
      rank: [],
      equity: [],
      // option1: [
      //   { text: '三级卡牌', value: 3 },
      //   { text: '四级卡牌', value: 4 },
      //   { text: '五级卡牌', value: 5 }
      // ],
      // option2: [
      //   { text: '创世会权益卡', value: 1 },
      //   { text: '联合会权益卡', value: 2 },
      //   { text: '实时节点分红权益卡', value: 3 },
      //   { text: '中级节点分红权益卡', value: 4 },
      //   { text: '高级节点分红权益卡', value: 5 },
      //   { text: '实时节点永久分红权益卡', value: 6 },
      //   { text: '中级节点永久分红权益卡', value: 7 },
      //   { text: '高级节点永久分红权益卡', value: 8 }
      // ],
      // 等级卡牌
      rankCardFlag: [],
      // 权益卡牌
      equityCard: [],
      // 全部等级卡牌
      allCard,
      myRanks: [],
      // 全部权益卡片
      cardList,
      myEquity: [],
      equitys: [],
      time: 0
    }
  },
  created() {
    for (let i = 1; i <= 10; i++) {
      this.equityCard.push({
        id: Math.random(),
        Activate: 1,
        type: 0,
        // type: 1,
        time: 0,
        status: false,
        ischecked: false,
        num: i + 5 + '',
        image: require('@/assets/img/Compose/3-before.png'),
        title: '3级青铜甲犀牛',
        casting: '0x04DA18A861206A11E702852e6d8F42706B9d52C2'
      })
    }
    // this.hallmark()
  },
  methods: {
    // 领取手续费页面
    onClickRight() {
      this.$router.push({
        name: 'chargesAdmin'
      })
    },
    // 卡牌
    hallmark() {
      this.i = 0
      this.e = 0
      this.time = 0
      GetAppStake({})
        .then((res) => {
          // console.log(res.data)
          this.myRanks = res.data.filter((val) => val.type == 0)
          this.myEquity = res.data.filter((val) => val.type == 1)
          this.rankCard()
          this.equityCards()
        })
        .catch(() => {
          this.$toast('请刷新页面')
        })
    },
    // 等级卡牌
    rankCard() {
      this.rankCardFlag = []
      // console.log(this.myRanks)
      for (let i of this.myRanks) {
        const com = {}
        com.num = i.id
        com.casting = i.ads.trim()
        com.type = i.num
        com.Activate = this.allCard[i.num - 1].Activate
        com.title = this.allCard[i.num - 1].title
        com.status = false
        com.image = this.allCard[i.num - 1].image
        com.ischecked = false
        if (['3', '4', '5'].includes(com.type)) this.rankCardFlag.push(com)
      }
    },
    // 权益卡牌
    equityCards() {
      this.equityCard = []
      // console.log(this.myEquity)
      for (let i of this.myEquity) {
        const com = {}
        com.id = Math.random()
        com.num = i.id
        com.status = false
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
    look(Activate, num, casting, event) {
      this.i = Activate
      if (event) {
        this.rank.push(num)
        this.casting1.push(casting)
      } else {
        this.rank.splice(
          this.rank.findIndex((item) => item === num),
          1
        )
        this.casting1.splice(
          this.casting1.findIndex((item) => item === casting),
          1
        )
      }
      if (this.rank.length == 0) this.i = 0
      // console.log(this.rank, this.casting1)
    },
    looks(time, Activate, num, casting, event) {
      // console.log(Activate, casting, event)
      this.e = Activate
      if (event) {
        if (time && this.time == 0) this.time = time

        this.equity.push(num)
        this.equitys.push(1)
        this.casting2.push(casting)
        // console.log(time)
      } else {
        this.equity.splice(
          this.equity.findIndex((item) => item === num),
          1
        )
        this.equitys.splice(
          this.equitys.findIndex((item) => item === 1),
          1
        )
        this.casting2.splice(
          this.casting2.findIndex((item) => item === casting),
          1
        )
      }
      if (this.equity.length == 0) (this.e = 0), (this.time = 0)
      // console.log(this.equity, this.casting2, this.time)
    },
    pro(i) {
      // console.log(i)
      if (i === false) this.$toast('只能同时选择一种类型的NFT')
    },
    pros(e) {
      // console.log(e)
      if (e === false) this.$toast('只能同时选择一种类型的NFT')
    },
    changeList(i) {
      this.i = i
      this.rank = []
      this.rankCardFlag.map((e) => (e.ischecked = false))
    },
    changeLists(e) {
      this.e = e
      this.equity = []
      this.equityCard.map((e) => (e.ischecked = false))
    },

    reqRank() {
      this.rank.unshift(localStorage.getItem('Token') + '_0')
      UpdateStakeOrder(this.rank)
        .then(
          (res) => {
            Toast.clear()
            console.log(res)
            this.hallmark()
          },
          (rej) => {
            console.log(rej)
          }
        )
        .catch((err) => {
          console.log(err)
        })
    },
    // 上传等级卡牌
    getRank() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      // console.log(this.casting1, this.rank, 0, this.i - 1)
      AllCards(this.casting1, this.rank, 0, this.i - 1, this.reqRank)
    },
    reqEquity() {
      this.equity.unshift(localStorage.getItem('Token') + '_1')
      UpdateStakeOrder(this.equity)
        .then(
          (res) => {
            Toast.clear()
            console.log(res)
            this.hallmark()
          },
          (rej) => {
            console.log(rej)
          }
        )
        .catch((err) => {
          console.log(err)
        })
    },
    // 上传权益卡牌
    getEquity() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      // console.log(this.equity.length)
      // console.log(this.casting2, [this.seleckeds], 1, this.e - 1)

      // 有限权益卡牌   :   // 非有限权益卡牌
      this.time ? AllCardTime(this.casting2, this.equitys, this.time, this.e - 1, this.reqEquity) : AllCards(this.casting2, this.equitys, 1, this.e - 1, this.reqEquity)
    }
  },

  computed: {
    // 用户选择的上传卡牌数
    selecked() {
      return this.rankCardFlag.filter((card) => card.ischecked === true).length
    },
    seleckeds() {
      return this.equityCard.filter((card) => card.ischecked === true).length
    },
    // 是否可上传卡牌
    isselect() {
      return this.selecked > 0 ? false : true
    },
    isselects() {
      return this.seleckeds > 0 ? false : true
    },
    changeCheck: {
      get() {
        return this.selecked == this.rankCardFlag.filter((e) => e.Activate == this.i).length
      },
      set(v) {
        if (v) {
          this.rankCardFlag.filter((e) => e.Activate == this.i).map((e) => (e.ischecked = true))
        } else {
          this.rankCardFlag.filter((e) => e.Activate == this.i).map((e) => (e.ischecked = false))
        }
      }
    },
    changeChecks: {
      get() {
        return this.seleckeds == this.equityCard.filter((e) => e.Activate == this.e && e.time == this.time).length
      },
      set(v) {
        if (v) {
          this.equityCard.filter((e) => e.Activate == this.e && e.time == this.time).map((e) => (e.ischecked = true))
        } else {
          this.equityCard.filter((e) => e.Activate == this.e && e.time == this.time).map((e) => (e.ischecked = false))
        }
      }
    }
  },
  filters: {
    ellipsis(value) {
      let len = value.length
      if (!value) return ''
      if (value.length > 20) {
        return value.substring(0, 10) + '...' + value.substring(len - 3, len)
      }
      return value
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  height: 1.2rem;
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
}

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
    // padding-top: 70px;
    // padding-bottom: 100px;
    background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);

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
            // margin-bottom: 20px;
            span {
              display: inline-block;
              margin-top: 10px;
            }
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
          display: flex;
          color: #858992;
          font-size: 22px;
          margin-top: 10px;
          word-break: break-all;
        }
      }
    }
    .right {
      width: 300px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
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

/deep/.van-toast {
  background: rgba(58, 58, 58, 0.7);
}
</style>