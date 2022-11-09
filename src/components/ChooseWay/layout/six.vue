<template>
  <div id="six">
    <van-popup v-model="show"
               :closeable="!show1"
               close-icon="close">
      <div class="imgs"
           v-if="show1">
        <div class="img"
             v-for="item in imgs"
             :key="item.id"><img :src="item.img"></div>
      </div>

      <!-- 合成成功 -->
      <div class="pics"
           v-if="show2">
        <p>
          <img :src="img">
          <img src="@/assets/img/synth/success.png">
        </p>
      </div>

    </van-popup>
  </div>
</template>

<script>
export default {
  props: ['cardNode'],
  data() {
    return {
      show: true,
      show1: false,
      show2: false,
      imgs: [],
      img: null
    }
  },
  created() {
    this.showTime()
  },
  methods: {
    showTime() {
      // console.log(this.cardNode)
      if (this.cardNode == 'actual') {
        this.imgs = [
          { id: Math.random(), img: require('@/assets/img/Compose/actual-100-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/actual-100-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/actual-100-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/actual-200-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/actual-200-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/actual-300-before.jpg') }
        ]
        this.img = require('@/assets/img/Compose/actual-forever.jpg')
      } else if (this.cardNode == 'middle') {
        this.imgs = [
          { id: Math.random(), img: require('@/assets/img/Compose/middle-100-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/middle-100-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/middle-100-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/middle-200-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/middle-200-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/middle-300-before.jpg') }
        ]
        this.img = require('@/assets/img/Compose/middle-forever.jpg')
      } else if (this.cardNode == 'high') {
        this.imgs = [
          { id: Math.random(), img: require('@/assets/img/Compose/high-100-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/high-100-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/high-100-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/high-200-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/high-200-before.jpg') },
          { id: Math.random(), img: require('@/assets/img/Compose/high-300-before.jpg') }
        ]
        this.img = require('@/assets/img/Compose/high-eiky.jpg')
      }
      this.show1 = true
      setTimeout(() => {
        this.show1 = false
      }, 2000)
      setTimeout(() => {
        this.show2 = true
      }, 2000)
    }
  }
}
</script>

<style lang="less" scoped>
.van-popup {
  width: 100vw;
  height: 100vh;
  background: transparent;
  /deep/ .van-popup__close-icon--top-right {
    font-size: 70px;
    top: 73%;
    left: 46%;
  }
  .imgs {
    position: relative;

    .img {
      position: absolute;
      top: 30vh;
      width: 30%;

      &:nth-of-type(1) {
        animation: rotate1 2s linear infinite;
      }

      &:nth-of-type(2) {
        animation: rotate2 2s linear infinite;
      }

      &:nth-of-type(3) {
        animation: rotate3 2s linear infinite;
      }

      &:nth-of-type(4) {
        animation: rotate4 2s linear infinite;
      }

      &:nth-of-type(5) {
        animation: rotate5 2s linear infinite;
      }

      &:nth-of-type(6) {
        animation: rotate6 2s linear infinite;
      }

      img {
        width: 100%;
      }
    }
  }

  .pics {
    width: 100vw;
    margin-top: 24vh;

    p {
      text-align: center;
      position: relative;

      img {
        margin: 0 auto;
        width: 50%;

        &:nth-last-of-type(1) {
          width: 70%;
          position: absolute;
          bottom: -60px;
          right: 14%;
        }
      }
    }
  }
}

@keyframes rotate1 {
  0% {
    left: 2%;
    top: 20vh;
  }

  50% {
    left: 2%;
    top: 20vh;
  }

  80% {
    left: 35%;
    top: 30vh;
  }

  100% {
    left: 35%;
    top: 30vh;
  }
}

@keyframes rotate2 {
  0% {
    left: 35%;
    top: 20vh;
  }

  50% {
    left: 35%;
    top: 20vh;
  }

  80% {
    left: 35%;
    top: 30vh;
  }

  100% {
    left: 35%;
    top: 30vh;
  }
}

@keyframes rotate3 {
  0% {
    right: 2%;
    top: 20vh;
  }

  50% {
    right: 2%;
    top: 20vh;
  }

  80% {
    right: 35%;
    top: 30vh;
  }

  100% {
    right: 35%;
    top: 30vh;
  }
}

@keyframes rotate4 {
  0% {
    left: 2%;
    top: 45vh;
  }

  50% {
    left: 2%;
    top: 45vh;
  }

  80% {
    left: 35%;
    top: 30vh;
  }

  100% {
    left: 35%;
    top: 30vh;
  }
}

@keyframes rotate5 {
  0% {
    left: 35%;
    top: 45vh;
  }

  50% {
    left: 35%;
    top: 45vh;
  }

  80% {
    left: 35%;
    top: 30vh;
  }

  100% {
    left: 35%;
    top: 30vh;
  }
}

@keyframes rotate6 {
  0% {
    right: 2%;
    top: 45vh;
  }

  50% {
    right: 2%;
    top: 45vh;
  }

  80% {
    right: 35%;
    top: 30vh;
  }

  100% {
    right: 35%;
    top: 30vh;
  }
}
</style>