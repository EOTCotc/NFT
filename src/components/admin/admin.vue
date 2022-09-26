<template>
  <div id="admin">
    <div class="top">
      <van-nav-bar title="管理数据上传"
                   fixed
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
                                  :disabled="e==0?false:item.Activate==e?false:true"
                                  @change="looks(item.Activate,item.casting,$event)"
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
import { AllCards } from '@/utils/web3'
import { Toast } from 'vant'
import { myNft, GetAppStake, UpdateStakeOrder } from '@/api/newReqets'

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
      //   { text: '实时节点永久分红权益卡', value: 4 },
      //   { text: '中级节点分红权益卡', value: 5 },
      //   { text: '中级节点永久分红权益卡', value: 6 },
      //   { text: '高级节点分红权益卡', value: 7 },
      //   { text: '高级节点永久分红权益卡', value: 8 }
      // ],
      // 等级卡牌
      rankCardFlag: [
        // { Activate: 3, status: false, num: '000001', image: require('@/assets/img/Compose/3-before.png'), title: '3级青铜甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false },
        // { Activate: 4, status: false, num: '000002', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false },
        // { Activate: 4, status: false, num: '000092', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false },
        // { Activate: 3, status: false, num: '000031', image: require('@/assets/img/Compose/3-before.png'), title: '2级青铜甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false },
        // { Activate: 4, status: false, num: '000102', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false },
        { Activate: 4, status: false, num: '3', image: require('@/assets/img/Compose/5-before.png'), title: '4级黄金甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false }
      ],
      // 权益卡牌
      equityCard: [
        // { Activate: 1, status: false, id: '000001', image: require('@/assets/img/Compose/3-before.png'), title: '3级青铜甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false },
        // { Activate: 4, status: false, id: '000002', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false },
        // { Activate: 4, status: false, id: '000092', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false },
        // { Activate: 2, status: false, id: '000031', image: require('@/assets/img/Compose/3-before.png'), title: '2级青铜甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false },
        // { Activate: 4, status: false, id: '000102', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false },
        { Activate: 4, status: false, id: '000003', image: require('@/assets/img/Compose/5-before.png'), title: '5级黄金甲犀牛', casting: 'TFQ8Pvb9uxxhaw4YJxbZQuzswX8btUEzFL', ischecked: false }
      ],
      // 全部等级卡牌
      myRank: [
        { Activate: 1, status: false, image: require('@/assets/img/Compose/1.jpg'), title: '1级青铜甲犀牛', ischecked: false },
        { Activate: 2, status: false, image: require('@/assets/img/Compose/2.jpg'), title: '2级白银甲犀牛', ischecked: false },
        { Activate: 3, status: false, image: require('@/assets/img/Compose/3-before.png'), title: '3级白银甲犀牛', ischecked: false },
        { Activate: 4, status: false, image: require('@/assets/img/Compose/4-before.png'), title: '4级青铜甲犀牛', ischecked: false },
        { Activate: 5, status: false, image: require('@/assets/img/Compose/5-before.png'), title: '5级白银甲犀牛', ischecked: false }
      ],
      myRanks: [],
      // 全部权益卡片
      myEquity: [
        { Activate: 1, status: false, image: require('@/assets/img/equityItem1.png'), title: '创世会权益卡', ischecked: false },
        { Activate: 2, status: false, image: require('@/assets/img/equityItem2.png'), title: '联合会权益卡', ischecked: false },
        { Activate: 3, status: false, image: require('@/assets/img/Compose/actual-100-before.jpg'), title: '100实时节点分红权益卡', ischecked: false },
        { Activate: 3, status: false, image: require('@/assets/img/Compose/actual-200-before.jpg'), title: '200实时节点分红权益卡', ischecked: false },
        { Activate: 3, status: false, image: require('@/assets/img/Compose/actual-300-before.jpg'), title: '300实时节点分红权益卡', ischecked: false },
        { Activate: 4, status: false, image: require('@/assets/img/Compose/actual-forever.jpg'), title: '实时节点永久分红权益卡', ischecked: false },
        { Activate: 5, status: false, image: require('@/assets/img/Compose/middle-100-before.jpg'), title: '100中级节点分红权益卡', ischecked: false },
        { Activate: 5, status: false, image: require('@/assets/img/Compose/middle-200-before.jpg'), title: '200中级节点分红权益卡', ischecked: false },
        { Activate: 5, status: false, image: require('@/assets/img/Compose/middle-300-before.jpg'), title: '300中级节点分红权益卡', ischecked: false },
        { Activate: 6, status: false, image: require('@/assets/img/Compose/middle-forever.jpg'), title: '中级节点永久分红权益卡', ischecked: false },
        { Activate: 7, status: false, image: require('@/assets/img/Compose/high-100-before.jpg'), title: '100高级节点分红权益卡', ischecked: false },
        { Activate: 7, status: false, image: require('@/assets/img/Compose/high-200-before.jpg'), title: '200高级节点分红权益卡', ischecked: false },
        { Activate: 7, status: false, image: require('@/assets/img/Compose/high-300-before.jpg'), title: '300高级节点分红权益卡', ischecked: false },
        { Activate: 8, status: false, image: require('@/assets/img/Compose/high-eiky.jpg'), title: '高级节点永久分红权益卡', ischecked: false }
      ]
    }
  },
  created() {
    // GetAppStake({})
    //   .then((res) => {
    //     this.myRanks = res.data
    //     console.log(res)
    //     console.log(this.myRanks)
    //     this.rankCard()
    //   })
    //   .catch(() => {
    //     this.$toast('请刷新页面')
    //   })
    // console.log(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`)
  },
  methods: {
    // 等级卡牌
    rankCard() {
      this.rankCardFlag = []
      console.log(this.myRanks)
      for (let i of this.myRanks) {
        const com = {}
        com.num = i.id
        com.casting = i.ads.trim()
        com.type = i.num
        com.Activate = this.myRank[i.num - 1].Activate
        com.title = this.myRank[i.num - 1].title
        com.status = this.myRank[i.num - 1].status
        com.image = this.myRank[i.num - 1].image
        com.ischecked = this.myRank[i.num - 1].ischecked
        if (com.type == 3 || com.type == 4 || com.type == 5) this.rankCardFlag.push(com)
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
      console.log(this.rank, this.casting1)
    },
    looks(Activate, casting, event) {
      console.log(Activate, casting, event)
      this.e = Activate
      if (event) {
        this.equity.push(1)
        this.casting2.push(casting)
      } else {
        this.equity.splice(
          this.equity.findIndex((item) => item === 1),
          1
        )
        this.casting2.splice(
          this.casting2.findIndex((item) => item === casting),
          1
        )
      }
      if (this.equity.length == 0) this.e = 0
      console.log(this.equity, this.casting2)
    },
    pro(i) {
      console.log(i)
      if (i === false) this.$toast('只能同时选择一种类型的NFT')
    },
    pros(e) {
      console.log(e)
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
    // 上传等级卡牌
    getRank() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      console.log(this.rank)
      // AllCards(this.casting1, this.rank, 0, this.i - 1)
      AllCards(this.casting1, this.rank, 0, this.i - 1).then((res) => {
        this.rank.unshift(localStorage.getItem('Token'))
        UpdateStakeOrder(this.rank)
          .then(
            (res) => {
              console.log(res)
            },
            (rej) => {
              console.log(rej)
            }
          )
          .catch((err) => {
            console.log(err)
          })
      })
      console.log(this.casting1, this.rank, 0, this.i - 1)
      // this.$toast('上传成功')
    },
    // 上传权益卡牌
    getEquity() {
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      // AllCards(this.casting2, this.equity, 1, this.e - 1)
      AllCards(this.casting2, ...this.equity, 1, this.e - 1)
      // console.log(this.casting2, this.equity, 1, this.e - 1)
      // this.$toast('上传成功')
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
        return this.seleckeds == this.equityCard.filter((e) => e.Activate == this.e).length
      },
      set(v) {
        if (v) {
          this.equityCard.filter((e) => e.Activate == this.e).map((e) => (e.ischecked = true))
        } else {
          this.equityCard.filter((e) => e.Activate == this.e).map((e) => (e.ischecked = false))
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