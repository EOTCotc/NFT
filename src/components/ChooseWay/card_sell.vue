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
        <div class="img"><img :src="img"
               alt=""></div>
        <div class="text">
          <p class="title">{{query.title}}</p>
          <p class="txt">{{brief}}</p>
        </div>
      </div>
      <!-- 设置价格 -->
      <div class="price">
        <div class="title">设置价格</div>
        <div class="input">
          <van-field v-model="price"
                     :border="false"
                     type="digit"
                     placeholder="请输入价格"
                     maxlength="30" />
          <span>USDT</span>
        </div>
      </div>
      <!-- 其他费用 -->
      <div class="otherPrice">
        <div class="title">其他费用</div>
        <div class="cost">
          <p class="l">平台服务费</p>
          <p class="r">9%</p>
        </div>
        <div class="cost">
          <p class="l">创作者版权税</p>
          <p class="r">3%</p>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <div class="footer">
      <div class="btn"
           :class="price>0?'active':''"
           @click="sureHandler">
        <p>发布</p>
      </div>
    </div>
  </div>
</template>

<script>
import { cardList, allCard, allCards } from '@/utils/options'
export default {
  data() {
    return {
      price: '',
      query: '',
      brief: '',
      img: '',
      cardList,
      allCard,
      allCards
    }
  },
  created() {
    this.query = this.$route.query
    if (this.query.url == 'hvae_card') {
      // 权益卡牌
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
    } else if (this.query.url == 'rank_card') {
      // 等级卡牌
      let Activate = this.query.Activate
      this.brief = this.allCard[Activate - 1].text
      this.query.state ? (this.img = this.allCards[Activate - 1].image) : (this.img = this.allCard[Activate - 1].image)
    }
  },
  methods: {
    onClickLeft() {
      this.$nextTick(() => {
        this.$router.push({
          name: 'card_details',
          query: this.query
        })
      })
    },
    sureHandler() {
      if (this.price > 0) {
        this.$toast('发布成功')
        this.price = ''
        this.$nextTick(() => {
          this.$router.push({
            name: 'card_details',
            query: { ...this.query, order: true }
          })
        })
      }
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
    padding-bottom: 110px;
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
    .title {
      color: #fff;
      font-size: 34px;
      margin-bottom: 20px;
    }
    .input {
      position: relative;
      .van-field {
        height: 88px;
        border-radius: 8px 8px 8px 8px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: transparent;
        color: #fff;
      }
      span {
        position: absolute;
        right: 22px;
        top: 22px;
        color: #ffffff;
        font-size: 28px;
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