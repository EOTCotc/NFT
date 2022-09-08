<template>
  <div class="chooseWay">
    <div class="header">
      <img src="@/assets/img/nftlogo1.png"
           alt />
    </div>
    <div class="main">
      <div class="img-p">
        <div>
          <img src="@/assets/img/equityItem1.png"
               alt />
          <section class="sec-p">
            <p>创世会权益NFT</p>
            <p :style="{ padding: '5px' }">总量：66</p>
            <p :style="{ color: '#fc7542ff' }">价格：2000 USDT</p>
            <button :style="{ color: '#000', backgroundColor: 'rgb(51, 60, 78)' }"
                    :disabled="true">
              售罄
            </button>
          </section>
        </div>
        <div>
          <img src="@/assets/img/equityItem2.png"
               alt />
          <section class="sec-p">
            <p>联合会权益NFT</p>
            <p :style="{ padding: '5px' }">总量：666</p>
            <p :style="{ color: '#fc7542ff' }">价格：500 USDT</p>
            <!-- <button
              :style="{ color: '#000', backgroundColor: 'rgb(51, 60, 78)' }"
              :disabled="true"
            >
              暂未开放
            </button> -->
            <button :style="{ color: '#000', backgroundColor: 'rgb(51, 60, 78)' }"
                    :disabled="true"
                    v-if="isNoBuy"
                    class="btn2">
              <div>
                <span :class="{ activecolor: isshowTime }">{{
                  isshowTime ? "抢购倒计时" : "三期售罄"
                }}</span>
                <van-count-down v-if="isshowTime"
                                :class="{ activecolor: isshowTime }"
                                ref="countDown"
                                @finish="finish"
                                :time="time" />
              </div>
            </button>
            <van-button v-else
                        :loading="loading_buy"
                        @click="buyNft_2()"
                        loading-text="购买中..."
                        :style="{ color: '#fff' }">
              {{ "购买" }}
            </van-button>
          </section>
        </div>
      </div>
    </div>

    <!-- 盲盒 -->
    <div class="mysteryBoxItem">
      <img src="@/assets/img/card/rhinoceros-grade.png"
           width="50%"
           alt />
      <div class="equityTitle">盲盒</div>
      <div class="ti1">
        总量：
        <span :style="{ color: '#479dff' }">100000</span>
      </div>
      <div class="ti1"
           :style="{ color: '#fc7542ff', marginTop: '15px' }">
        价格：
        <span>50 USDT</span> +
        <span>50U（EOTC）</span>
      </div>

      <!-- <div class="ti1"
           :style="{ color: '#fff', marginTop: '15px' }">
        <span class="sp">-</span>&nbsp;&nbsp;1&nbsp;&nbsp;
        <span class="sp">+</span>
      </div> -->
      <van-button :disabled="true"
                  :style="{ marginTop: '20px', width: '150px' }">暂未开放</van-button>
      <!-- <van-button :disabled="true"
                  type="info"
                  :style="{ marginTop: '20px', width: '150px' }">购买</van-button> -->
    </div>
    <van-dialog v-model="isContractCheckLoading"
                get-container="body"
                :showConfirmButton="false" />
  </div>
</template>

<script>
import loadingToast from '@/components/loading-toast'

import { Reconstruction_getTrxBalance, Reconstruction_verifyUSDT, nft_SendUSDT } from '@/utils/web3'

import Dayjs from 'dayjs'

import { BuyNft } from '@/api/newReqets'

