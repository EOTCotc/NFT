<template>
  <div class="marketNFT">
    <div class="top"><img src="../../assets/img/logoNFT.png"
           alt=""></div>
    <div class="tab">
      <div class="l">
        <p v-for="item in tabs"
           :key="item.id"
           @click="active=item.id,col=false"
           :class="active==item.id?'active' :''">{{item.name}}</p>
      </div>
      <div class="r">
        <p @click="show = !show"
           :class="col?'active' :''">筛选
          <van-icon name="filter-o" />
        </p>
      </div>
    </div>
    <div class="cardList">
      <div class="item"
           @click="goCardDetails(item.id)"
           v-for="item in cardList"
           :key="item.id">
        <p class="img"><img src="../../assets/img/equityItem1.png"
               alt=""></p>
        <p class="title">{{item.title }}</p>
        <p class="text">{{item.text }}</p>
        <p class="price"><img src="../../assets/img/logo-removebg-preview.png"
               alt="">{{item.price}}</p>
      </div>
    </div>

    <!-- 弹出层 -->
    <van-popup v-model="show"
               position="right"
               :style="{ height: '100%',width: '76%',background:'rgb(31, 41, 70)',color:'#fff',paddingTop:'4em' }">
      <div class="options">
        <div class="type">
          <div class="title">类型</div>
          <div class="content">
            <p @click="num=item.id"
               v-for="item in options"
               :key="item.id"
               :class="num==item.id?'active' :''">{{item.title}}</p>
          </div>
        </div>
        <div class="class"
             v-if="num">
          <div class="title">等级</div>
          <div class="content">
            <p @click="number=lists.id"
               v-for="lists in option.name"
               :key="lists.id"
               :class="number==lists.id?'active' :''">{{lists.title}}</p>
          </div>
        </div>
        <div class="status"
             v-if="number">
          <div class="title">状态</div>
          <div class="content">
            <p @click="numbers=list.id"
               v-for="list in menu.status"
               :key="list.id"
               :class="numbers==list.id?'active' :''">{{list.title}}</p>
          </div>
        </div>

        <div class="btn">
          <van-button color="#1B2333"
                      class="off"
                      @click="off"
                      round>重置</van-button>
          <van-button color="#227aee"
                      class="sure"
                      @click="sure"
                      round>确定</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import options from './options'
export default {
  data() {
    return {
      active: 0,
      num: 0,
      number: 0,
      numbers: 0,
      show: false,
      col: false,
      options,
      option: [],
      menu: [],
      cardList: [],
      cardLists: [
        { id: Math.random(), title: '创世会权益NFT', text: 'dsad88…4558', price: '25000.52', status: 2 },
        { id: Math.random(), title: '五级黄金甲犀牛', text: 'dsad88…4558', price: '5000.52', status: 1 },
        { id: Math.random(), title: '三级青铜甲犀牛', text: 'dsad88…4558', price: '2000.52', status: 1 },
        { id: Math.random(), title: '四级玄铁甲犀牛', text: 'dsad88…4558', price: '1500.52', status: 1 }
      ],
      tabs: [
        { id: 0, name: '全部' },
        { id: 1, name: '等级卡牌' },
        { id: 2, name: '权益卡牌' }
      ]
    }
  },
  created() {
    this.option = this.options
  },
  watch: {
    active: {
      handler(i) {
        i == 0 ? (this.cardList = this.cardLists) : (this.cardList = this.cardLists.filter((e) => e.status == i))
      },
      immediate: true
    },
    num: {
      handler(num) {
        this.number = 0
        this.option = this.options.filter((e) => e.id == num)[0]
        console.log(this.option)
      },
      immediate: true
    },
    number: {
      handler(number) {
        this.menu = this.option.name.filter((e) => e.id == number)[0]
        console.log(this.menu)
      }
      // immediate: true
    }
  },
  methods: {
    // 取消筛选
    off() {
      this.number = 0
      this.active = 0
      this.col = false
      this.$nextTick(() => (this.num = 0))
      this.show = !this.show
    },
    // 确认筛选
    sure() {
      console.log(this.num, this.number, this.numbers)
      this.active = this.num
      this.col = true
      this.show = !this.show
    },
    // 查看卡牌详情
    goCardDetails(id) {
      console.log(id)
      sessionStorage.setItem('toggle', true)
      this.$router.push({ name: 'card_details' })
    }
  }
}
</script>

<style lang="less" scoped>
.marketNFT {
  margin-top: 1.2em;
  padding: 1em;
  .top {
    margin-bottom: 0.2rem;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
  }
  .tab {
    margin-bottom: 30px;
    color: #878d9a;
    font-size: 28px;
    display: flex;
    justify-content: space-between;
    .l {
      width: 76%;
      overflow: hidden;
      p {
        margin-right: 2em;
        float: left;
      }
      .active {
        color: #ffffff;
      }
    }
    .r .active {
      color: #227aee;
    }
  }
  .cardList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 0.4em;
    .item {
      margin: 14px 0;
      width: 48%;
      // height: 500px;
      background: #1b2333;
      border-radius: 8px;
      color: #fff;
      padding: 0.8em;
      box-sizing: border-box;
      line-height: 1.6em;
      letter-spacing: 2px;
      .img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .title {
        font-size: 30px;
      }
      .text {
        color: #878d9a;
        font-size: 26px;
      }
      .price {
        font-size: 26px;
        display: flex;
        align-items: center;
        img {
          margin-right: 10px;
          width: 28px;
          height: 28px;
        }
      }
    }
  }
  .options {
    font-size: 32px;
    padding: 20px;
    height: 100%;
    .title {
      margin: 20px 0;
    }
    .content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      p {
        margin: 10px;
        font-size: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 72px;
        border: 1px solid #8d94a2;
        border-radius: 44px;
      }
      .active {
        border: none;
        background: #227aee;
      }
    }
    .btn {
      width: 90%;
      position: absolute;
      bottom: 4em;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .van-button {
        letter-spacing: 2px;
        font-size: 30px;
        border: none;
        background: none;
        color: #fff !important;
      }
      .off {
        width: 36%;
      }
      .sure {
        width: 56%;
      }
    }
  }
}
</style>