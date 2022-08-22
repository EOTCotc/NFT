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
          <p>{{ money }}(EOTC)</p>
        </div>
      </div>
      <div class="buynum">
        <p>购买数量</p>
        <div @click="buynumHandler">
          <input type="number"
                 class="select"
                 v-model="inputNum"
                 :disabled="disabledFlag"
                 placeholder="选择购买数量" />
        </div>
      </div>
    </div>
    <div class="payBtn">
      <div class="left">{{ money }}(EOTC)</div>
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
              :key="item.id">
            <span>{{ item.num }}个</span>
            <span>{{ item.EOTC }}U+{{ item.EOTC }}U(EOTC)</span>
          </li>
          <li>
            <input type="number"
                   @input="inputChangeHandler"
                   v-model.number="buynum"
                   placeholder="请输入购买数量" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      maskFlag: false, //遮罩
      buynum: '', //遮罩input
      disabledFlag: true,
      inputNum: '',
      currentIndex: 9, //当前高亮的index
      money: '0USDT+0U', //显示金额
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
      ]
    }
  },
  methods: {
    // 点击购买
    payHandler() {
      // console.log('77')
      if (this.inputNum == '') {
        this.$toast('请选择购买数量')
      } else {
        // 进行支付处理
        this.$toast('可以购买')
      }
    },
    // 选择购买数量
    orderitemHandler(item, index) {
      this.currentIndex = index
      this.Prepaid = item.EOTC + 'USDT' + '+' + item.EOTC + 'U'
      this.buynum = item.num
      this.typearr.push(item.id)
    },
    inputChangeHandler(e) {
      console.log('事件触发...')
      this.typearr = [] //保证是用户输入
      // let baseval = 50; //基础值
      // let usernum = e.target.value; //获取用户输入值
      // let sum;
      // if (1 < usernum < 3) {
      //   sum = (usernum - 1) * baseval + 50;
      //   console.log("1 < usernum < 3", sum);
      // } else if (3 < usernum < 7) {
      //   sum = (usernum - 3) * baseval + 100;
      //   console.log("3 < usernum < 7", sum);
      // } else if (7 < usernum < 20) {
      //   sum = (usernum - 7) * baseval + 200;
      //   console.log("7 < usernum < 20", sum);
      // } else if (20 < usernum < 50) {
      //   sum = (usernum - 20) * baseval + 500;
      //   console.log("20 < usernum < 50", sum);
      // } else if (usernum > 50) {
      //   sum = (usernum - 50) * baseval + 1000;
      //   console.log("usernum > 50", sum);
      // }
      // this.sumMoeny = sum + "U" + "+" + sum + "U";
      // console.log("usernum", this.sumMoeny);
    },
    // 点击确定
    sureHandler() {
      this.inputNum = this.buynum
      //判断用户是输入还是点击的
      if (this.typearr.length > 0) {
        this.money = this.Prepaid //用户点击
      } else {
        let baseval = 50 //基础值
        let usernum = this.buynum
        let sum
        // if (1 < usernum < 3) {
        //   sum = (usernum - 1) * baseval + 50;
        //   console.log("1 < usernum < 3", sum);
        // } else if (3 < usernum < 7) {
        //   sum = (usernum - 3) * baseval + 100;
        //   console.log("3 < usernum < 7", sum);
        // } else if (7 < usernum < 20) {
        //   sum = (usernum - 7) * baseval + 200;
        //   console.log("7 < usernum < 20", sum);
        // } else if (20 < usernum < 50) {
        //   sum = (usernum - 20) * baseval + 500;
        //   console.log("20 < usernum < 50", sum);
        // } else if (usernum > 50) {
        //   sum = (usernum - 50) * baseval + 1000;
        //   console.log("usernum > 50", sum);
        // }

        usernum < 3
          ? (sum = (usernum - 1) * baseval + 50)
          : usernum < 7
          ? (sum = (usernum - 3) * baseval + 100)
          : usernum < 20
          ? (sum = (usernum - 7) * (baseval - 10) + 200)
          : usernum < 50
          ? (sum = (usernum - 20) * (baseval - 20) + 500)
          : (sum = (usernum - 50) * (baseval - 30) + 1000)

        this.sumMoeny = sum + 'USDT' + '+' + sum + 'U'
        this.money = this.sumMoeny //用户输入
      }
      // this.typearr = []
      //this.currentIndex = 9; //取消高亮
      this.maskFlag = false
    },
    onClickLeft() {
      this.$router.back()
      // this.$router.push({
      //   name: 'buy_blindbox'
      // })
    },
    // 显示遮罩
    buynumHandler() {
      this.maskFlag = true
    },
    // 取消处理
    cancelOrderHandler() {
      //清除缓存
      if (this.buynum == '') {
        // this.buynum = ''
        // this.inputNum = ''
        this.Prepaid = ''
        // this.sumMoeny='0U+0U'
        this.money = '0U+0U'
      }

      if (this.buynum !== '') {
        // this.buynum = "";
        // this.inputNum = "";
        // this.Prepaid=''
        // this.sumMoeny = "0U+0U";
        // this.money = "0U+0U";
      }
      // this.buynum = "";
      // this.inputNum = "";
      // this.disabledFlag = false
      // this.typearr = [];
      // this.currentIndex = null; //取消高亮
      this.maskFlag = false
    }
  },
  computed: {
    countGoodsPrice() {
      let baseval = 50 //基础值
      let sumPrice = null
      let usernum = this.buynum //用户输入值
      console.log('computed', usernum)
      if (1 < usernum < 3) {
        sumPrice = (usernum - 1) * baseval + 50
      } else if (3 < usernum < 7) {
        sumPrice = (usernum - 3) * baseval + 100
      }
      return sumPrice
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
      .select {
        outline: none;
        width: 690px;
        height: 96px;
        border: 1px solid #666;
        background-color: #0f142b;
        line-height: 96px;
        color: #b0adb5;
        font-size: 28px;
        padding-left: 34px;
        box-sizing: border-box;
        border-radius: 16px;
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
}
</style>