<template>
  <div class="cardDetails">
    <!-- 头部 -->
    <div key="2"
         class="top">
      <van-nav-bar title="卡片详情"
                   left-arrow
                   z-index='99'
                   placeholder
                   fixed
                   :border="false"
                   @click-left="onClickLeft" />
    </div>
    <!-- 卡片展示 -->
    <div class="cardShow">
      <div class="cardwarp">
        <div class="king">
          <img :src="img">
          <div class="bingBtn"
               v-if="btnShow">
            <van-button :icon="toggle4?'':'plus'"
                        type="primary">{{toggle4?'ada454...DDF6':'绑定'}}</van-button>
          </div>
        </div>
        <div class="arena">
          <img src="@/assets/img/cardDetails/aureole.png"
               alt="">
        </div>
        <div class="paddy">
          <p>{{query.title}}</p>
        </div>
      </div>
    </div>
    <!-- 卡牌售价 -->
    <div class="price"
         v-if="price">
      <p class="title">售价</p>
      <p class="cost"><img src="@/assets/img/logo-removebg-preview.png"
             alt="">{{price}}</p>
    </div>
    <!-- 作品简介 -->
    <div class="intro">
      <p class="title">作品简介</p>
      <p class="content">
        {{brief}}
      </p>
    </div>
    <!-- 作品信息 -->
    <div class="msg"
         :class="show?'reveal':''">
      <p class="msgtitle">作品信息</p>
      <ul class="list">
        <li>
          <p>拥有者</p>
          <p>{{owner|ellipsis}}</p>
        </li>
        <li>
          <p>铸造平台</p>
          <p>TRON</p>
        </li>
        <li>
          <p>TokenID</p>
          <p>#{{query.id.padStart(6, 0)}}</p>
        </li>
        <li>
          <p>合约地址</p>
          <p>{{address|ellipsis}}</p>
        </li>
      </ul>
    </div>
    <!-- 页脚 -->
    <div class="footer"
         v-if="show">
      <div v-show="toggle"
           class="btn"
           @click="buyHandler">
        <p>购买</p>
      </div>
      <div v-show="toggle1"
           @click="receiveSuccessHandler"
           class="btn">
        <p>领取</p>
      </div>
      <!-- 领取后显示 -->
      <div v-if="toggle2"
           class="togglebtn">
        <div @click="unitybindHandler"
             class="btn">绑定</div>
        <div @click="sellHandler"
             class="btn">出售</div>
      </div>
      <div v-if="toggle4"
           @click="unbindHandler"
           class="unbindBtn">
        <p>解绑</p>
      </div>
    </div>

  </div>
