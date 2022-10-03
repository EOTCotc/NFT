<template>
  <div class="orderpage">
    <div class="top">
      <van-nav-bar title="订单提交"
                   :border="false"
                   fixed
                   placeholder
                   z-index="99"
                   left-arrow
                   @click-left="onClickLeft" />
    </div>
    <div class="orderwarp">
      <div class="ordercontent">
        <div class="left">
          <img src="../../assets/img/blindbox/openbox1.png"
               alt="" />
        </div>
        <div class="right">
          <p>盲盒</p>
          <p>1-5级犀牛卡牌随机开</p>
          <p>{{moneyU}}USDT+ {{ moneyE }}EOTC</p>
        </div>
      </div>
      <div class="buynum">
        <p>购买数量</p>
        <div>
          <van-field v-model="inputNum"
                     oninput="if (value < 0) value = '';if(value>10000)value=10000;value=parseInt(value);if(isNaN(value)) value=''"
                     center
                     type="number"
                     class="select"
                     @input="change"
                     clearable
                     placeholder="点击此处输入购买数量">
            <template #button>
              <van-button size="small"
                          @click="buynumHandler"
                          type="primary">点击此处选择购买数量</van-button>
            </template>
          </van-field>

        </div>
      </div>
      <div class="property">
        <div class="title">
          <span>支付方式</span>
          <van-icon name="replay"
                    @click="refresh" />
        </div>
        <div class="content">
          <div class="l"><img src="../../assets/img/cost.png"></div>
          <div class="r">
            <p>{{text}}</p>
            <p><span>{{appU}}USDT</span><span>{{appE}}EOTC</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="payBtn">
      <div class="left">{{moneyU}}USDT+ {{ moneyE }}EOTC</div>
      <div @click="payHandler"
           class="right">确定支付</div>
    </div>
    <!-- 订单遮罩 -->
    <div v-if="maskFlag"
         class="maskorder">
      <div class="moreselect">
        <div class="ordertop">
          <p @click="cancelOrderHandler">取消</p>
          <p>选择购买数量</p>
          <p @click="sureHandler">确定</p>
        </div>
        <ul class="orderlist">
          <li v-for="(item, index) in orderlistData"
              @click="orderitemHandler(item, index)"
              :class="currentIndex == index ? 'selectActive' : ''"
              :key="index">
            <span>{{ item.num }}个</span>
            <span>{{ item.EOTC }}USDT+{{ item.EOTC }}EOTC</span>
          </li>
          <li>
            <!-- <input @click="inputChangeHandler"
                   placeholder="点击此处输入购买数量" /> -->
            <!-- <input type="number"
                   oninput="if (value < 0) value = 0;if(value>10000)value=10000"
                   @input="inputChangeHandler"
                   v-model.number="buynum"
                   placeholder="请输入购买数量" /> -->
          </li>
        </ul>
      </div>
    </div>

    <!-- 购买确认 -->
    <!-- <van-popup class="shop"
               round
               :close-on-click-overlay="false"
               v-model="show">
      <div class="title">选择支付方式</div>
      <div class="content">
        <div :class="active==1?'active' :''"
             @click="active=1">
          <p>APP资产</p>
          <p><span>{{appU}} USDT</span><span>{{appE}} EOTC</span></p>
        </div>
        <div :class="active==2?'active' :''"
             @click="active=2">
          <p>钱包资产</p>
          <p><span>{{walletU}} USDT</span><span>{{walletE}} EOTC</span></p>
        </div>
      </div>
      <div class="btns">
        <van-button plain
                    round
                    @click="cancel"
                    color="#999999"
                    hairline
                    type="primary">取消支付</van-button>
        <van-button round
                    @click="sure"
                    type="info">确定支付</van-button>
      </div>
    </van-popup> -->
  </div>
