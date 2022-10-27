<template>
  <div class="mynft_container">
    <div class="haveCard">
      <div class="top">
        <van-nav-bar title="权益卡牌"
                     fixed
                     placeholder
                     z-index="99"
                     left-arrow
                     @click-left="onClickLeft" />
      </div>
      <!-- 切换 -->
      <div class="toggle">
        <van-tabs v-model="toggleActive"
                  background="#121933"
                  title-inactive-color="#666"
                  title-active-color="#fff"
                  sticky
                  :offset-top="46"
                  swipeable>
          <van-tab name="4"
                   title="已拥有">
            <div class="ownPage">
              <div class="cartList"
                   v-if="cartItem.length">
                <div class="cartItem"
                     v-for="item in cartItem"
                     :key="item.key">
                  <img :src="item.img"
                       alt=""
                       @click="cardDetails(item.num,item.title,item.time,item.Activate)">
                  <p>{{item.title}}</p>
                  <p class="num">#{{item.num.padStart(6, 0) }}</p>
                  <img src="../../assets/img/link.png"
                       v-if="item.bind"
                       class="image">
                </div>
              </div>
              <div class="no_card"
                   v-else>
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>
            </div>
          </van-tab>
          <van-tab name="3"
                   title="待领取">
            <div class="awaitPage">
              <!-- 无待领取卡牌 -->
              <div class="no_card"
                   v-if="cardState.length === 0">
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>

              <!-- 有待领取卡牌 -->
              <div class="cart"
                   :class="cardState.filter((e) => {return e.Activate==i}).length?'act':''"
                   v-else>

                <div class="waitcarditem"
                     v-for="item in cardState"
                     :key="item.key">
                  <div class="left">
                    <img :src="item.img">
                  </div>
                  <div class="right">
                    <div>
                      <span>{{ item.title }}</span>
                      <span @click="pro(i==0?i:item.Activate==i)">
                        <van-checkbox icon-size="16px"
                                      :disabled="i==0?false:item.Activate==i?false:true"
                                      @change="look(item.Activate,item.time,$event)"
                                      v-model="item.ischecked"></van-checkbox>
                      </span>
                    </div>
                    <!-- <div>#{{ item.id }}</div> -->
                    <div>{{ item.text}}</div>
                  </div>

                  <!-- 页脚 -->

                  <div class="waitfooter"
                       v-if="cardState.filter((e) => {return e.Activate==i}).length">
                    <div class="left">
                      <p><span class="sl">
                          <van-checkbox v-model="changeCheck">全选</van-checkbox>
                        </span>已选择 {{ selecked }} 个</p>
                      <p>提示:只能同时选择一种类型的NFT</p>
                    </div>
                    <div class="right">
                      <van-button round
                                  :disabled="isselect"
                                  block
                                  type="info"
                                  @click="getCard">领取</van-button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </van-tab>
          <van-tab name="2"
                   title="待铸造">
            <div class="waitcoin">
              <div v-if="castDataList.length==0"
                   class="no_card">
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>
              <div v-else
                   class="coinwarp">
                <div v-for="cast in castDataList"
                     :key="cast.key"
                     class="coineditem">
                  <div class="left">
                    <img :src="cast.img"
                         alt="卡牌" />
                  </div>
                  <div class="right">
                    <div>{{ cast.title }}</div>
                    <div>数量：1</div>
                    <div v-if="cast.status||cast.id==2"
                         class="waitrank">
                      <p>铸造中…</p>
                      <p>铸造完成后可在待领取中进行领取</p>
                    </div>
                    <div v-else>
                      <span @click="coincardHandler(cast.Activate, cast.num)">
                        <img src="../../assets/img/coincard/icon3.png"
                             alt="铸造" />铸造
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab name="1"
                   title="待激活">
            <div class="waitActive">
              <div class="no_card"
                   v-if="Not_activatedList.length === 0">
                <van-empty class="custom-image"
                           :image="require('../../assets/img/cardPage/cardNull.png')"
                           description="暂无权益卡牌" />
              </div>
              <div v-else
                   class="cartList">
                <div class="cartItem"
                     v-for="item in Not_activatedList"
                     :key="item.key">
                  <img :src="item.img"
                       style="opacity: 0.5;" />
                  <p>{{item.title}}</p>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>

    <!-- 遮罩 -->
    <div v-show="maskFlag1"
         class="rankmask">
      <div class="maskbox">
        <div>
          本次铸造需要扣除0.0030--0.0050不等的bsc
          现在立即铸造？
        </div>
        <div>
          <p @click="cancelHandler">取消</p>
          <p @click="confirmHandler">确定</p>
        </div>
        <img class="img"
             src="../../assets/img/coincard/icon1.png"
             alt="警告">
      </div>
    </div>
    <div v-show="maskFlag3"
         class="rankmask">
      <div class="maskbox">
        <div>
          已成功提交铸造，请等待铸造铸造完成后即可领取至钱包
        </div>
        <div>
          <p @click="confirmSuccHandler">确定</p>
        </div>
        <img class="img"
             src="../../assets/img/coincard/icon2.png"
             alt="确认">
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { myNft, PayEotc, BindNft } from '@/api/newReqets'
import { sfeotc1, Reconstruction_getBscBalance, getCard, getCards, getAllCards, alreadyEquity, already, notEquity, notEquityTime, genesis, getCardsTime } from '@/utils/web3'
import { cardList } from '@/utils/options'
export default {
  name: 'myNFT-list',
  data() {
    return {
      cardList,
      toggleActive: '4',
      // 待激活卡牌
      Not_activatedList: [],
      //已拥有卡牌
      cartItem: [],
      //待领取卡牌
      cardState: [],
      coinFlag: false,
      currentIndex: -1,
      index: -2,
      maskFlag1: false, //遮罩第一次状态
      maskFlag2: false, //遮罩第二次状态
      maskFlag3: false, //遮罩第三次状态
      //待铸造卡牌
      castDataList: [],
      i: 0,
      equity: [],
      apphx: '',
      flag: true,
      time: [],
      values: [],
      times: []
    }
  },
  created() {
    this.getMyNFT()
  },
  methods: {
    get(val, value) {
      for (let i of val) {
        const asd = {}
        asd.status = false
        asd.ischecked = false
        asd.key = Math.random()
        asd.num = i.number + ''
        asd.Activate = i.Activate + 2
        asd.time = this.cardList[i.Activate][i.id].time
        asd.title = this.cardList[i.Activate][i.id].title
        asd.img = this.cardList[i.Activate][i.id].image
        asd.text = this.cardList[i.Activate][i.id].text

        value.push(asd)
      }
      // console.log(value)
    },
    // 点击“已拥有”卡牌中的图片，跳转至卡牌详情页面
    cardDetails(id, title, time, Activate) {
      // console.log(id, title, time, Activate)
      this.$router.push({ name: 'card_details', query: { id: id, title: title, time: time, Activate: Activate + '', url: this.$route.name } })
    },
    // 点击铸造显示扣除TRX的提示
    coincardHandler(i, index) {
      // Toast('铸造暂未开放')
      this.index = index
      this.maskFlag1 = true
    },
    // 取消铸造
    cancelHandler() {
      this.maskFlag1 = false
      this.maskFlag3 = false
    },
    // 确定铸造
    async confirmHandler() {
      Toast.loading({
        message: '铸造中...',
        forbidClick: true,
        duration: 0
      })
      // getTrxBalance(() => {
      await Reconstruction_getBscBalance()
      sfeotc1().then(
        (res) => {
          this.apphx = localStorage.getItem('apphx')
          PayEotc(this.index, this.apphx, 1).then((res) => {
            if (res.data.State > 0) {
              Toast.clear()
              this.res()
            } else {
              Toast.clear()
              this.maskFlag1 = false
              this.$toast.error('铸造失败')
            }
          })
        },
        (rej) => {
          Toast.clear()
          this.$toast.warning('取消铸造')
          this.maskFlag1 = false
        }
      )
      // })
    },
    res() {
      this.currentIndex = this.index
      this.maskFlag1 = false
      this.maskFlag3 = true
      let status = this.castDataList.filter((e) => e.num == this.index)
      status[0].status = true
    },
    // 成功提交铸造后的提示
    confirmSuccHandler() {
      this.maskFlag3 = false
    },
    // 返回上一级
    onClickLeft() {
      this.$router.push({
        name: 'userInfo'
      })
    },
    look(Activate, time, event) {
      this.i = Activate
      if (event) {
        time && this.time.push(time)
        this.equity.push(1)
      } else {
        time &&
          this.time.splice(
            this.time.findIndex((item) => item === time),
            1
          )
        this.equity.splice(
          this.equity.findIndex((item) => item === 1),
          1
        )
      }

      if (this.equity.length == 0) this.i = 0
      // console.log(this.i, this.equity, this.time)
    },

    update(value) {
      if (value) {
        this.cardState.forEach((items, index) => {
          if (items.ischecked === true) delete this.cardState[index]
        })

        this.cardState = this.cardState.filter((val) => {
          return val
        })
      }
      this.cardState.map((e) => (e.ischecked = false))
      this.i = 0
      this.values = []
      this.times = []
      this.time = []
      // console.log(this.cardState)
    },
    // “领取”卡牌
    async getCard() {
      Toast.loading({
        message: '领取中...',
        forbidClick: true,
        duration: 0
      })
      // console.log(this.i, this.selecked)
      // console.log(this.cardState)

      let an = this.time.filter((val) => {
        return val == 100
      })
      let bn = this.time.filter((val) => {
        return val == 200
      })
      let cn = this.time.filter((val) => {
        return val == 300
      })
      if (an.length) {
        this.values.push(an.length)
        this.times.push('100')
      }
      if (bn.length) {
        this.values.push(bn.length)
        this.times.push('200')
      }
      if (cn.length) {
        this.values.push(cn.length)
        this.times.push('300')
      }
      // console.log(this.values, this.times)

      if (this.changeCheck && !this.time.length) {
        // 全部领取
        await getAllCards(1, this.i - 1, this.update)
      } else {
        if (this.selecked > 1) {
          // 批量领取
          this.time.length ? await getCardsTime(this.times, this.i - 1, this.values, this.update) : await getCards(1, this.i - 1, [this.selecked], this.update)
        } else {
          // 单笔领取
          this.time.length ? await getCardsTime(this.times, this.i - 1, this.values, this.update) : await getCard(1, this.i - 1, this.update)
        }
      }
    },
    // 绑定中的卡牌
    async bind() {
      let address = localStorage.getItem('myaddress')
      const { data } = await BindNft(address, 'null', 0, 0, 'null', 0)
      // console.log(data)
      for (let i of data) {
        // console.log(i)
        const asd = {}
        asd.key = Math.random()
        asd.bind = true
        asd.num = i.kid + ''
        asd.status = false
        asd.ischecked = false
        if ([6, 7, 8].includes(i.id)) {
          asd.Activate = i.id
          asd.text = this.cardList[4][i.id - 6].text
          asd.img = this.cardList[4][i.id - 6].image
          asd.title = this.cardList[4][i.id - 6].title
        } else if ([31, 32, 33].includes(i.id)) {
          asd.time = i.xday
          asd.Activate = 3
          asd.text = this.cardList[1][i.id - 31].text
          asd.img = this.cardList[1][i.id - 31].image
          asd.title = this.cardList[1][i.id - 31].title
        } else if ([41, 42, 43].includes(i.id)) {
          asd.time = i.xday
          asd.Activate = 4
          asd.text = this.cardList[2][i.id - 41].text
          asd.img = this.cardList[2][i.id - 41].image
          asd.title = this.cardList[2][i.id - 41].title
        } else if ([51, 52, 53].includes(i.id)) {
          asd.time = i.xday
          asd.Activate = 5
          asd.text = this.cardList[3][i.id - 51].text
          asd.img = this.cardList[3][i.id - 51].image
          asd.title = this.cardList[3][i.id - 51].title
        }
        // console.log(asd)
        i.id < 100 && this.cartItem.push(asd)
      }
    },
    async getMyNFT() {
      Toast.loading({
        message: '数据加载中...',
        forbidClick: true,
        duration: 0
      })
      this.Not_activatedList = []
      this.castDataList = []
      this.cartItem = []
      const { data } = await myNft(1)
      // console.log(data)
      this.bind()
      this.limited()
      this.limitedFor()
      this.hadLimitedFor()
      // type 创世会1，联合会2，
      // 实时节点（100天、200天、300天）31、32、33
      // 中级节点（100天、200天、300天）41、42、43
      // 高级节点（100天、200天、300天）51、52、53
      // 实时永久6，中级永久7，高级永久8
      // Activate 0是未激活，1是待铸造，2是铸造中，3是待领取
      for (let i of data) {
        const asd = {}
        asd.key = Math.random()
        asd.id = i.Activate
        asd.num = i.ID
        asd.status = false
        asd.ischecked = false
        if (['1', '2'].includes(i.Type)) {
          asd.Activate = i.Type
          asd.text = this.cardList[0][i.Type - 1].text
          asd.img = this.cardList[0][i.Type - 1].image
          asd.title = this.cardList[0][i.Type - 1].title
        } else if (['6', '7', '8'].includes(i.Type)) {
          asd.Activate = i.Type
          asd.text = this.cardList[4][i.Type - 6].text
          asd.img = this.cardList[4][i.Type - 6].image
          asd.title = this.cardList[4][i.Type - 6].title
        } else if (['31', '32', '33'].includes(i.Type)) {
          asd.Activate = 3
          asd.text = this.cardList[1][i.Type - 31].text
          asd.img = this.cardList[1][i.Type - 31].image
          asd.title = this.cardList[1][i.Type - 31].title
        } else if (['41', '42', '43'].includes(i.Type)) {
          asd.Activate = 4
          asd.text = this.cardList[2][i.Type - 41].text
          asd.img = this.cardList[2][i.Type - 41].image
          asd.title = this.cardList[2][i.Type - 41].title
        } else if (['51', '52', '53'].includes(i.Type)) {
          asd.Activate = 5
          asd.text = this.cardList[3][i.Type - 51].text
          asd.img = this.cardList[3][i.Type - 51].image
          asd.title = this.cardList[3][i.Type - 51].title
        }

        if (i.Activate == 0) this.Not_activatedList.push(asd)
        if (['1', '2'].includes(i.Activate)) this.castDataList.unshift(asd)
      }
      // Toast.clear()
    },
    // 有限权益卡牌
    async limited() {
      let Array = []
      await alreadyEquity(2, Array)
      await alreadyEquity(3, Array)
      await alreadyEquity(4, Array)

      // console.log(Array)
      this.get(Array, this.cartItem)
      Toast.clear()
    },
    // 永久权益卡
    async limitedFor() {
      let Array = []
      await already(1, 5, Array)
      await already(1, 6, Array)
      await already(1, 7, Array)

      // console.log(Array)

      for (let i of Array) {
        const asd = {}
        asd.status = false
        asd.ischecked = false
        asd.key = Math.random()
        asd.num = i.num + ''
        asd.Activate = i.Activate
        asd.title = this.cardList[4][i.Activate - 6].title
        asd.img = this.cardList[4][i.Activate - 6].image
        asd.text = this.cardList[4][i.Activate - 6].text

        this.cartItem.push(asd)
        // console.log(asd)
      }
    },
    // 创世会、联合会已拥有
    async hadLimitedFor() {
      let Array = []
      await already(1, 0, Array)
      await already(1, 1, Array)

      // console.log(Array)

      for (let i of Array) {
        const asd = {}
        asd.status = false
        asd.ischecked = false
        asd.key = Math.random()
        asd.num = i.num + ''
        asd.Activate = i.Activate
        asd.title = this.cardList[0][i.Activate - 1].title
        asd.img = this.cardList[0][i.Activate - 1].image
        asd.text = this.cardList[0][i.Activate - 1].text

        this.cartItem.push(asd)
      }
    },
    // 创世-联合权益卡（待领取）
    async getGenesis() {
      let Array = []
      await genesis(0, Array)
      await genesis(1, Array)
      // console.log(Array)

      for (let i of Array) {
        const asd = {}
        asd.status = false
        asd.ischecked = false
        asd.key = Math.random()
        asd.Activate = i.Activate + 1
        asd.title = this.cardList[0][i.Activate].title
        asd.img = this.cardList[0][i.Activate].image
        asd.text = this.cardList[0][i.Activate].text
        this.cardState.push(asd)
      }
      this.getNotTime()
    },
    // 有限权益卡牌（待领取）
    async getNotTime() {
      let Array = []
      let time = [100, 200, 300]
      for (let num = 0; num < 3; num++) {
        for (let i = 0; i < time.length; i++) {
          await notEquityTime(num + 2, time[i], Array)
        }
      }

      // console.log(Array)

      for (let i of Array) {
        for (let index = 0; index < i.number; index++) {
          const asd = {}
          asd.Activate = i.Activate + 2
          asd.status = false
          asd.ischecked = false
          asd.key = Math.random()
          asd.time = this.cardList[i.Activate][i.m].time
          asd.title = this.cardList[i.Activate][i.m].title
          asd.img = this.cardList[i.Activate][i.m].image
          asd.text = this.cardList[i.Activate][i.m].text
          this.cardState.push(asd)
        }
      }
      this.getForever()
    },
    // 永久权益卡牌（待领取）
    async getForever() {
      let Array = []
      await notEquity(5, Array)
      await notEquity(6, Array)
      await notEquity(7, Array)
      // console.log(Array)

      for (let i of Array) {
        for (let index = 0; index < i.number; index++) {
          const asd = {}
          asd.status = false
          asd.ischecked = false
          asd.key = Math.random()
          asd.Activate = i.Activate
          asd.title = this.cardList[4][i.Activate - 6].title
          asd.img = this.cardList[4][i.Activate - 6].image
          asd.text = this.cardList[4][i.Activate - 6].text
          this.cardState.push(asd)
        }
      }
      Toast.clear()
    },
    pro(i) {
      // console.log(i)
      if (i === false) this.$toast('只能同时选择一种类型的NFT')
    }
  },
  computed: {
    // 用户选择的领取卡牌数
    selecked() {
      return this.cardState.filter((card) => card.ischecked === true).length
    },
    // 用户是否可领取卡牌
    isselect() {
      return this.selecked > 0 ? false : true
    },
    changeCheck: {
      get() {
        return this.selecked == this.cardState.filter((e) => e.Activate == this.i).length
      },
      set(v) {
        if (v) {
          this.cardState.filter((e) => e.Activate == this.i).map((e) => (e.ischecked = true))
        } else {
          this.cardState.filter((e) => e.Activate == this.i).map((e) => (e.ischecked = false))
        }
      }
    }
  },
  watch: {
    toggleActive(i) {
      if (i == 3 && this.flag) {
        this.flag = false
        Toast.loading({
          message: '数据加载中...',
          forbidClick: true,
          duration: 0
        })
        this.getGenesis()
      }
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .van-hairline--bottom::after {
  border-bottom: none !important;
}

.empry {
  text-align: center;
  margin-top: 1rem;
}
//无权益卡样式
.custom-image /deep/ .van-empty__image {
  width: 260px;
  height: 172px;
}
.mynft_container {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  color: #fff;
  background-color: rgb(8, 11, 19);
}

.header {
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

.title1 {
  font-size: 0.5rem;
  text-align: center;
}

// 遮罩样式
.rankmask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .maskbox {
    width: 590px;
    background-color: #fff;
    border-radius: 20px;
    position: relative;

    div {
      &:nth-child(1) {
        padding: 100px 30px 40px 30px;
        color: #333333;
        font-size: 32px;
        line-height: 53px;
        text-align: center;
      }
      &:nth-child(2) {
        width: 100%;
        height: 95px;
        line-height: 95px;
        display: flex;
        align-items: center;
        font-size: 32px;
        border-top: 1px solid #f3f4f5;

        p {
          flex: 1;
          text-align: center;
          font-size: 32px;
          height: 100%;
          &:nth-child(1) {
            color: #666666;
            border-right: 1px solid #f3f4f5;
          }
          &:nth-child(2) {
            color: #1b2945;
          }
        }
      }
    }
    .img {
      width: 200px;
      height: 200px;
      position: absolute;
      top: -25%;
      left: 50%;
      transform: translate(-50%, 0%);
    }
  }
}
.isgary {
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
}

//内容不为空的样式
.haveCard {
  width: 100vw;
  .top {
    /deep/ .van-nav-bar__content {
      // background-color: #172C58;
      background: #1b2945;
    }
    /deep/ .van-nav-bar {
      background-color: none;
    }
    /deep/ .van-icon {
      color: #fff;
    }
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
  }
  //切换
  .toggle {
    /deep/ .van-tab__text {
      font-size: 36px;
    }
    /deep/ .van-tabs__line {
      background-color: #237ff8;
    }
    // /deep/ .van-tabs__wrap {
    // margin-bottom: 39px;
    // }
    .ownPage {
      margin-top: 20px;
    }
    .no_card {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding-top: 2rem;
      font-size: 0.6rem;
      color: #e28c0a;
      p {
        margin-top: 25px;
      }
    }
    .cartList {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .cartItem {
        padding: 20px;
        margin-bottom: 24px;
        box-sizing: border-box;
        width: 48%;
        background: #1b2333;
        border-radius: 16px;
        position: relative;
        img {
          width: 100%;
        }
        p {
          margin-top: 10px;
          letter-spacing: 2px;
          font-size: 32px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .num {
          margin-top: 10px;
          font-size: 26px;
          font-weight: 400;
          color: #858992;
          text-align: left;
        }
        .image {
          width: 60px;
          position: absolute;
          right: 40px;
          bottom: 160px;
        }
      }
    }
    // ?待铸造
    .waitcoin {
      width: 100%;
      margin-top: 20px;
      // background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);
      .coineditem {
        width: 690px;
        margin: 0 auto 30px;
        background: #1b2333;
        border: 1px solid #333;
        border-radius: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        box-sizing: border-box;
        .left {
          img {
            width: 160px;
            height: 232px;
          }
        }
        .right {
          div {
            &:nth-of-type(1) {
              font-size: 32px;
              color: #ffffff;
              margin-bottom: 24px;
            }
            &:nth-of-type(2) {
              width: 440px;
              height: 40px;
              margin-bottom: 43px;
              font-size: 28px;
              color: #ffffff;
            }
            &:nth-of-type(3) {
              width: 440px;
              font-size: 28px;
              color: #227aee;
              display: flex;
              justify-content: flex-end;
              span {
                width: 210px;
                height: 80px;
                line-height: 80px;
                border-radius: 48px 48px 48px 48px;
                background: #112a4a;
                text-align: center;
                img {
                  vertical-align: middle;
                  width: 40px;
                  height: 43px;
                  margin-right: 10px;
                }
              }
            }
            &.waitrank {
              display: block;
              p {
                color: #fc7542;
                font-size: 28px;
              }
            }
          }
        }
      }
    }
    .ownPage,
    .waitActive {
      // display: grid;
      // grid-template: 1fr/1fr 1fr;
      // gap: 0.5rem;
      padding: 0 25px;
      margin-top: 20px;
      justify-content: space-around;
      align-items: center;
      position: relative;
      .itemCard {
        flex: 1;
        background: #1b2333;
        text-align: center;
        border-radius: 16px;
        padding-top: 20px;

        img {
          width: 300px;
          height: 436.36px;
        }
        p {
          font-size: 32px;
          text-align: left;
          margin: 25px 0px 30px 15px;
        }
      }
      .shade {
        width: 330px;
        height: 572px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0px;
        left: 20px;
      }
      .shade2 {
        width: 330px;
        height: 572px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0px;
        right: 20px;
      }
    }
    .awaitPage {
      // margin-top: 80px;
      width: 100%;
      .cart {
        margin: 0.6em;
        box-sizing: border-box;
        .awaitItem {
          letter-spacing: 2px;
          // width: 650px;
          background-color: #1b2333;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          border-radius: 16px;
          padding: 30px;
          margin-bottom: 30px;
          .left {
            img {
              width: 160px;
              height: 232px;
            }
          }
          .right {
            padding-left: 30px;
            box-sizing: border-box;

            .titleWarp {
              line-height: 0.5rem;
              display: flex;
              justify-content: space-between;
              span {
                color: #fff;
                font-size: 32px;
              }
            }
            .msg {
              margin-top: 30px;
              color: #858992;
              font-size: 28px;
            }
          }
        }
      }
      .act {
        padding-bottom: 108px;
      }
    }
  }
  //页脚

  .activefooter {
    width: 100vw;
    height: 120px;
    background: #11192b;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 12;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #fff;
      font-size: 32px;
      line-height: 120px;
    }
  }

  .footer {
    width: 100vw;
    height: 120px;
    background: #11192b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 11;
    .left {
      margin-left: 40px;
      p {
        &:nth-child(1) {
          color: white;
          font-size: 28px;
        }
        &:nth-child(2) {
          color: #858992;
          font-size: 22px;
          margin-top: 10px;
        }
      }
    }
    .right {
      margin-right: 20px;
      /deep/ .van-button {
        width: 260px;
      }
    }
  }
}

/deep/ .van-dropdown-menu__bar {
  background: #121933;
  height: 70px;
  .van-dropdown-menu__title {
    color: #fff;
  }
  width: 100%;
  position: fixed;
  top: 178px;
  left: 0;
  box-sizing: border-box;
  // bottom: 0;
}
/deep/ .van-cell {
  background: #000;
  color: #fff;
}

/deep/ .van-dropdown-item__option--active {
  color: #237ff8;
}

/deep/ .van-cell.van-cell--clickable.van-dropdown-item__option::after {
  border: 0.02667rem solid #000;
  // z-index: 9999;
}

.waitcarditem {
  width: 690px;
  padding: 30px;
  margin: 0 auto;
  background: #1b2333;
  border-radius: 16px;
  display: flex;
  // justify-content: space-between;
  box-sizing: border-box;
  margin-top: 30px;
  .left {
    margin-right: 30px;
    img {
      width: 160px;
      height: 232px;
    }
  }
  .right {
    width: 100%;
    div {
      &:nth-child(1) {
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-size: 32px;
        margin-bottom: 20px;
        /deep/ .van-checkbox__icon--disabled .van-icon {
          color: #000;
          background: #000;
          border: none;
        }
      }
      &:nth-child(2) {
        font-size: 28px;
        color: #858992;
        margin-bottom: 20px;
      }
      &:nth-child(3) {
        font-size: 28px;
        color: #858992;
        margin-bottom: 20px;
      }
    }
  }
}

.waitfooter {
  width: 100vw;
  height: 120px;
  background: #11192b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0;
  z-index: 11;
  .left {
    width: 100%;
    margin-left: 40px;
    p {
      font-size: 28px;
      &:nth-child(1) {
        display: flex;
        .sl {
          display: flex;
          margin-right: 20px;
          /deep/ .van-checkbox__label {
            color: white;
          }
          /deep/ .van-checkbox__icon {
            font-size: 1em;
            margin-right: 10px;
          }
        }
        color: white;
        font-size: 28px;
      }
      &:nth-child(2) {
        word-break: break-all;
        color: #858992;
        font-size: 22px;
        margin-top: 10px;
        display: flex;
      }
    }
  }
  .right {
    width: 300px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    /deep/ .van-button {
      width: 260px;
      text-align: center;
      .van-button__text {
        width: 100%;
      }
    }
  }
}
</style>