</template>
<script>
import { Toast, Dialog } from 'vant'
import { contract, cardList, allCard, allCards } from '@/utils/options'
export default {
  data() {
    return {
      contract,
      cardList,
      allCard,
      allCards,
      query: '',
      owner: '',
      address: '',
      img: '',
      brief: '',
      price: '',
      off: false,
      show: false,
      toggle: false, //购买
      toggle1: false, //领取
      toggle2: false, //绑定、出售
      // toggle3: false, //绑定
      toggle4: false, //解绑
      btnShow: false //上方按钮
    }
  },
  created() {
    this.query = this.$route.query
    console.log(this.query)
    if (this.query.url == 'hvae_card') {
      this.toggle2 = true
      this.btnShow = true
      // 权益卡牌
      let Activate = this.query.Activate
      this.address = this.contract[1][Activate - 1]
      this.owner = localStorage.getItem('myaddress')
      if (['1', '2'].includes(this.query.Activate)) {
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
    } else if (this.query.url == 'rank_card') {
      this.toggle2 = true
      this.btnShow = true
      // 等级卡牌
      let Activate = this.query.Activate
      this.address = this.contract[0][Activate - 1]
      this.owner = localStorage.getItem('myaddress')
      this.brief = this.allCard[Activate - 1].text
      this.query.state ? (this.img = this.allCards[Activate - 1].image) : (this.img = this.allCard[Activate - 1].image)
    }

    this.query.order ? (this.show = false) : (this.show = true)
  },
  methods: {
    // 点击购买卡牌
    buyHandler() {
      console.log('购买该卡牌')
      // 拉起钱包，购买成功后
      this.toggle = false
      this.toggle1 = true
      this.toggle2 = false
      // this.toggle3 = false
      this.toggle4 = false
      this.btnShow = false
    },
    // 点击解绑卡牌
    unbindHandler() {
      let _this = this
      Dialog.confirm({
        message: '解绑后权益卡相关权益将停止' + `</br>` + '确定解绑此权益卡？'
      })
        .then(() => {
          _this.toggle2 = true
          _this.toggle4 = false
          Toast({ message: '解绑成功', duration: 500 })
        })
        .catch(() => {
          // on cancel
          Toast({ message: '取消解绑', duration: 500 })
        })
    },
    // 点击绑定卡牌
    unitybindHandler() {
      let _this = this
      Dialog.confirm({
        title: '绑定',
        message: '绑定之后不可进行出售操作'
      })
        .then(() => {
          _this.toggle2 = false
          _this.toggle4 = true
          Toast({ message: '绑定成功', duration: 500 })
        })
        .catch(() => {
          // on cancel
          Toast({ message: '取消绑定', duration: 500 })
        })
    },
    // 点击出售跳转新页面
    sellHandler() {
      this.$router.replace({
        name: 'card_sell',
        query: this.query
      })
    },
    // 点击领取卡牌
    receiveSuccessHandler() {
      Toast({ message: '领取成功', duration: 500 })
      setTimeout(() => {
        this.toggle1 = false
        this.toggle2 = true
        this.btnShow = true
      }, 500)
    },
    // 返回上一级
    onClickLeft() {
      this.$router.push({
        name: this.query.url
      })
    }
  },
  filters: {
    ellipsis(value) {
      let len = value.length
      if (!value) return ''
      if (value.length > 20) {
        return value.substring(0, 10) + '...' + value.substring(len - 10, len)
      }
      return value
    }
  }
}
</script>
<style lang="less" scoped>
.cardDetails,
html {
  margin-bottom: 50px;
  background: linear-gradient(174deg, #437fff 0%, #172d5a 0%, #06070a 100%);
  // 头部
  .top {
    height: 49px;
    /deep/ .van-nav-bar__content {
      background-color: #1b2945;
    }

    /deep/ .van-icon {
      color: #fff;
    }
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
  }
  // 卡片展示
  .cardShow {
    background: url('../../assets/img/cardDetails/bglight.png') no-repeat center top;
    background-size: 728px, 422px;
    .cardwarp {
      .king {
        width: 300px;
        margin: 0 auto;
        position: relative;
        /deep/ .van-button--primary {
          color: #3e2819;
          font-family: PingFang SC-Regular, PingFang SC;
          background-color: #dfc278;
          border: none;
        }
        /deep/ .van-button {
          padding: 0 20px;
          // width: 178px;
          height: 60px;
          font-size: 28px;
          border-radius: 30px;
        }
        .bingBtn {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .king img {
        width: 300px;
        height: 436px;
        margin-top: 111px;
        vertical-align: middle;
      }
      .arena {
        width: 411px;
        margin: 40px auto;
        img {
          text-align: left;
          width: 411px;
          vertical-align: middle;
        }
      }
      .paddy {
        width: 452px;
        height: 59px;
        margin: 0 auto;
        line-height: 59px;
        background: url('@/assets/img/cardDetails/paddy.png') no-repeat;
        background-size: 453px, 58px;
        text-align: center;
        transform: translate(-0px, -80px);
        p {
          color: #fff;
          font-size: 36px;
        }
      }
    }
  }
  //作品简介,卡牌售价
  .intro,
  .price {
    width: 690px;
    // height: 281px;
    background: #1b2333;
    margin: 0 auto;
    margin-bottom: 30px;
    border-radius: 20px;
    padding: 30px;
    box-sizing: border-box;
    .title {
      font-size: 32px;
      color: #fff;
      margin-bottom: 30px;
    }
    .cost {
      font-size: 40px;
      color: #fff;
      display: flex;
      align-items: center;
      img {
        margin-right: 20px;
        width: 44px;
        height: 44px;
      }
    }
    .content {
      width: 630px;
      // height: 136px;
      font-size: 28px;
      font-family: PingFang SC-Light, PingFang SC;
      font-weight: 300;
      color: #858992;
      line-height: 44px;
      text-align: justify;
    }
  }
  // 作品信息
  .msg {
    width: 690px;
    background: #1b2333;
    margin: 30px auto;
    padding: 30px;
    padding-bottom: 0px;
    box-sizing: border-box;
    border-radius: 20px;
    overflow: hidden;
    .msgtitle {
      width: 128px;
      height: 45px;
      margin-bottom: 20px;
      font-size: 32px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 45px;
    }
    .list {
      margin-top: 30px;
      overflow: hidden;
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        &:last-child(1) {
          margin-bottom: 0;
        }
        p {
          &:nth-child(1) {
            font-size: 28px;
            font-family: PingFang SC-Light, PingFang SC;
            font-weight: 300;
            color: #858992;
          }
          &:nth-child(2) {
            font-size: 28px;
            font-family: PingFang SC-Light, PingFang SC;
            font-weight: 300;
            color: #ffffff;
          }
        }
      }
    }
  }
  .reveal {
    margin-bottom: 2rem;
  }
  // 页脚
  .footer {
    width: 100%;
    height: 144px;
    background: #11192b;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    .btn,
    .boundBtn,
    .unbindBtn {
      width: 690px;
      height: 96px;
      margin: 24px auto;
      background: #227aee;
      border-radius: 48px;
      border: 4px solid #237ff8;
      p {
        text-align: center;
        line-height: 96px;
        color: #fff;
        font-size: 32px;
      }
    }
    .boundBtn,
    .unbindBtn {
      background-color: #1b2333 !important;
      border: none;
    }

    .togglebtn {
      width: 690px;
      margin: 0 auto;
      display: flex;
      .btn {
        width: 330px;
        height: 96px;
        border-radius: 48px;
        text-align: center;
        line-height: 96px;
        font-size: 32px;
        color: #fff;
        &:nth-child(1) {
          background: #1b2333;
          border: none;
          margin-right: 30px;
        }
        &:nth-child(2) {
          background: #227aee;
        }
      }
    }
  }
}
</style>