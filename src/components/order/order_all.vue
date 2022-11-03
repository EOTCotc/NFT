<template>
  <div class="orderAll">
    <!-- 头部 -->
    <div class="top">
      <van-nav-bar title="订单"
                   left-arrow
                   z-index='99999'
                   placeholder
                   fixed
                   :border="false"
                   @click-left="onClickLeft" />
    </div>
    <!-- 内容 -->
    <div class="content">
      <van-tabs v-model="active"
                sticky
                :offset-top="46">
        <van-tab :title="item.name"
                 v-for="item in title"
                 :key="item.id">
          <div class="orderDetails"
               v-for="list in content"
               :key="list.id">
            <div class="t">
              <div class="orderNum">订单号：{{list.id}}</div>
              <div class="orderStatus"
                   v-if="list.status==1"
                   :style="{color:'#FC7542'}">待付款</div>
              <div class="orderStatus"
                   v-else-if="list.status==2"
                   :style="{color:'#237FF8'}">已付款</div>
              <div class="orderStatus"
                   v-else
                   :style="{color:'#5D6C8A'}">已取消</div>
            </div>
            <div class="c">
              <div class="l">
                <img src="../../assets/img/blindbox/card1.png"
                     alt="">
              </div>
              <div class="r">
                <p class="product">{{list.name}}</p>
                <p class="price">{{list.price}}</p>
                <p class="time">{{list.time }}</p>
              </div>
            </div>
            <div class="b"
                 v-if="list.status==1">
              <van-button plain
                          round
                          type="info"
                          @click="off(list.id)">取消</van-button>
              <van-button round
                          type="info"
                          @click="pay(list.id)">付款</van-button>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      title: [
        { id: Math.random() + 1, name: '全部' },
        { id: Math.random() + 1, name: '待付款' },
        { id: Math.random() + 1, name: '已付款' },
        { id: Math.random() + 1, name: '已取消' }
      ],
      details: [
        { id: 14343435465, status: '2', name: '盲盒×20', price: '500USDT+500U(EOTC)', time: '2022-07-05 22:00:00' },
        { id: 14343435464, status: '3', name: '黄金甲犀牛 #000003', price: '5000 USDT', time: '2022-07-05 22:00:00' },
        { id: 14343435463, status: '1', name: '黄金甲犀牛 #000001', price: '500 USDT', time: '2022-07-05 22:00:00' }
      ],
      content: []
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    // 点击取消按钮
    off(id) {
      // console.log('取消id为' + id + '的订单')
    },
    // 点击付款按钮
    pay(id) {
      // console.log('去支付id为' + id + '的订单')
    }
  },
  watch: {
    active: {
      handler(num) {
        num == 0 ? (this.content = this.details) : (this.content = this.details.filter((e) => e.status == num))
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>
.orderAll,
html {
  margin-bottom: 50px;
  background: linear-gradient(174deg, #437fff 0%, #172d5a 0%, #06070a 100%);
  // 头部
  .top {
    height: 45px;
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

/deep/ .van-tab {
  opacity: 0.5;
}

/deep/ .van-tab--active {
  opacity: 1;
}

//   ?主体内容
.content {
  position: relative;
  top: 0;
  width: 100%;
  margin-top: 49px;
  background: #06070a;
  color: #fff;
  /deep/ .van-tab__text {
    font-size: 36px;
    color: #fff;
  }
  /deep/ .van-tabs__line {
    background-color: #237ff8;
  }
  /deep/ .van-tabs__nav {
    background: rgb(18, 27, 51);
  }

  .orderDetails {
    margin: 40px auto;
    padding: 30px;
    box-sizing: border-box;
    width: 92%;
    border-radius: 8px * 2;
    border: 1px solid #5d6c8a;
    font-size: 28px;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .t {
      display: flex;
      justify-content: space-between;
    }
    .c {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .l {
        width: 18%;
        border: 1px solid #fff;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .r {
        width: 75%;
        line-height: 1.6em;
        position: relative;
        .price {
          color: #fc7542;
        }
        .time {
          position: absolute;
          bottom: 0;
        }
      }
    }
    .b {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 40px;
      .van-button {
        font-size: 30px;
        letter-spacing: 4px;
        width: 45%;
        height: 80px;
      }
      .van-button:nth-of-type(1) {
        background: none;
      }
    }
  }
}
</style>