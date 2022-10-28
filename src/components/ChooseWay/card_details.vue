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
            <van-button v-if="toggle4"
                        type="primary">{{owner|ellipsis}}</van-button>
          </div>
        </div>
        <div class="arena">
          <img src="@/assets/img/cardDetails/aureole.png">
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
      <p class="cost"><img src="@/assets/img/logo-removebg-preview.png">{{price}}</p>
      <p class="time">销售将于{{time}}结束</p>
    </div>
    <!-- 售卖通知 -->
    <div class="inform"
         v-if="inform">
      <p class="title">售卖通知</p>
      <p class="content">
        卡牌正在售卖中
        <br>请前往&lt;市场&gt;页面--&lt;我的卡牌&gt;进行查看 <br><br>
        <span style="color:#FC7542">注：正在售卖中的卡牌不可进行合成</span>
      </p>
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
        <li v-show="serviceCharge">
          <p>可领取手续费</p>
          <p style="color:#FC7542">{{serviceCharge.toFixed(10)}} USDT</p>
        </li>
        <li v-show="possessor">
          <p>持有者</p>
          <p>{{user|ellipsis}}</p>
        </li>
        <li v-show="holder">
          <p>第一持有人</p>
          <p>{{holder|ellipsis}}</p>
        </li>
        <li>
          <p>铸造平台</p>
          <p>BSC</p>
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

    <!-- 交易历史 -->
    <!-- <div class="history"
         v-if="arr.length"
         :class="show?'reveal':''">
      <p class="msgtitle">交易历史</p>
      <table>
        <tr>
          <th>事件</th>
          <th>价格</th>
          <th>自</th>
          <th>至</th>
          <th>日期</th>
        </tr>
        <tr v-for="(item,index) in arr"
            :key="index">
          <td>{{item.id==1?'发布':item.id==2?'销售':item.id==3?'购买':item.id==4?'取消':'过期'}}</td>
          <td><img src="@/assets/img/logo-removebg-preview.png"> {{item.price/ 1000000}}</td>
          <td>{{item.seller|ellipsi}}</td>
          <td>{{item.buyer|ellipsi}}</td>
          <td>{{ formatDates(item.time)}}</td>
        </tr>
      </table>
    </div> -->
    <!-- 页脚 -->
    <div class="footer"
         v-if="show">
      <div v-show="toggle"
           class="btn"
           @click="buyHandler">
        <p>购买</p>
      </div>
      <div v-show="toggle1"
           @click="sellHandler"
           class="btn">
        <p>出售</p>
      </div>
      <!-- 领取后显示 -->
      <div v-if="toggle2"
           class="togglebtn">
        <div @click="unitybindHandler"
             class="btn">绑定</div>
        <div @click="sellHandler"
             class="btn">出售</div>
      </div>
      <!-- 取消/编辑订单 -->
      <div v-if="toggle3"
           class="togglebtn">
        <div @click="cancelSale"
             class="btn">取消出售</div>
        <div @click="orderEditing=true,dateChanged=true,priceChange = ''"
             class="btn">编辑订单</div>
      </div>
      <div v-if="toggle4"
           @click="unbindHandler"
           class="unbindBtn">
        <p>解绑</p>
      </div>
      <div v-if="toggle5"
           class="unbindBtn">
        <p style="color:#FC7542; font-size:">卡牌赎回中，请耐心等候</p>
      </div>
    </div>

    <!-- 购买弹窗 -->
    <van-dialog v-model="showShop"
                title="确认购买"
                :before-close="onBeforeClose"
                show-cancel-button>

      <!-- <van-cell center
                title="发送给其他钱包">
        <template #right-icon>
          <van-switch v-model="checked"
                      inactive-color="#e9e9e9"
                      size="22" />
        </template>
      </van-cell>
      <van-form v-show="checked">
        <van-notice-bar wrapable
                        left-icon="volume-o"
                        :scrollable="false"
                        text="卡牌购买后自动发送给填写的地址用户" />
        <van-field v-model="value"
                   :rules="[{ pattern, message: '请输入正确钱包地址' }]"
                   label="钱包地址" />

      </van-form> -->
    </van-dialog>

    <!-- 编辑订单 -->
    <van-dialog v-model="orderEditing"
                title="订单编辑"
                :before-close="onBeforeCloseEditing"
                show-cancel-button>
      <div class="input">
        <van-field v-model="priceChange"
                   oninput="if(value>1000000000000000)value=1000000000000000"
                   :border="false"
                   label="修改价格"
                   type="digit"
                   :placeholder="price"
                   maxlength="30" />
        <span>USDT</span>
      </div>
      <van-cell center
                :label="optionTime"
                title="使用之前的商品下架时间">
        <template #right-icon>
          <van-switch v-model="dateChanged"
                      inactive-color="#e9e9e9"
                      size="24" />
        </template>
      </van-cell>
      <div class="calendar"
           v-show="!dateChanged">
        <van-radio-group v-model="radio">
          <van-cell-group v-for="item in option"
                          :key="item.value">
            <van-cell :title="item.text"
                      clickable
                      @click="radio = item.value">
              <template #right-icon>
                <van-radio :name="item.value" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </div>
    </van-dialog>
  </div>
