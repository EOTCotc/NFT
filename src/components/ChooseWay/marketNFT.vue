<template>
  <div class="marketNFT">
    <div class="top"><img src="../../assets/img/logoNFT.png"
           alt=""></div>
    <div class="tab">
      <div class="l">
        <p v-for="item in tabs"
           :key="item.id"
           @click="tab(item.id)"
           :class="active==item.id?'active' :''">{{item.name}}</p>
      </div>
      <!-- <div class="r">
        <p @click="show = !show"
           :class="col?'active' :''">筛选
          <van-icon name="filter-o" />
        </p>
      </div> -->
    </div>
    <div class="manyCard">
      <template v-if="manyCard.length">
        <div class="item"
             @click="goCardDetails(item.text,item.id,item.num,item.title,item.Activate,item.form,item.status,item.state,item.price,item.endTime,item.time)"
             v-for="item in manyCard"
             :key="item.id">
          <p class="img"><img :src="item.image"></p>
          <p class="title">{{item.title }}</p>
          <p class="text">{{item.text|ellipsis }}</p>
          <p class="price"><img src="@/assets/img/logo-removebg-preview.png">{{item.price}}</p>
        </div>
      </template>

      <div class="empty"
           v-else>
        <van-empty class="custom-image"
                   :image="require('../../assets/img/cardPage/cardNull.png')"
                   description="暂无该类型卡牌" />
      </div>

    </div>

    <!-- 弹出层 -->
    <!-- <van-popup v-model="show"
               position="right"
               :style="{ height: '100%',width: '76%',background:'rgb(31, 41, 70)',color:'#fff',paddingTop:'4em' }">
      <div class="options">
        <div class="type">
          <div class="title">类型</div>
          <div class="content">
            <p @click="num=item.id"
               v-for="item in option"
               :key="item.id"
               :class="num==item.id?'active' :''">{{item.title}}</p>
          </div>
        </div>
        <div class="class"
             v-if="num">
          <div class="title">等级</div>
          <div class="content">
            <p @click="number=lists.id"
               v-for="lists in option.name"
               :key="lists.id"
               :class="number==lists.id?'active' :''">{{lists.title}}</p>
          </div>
        </div>
        <div class="status"
             v-if="number">
          <div class="title">状态</div>
          <div class="content">
            <p @click="numbers=list.id"
               v-for="list in menu.form"
               :key="list.id"
               :class="numbers==list.id?'active' :''">{{list.title}}</p>
          </div>
        </div>

        <div class="btn">
          <van-button color="#1B2333"
                      class="off"
                      @click="off"
                      round>重置</van-button>
          <van-button color="#227aee"
                      class="sure"
                      @click="sure"
                      round>确定</van-button>
        </div>
      </div>
    </van-popup> -->
  </div>
</template>

