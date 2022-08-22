<template>
  <div class="home">
    <div class="logo">
      <img src="@/assets/img/nftlogo.png"
           alt="" />
      <img class="img-text"
           src="@/assets/img/homeTop2.png"
           alt="" />
    </div>

    <div class="jrwm">
      <van-button type="info"
                  @click="toRouter_view">加入我们</van-button>
    </div>

    <div class="main">
      <article class="content">
        <p>故事背景</p>
        <section>
          犀牛，自古以来便是灵兽。《尔雅·释地》谓“南方之美者，有梁山之犀、象焉。”《墨子·公输》“荆有云梦，犀、兕、麋、鹿满之，家中摆玉雕犀牛，期望以此可以起到除去煞气，招财进宝心有灵犀之意。寓意“心有灵犀一点通”，是智慧的象征，而且犀牛的形象非常有力量，是力量实力的象征。
        </section>
      </article>
      <article class="content"
               :style="{ marginTop: '1rem' }">
        <p>人物简介</p>
        <section>
          关于犀牛的记载，最早可追溯到尧舜时期，传说皋陶利用犀牛独一无二的角，来宣示他制定法律的决心，以及折角代表违法必究的公心。在我们司法官皋陶的管制下，他自作了中国有史以来第一个可追溯到的法典——《狱典》。战国早期，商鞅在秦国推行法派学说治国时，尊独角兽为法神，是公正、威信的象征。汉代的法官，御史和执掌刑狱的官员都穿带有犀牛的服饰。唐明以来，犀牛成了御史等监察官员的标志。
        </section>
      </article>

      <div class="wzBox">
        <img src="@/assets/img/card/rhinoceros-grade1.png"
             width="146px"
             alt="" />
        <img src="@/assets/img/card/rhinoceros-grade2.png"
             width="146px"
             alt="" />
        <img src="@/assets/img/card/rhinoceros-grade3.png"
             width="146px"
             alt="" />
        <img src="@/assets/img/card/rhinoceros-grade4.png"
             width="146px"
             alt="" />
        <img src="@/assets/img/card/rhinoceros-grade5.png"
             width="146px"
             alt="" />
      </div>
      <div class="pay">
        <van-button type="info"
                    @click="toRouter_view">去购买</van-button>
      </div>

      <article class="content"
               :style="{ marginTop: '2rem' }">
        <p>IP背景</p>
        <section>
          犀牛，作为美好的代名词，历经千年，最终以守护神的姿态出现在大家面前。它，威严神圣、却又外形多变，似牛若龟，彰显坚若磐石。现在，它用刀枪不入的身躯，守护您的交易安全；
        </section>
        <section>
          在犀牛守护的这片天地里，EOTC以安全第一为己任，它是通往虚拟世界的信任桥梁，同时秉着公平公正公开的原则，为大家提供安全、稳定、信任的交易环境。把每一笔财富交给犀牛一样公平公正的EOTC来守护，EOTC
          安全第一！
        </section>
      </article>
      <article class="content"
               :style="{ marginTop: '2rem' }">
        <p>NFT介绍</p>
        <section>
          犀，集万象所成，方显大智慧；吐纳天地精华，得金刚之躯。余以一犀，御朗朗乾坤，护钱财交易安全，公平为本，公正为心，公开为形，以致天下。
        </section>
      </article>
    </div>

    <div class="main-2">
      <div class="img-p">
        <div>
          <img src="@/assets/img/equityItem1.png"
               alt="" />
          <section class="sec-p">
            <p>创世会权益NFT</p>
            <p :style="{ padding: '5px' }">
              总量：<span :style="{ color: '#479DFF' }">66</span>
            </p>
            <p :style="{ color: '#fc7542ff' }">分红证明书</p>
          </section>
        </div>
        <div>
          <img src="@/assets/img/equityItem2.png"
               alt="" />
          <section class="sec-p">
            <p>联合会权益NFT</p>
            <p :style="{ padding: '5px' }">
              总量：<span :style="{ color: '#479DFF' }">666</span>
            </p>
            <p :style="{ color: '#fc7542ff' }">分红证明书</p>
          </section>
        </div>
      </div>
    </div>

    <!-- 交易成功提示 -->
    <div class="success">
      <van-overlay :show="show"
                   @click="show = false">
        <div class="wrapper"
             @click.stop>
          <div class="maskbox">
            <div style="color: #333333">
              交易成功，等待区块确认
            </div>
            <div>
              <p @click="show= false">
                好的</p>
            </div>
            <img class="img"
                 src="../../assets/img/successTop.png"
                 alt="警告" />
          </div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toRouter_view() {
      this.$router.push({
        name: 'CurrencyTrading'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  background-color: rgb(18, 25, 42);
  padding: 30px 0;
  margin-top: 2.5rem;
  .footer-p {
    color: #fff;
    font-size: 0.4rem;
    margin-left: 20px;
  }
  .img-icons {
    img {
      margin: 0 20px;
    }
  }
}
.pay {
  display: flex;
  justify-content: center;
  button {
    width: 4rem;
  }
}

.home {
  width: 100vw;
  display: flex;
  position: relative;
  background-color: rgb(8, 11, 19);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  color: #fff;
  .logo {
    width: 100vw;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      width: 8rem;
      height: 8rem;
    }
    .img-text {
      position: absolute;
      width: 80%;
      height: 150px;
      bottom: 60px;
    }
  }
}

.jrwm {
  width: 100vw;
  display: flex;
  justify-content: center;
  button {
    width: 3.5rem;
  }
  margin-bottom: 100px;
}

.main {
  p {
    text-align: center;
    font-size: 0.5rem;
    position: relative;
    margin-bottom: 0.8rem;
  }
  p::before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 10px;
    left: 50%;
    bottom: -5px;
    transform: translateX(-50%);
    background: rgb(51, 136, 247);
    display: block;
  }
  .content {
    font-size: 0.35rem;
    line-height: 0.8rem;
  }
  padding: 0 25px;
}

.wzBox {
  display: flex;
  overflow-x: auto;
  margin: 1rem 0;
}

.main-2 {
  color: aliceblue;
  margin-top: 1rem;
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
    }
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .maskbox {
    width: 510px;
    height: 333px;
    background-color: #fff;
    border-radius: 20px;
    position: relative;

    div {
      &:nth-child(1) {
        padding: 100px 30px 40px 30px;
        font-size: 32px;
        line-height: 70px;
        text-align: center;
        font-family: PingFang SC-Regular, PingFang SC;
      }
      &:nth-child(2) {
        width: 100%;
        height: 95px;
        line-height: 95px;
        display: flex;
        align-items: center;
        font-size: 32px;
        p {
          width: 340px;
          height: 88px;
          background: #237ff8;
          border-radius: 44px 44px 44px 44px;
          opacity: 1;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
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
</style>
