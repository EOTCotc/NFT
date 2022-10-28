<template>
  <div id="one">
    <van-popup v-model="show">
      <title>合成中，请等待……</title>
      <div class="box">
        <template v-for="item in imgs">
          <img :src="item.img"
               :key="item.id">

        </template>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      imgs: [
        { id: Math.random(), img: require('@/assets/img/Compose/actual-100-before.jpg') },
        { id: Math.random(), img: require('@/assets/img/Compose/middle-100-before.jpg') },
        { id: Math.random(), img: require('@/assets/img/Compose/high-100-before.jpg') },
        { id: Math.random(), img: require('@/assets/img/Compose/4-before.png') },
        { id: Math.random(), img: require('@/assets/img/Compose/actual-200-before.jpg') },
        { id: Math.random(), img: require('@/assets/img/Compose/middle-200-before.jpg') },
        { id: Math.random(), img: require('@/assets/img/Compose/high-200-before.jpg') },
        { id: Math.random(), img: require('@/assets/img/Compose/5-before.png') },
        { id: Math.random(), img: require('@/assets/img/Compose/actual-300-before.jpg') },
        { id: Math.random(), img: require('@/assets/img/Compose/middle-300-before.jpg') },
        { id: Math.random(), img: require('@/assets/img/Compose/high-300-before.jpg') },
        { id: Math.random(), img: require('@/assets/img/mysteryBox.png') }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.box img:nth-child(1) {
  transform: rotateY(0deg) translateZ(300px);
}
.box img:nth-child(2) {
  transform: rotateY(36deg) translateZ(300px);
}
.box img:nth-child(3) {
  transform: rotateY(72deg) translateZ(300px);
}
.box img:nth-child(4) {
  transform: rotateY(108deg) translateZ(300px);
}
.box img:nth-child(5) {
  transform: rotateY(144deg) translateZ(300px);
}
.box img:nth-child(6) {
  transform: rotateY(180deg) translateZ(300px);
}
.box img:nth-child(7) {
  transform: rotateY(216deg) translateZ(300px);
}
.box img:nth-child(8) {
  transform: rotateY(252deg) translateZ(300px);
}
.box img:nth-child(9) {
  transform: rotateY(288deg) translateZ(300px);
}
.box img:nth-child(10) {
  transform: rotateY(324deg) translateZ(300px);
}
.box img:nth-child(11) {
  transform: rotateY(360deg) translateZ(300px);
}
@keyframes run {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: rotateX(20deg) rotateY(90deg);
  }
  50% {
    transform: rotateX(0deg) rotateY(180deg);
  }
  75% {
    transform: rotateX(-20deg) rotateY(270deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(360deg);
  }
}

.van-popup {
  width: 100vw;
  height: 100vh;
  background: transparent;
  title {
    width: 100vw;
    display: block;
    color: white;
    font-size: 40px;
    position: relative;
    top: 20vh;
    text-align: center;
  }
  .box {
    width: 180px;
    // height: 450px;
    margin: 200px auto;
    position: fixed;
    top: 26vh;
    left: 0;
    bottom: 0;
    right: 0;
    transform-style: preserve-3d;
    transform: rotateX(-5deg) rotateY(0deg);
    animation: run 10s linear infinite;
  }
  .box img {
    width: 180px;
    // height: 450px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;
  }
}
</style>