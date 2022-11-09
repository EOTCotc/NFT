<template>
  <div id="five">
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
  props: ['nodeMade', 'number'],
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
      // console.log(this.nodeMade)
      if (this.nodeMade == 'three') {
        this.imgs = [
          { id: Math.random(), img: require('@/assets/img/Compose/3-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/3-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/3-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/3-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/3-before.png') }
        ]
        //按概率
        if (this.number == 100) this.img = require('@/assets/img/Compose/actual-100-before.jpg')
        if (this.number == 200) this.img = require('@/assets/img/Compose/actual-200-before.jpg')
        if (this.number == 300) this.img = require('@/assets/img/Compose/actual-300-before.jpg')
      } else if (this.nodeMade == 'four') {
        this.imgs = [
          { id: Math.random(), img: require('@/assets/img/Compose/4-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/4-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/4-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/4-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/4-before.png') }
        ]
        //按概率
        if (this.number == 100) this.img = require('@/assets/img/Compose/middle-100-before.jpg')
        if (this.number == 200) this.img = require('@/assets/img/Compose/middle-200-before.jpg')
        if (this.number == 300) this.img = require('@/assets/img/Compose/middle-300-before.jpg')
      } else if (this.nodeMade == 'five') {
        this.imgs = [
          { id: Math.random(), img: require('@/assets/img/Compose/5-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/5-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/5-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/5-before.png') },
          { id: Math.random(), img: require('@/assets/img/Compose/5-before.png') }
        ]
        //按概率
        if (this.number == 100) this.img = require('@/assets/img/Compose/high-100-before.jpg')
        if (this.number == 200) this.img = require('@/assets/img/Compose/high-200-before.jpg')
        if (this.number == 300) this.img = require('@/assets/img/Compose/high-300-before.jpg')
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
      width: 40%;

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
    right: 30%;
  }

  20% {
    left: 2%;
    top: 24vh;
  }

  40% {
    left: 2%;
    top: 24vh;
  }

  50% {
    left: 9%;
    top: 24vh;
  }

  70% {
    left: 9%;
    top: 24vh;
  }

  90% {
    right: 30%;
    top: 30vh;
  }

  100% {
    right: 30%;
    top: 30vh;
  }
}

@keyframes rotate2 {
  0% {
    right: 30%;
  }

  20% {
    left: 9%;
  }

  40% {
    left: 9%;
  }

  50% {
    left: 9%;
    top: 57vh;
  }

  70% {
    left: 9%;
    top: 57vh;
  }

  90% {
    right: 30%;
    top: 30vh;
  }

  100% {
    right: 30%;
    top: 30vh;
  }
}

@keyframes rotate3 {
  0% {
    right: 30%;
  }

  20% {
    right: 2%;
    top: 24vh;
  }

  40% {
    right: 2%;
    top: 24vh;
  }

  50% {
    right: 9%;
    top: 24vh;
  }

  70% {
    right: 9%;
    top: 24vh;
  }

  90% {
    right: 30%;
    top: 30vh;
  }

  100% {
    right: 30%;
    top: 30vh;
  }
}

@keyframes rotate4 {
  0% {
    right: 30%;
  }

  20% {
    right: 9%;
  }

  40% {
    right: 9%;
  }

  50% {
    right: 9%;
    top: 57vh;
  }

  70% {
    right: 9%;
    top: 57vh;
  }

  90% {
    right: 30%;
    top: 30vh;
  }

  100% {
    right: 30%;
    top: 30vh;
  }
}

@keyframes rotate5 {
  0% {
    right: 30%;
  }

  20% {
    top: 36vh;
  }

  50% {
    right: 30%;
    top: 36vh;
  }

  70% {
    right: 30%;
    top: 36vh;
  }

  90% {
    top: 30vh;
    right: 30%;
  }

  100% {
    top: 30vh;
    right: 30%;
  }
}
</style>