</template>
<script>
import { BindNft } from '@/api/newReqets'
import { Toast, Dialog } from 'vant'
import { contract, cardList, allCard, allCards } from '@/utils/options'
import { sfeotc1, safeTransferFroms, orderActivitys, myApprove, firstHolders, fulfillBasicOrders, cancels, editOrders, amountAvailableLists } from '@/utils/web3'
export default {
  data() {
    return {
      possessor: false,
      user: '000000',
      dateChanged: true,
      orderEditing: false,
      serviceCharge: 0,
      priceChange: '',
      data: '',
      contract,
      cardList,
      allCard,
      allCards,
      // arr: [],
      time: '',
      value: '',
      query: null,
      holder: '',
      owner: '',
      address: '',
      img: '',
      brief: '',
      price: 0,
      showShop: false,
      off: false,
      show: false,
      inform: false, //售卖通知
      toggle: false, //购买
      toggle1: false, //领取
      toggle2: false, //绑定、出售
      toggle3: false, //取消/编辑订单
      toggle4: false, //解绑
      toggle5: false, //卡牌赎回中
      btnShow: false, //上方按钮
      pattern: /^[A-Za-z0-9]{34}|^[0]{0}$/,
      checked: false,
      minDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1),
      radio: 1,
      option: [
        { text: '一天后', value: 1 },
        { text: '三天后', value: 3 },
        { text: '七天后', value: 7 },
        { text: '一月后（30天）', value: 30 },
        { text: '三月后（60天）', value: 60 },
        { text: '六月后（180天）', value: 180 }
      ],
      optionTime: '',
      addressIndex: { first: null, last: null },
      transferHX: '',
      appid: '',
      ads: localStorage.getItem('myaddress'),
      sign: localStorage.getItem('mysign')
    }
  },
  created() {
    this.query = this.$route.query
    console.log(this.query)
    this.optionTime = this.formatDate(this.query.endTime)
    // console.log(this.optionTime)
    this.getMsg()
  },
  methods: {
    // 获取页面信息
    getMsg() {
      // this.arr = []
      if (this.query.url == 'hvae_card') {
        this.user = localStorage.getItem('myaddress')
        this.possessor = true
        // 权益卡牌
        this.rights()
        setTimeout(async () => {
          await firstHolders(this.addressIndex, this.query.id).then((res) => (this.holder = res))
          await orderActivitys(this.address, this.query.id).then((res) => {
            if (this.query.sell == 1 || res == 1) {
              this.show = false
              this.inform = true
            } else {
              this.inform = false
              this.show = true

              if (['3', '4', '5', '6', '7', '8'].includes(this.query.Activate)) {
                this.query.time ? (this.appid = this.query.Activate + this.query.time / 100) : (this.appid = this.query.Activate)
                BindNft('null', 'null', this.appid, this.query.id, 'null', 0)
                  .then((res) => {
                    console.log(res)
                    if (res.data.length && res.data[0].ok == 1) {
                      // 该卡牌已绑定
                      this.toggle4 = true
                    } else if (res.data.length && res.data[0].ok == 2) {
                      // 卡牌待赎回
                      this.toggle5 = true
                    } else if (res.data.length && res.data[0].ok == 3) {
                      // 卡牌已赎回
                      this.toggle2 = true
                    } else {
                      // 卡牌未绑定
                      this.toggle2 = true
                    }
                  })
                  .catch((err) => {
                    console.log(err)
                    // 卡牌未绑定
                    this.toggle2 = true
                  })
              } else {
                this.toggle1 = true
              }
            }
          })
        })
      } else if (this.query.url == 'rank_card') {
        this.user = localStorage.getItem('myaddress')
        this.possessor = true
        // 等级卡牌
        this.grade()
        if (['1', '2'].includes(this.query.Activate)) {
          this.show = false
        } else {
          this.toggle1 = true
          // this.query.sell == 1 ? (this.show = false) : (this.show = true)
          setTimeout(async () => {
            await firstHolders(this.addressIndex, this.query.id).then((res) => (this.holder = res))
            await orderActivitys(this.address, this.query.id).then((res) => {
              if (this.query.sell == 1 || res == 1) {
                this.show = false
                this.inform = true
                // this.$toast(`卡牌正在售卖中\n\n请前往<市场>页面查看相关信息`)
              } else {
                this.inform = false
                this.show = true
              }
            })
          })
        }
      } else if (this.query.url == 'marketNFT') {
        this.time = this.formatDate(this.query.endTime)
        this.query.form == 1 ? this.grade() : this.rights()
        this.query.status == 4 ? (this.toggle3 = true) : (this.toggle = true)
        // this.toggle = true
        setTimeout(async () => {
          await firstHolders(this.addressIndex, this.query.id).then((res) => (this.holder = res))
          await orderActivitys(this.address, this.query.id).then(async (res) => {
            if (res == 1) {
              let arr = [[], []]
              this.show = true
              this.user = this.query.seller
              this.price = parseInt(this.query.price).toFixed(2)
              this.possessor = true
              // console.log(this.addressIndex.first)
              await amountAvailableLists(this.addressIndex.first, [this.address], [this.query.id], arr)
              // console.log(arr[1][0])
              this.serviceCharge = arr[1][0]
            } else {
              this.user = '00000'
              this.possessor = false
              this.show = false
              this.price = 0
            }
          })
        }, 500)
      }
    },
    // 等级卡牌
    grade() {
      let Activate = this.query.Activate
      this.owner = localStorage.getItem('myaddress')
      this.address = this.contract[0][Activate - 1]
      this.brief = this.allCard[Activate - 1].text
      this.query.state ? (this.img = this.allCards[Activate - 1].image) : (this.img = this.allCard[Activate - 1].image)
      for (let i = 0; i < 2; i++) {
        let index = contract[i].indexOf(this.address)
        // console.log(index)
        if (index != -1) (this.addressIndex.first = i), (this.addressIndex.last = index)
      }
    },
    // 权益卡牌
    rights() {
      let Activate = this.query.Activate
      this.owner = localStorage.getItem('myaddress')
      this.address = this.contract[1][Activate - 1]
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
      for (let i = 0; i < 2; i++) {
        let index = contract[i].indexOf(this.address)
        // console.log(index)
        if (index != -1) (this.addressIndex.first = i), (this.addressIndex.last = index)
      }
    },
    formatDate(timestamp) {
      var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '年'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月'
      let D = date.getDate() + '日'
      let h = date.getHours() + '时'
      return Y + M + D + h
    },
    formatDates(timestamp) {
      var date = new Date(timestamp * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y = date.getFullYear() + '/'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/'
      let D = date.getDate()
      return Y + M + D
    },
    getBottom(i) {
      i == 1 ? (this.show = false) : (this.show = true)
    },
    // 点击购买卡牌
    buyHandler() {
      let transaction = () => {
        this.showShop = true
      }
      myApprove(this.price, transaction)
    },
    // 点击解绑卡牌
    unbindHandler() {
      Dialog.confirm({
        message: '解绑权益卡后手续费无法到账' + `</br>` + '确定解绑此权益卡？'
      })
        .then(async () => {
          Toast.loading({
            message: '解除绑定中...',
            forbidClick: true,
            duration: 0
          })
          await sfeotc1(1)
          await BindNft(this.ads, this.sign, this.appid, this.query.id, 'null', 1).then((res) => {
            // console.log(res)
            if (res.data.Code > 0) {
              this.$toast.clear()
              Toast.clear()
              this.toggle1 = false
              this.toggle2 = false
              this.toggle3 = false
              this.toggle4 = false
              this.toggle5 = true
              Toast({ message: '解绑中，请耐心等候', duration: 500 })
            } else {
              this.$toast.clear()
              Toast.clear()
              Toast({ message: '解绑失败', duration: 500 })
            }
          })
        })
        .catch(() => {
          Toast({ message: '取消解绑', duration: 500 })
        })
    },
    // 点击绑定卡牌
    unitybindHandler() {
      Dialog.confirm({
        title: '绑定',
        message: `绑定后手续费自动到账\n不可进行出售操作`
      })
        .then(async () => {
          Toast.loading({
            message: '卡牌绑定中...',
            forbidClick: true,
            duration: 0
          })
          await safeTransferFroms(this.addressIndex, this.query.id)
          this.transferHX = localStorage.getItem('transferHX')
          let time = ''
          this.query.time ? (time = this.query.time) : (time = 9999)
          await BindNft(this.ads, this.sign, this.appid, this.query.id, this.transferHX, time).then((res) => {
            // console.log(res)
            if (res.data.Code > 0) {
              this.$toast.clear()
              Toast.clear()
              this.toggle1 = false
              this.toggle2 = false
              this.toggle3 = false
              this.toggle5 = false
              this.toggle4 = true
              Toast({ message: '绑定成功', duration: 500 })
            } else {
              this.$toast.clear()
              Toast.clear()
              Toast({ message: '绑定失败', duration: 500 })
            }
          })
        })
        .catch(() => {
          this.$toast.clear()
          Toast.clear()
          Toast({ message: '取消绑定', duration: 500 })
        })
    },
    // 点击出售跳转新页面
    sellHandler() {
      this.$router.replace({
        name: 'card_sell',
        query: { ...this.query, address: this.address }
      })
    },
    // 返回上一级
    onClickLeft() {
      this.$router.push({
        name: this.query.url
      })
    },
    //取消出售
    cancelSale() {
      Toast.loading({
        message: '订单取消中...',
        forbidClick: true,
        duration: 0
      })
      cancels(this.query.orderID, this.receiveSuccessHandler)
      // cancels(this.query.orderID, arr).then(async () => {
      //   this.arr = []
      //   await projectState(this.address, this.query.id, this.arr)
      // })
    },
    // 购买卡牌
    async onBeforeClose(action, done) {
      if (action === 'confirm') {
        // 点击确定走这里
        Toast.loading({
          message: '购买中...',
          forbidClick: true,
          duration: 0
        })
        await fulfillBasicOrders(this.query.orderID, this.query.price, this.receiveSuccessHandler)
        done(true)
        // if (this.pattern.test(this.value) || this.value == '') {
        //   Toast.loading({
        //     message: '购买中...',
        //     forbidClick: true,
        //     duration: 0
        //   })
        //   let values = ''
        //   this.value == '' ? (values = 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb') : (values = this.value)
        //   await fulfillBasicOrders(this.query.orderID, this.query.price, values, this.receiveSuccessHandler)
        //   done(true)
        // } else {
        //   this.$toast('钱包地址错误')
        //   return done(false)
        // }
      } else {
        // 点击取消走这里
        done(true)
      }
    },
    receiveSuccessHandler() {
      Toast.clear()
      this.$toast.clear()
      // this.arr = []
      this.show = false
      this.price = 0
      this.user = localStorage.getItem('myaddress')
      // projectState(this.address, this.query.id, this.arr)
    },
    // 编辑订单
    async onBeforeCloseEditing(action, done) {
      if (action === 'confirm') {
        // 点击确定走这里
        if (this.priceChange > 0) {
          Toast.loading({
            message: '修改中...',
            forbidClick: true,
            duration: 0
          })
          let timeDate = Math.floor(new Date().getTime() / 1000)
          let endTime = timeDate + this.radio * 3600 * 24 + 8 * 3600
          console.log(timeDate, endTime)
          let arr = () => {
            this.price = parseFloat(this.priceChange).toFixed(2)
            if (!this.dateChanged) this.time = this.formatDate(endTime - 8 * 3600)
          }
          this.dateChanged ? await editOrders(this.query.orderID, this.priceChange, 0, arr) : await editOrders(this.query.orderID, this.priceChange, endTime, arr)
          // this.dateChanged ? await editOrders(this.query.orderID, this.priceChange, 0, arr) : await editOrders(this.query.orderID, this.priceChendTimeange, , arr)
          done(true)
        } else {
          this.$toast('请填写卡牌价格')
          return done(false)
        }
      } else {
        // 点击取消走这里
        done(true)
      }
    }
  },
  watch: {
    checked(i) {
      // console.log(i)
      if (!i) this.value = ''
    },
    dateChanged: {
      handler(i) {
        // console.log(i)
        i ? ((this.optionTime = this.time), (this.radio = 1)) : (this.optionTime = '')
      },
      immediate: true
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
    // ellipsi(value) {
    //   let len = value.length
    //   if (!value) return ''
    //   if (value.length > 20) {
    //     return value.substring(0, 3) + '...' + value.substring(len - 3, len)
    //   }
    //   return value
    // }
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
  // 售卖通知
  .inform {
    width: 690px;
    background: #1b2333;
    margin: 0 auto;
    margin-bottom: 30px;
    border-radius: 20px;
    padding: 30px;
    box-sizing: border-box;
    color: #fff;
    font-size: 32px;
    .title {
      color: #fff;
      margin-bottom: 30px;
    }
    .content {
      width: 630px;
      font-size: 28px;
      font-family: PingFang SC-Light, PingFang SC;
      font-weight: 300;
      line-height: 44px;
      text-align: justify;
      color: #bbb;
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
    .time {
      letter-spacing: 2px;
      color: #bbb;
      font-size: 26px;
      margin-top: 30px;
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
  // // 交易历史
  // .history {
  //   width: 690px;
  //   background: #1b2333;
  //   margin: 0 auto;
  //   padding: 30px;
  //   box-sizing: border-box;
  //   border-radius: 20px;
  //   color: #fff;
  //   font-size: 28px;
  //   .msgtitle {
  //     width: 128px;
  //     height: 45px;
  //     margin-bottom: 20px;
  //     font-size: 32px;
  //     font-family: PingFang SC-Regular, PingFang SC;
  //     font-weight: 400;
  //     color: #ffffff;
  //     line-height: 45px;
  //   }
  //   table {
  //     font-size: 24px;
  //     width: 100%;
  //     text-align: center;
  //     tr th {
  //       color: #858992;
  //     }
  //     tr td:nth-of-type(2) {
  //       padding-left: 20px;
  //       text-align: left;
  //       img {
  //         width: 26px;
  //       }
  //     }
  //   }
  // }
  .reveal {
    margin-bottom: 2.3rem;
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
  // 购买弹窗
  /deep/ .van-field {
    margin: 0 auto;
    width: 90%;
    padding: 30px 4px;
    font-size: 32px;
    color: #000;
    font-size: 28px;
    .van-cell__title.van-field__label {
      width: 4em;
    }
  }
  /* 订单编辑 */
  // 价格
  .input {
    position: relative;
    height: 88px;
    .van-field {
      padding-left: 0;
      border-radius: 8px 8px 8px 8px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      background: transparent;
    }
    span {
      position: absolute;
      right: 40px;
      top: 38px;
      font-size: 28px;
    }
  }
  // 时间
  .calendar {
    width: 100%;
    padding: 0px 36px;
    box-sizing: border-box;
    letter-spacing: 2px;
    .van-cell {
      padding: 16px 0;
    }
    .van-cell__label {
      letter-spacing: 1px;
    }
    .van-hairline--top-bottom::after,
    .van-hairline-unset--top-bottom::after {
      border: none;
    }
  }
}
</style>