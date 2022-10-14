<template>
  <div class="content">
    <header class="header">
      <p class="top">
        <span>
          钱包资产
          <img src="@/assets/img/walletChangeIcon.png"
               v-if="UID"
               @click="changeVal" />
        </span>
        <span class="sp1"
              v-if="UID">UID:{{UID}}</span>
        <span class="sp1"
              v-else
              @click="goUrl(1)">连接钱包</span>
      </p>
      <div class="main">
        <p>
          <span>USDT</span>
          <span>{{ USDT }}</span>
        </p>
        <p>
          <span>EOTC</span>
          <span>{{ EOTC }}</span>
        </p>

        <!-- <p v-show="!changeValue">
          <span>USDT</span>
          <span>{{ nft_USDT }}</span>
        </p>
        <p v-show="!changeValue">
          <span>EOTC</span>
          <span>{{ nft_EOTC }}</span>
        </p> -->
      </div>
    </header>
    <div class="main-p">
      <div class="title"
           @click="goUrl(2)">
        <div class="h">
          <div class="l">
            <img src="../../assets/img/rightMenuIcon/whiteListIcon.png">
            白名单
          </div>
          <div class="r">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>

      <div class="title"
           @click="goUrl(3)">
        <div class="h">
          <div class="l">
            <img src="../../assets/img/rightMenuIcon/blindBoxIcon.png">
            盲盒
          </div>
          <div class="r">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>

      <div class="title"
           @click="goUrl(4)">
        <div class="h">
          <div class="l">
            <img src="../../assets/img/rightMenuIcon/bazaarIcon.png">
            市场
          </div>
          <div class="r">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>

      <!-- <div class="title"
           @click="goUrl(5)">
        <div class="h">
          <div class="l">
            <img src="../../assets/img/rightMenuIcon/orderIcon.png">
            订单
          </div>
          <div class="r">
            <van-icon name="arrow" />
          </div>
        </div>
      </div> -->

      <div class="title"
           @click="show=!show">
        <div class="h">
          <div class="l">
            <img src="../../assets/img/rightMenuIcon/nftCardIcon.png">
            我的NFT
          </div>
          <div class="r">
            <van-icon name="arrow-down"
                      v-if="show" />
            <van-icon name="arrow"
                      v-else />
          </div>
        </div>
        <div class="item"
             v-show="show">
          <p @click="goUrl(6.1)">
            权益卡牌
            <van-icon name="arrow" />
          </p>
          <p @click="goUrl(6.2)">
            等级卡牌
            <van-icon name="arrow" />
          </p>
          <p @click="goUrl(6.3)">
            领取手续费
            <van-icon name="arrow" />
          </p>
        </div>
      </div>

      <div class="title"
           @click="goUrl(7)">
        <div class="h">
          <div class="l">
            <img src="../../assets/img/rightMenuIcon/guideIcon.png">
            合成
          </div>
          <div class="r">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>

      <div class="title"
           @click="goUrl(8)">
        <div class="h">
          <div class="l">
            <img src="../../assets/img/rightMenuIcon/orderIcon.png">
            新手指引
          </div>
          <div class="r">
            <van-icon name="arrow" />
          </div>
        </div>
      </div>

    </div>

    <van-popup v-model="changeValue"
               round
               lock-scroll
               position="bottom"
               class="changeWallet">
      <div class="title">
        <div class="l"
             @click="undeWallet">取消</div>
        <div class="c">选择钱包</div>
        <div class="r"
             @click="sureWallet">确定</div>
      </div>
      <div class="lists">
        <div class="list"
             @click="changeAct=item.id"
             :class="changeAct==item.id ? 'active' :''"
             v-for="item in walletList"
             :key="item.id">
          <p class="name">{{ item.name }}</p>
          <p class="num">{{ item.number }}</p>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { UserInfo } from '@/utils/web3'
export default {
  name: 'Nav_right',
  data() {
    return {
      activeNames: '1',
      show: false,
      USDT: '0.00',
      EOTC: '0.00',
      // nft_USDT: '0.00',
      // nft_EOTC: '0.00',
      UID: '000000',
      changeValue: false,
      walletList: [
        { id: 1, name: 'ETH', number: '0x3929fe0…7cE24424' },
        { id: 2, name: 'DA', number: '0x389W0…SASDAW45' },
        { id: 3, name: 'TAW', number: '0x345e0S…7cE24424' },
        { id: 4, name: 'aw', number: '0x3929fe0…7cE25478' }
      ],
      active: 1,
      changeAct: 0
    }
  },
  async created() {
    const result = UserInfo()
    this.UID = result.uid
    this.USDT = result.myamount
    this.EOTC = result.eotcAmount
    this.nft_USDT = result.wallet_NFTusdt
    this.nft_EOTC = result.wallet_NFTeotc
    this.changeAct = this.active
  },
  methods: {
    goUrl(i) {
      console.log(i)
      if (i == 2) this.$router.push({ name: 'CurrencyTrading' })
      if (i == 3) this.$router.push({ name: 'buy_blindbox' })
      if (i == 4) this.$router.push({ name: 'marketNFT' })
      // if (i == 5) this.$router.push({ name: 'order_all' })
      if (i == 6.1) this.$router.push({ name: 'hvae_card' })
      if (i == 6.2) this.$router.push({ name: 'rank_card' })
      if (i == 6.3) this.$router.push({ name: 'get_service' })
      if (i == 7) this.$router.push({ name: 'synthesis_page' })
      if (i == 8) location.href = 'https://eotc.im/html/guide/guide.html'
      // if (i == 7 || i == 5 || i == 4) this.$toast('暂未开放')
    },
    changeVal() {
      // this.changeAct = this.active
      // this.changeValue = true
    },
    undeWallet() {
      this.changeValue = false
      setTimeout(() => (this.changeAct = this.active), 1000)
    },
    sureWallet() {
      this.active = this.changeAct
      this.changeValue = false
    }
  }
}
</script>