</template>
<script>
import { BuyBlindBox } from '@/api/newReqets'
import { loadweb3, userBaseMes } from '@/utils/web3'
import { Toast } from 'vant'
export default {
  data() {
    return {
      show: false,
      maskFlag: false, //遮罩
      costnum: '',
      buynum: '', //遮罩input
      disabledFlag: true,
      inputNum: '',
      activeIndex: '',
      currentIndex: -1, //当前高亮的index
      moneyE: '0', //EOTC显示金额
      moneyU: '0', //USDT显示金额
      Prepaid: '', //未显示金额
      sumMoeny: 0, //接收用户输入的值
      typearr: [], //标识
      // 定义遮罩数据
      orderlistData: [
        {
          id: Math.floor(Math.random() * 100),
          num: '1',
          EOTC: '50'
        },
        {
          id: Math.floor(Math.random() * 100),
          num: '3',
          EOTC: '100'
        },
        {
          id: Math.floor(Math.random() * 100),
          num: '7',
          EOTC: '200'
        },
        {
          id: Math.floor(Math.random() * 100),
          num: '20',
          EOTC: '500'
        },
        {
          id: Math.floor(Math.random() * 100),
          num: '50',
          EOTC: '1000'
        }
      ],
      active: 0, //选择支付方式
      appU: 0.0, //APP资产USDT
      appE: 0.0, //APP资产EOTC
      text: 'APP资产',
      i: 0
    }
  },
  created() {
    loadweb3(userBaseMes)
    this.appU = localStorage.getItem('usdt_ye')
    this.appE = localStorage.getItem('eotc_stake')
  },
  methods: {
    // 确定购买
    payHandler() {
      if (this.inputNum == '') {
        this.$toast('请选择购买数量')
      } else if (this.inputNum == 0) {
        this.$toast('请输入正确的购买数量')
      } else {
        // this.show = true
        if (this.appU * 1 < this.moneyU * 1 || this.appE * 1 < this.moneyE * 1) {
          //跳转充值
          location.href = 'https://trx.eotc.im/#/recharge'
        } else {
          // 购买
          BuyBlindBox(this.moneyU, this.moneyE).then((res) => {
            console.log(res)
            // res.data.State > 0 ? this.$toast('支付成功') : this.$toast('支付失败')
            if (res.data.State > 0) {
              this.$toast('支付成功')
              this.inputNum = ''
              localStorage.setItem('usdt_ye', this.appU * 1 - this.moneyU * 1)
              localStorage.setItem('eotc_stake', this.appE * 1 - this.moneyE * 1)
              this.appU = localStorage.getItem('usdt_ye')
              this.appE = localStorage.getItem('eotc_stake')
              this.moneyE = 0
              this.moneyU = 0
            } else {
              this.$toast.warning('支付失败')
            }
          })
        }
      }
    },
    // 选择购买数量
    orderitemHandler(item, index) {
      this.currentIndex = index
      this.i = item.EOTC
      // this.moneyE = item.EOTC
      // this.moneyU = item.EOTC
      // this.Prepaid = item.EOTC + 'USDT' + '+' + item.EOTC
      this.buynum = item.num
      this.typearr.push(item.id)
    },
    inputChangeHandler() {
      this.currentIndex = -1
      this.maskFlag = false
      this.disabledFlag = false
    },
    // 点击确定
    sureHandler() {
      this.buynum = parseInt(this.buynum)
      console.log(this.buynum)
      this.inputNum = this.buynum
      this.costnum = this.buynum
      this.activeIndex = this.currentIndex
      this.maskFlag = false
      this.moneyE = this.i
      this.moneyU = this.i

      if (this.appU * 1 < this.moneyU * 1 || this.appE * 1 < this.moneyE * 1) {
        this.text = 'APP资产(余额不足)'
      }
    },
    onClickLeft() {
      this.$router.back()
    },
    change() {
      this.currentIndex = -1
      let baseval = 50 //基础值
      let usernum = this.inputNum
      let sum
      usernum < 3
        ? (sum = (usernum - 1) * baseval + 50)
        : usernum < 7
        ? (sum = (usernum - 3) * baseval + 100)
        : usernum < 20
        ? (sum = (usernum - 7) * (baseval - 10) + 200)
        : usernum < 50
        ? (sum = (usernum - 20) * (baseval - 20) + 500)
        : (sum = (usernum - 50) * (baseval - 30) + 1000)

      this.moneyE = sum
      this.moneyU = sum

      if (this.appU * 1 < this.moneyU * 1 || this.appE * 1 < this.moneyE * 1) {
        this.text = 'APP资产(余额不足)'
      } else {
        this.text = 'APP资产'
      }
    },
    // 显示遮罩
    buynumHandler() {
      if (this.disabledFlag) {
        this.maskFlag = true
      }
    },
    // 取消处理
    cancelOrderHandler() {
      this.inputNum = ''
      this.moneyE = 0
      this.moneyU = 0
      this.maskFlag = false
      this.buynum = this.costnum
      this.currentIndex = -1
      this.text = 'APP资产'
    },
    // // 取消支付
    // cancel() {
    //   this.show = false
    //   this.active = 0
    // },
    // 数据刷新
    refresh() {
      loadweb3(userBaseMes)
      this.appU = localStorage.getItem('usdt_ye')
      this.appE = localStorage.getItem('eotc_stake')
      Toast.loading({
        message: '刷新中...',
        forbidClick: true
      })
    }
  }
}
</script>
<style lang="less" scoped>
.orderpage {
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
  // 订单
  .orderwarp {
    width: 690px;
    margin: 70px auto 0;
    box-sizing: border-box;
    .ordercontent {
      display: flex;
      align-items: center;
      .left {
        width: 180px;
        height: 260px;
        border: 1px solid #666;
        border-radius: 16px;
        margin-right: 30px;
        background: #080b13;
        display: grid;
        place-items: center;
        background: url('../../assets/img/blindbox/bg.png') no-repeat center center;
        background-size: 390px 260px;
        img {
          width: 100px;
          height: 84px;
          vertical-align: middle;
        }
      }
      .right {
        p {
          &:nth-child(1) {
            color: #fff;
            font-size: 36px;
            margin-bottom: 20px;
          }
          &:nth-child(2) {
            color: #b0adb5;
            font-size: 28px;
            margin-bottom: 68px;
          }
          &:nth-child(3) {
            color: #fc7542;
            font-size: 28px;
          }
        }
      }
    }
    .buynum {
      p {
        color: #fff;
        font-size: 28px;
        margin: 40px 0 30px;
      }
      // .select {
      //   outline: none;
      //   width: 690px;
      //   height: 96px;
      //   border: 1px solid #666;
      //   background-color: #0f142b;
      //   line-height: 96px;
      //   color: #b0adb5;
      //   font-size: 28px;
      //   padding-left: 34px;
      //   box-sizing: border-box;
      //   border-radius: 16px;
      // }
      .select {
        background-color: #0f142b;
        border: 1px solid #666;
        border-radius: 16px;
      }

      /deep/ .van-field__control::-webkit-input-placeholder {
        color: #666666;
      }

      /deep/ input {
        color: #fff;
      }
    }

    .property {
      margin-top: 1em;
      color: #fff;
      background: #1b2333;
      border-radius: 20px;
      font-size: 32px;
      padding: 30px;
      .title {
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .content {
        display: flex;
        align-items: center;
        .l {
          width: 60px;
          height: 60px;
          margin-right: 30px;
          img {
            width: 100%;
          }
        }
        .r {
          p:nth-of-type(2) {
            margin-top: 14px;
            font-size: 28px;
            color: #858890;
            span {
              padding-right: 60px;
            }
          }
        }
      }
    }
  }
  // 支付
  .payBtn {
    width: 100%;
    height: 120px;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    div {
      color: #fff;
      font-size: 32px;
      line-height: 120px;
    }
    div.left {
      flex: 1;
      background: #11192b;
      padding-left: 30px;
      box-sizing: border-box;
    }
    div.right {
      width: 290px;
      background: #00b87a;
      text-align: center;
    }
  }
  // 遮罩
  .maskorder {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 111;
    background-color: rgba(0, 0, 0, 0.5);
    .moreselect {
      height: 10rem;
      width: 100%;
      background-color: #fff;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      position: fixed;
      bottom: 0;
      left: 0;
      .ordertop {
        display: flex;
        align-items: center;
        height: 92px;
        padding: 0 40px;
        box-sizing: border-box;
        border-bottom: 1px solid #f4f4f4;
        p {
          &:nth-child(1) {
            width: 60px;
            height: 36px;
            font-size: 28px;
            color: #666666;
          }
          &:nth-child(2) {
            flex: 1;
            text-align: center;
            font-size: 34px;
            font-weight: bold;
            color: #333333;
          }
          &:nth-child(3) {
            width: 60px;
            height: 36px;
            font-size: 28px;
            color: #1b2945;
          }
        }
      }
      .orderlist {
        margin-top: 40px;
        width: 100%;
        box-sizing: border-box;
        li {
          height: 96px;
          line-height: 96px;
          margin-bottom: 8px;
          color: #999;
          text-align: center;
          font-size: 30px;
          box-sizing: border-box;
          &:nth-child(5) {
            margin-bottom: 0;
          }
          &:nth-child(6) {
            input {
              outline: none;
              border: none;
              padding-left: 2.1rem;
              color: #000;
            }
            input::-webkit-input-placeholder {
              font-size: 30px;
              color: #999;
            }
          }
          span {
            &:nth-child(1) {
              margin-right: 20px;
            }
          }
        }
        .selectActive {
          color: #000;
          background: url('../../assets/img/coincard/select.png') no-repeat 9rem center;
          background-size: 30px 22px;
        }
      }
    }
  }
  // 支付弹窗
  .van-popup {
    width: 80vw;
    padding: 1em;
    .title {
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      letter-spacing: 2px;
      display: flex;
    }
    .content {
      margin: 0.9em 0;
      div {
        padding: 20px 50px;
        margin: 20px 0;
        border-radius: 16px;
        background: #f3f4f5;
        p:nth-of-type(1) {
          font-size: 32px;
          margin-bottom: 20px;
        }
        p:nth-of-type(2) {
          font-size: 28px;
          color: #999999;
          overflow: hidden;
          span {
            float: left;
            width: 50%;
          }
        }
      }
      .active {
        border: 1px solid #237ff8;
        background: #e8f2ff;
      }
    }
    .btns {
      display: flex;
      justify-content: space-around;
      .van-button {
        width: 44%;
      }
    }
  }
}
</style>