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
          <img src="../../assets/img/cardDetails/king.png"
               alt="国王">
          <div class="bingBtn"
               v-if="btnShow">
            <van-button :icon="toggle4?'':'plus'"
                        type="primary">{{toggle4?'ada454...DDF6':'绑定'}}</van-button>
          </div>
        </div>
        <div class="arena">
          <img src="../../assets/img/cardDetails/aureole.png"
               alt="">
        </div>
        <div class="paddy">
          <p>创世会权益卡</p>
        </div>
      </div>
    </div>
    <!-- 作品简介 -->
    <div class="intro">
      <p class="title">作品简介</p>
      <p class="content">
        联合会权益卡，全球仅限666张，享有全网EOTCNFT 1%手续费平均分红，EOTC DAO的治理投票权。
      </p>
    </div>
    <!-- 作品信息 -->
    <div class="msg">
      <p class="msgtitle">作品信息</p>
      <ul class="list">
        <li v-if="!toggle1">
          <p>拥有者</p>
          <p>dsa156…4578</p>
        </li>
        <li>
          <p>作品编号</p>
          <p>#01</p>
        </li>
        <li>
          <p>铸造平台</p>
          <p>TRON</p>
        </li>
        <li>
          <p>铸造时间</p>
          <p>2022-07-10 22:10:00</p>
        </li>
        <li>
          <p>TokenID</p>
          <p>sd465saf465464as</p>
        </li>
        <li>
          <p>合约地址</p>
          <p>sa75457esd57657</p>
        </li>
      </ul>
    </div>
    <!-- 页脚 -->
    <div class="footer">
      <div v-show="toggle1==true"
           @click="receiveSuccessHandler"
           class="btn">
        <p>领取</p>
      </div>
      <!-- 领取后显示 -->
      <div v-if="toggle2"
           class="togglebtn">
        <div @click="bindHandler"
             class="btn">绑定</div>
        <div @click="sellHandler"
             class="btn">出售</div>
      </div>
      <div v-if="toggle3"
           @click="unitybindHandler"
           class="boundBtn">
        <p>绑定</p>
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
export default {
  data() {
    return {
      // time: Date.now(),
      off: false,
      show: false,
      toggle1: true, //默认领取
      toggle2: false, //绑定、出售
      toggle3: false, //绑定
      toggle4: false, //解绑
      btnShow: false //上方按钮
    }
  },
  created() {
    if (sessionStorage.getItem('show') == 'true') {
      this.toggle1 = false
      this.toggle2 = false
      this.toggle3 = true
      this.toggle4 = false
      this.btnShow = true
    }
    if (sessionStorage.getItem('off') == 'true') {
      this.toggle1 = false
      this.toggle2 = true
      this.toggle3 = false
      this.toggle4 = false
      this.btnShow = true
    }
  },
  beforeDestroy() {
    sessionStorage.removeItem('show')
    sessionStorage.removeItem('off')
  },
  methods: {
    unbindHandler() {
      let _this = this
      Dialog.confirm({
        message: '解绑后权益卡相关权益将停止确定解绑此权益卡？'
      })
        .then(() => {
          _this.toggle3 = true
          _this.toggle4 = false
          Toast({ message: '解绑成功', duration: 500 })
        })
        .catch(() => {
          // on cancel
          // Toast({ message: '取消绑定', duration: 500 })
        })
    },
    unitybindHandler() {
      let _this = this
      Dialog.confirm({
        title: '绑定',
        message: '绑定之后不可进行出售操作'
      })
        .then(() => {
          _this.toggle3 = false
          _this.toggle4 = true
          Toast({ message: '绑定成功', duration: 500 })
        })
        .catch(() => {
          // on cancel
          Toast({ message: '取消绑定', duration: 500 })
        })
    },
    sellHandler() {
      // console.log('888')
      // this.toggle2 = true
      // this.toggle3 = false
      // Toast('出售成功！')
      this.$router.push({
        name: 'card_sell'
      })
    },
    bindHandler() {
      Toast('主人，出售之后才能绑定哦~')
    },
    receiveSuccessHandler() {
      const toast = Toast({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '领取成功'
      })

      let second = 1
      let _this = this
      const timer = setInterval(() => {
        second--
        if (second) {
          toast.message = `领取成功`
        } else {
          _this.toggle1 = false
          _this.toggle2 = true
          _this.btnShow = true
          clearInterval(timer)
          // 手动清除 Toast
          Toast.clear()
        }
      }, 1000)
    },
    onClickLeft() {
      this.$router.push({
        name: 'hvae_card'
      })
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
        width: 402px;
        height: 59px;
        margin: 0 auto;
        line-height: 59px;
        background: url('../../assets/img/cardDetails/paddy.png') no-repeat;
        background-size: 403px, 58px;
        text-align: center;
        transform: translate(-0px, -80px);
        p {
          color: #fff;
          font-size: 36px;
        }
      }
    }
  }
  //作品简介
  .intro {
    width: 690px;
    height: 281px;
    background: #1b2333;
    margin: 0 auto;
    border-radius: 20px;
    padding: 30px;
    box-sizing: border-box;
    .title {
      font-size: 32px;
      color: #fff;
      margin-bottom: 30px;
    }
    .content {
      width: 630px;
      height: 136px;
      font-size: 28px;
      font-family: PingFang SC-Light, PingFang SC;
      font-weight: 300;
      color: #fff;
      line-height: 44px;
      text-align: justify;
    }
  }
  // 作品信息
  .msg {
    width: 690px;
    // height: 545px;
    // border: 1px solid red;
    background: #1b2333;
    margin: 30px auto 120px;
    padding: 30px;
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
      line-height: 22px;
    }
    .list {
      // margin-bottom: 50px;
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