export default {
  name: 'ChooseWay',
  inject: ['reload'],
  data() {
    return {
      isContractCheckLoading: false,
      card1: localStorage.getItem('residue_card1'),
      isNoBuy: false,
      loading_buy: false,
      time: new Date(Dayjs(new Date('2022-08-10 13:14'))).getTime() - Date.now(),
      isshowTime: true
    }
  },
  created() {
    console.log(this.time)
    if (this.time > 0) {
      this.isNoBuy = true
    } else {
      this.init_isNoBuy()
    }
  },
  methods: {
    finish() {
      this.isNoBuy = false
      this.isshowTime = false
    },
    buyNft_2() {
      let money = 500 //购买金额
      this.init_isNoBuy()
      setTimeout(async () => {
        if (this.isNoBuy) {
          this.$toast.info('第三期认购结束！')
          return false
        }
        this.$toast.warning(
          {
            component: loadingToast,
            props: {
              title: '等待区块打包确认，<br/>打包期间请不要关闭或刷新该页面'
            }
          },
          {
            icon: false,
            timeout: false
          }
        )
        this.loading_buy = true
        try {
          this.isContractCheckLoading = true
          await Reconstruction_getTrxBalance()
          await Reconstruction_verifyUSDT(money)
          const { data } = await nft_SendUSDT(money)
          console.log(data)
          this.$toast.clear()
          this.$toast.success('购买成功！')
          let num = parseFloat(localStorage.getItem('myamount'))
          localStorage.setItem('myamount', num - money)

          this.isContractCheckLoading = false
          this.loading_buy = false
        } catch (err) {
          console.log(err)
          this.$toast.clear()
          this.$toast.error(err)
          this.$toast.error('购买失败！')
          this.isContractCheckLoading = false
          this.loading_buy = false
        }
      }, 800)

      setTimeout(() => {
        this.init_isNoBuy()
      }, 500)
    },
    async init_isNoBuy() {
      const { data } = await BuyNft(2)
      localStorage.setItem('residue_card1', data.State)
      this.card1 = data.State
      console.log(this.card1)
      if (this.card1 === '-1' || data.State === '-1') {
        //卡牌数量不足
        this.isNoBuy = true
        this.isshowTime = false
        return true
      }
      return false
    }
  }
}
</script>

<style lang="less" scoped>
// .footer {
//   background-color: rgb(18, 25, 42);
//   // padding: 30px 0;
//   .footer-p {
//     color: #fff;
//     font-size: 0.4rem;
//     margin-left: 20px;
//   }
//   .img-icons {
//     img {
//       margin: 0 20px;
//     }
//   }
// }

.btn2 {
  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    line-height: 40px;
  }
  /deep/ .van-count-down {
    color: #000;
  }
  .activecolor {
    color: var(--main--color);
  }
}

.equityTitle {
  margin-top: 16px;
  font-size: 0.5rem;
}
.ti1 {
  font-size: 0.4rem;
}
.sp {
  width: 50px;
  height: 50px;
  border: 2px solid #237ff8;
  text-align: center;
  color: #fff;
  display: inline-block;
}

.mysteryBoxItem .equityBtn {
  padding: 13px 50px;
  padding-bottom: 0;
  background-color: #5d6c8a;
  margin-top: 20px;
  border-radius: 4px;
  opacity: 0.5;
  color: #fff;
  font-size: 0.3rem;
}

.buyBtn {
  padding: 13px 0px;
  background-color: #237ff8;
  margin-top: 20px;
  border-radius: 4px;
  color: #fff;
}

.mysteryBoxItem {
  margin-top: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
}

.chooseWay {
  width: 100vw;
  display: flex;
  position: relative;
  background-color: rgb(8, 11, 19);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.header {
  margin-top: 1em;
  width: 100vw;
  height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 5rem;
    height: 5rem;
  }
}

.main {
  color: aliceblue;
  padding: 0 25px;
  .img-p {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    gap: 20px;
    img {
      width: 100%;
      height: 500px;
    }
    .sec-p {
      font-size: 0.4rem;
      text-align: center;
      button {
        background-color: rgb(31, 92, 235);
        border: none;
        width: 100%;
        padding: 20px 0;
        margin-top: 15px;
        border-radius: 15px;
        height: 84px;
      }
    }
  }
}
</style>