<style lang="less" scoped>
.main-p {
  overflow-y: auto;
  margin-top: 30px;
  // margin-bottom: 1em;
  // .item {
  //   margin-left: 90px;
  //   p {
  //     height: 96px;
  //     line-height: 96px;
  //     font-size: 30px;
  //   }
  // }
  /deep/ .van-collapse-item__content {
    padding: 0;
  }
  // /deep/ .van-collapse-item {
  //   // margin: 20px 0;
  //   margin-bottom: 30px;
  // }
  /deep/ .van-cell__title {
    font-size: 32px;
  }

  .van-collapse-item {
    margin-bottom: 10px;
  }

  .title {
    margin-bottom: 20px;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    font-size: 32px;
    .h {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .l {
        display: flex;
        align-items: center;
        img {
          margin-right: 15px;
          width: 50px;
          height: 50px;
        }
      }
    }
    .item {
      p {
        // font-size: 30px;
        margin-left: 66px;
        margin-top: 60px;
        overflow: hidden;
        .van-icon {
          float: right;
        }
      }
    }
  }
}

.content {
  padding-top: 80px;
  width: 100vw;
  display: flex;
  position: relative;
  background-color: rgb(8, 11, 19);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  color: #fff;
  overflow-y: auto;
  .van-collapse {
    overflow-y: auto;
  }
  .header {
    margin: 50px 25px 0 25px;
    background: linear-gradient(to right, #2a86ff, #54dcff);
    font-size: 0.4rem;
    border-radius: 15px;
    padding: 25px;
    .top {
      font-size: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 30px;
        height: 30px;
      }
      .sp1 {
        border: 1px solid #fff;
        border-radius: 30px;
        padding: 10px 20px;
        font-size: 0.4rem;
      }
    }
    .main {
      margin-top: 0.6rem;
      display: flex;
      overflow: hidden;
      p {
        flex: 1;
        display: flex;
        flex-direction: column;
        font-weight: 700;
      }
    }
  }
  ul {
    margin-top: 1rem;
  }
  /deep/ .van-icon__image {
    width: 50px;
    height: 50px;
  }
  /deep/ .van-cell--clickable {
    background-color: #000;
    color: #fff;
  }
  /deep/ .van-collapse-item__content {
    background-color: #000;
    color: #fff;
  }
  .vant {
    margin-top: 1rem;
    overflow-y: auto;
  }
  /deep/ .van-hairline--top-bottom::after {
    border: none !important;
  }
  li {
    line-height: 1rem;
    width: 100%;
    .towmenu {
      margin-left: 68px;
      font-size: 0.45rem;
    }
    .onemenu {
      list-style: none;
      font-size: 0.45rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 25px;
      box-sizing: border-box;
      div {
        display: flex;
        align-items: center;
      }
      img {
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 15px;
      }
      .open,
      .close {
        display: block;
        width: 10px;
        height: 10px;
        border: 6px solid #666;
        border-top: none;
        border-left: none;
      }
      .open {
        transform: rotate(45deg);
      }
      .close {
        transform: rotate(-45deg);
      }
    }
  }
}

.changeWallet {
  border: 1px solid #707070;
  letter-spacing: 2px;
  box-sizing: border-box;
  .title {
    margin: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #333333;
    font-size: 28px;
    .l {
      color: #666666;
    }
    .c {
      font-size: 34px;
      font-weight: bold;
    }
    .r {
      color: #000;
    }
  }
  .lists {
    margin: 20px 30px;
    margin-top: 40px;
    color: #333333;
    font-size: 32px;
    .list {
      box-sizing: border-box;
      height: 130px;
      margin-bottom: 16px;
      border-radius: 8px 8px 8px 8px;
      // border: 2px solid #237ff8;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 16px 30px;
      background: #f3f4f5;
      .num {
        color: #333333;
        opacity: 0.5;
        font-size: 26px;
      }
    }
    .active {
      border: 4px solid #237ff8;
    }
  }
}
</style>
