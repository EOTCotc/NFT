<template>
  <div class="cardSell">
    <!-- 头部 -->
    <div key="2"
         class="top">
      <van-nav-bar title="出售设置"
                   left-arrow
                   z-index='99'
                   placeholder
                   fixed
                   :border="false"
                   @click-left="onClickLeft" />
    </div>
    <div class="content">
      <!-- 卡片展示 -->
      <div class="cardShow">
        <div class="img"><img :src="img"></div>
        <div class="text">
          <p class="title">{{query.title}}</p>
          <p class="txt">{{brief}}</p>
        </div>
      </div>
      <!-- 设置价格 -->
      <div class="price">
        <div class="title">设置价格<span>*</span></div>
        <div class="input">
          <van-field v-model="price"
                     oninput="if(value>1000000000000000)value=1000000000000000"
                     :border="false"
                     type="digit"
                     placeholder="请输入价格"
                     maxlength="30" />
          <span>USDT</span>
        </div>
      </div>
      <!-- 设置上架时间 -->
      <div class="date">
        <div class="title">设置商品下架时间<span>*</span></div>
        <div class="calendar">
          <van-cell :value="date"
                    @click="show = true" />
          <van-calendar v-model="show"
                        :min-date="minDate"
                        title="商品上架截止时间"
                        @confirm="onConfirm"
                        color="#1989fa"
                        :show-confirm="false" />
        </div>
      </div>
      <!-- 设置指定购买人 -->
      <!-- <div class="wallet">
        <div class="title">设置指定购买人</div>
        <div class="address">
          <van-form>
            <van-field v-model="value"
                       name="pattern"
                       placeholder="请输入钱包地址"
                       :rules="[{ pattern, message: '请输入正确钱包地址' }]" />
          </van-form>
        </div>
      </div> -->
      <!-- 其他费用 -->
      <div class="otherPrice">
        <div class="title">其他费用</div>
        <div class="cost">
          <p class="l">平台服务费</p>
          <p class="r">9%</p>
        </div>
        <!-- <div class="cost">
          <p class="l">创作者版权税</p>
          <p class="r">3%</p>
        </div> -->
      </div>
    </div>
    <!-- 页脚 -->
    <div class="footer">
      <div class="btn"
           :class="price>0&&endTime?'active':''"
           @click="sureHandler">
        <p>发布</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { cardList, allCard, allCards, contract } from '@/utils/options'
