<template>
  <div class="service">
    <!-- 头部 -->
    <div class="top">
      <van-nav-bar title="手续费领取"
                   left-text="数据上传"
                   z-index='99'
                   placeholder
                   fixed
                   :border="false"
                   @click-left="onClickLeft" />
    </div>

    <!-- 内容 -->
    <div class="content">
      <div class="list"
           v-for="(item,index) in allData"
           :key="index">
        <div class="title">
          <p class="l">{{item.title}}(USDT)</p>
          <p class="r">
            <van-button round
                        :disabled="!item.receive"
                        @click="success(index)"
                        color="#227AEE"
                        type="primary">领取</van-button>
          </p>
        </div>
        <div class="amount">{{parseFloat(item.receive).toFixed(2)}}</div>
        <!-- <div class="bottom">
          <p class="l">已领取手续费分红</p>
          <p class="r">{{parseFloat(item.already).toFixed(2)}} USDT</p>
        </div> -->
      </div>
    </div>

  </div>
</template>

<script>
import { Toast } from 'vant'
import { daoWithdraws, daoAvailables, poolFeeWithdraws, technicalSupportFees, technologyFeeWithdraws, capitalPoolFees } from '@/utils/web3'
export default {
  data() {
    return {
      allData: [
        { title: '技术支持分红', receive: 0, already: 0 },
        { title: '资金池分红', receive: 0, already: 0 },
        { title: 'DAO资金', receive: 0, already: 0 }
      ]
      // receive: [] //待领取
      // already: [], //已领取
    }
  },
  created() {
    setTimeout(() => {
      this.getFund()
    }, 500)
  },
  methods: {
    async getFund() {
      // 技术支持待领取
      await technicalSupportFees().then((res) => (this.allData[0].receive = parseInt(res._hex, 16) / 1000000))
      // 资金池待领取
      await capitalPoolFees().then((res) => (this.allData[1].receive = parseInt(res._hex, 16) / 1000000))
      // DAO资金待领取
      await daoAvailables().then((res) => (this.allData[2].receive = parseInt(res._hex, 16) / 1000000))
    },
    async success(i) {
      if (i == 0) {
        await technologyFeeWithdraws().then(() => {
          this.allData[i].receive = 0
        })
      } else if (i == 1) {
        await poolFeeWithdraws().then(() => {
          this.allData[i].receive = 0
        })
      } else if (i == 2) {
        await daoWithdraws().then(() => {
          this.allData[i].receive = 0
        })
      }
    },
    onClickLeft() {
      this.$router.back()
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
    margin-top: 68px;
    color: #fff;
    .list {
      width: 92vw;
      margin: 20px auto;
      background: #1b2333;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 40px;
      box-sizing: border-box;
      border-radius: 20px;
      .title {
        font-size: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        letter-spacing: 2px;
        .van-button {
          width: 180px;
          height: 74px;
          font-size: 32px;
          letter-spacing: 2px;
        }
      }
      .amount {
        font-size: 48px;
        margin: 30px 0;
        color: #00b87a;
      }
      .bottom {
        font-size: 28px;
        display: flex;
        justify-content: space-between;
        .l {
          color: #858992;
        }
      }
    }
  }
}
</style>