<script>
import { Toast } from 'vant'
import { options, allCard, allCards, cardList, contract } from '@/utils/options'
import { getMarketOrders, allMarketOrders, idByLimitedTimes } from '@/utils/web3'
export default {
  data() {
    return {
      active: 0,
      num: 0,
      number: 0,
      numbers: 0,
      show: false,
      col: false,
      option: [],
      menu: [],
      manyCard: [],
      manyCards: [],
      tabs: [
        { id: 0, name: '全部卡牌' },
        { id: 1, name: '等级卡牌' },
        { id: 2, name: '权益卡牌' },
        // { id: 3, name: '专属' },
        { id: 4, name: '我的卡牌' }
      ],
      array: [], //订单信息
      index: [],
      user: localStorage.getItem('myaddress').toLowerCase()
    }
  },
  created() {
    this.option = options
    // console.log(this.user)
    setTimeout(() => {
      this.allOrders()
    }, 500)
  },
  methods: {
    // 获取市场所有订单
    async allOrders() {
      Toast.loading({
        message: '数据加载中...',
        forbidClick: true,
        duration: 0
      })
      this.array = []
      let arr = []
      await allMarketOrders(this.array)
      // console.log(this.array)
      this.array.forEach((value) => arr.push(value.NFTaddress))
      this.getPage(arr)
    },
    // 页面信息
    async getPage(arr) {
      this.manyCards = []
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < arr.length; j++) {
          let index = contract[i].indexOf(arr[j])
          if (index != -1) this.array[j].NFTaddress = { i, index }
        }
      }
      // console.log(this.array)

      for (let n of this.array) {
        if (n.NFTaddress.i == 0) {
          // 等级卡牌
          const asd = {}
          asd.id = n.id
          asd.num = n.NFTid
          asd.endTime = n.endTime
          asd.Activate = n.NFTaddress.index + 1
          asd.status = n.state //合成前、后 1为合成过的卡牌
          asd.title = allCard[n.NFTaddress.index].title
          n.state ? (asd.image = allCards[n.NFTaddress.index].image) : (asd.image = allCard[n.NFTaddress.index].image)
          asd.text = n.seller
          asd.price = n.price
          // asd.buyer = n.buyer
          asd.form = 1
          // if (n.buyer == this.user) asd.state = 3
          if (n.seller == this.user) asd.state = 4
          // console.log(n.buyer == '')
          // if (n.buyer == '' || n.buyer == this.user || n.seller == this.user) {
          this.manyCards.push(asd)
          // }
        } else {
          // 权益卡牌
          const asd = {}
          asd.id = n.id
          asd.num = n.NFTid
          asd.endTime = n.endTime
          asd.Activate = n.NFTaddress.index + 1
          // console.log(n.NFTaddress)
          asd.text = n.seller
          asd.price = n.price
          // asd.buyer = n.buyer
          asd.form = 2
          asd.status = 0
          // console.log(n.seller, this.user)
          // if (n.buyer == this.user) asd.state = 3
          if (n.seller == this.user) asd.state = 4
          if ([3, 4, 5].includes(asd.Activate)) {
            let str = []
            await idByLimitedTimes(n.NFTaddress.index, n.NFTid, str)
            // console.log(str)
            asd.time = (str[0] * 1 + 1) * 100
            asd.title = cardList[asd.Activate - 2][str[0]].title
            asd.image = cardList[asd.Activate - 2][str[0]].image
          } else if ([1, 2].includes(asd.Activate)) {
            asd.title = cardList[0][n.NFTaddress.index].title
            asd.image = cardList[0][n.NFTaddress.index].image
          } else {
            // console.log(n.NFTaddress)
            asd.title = cardList[4][asd.Activate - 6].title
            asd.image = cardList[4][asd.Activate - 6].image
          }
          // this.manyCards.push(asd)
          // console.log(n.buyer == '')
          // if (n.buyer == '' || n.buyer == this.user || n.seller == this.user) {
          this.manyCards.push(asd)
          // }
        }
      }
      // console.log(this.manyCards)
      this.manyCard = this.manyCards
      Toast.clear()
    },
    // // 取消筛选
    // off() {
    //   this.number = 0
    //   this.active = 0
    //   this.col = false
    //   this.$nextTick(() => (this.num = 0))
    //   this.show = !this.show
    // },
    // // 确认筛选
    // sure() {
    //   console.log(this.num, this.number, this.numbers)
    //   this.active = this.num
    //   this.col = true
    //   this.show = !this.show
    // },
    // 查看卡牌详情
    goCardDetails(seller, orderID, id, title, Activate, form, status, state, price, endTime, time) {
      this.$router.push({
        name: 'card_details',
        query: {
          seller: seller,
          orderID: orderID,
          id: id + '',
          time: time,
          title: title,
          Activate: Activate + '',
          price: price,
          form: form,
          state: status,
          status: state,
          endTime: endTime,
          url: this.$route.name
        }
      })
    },
    // 标签栏
    tab(id) {
      this.active = id
      this.col = false
      this.number = 0
      this.$nextTick(() => (this.num = 0))
    }
  },

  watch: {
    active: {
      handler(i) {
        if ([1, 2].includes(i)) this.manyCard = this.manyCards.filter((e) => e.form == i && e.state != 4)
        else if (i == 0) this.manyCard = this.manyCards
        else this.manyCard = this.manyCards.filter((e) => e.state == i)
      },
      immediate: true
    },
    num: {
      handler(num) {
        this.number = 0
        this.option = options.filter((e) => e.id == num)[0]
        // console.log(this.option)
      },
      immediate: true
    },
    number: {
      handler(number) {
        this.menu = this.option.name.filter((e) => e.id == number)[0]
        // console.log(this.menu)
      }
      // immediate: true
    }
  },
  filters: {
    ellipsis(value) {
      let len = value.length
      if (!value) return ''
      if (value.length > 20) {
        return value.substring(0, 5) + '...' + value.substring(len - 5, len)
      }
      return value
    }
  }
}
</script>

<style lang="less" scoped>
.marketNFT {
  font-size: 34px;
  margin-top: 1.2em;
  padding: 1em;
  padding-bottom: 0px;
  .top {
    margin-bottom: 0.2rem;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
  }
  .tab {
    // padding: 0 1em;
    // margin-bottom: 30px;
    color: #878d9a;
    font-size: 32px;
    // display: flex;
    // justify-content: space-between;
    .l {
      width: 100%;
      display: flex;
      justify-content: space-between;
      letter-spacing: 2px;
      p {
        // margin-right: 2em;
        float: left;
      }
      .active {
        color: #ffffff;
      }
    }
  }
  .manyCard {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 0.4em;
    .item {
      margin-top: 28px;
      width: 48%;
      // height: 500px;
      background: #1b2333;
      border-radius: 8px;
      color: #fff;
      padding: 0.8em;
      box-sizing: border-box;
      line-height: 1.6em;
      letter-spacing: 2px;
      .img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .title {
        font-size: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .text {
        color: #878d9a;
        font-size: 26px;
      }
      .price {
        font-size: 26px;
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
          width: 28px;
          height: 28px;
        }
      }
    }
    .empty {
      width: 100%;
      color: #fff;
      display: flex;
      .custom-image {
        margin: auto;
        margin-top: 40px;
        /deep/ .van-empty__image {
          width: 260px;
          height: 172px;
        }
      }
    }
  }
  .options {
    font-size: 32px;
    padding: 20px;
    // height: 100%;
    .title {
      margin: 30px 0;
    }
    .content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      p {
        margin: 10px;
        font-size: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 72px;
        border: 1px solid #8d94a2;
        border-radius: 44px;
      }
      .active {
        border: none;
        background: #227aee;
      }
    }
    .btn {
      width: 90%;
      position: absolute;
      bottom: 4em;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .van-button {
        letter-spacing: 2px;
        font-size: 30px;
        border: none;
        background: none;
        color: #fff !important;
      }
      .off {
        width: 36%;
      }
      .sure {
        width: 56%;
      }
    }
  }
}
</style>