import { postAnOrders, isApprovedForAlls, setApprovalForAlls, editOrders } from '@/utils/web3'
export default {
  data() {
    return {
      show: false,
      minDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      date: '',
      price: '',
      query: '',
      brief: '',
      img: '',
      cardList,
      allCard,
      allCards,
      endTime: '',
      value: '',
      addressIndex: { first: null, last: null },
      pattern: /^[A-Za-z0-9]{34}|^[0]{0}$/
    }
  },
  created() {
    this.query = this.$route.query
    console.log(this.query)
    this.start()
  },
  methods: {
    start() {
      for (let i = 0; i < 2; i++) {
        let index = contract[i].indexOf(this.query.address)
        // console.log(index)
        if (index != -1) (this.addressIndex.first = i), (this.addressIndex.last = index)
      }
      this.authorization()
      this.query.url == 'hvae_card' ? this.rights() : this.grade()
    },
    // 查询卡牌是否授权
    authorization() {
      Toast.loading({
        message: '卡牌授权中...',
        forbidClick: true,
        duration: 0
      })
      setTimeout(() => {
        isApprovedForAlls(this.addressIndex).then((res) => {
          if (!res) setApprovalForAlls(this.addressIndex)
          else Toast.clear()
        })
      }, 500)
    },
    // 等级卡牌
    grade() {
      let Activate = this.query.Activate
      this.brief = this.allCard[Activate - 1].text
      this.query.state ? (this.img = this.allCards[Activate - 1].image) : (this.img = this.allCard[Activate - 1].image)
    },
    // 权益卡牌
    rights() {
      let Activate = this.query.Activate
      if (['1', '2'].includes(Activate)) {
        this.img = this.cardList[0][Activate - 1].image
        this.brief = this.cardList[0][Activate - 1].text
      } else if (['6', '7', '8'].includes(Activate)) {
        this.img = this.cardList[4][Activate - 6].image
        this.brief = this.cardList[4][Activate - 6].text
      } else {
        if (this.query.time == 100) {
          this.img = this.cardList[Activate - 2][0].image
          this.brief = this.cardList[Activate - 2][0].text
        } else if (this.query.time == 200) {
          this.img = this.cardList[Activate - 2][1].image
          this.brief = this.cardList[Activate - 2][1].text
        } else if (this.query.time == 300) {
          this.img = this.cardList[Activate - 2][2].image
          this.brief = this.cardList[Activate - 2][2].text
        }
      }
    },
    onClickLeft() {
      this.$router.push({
        name: 'card_details',
        query: this.query
      })
    },
    // 发布卡牌订单
    async sureHandler() {
      if (this.price > 0 && this.endTime) {
        Toast.loading({
          message: '发布中...',
          forbidClick: true,
          duration: 0
        })
        // 合成传1，未合成传0
        await postAnOrders(this.query.address, this.query.id, this.query.state == 1 ? 1 : 0, this.price, this.endTime + 8 * 3600, this.goToDetails)
      }

      // if (this.price > 0 && this.endTime && this.pattern.test(this.value)) {
      //   if (this.value == localStorage.getItem('myaddress')) {
      //     this.$toast('指定购买人不可为自己')
      //   } else {
      //     Toast.loading({
      //       message: '发布中...',
      //       forbidClick: true,
      //       duration: 0
      //     })
      //     let values = ''
      //     this.value == '' ? (values = 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb') : (values = this.value)
      //     await postAnOrders(values, this.query.address, this.query.id, this.price, this.endTime, this.goToDetails)
      //   }
      // } else if (!this.pattern.test(this.value)) {
      //   this.$toast('钱包地址错误')
      // }
    },
    goToDetails() {
      this.price = ''
      this.date = ''
      this.value = ''
      this.$nextTick(() => {
        this.$router.push({
          name: 'card_details',
          query: { ...this.query, sell: 1 }
        })
      })
    },
    formatDate(date) {
      return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 8时`
    },
    onConfirm(date) {
      // 结束时间为选择日期的上午8时
      this.endTime = new Date(date).getTime() / 1000 + 8 * 3600
      this.show = false
      this.date = this.formatDate(date)
      this.timestampToTime(this.endTime)
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '-'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      let D = date.getDate() + ' '
      let h = date.getHours() + ':'
      let m = date.getMinutes() + ':'
      let s = date.getSeconds()
      console.log(Y + M + D + h + m + s)
    }
  }
}
</script> 

<style lang="less" scoped>
.cardSell,
html {
  margin-bottom: 50px;
  background: linear-gradient(174deg, #437fff 0%, #172d5a 0%, #06070a 100%);
  // 头部
  .top {
    height: 49px;
    /deep/ .van-nav-bar__content {
      background-color: #1b2945;
    }
  }
}

/deep/ .van-nav-bar__title,
/deep/ .van-icon:before,
/deep/ .van-field__control {
  color: #fff;
}

.content {
  width: 100%;
  background: #06070a;
  padding-bottom: 110px;
  // 卡片展示
  .cardShow {
    position: relative;
    top: 80px;
    transform: translateX(4.5%);
    width: 92%;
    overflow: hidden;
    background: #1b2333;
    border-radius: 8px 8px 8px 8px;
    padding: 0.8em;
    box-sizing: border-box;
    div {
      float: left;
      color: #ffffff;
      font-size: 34px;
    }
    .img {
      width: 20%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      box-sizing: border-box;
      width: 80%;
      padding-left: 0.8em;
      letter-spacing: 1px;
      .txt {
        margin-top: 20px;
        font-size: 28px;
        opacity: 0.3;
        line-height: 1.4em;
      }
    }
  }
  // 设置价格
  .price {
    width: 92%;
    margin: 0px auto;
    margin-top: 110px;
    padding-bottom: 40px;
    color: #fff;
    // border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
    .title {
      font-size: 30px;
      margin-bottom: 20px;
      span {
        color: red;
        margin-left: 10px;
      }
    }
    .input {
      position: relative;
      .van-field {
        height: 88px;
        border-radius: 8px 8px 8px 8px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: transparent;
      }
      span {
        position: absolute;
        right: 22px;
        top: 22px;
        font-size: 28px;
      }
    }
  }
  // 设置上架时间
  .date {
    color: #fff;
    width: 92%;
    margin: 0px auto;
    padding-bottom: 40px;
    .title {
      font-size: 30px;
      margin-bottom: 20px;
      span {
        color: red;
        margin-left: 10px;
      }
    }
    .calendar {
      .van-cell {
        background: transparent;
        height: 88px;
        border-radius: 8px 8px 8px 8px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        color: #ccc;
        &::after {
          border: none;
        }
      }
      .van-cell__value {
        letter-spacing: 1px;
        text-align: center;
        color: #fff;
      }
      /deep/ .van-calendar {
        background: #06070a;
      }
    }
  }
  // 设置指定购买人
  .wallet {
    color: #fff;
    width: 92%;
    margin: 0px auto;
    .title {
      font-size: 30px;
      margin-bottom: 20px;
    }
    .address {
      .van-field {
        background: transparent;
        height: 88px;
        border-radius: 8px 8px 8px 8px;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
      /deep/ .van-field__error-message {
        position: absolute;
        top: -50%;
      }
    }
  }

  // 其他费用
  .otherPrice {
    width: 92%;
    margin: 0px auto;
    margin-top: 60px;
    color: #ffffff;
    font-size: 34px;
    .title {
      margin-bottom: 20px;
    }
    .cost {
      height: 70px;
      font-size: 28px;
      opacity: 0.3;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.footer {
  width: 100%;
  height: 144px;
  position: fixed;
  bottom: 0;
  background: #11192b;
  .btn {
    line-height: 96px;
    text-align: center;
    margin: 24px auto;
    width: 90%;
    height: 96px;
    background: #19498c;
    border-radius: 48px;
    color: #8ca4c6;
    font-size: 32px;
  }
  .active {
    background: #227aee;
    color: #ffffff;
  }
}
</style>