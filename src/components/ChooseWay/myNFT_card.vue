<template>
  <div class="mynft_container">
    <div class="emtypePage">
      <div class="header">
        <img src="@/assets/img/nftlogo.png"
             alt="" />
      </div>
      <div class="title1">权益卡牌</div>
      <div class="empry"
           v-if="cardList.length === 0">
        <img src="@/assets/img/cardPage/cardNull.png"
             alt="" />
        暂无权益卡牌
      </div>
      <div class="main"
           v-else>
        <div class="img-p">
          <div class="card-bg"
               v-for="(item, i) in cardList"
               :key="i"
               @click="createCard(item)">
            <template v-if="item.USDT==='1.000000'">
              <img src="@/assets/img/equityItem2.png"
                   alt="" />
              <section class="sec-p">
                <p>联合会权益NFT</p>
              </section>
            </template>
            <template v-else-if="item.USDT==='2000.000000'">
              <img src="@/assets/img/equityItem1.png"
                   alt="" />
              <section class="sec-p">
                <p>创世会权益NFT</p>
              </section>
            </template>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { myNft } from '@/api/newReqets'

export default {
  name: 'myNFT-list',
  data() {
    return {
      cardList: [],
      contentFlag: true,
      pageFlag: true
    }
  },
  created() {
    this.getMyNFT()
  },
  methods: {
    cardDetailsHandler() {
      this.$router.push({
        name: 'card_details'
      })
    },
    ownToggleHandler() {
      this.contentFlag = !this.contentFlag
    },
    waitToggleHandler() {
      this.contentFlag = !this.contentFlag
    },
    async getMyNFT() {
      const { data } = await myNft(1)
      // console.log(data)
      this.cardList = data
    },
    createCard(item) {
      this.$toast.clear()
      this.$toast.warning('卡牌铸造中，敬请期待！')
    }
  }
}
</script>

<style lang="less" scoped>
.empry {
  text-align: center;
  margin-top: 1rem;
  font-size: 0.6rem;
}

.mynft_container {
  width: 100vw;
  overflow-y: auto;
  color: #fff;
  background-color: rgb(8, 11, 19);
}

.header {
  width: 100vw;
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

.main {
  color: aliceblue;
  margin-top: 1rem;
  padding: 0 25px;
  .card-bg {
    background-color: #1b2333;
    padding-bottom: 0.4rem;
    border-radius: 15px;
  }
  .img-p {
    display: grid;
    grid-template: 1fr/1fr 1fr;
    gap: 0.5rem;

    img {
      width: 100%;
      height: 500px;
    }
    .sec-p {
      font-size: 0.4rem;
      text-align: center;
      padding: 10px 0;
      button {
        background-color: rgb(10, 77, 233);
        border: none;
        width: 100%;
        padding: 20px 0;
        margin-top: 15px;
        border-radius: 15px;
      }
      button:nth-child(2) {
        background-color: rgb(51, 60, 78);
      }
    }
  }
}
//内容不为空的样式
.haveCard {
  padding: 30px;
  .topNav {
    display: flex;
    margin-left: 10px;
    margin-bottom: 30px;
    p {
      color: #666;
      font-size: 0.5rem;
      margin-right: 40px;
    }
    .curentActive {
      color: #fff;
      display: block;
      margin-top: 5px;
      border-bottom: 5px solid #247cf9;
    }
  }
  //已拥有
  .ownPage {
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      width: 45%;
      background-color: #1b2335;
      text-align: center;
      border-radius: 10px;
      padding: 10px 0 30px 0;
      img {
        width: 290px;
        height: 390px;
      }
      p {
        margin-top: 15px;
        text-align: left;
        margin-left: 15px;
        color: #fff;
        font-size: 14px;
      }
    }
  }
  // 代领取
  .waitPage {
    li {
      background-color: #1b2335;
      display: flex;
      justify-content: space-between;
      padding: 15px 20px 15px 20px;
      border-radius: 8px;
      margin-bottom: 25px;
      .left {
        img {
          width: 150px;
          height: 220px;
        }
      }
      .right {
        margin-left: 30px;
        .title {
          color: white;
          font-size: 0.5rem;
          margin-bottom: 20px;
        }
        .msg {
          color: #ccc;
          font-size: 28px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2; //例如超过2行显示省略号
          overflow: hidden;
        }
      }
    }
  }
}
</style>
