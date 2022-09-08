<template>
  <div id="five">
    <van-popup v-model="show">
      <div class="imgs"
           v-if="show1">
        <template v-for="item in three">
          <div class="img"
               :key="item.id"><img :src="item.url"></div>
        </template>
        <!-- <div class="img"><img src="../../../assets/img/Compose/1.jpg"></div>
        <div class="img"><img src="../../../assets/img/Compose/1.jpg"></div>
        <div class="img"><img src="../../../assets/img/Compose/1.jpg"></div>
        <div class="img"><img src="../../../assets/img/Compose/1.jpg"></div>
        <div class="img"><img src="../../../assets/img/Compose/1.jpg"></div> -->
      </div>

      <!-- 合成成功 -->
      <div class="pics"
           v-if="show2">
        <p>
          <img src="../../../assets/img/Compose/3-before.png">
          <img src="../../../assets/img/synth/success.png">
        </p>
      </div>

      <!-- 合成失败 -->
      <!-- <div class="images"
           v-if="show3">
        <div class="image">
          <p><img src="../../../assets/img/Compose/1.jpg"></p>
          <p><img src="../../../assets/img/Compose/1.jpg"></p>
          <p><img src="../../../assets/img/Compose/1.jpg"></p>
          <p><img src="../../../assets/img/Compose/1.jpg"></p>
          <p><img src="../../../assets/img/Compose/1.jpg"></p>
        </div>
        <div class="img"><img src="../../../assets/img/synth/failed.png"></div>
      </div> -->
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show1: false,
      show2: false,
      // show3: false,
      three: [
        { id: Math.random(), url: "require('../../../assets/img/Compose/3.jpg')" },
        { id: Math.random(), url: "require('../../../assets/img/Compose/3.jpg')" },
        { id: Math.random(), url: "require('../../../assets/img/Compose/3.jpg')" },
        { id: Math.random(), url: "require('../../../assets/img/Compose/3.jpg')" },
        { id: Math.random(), url: "require('../../../assets/img/Compose/3.jpg')" }
      ]
    }
  },
  created() {
    this.showTime()
  },
  methods: {
    showTime() {
      // let time = Math.random()
      // console.log(time)
      // this.show = true
      this.show1 = true
      setTimeout(() => {
        this.show1 = false
      }, 1500)
      setTimeout(() => {
        this.show2 = true
        // time > 0.5 ? (this.show2 = true) : (this.show3 = true)
      }, 1600)
    }
  }
}
</script>

<style lang="less" scoped>
.van-popup {
  width: 100vw;
  height: 100vh;
  background: transparent;

  .imgs {
    position: relative;

    .img {
      position: absolute;
      top: 30vh;
      width: 40%;

      &:nth-of-type(1) {
        animation: rotate1 1.5s linear infinite;
      }

      &:nth-of-type(2) {
        animation: rotate2 1.5s linear infinite;
      }

      &:nth-of-type(3) {
        animation: rotate3 1.5s linear infinite;
      }

      &:nth-of-type(4) {
        animation: rotate4 1.5s linear infinite;
      }

      &:nth-of-type(5) {
        animation: rotate5 1.5s linear infinite;
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

  // .images {
  //   position: relative;

  //   .image {
  //     width: 100%;

  //     p {
  //       position: absolute;
  //       width: 40%;

  //       &:nth-of-type(1) {
  //         left: 2%;
  //         top: 24vh;
  //       }

  //       &:nth-of-type(2) {
  //         left: 9%;
  //         top: 30vh;
  //       }

  //       &:nth-of-type(3) {
  //         right: 2%;
  //         top: 24vh;
  //       }

  //       &:nth-of-type(4) {
  //         right: 9%;
  //         top: 30vh;
  //       }

  //       &:nth-of-type(5) {
  //         right: 30%;
  //         top: 36vh;
  //       }

  //       img {
  //         width: 100%;
  //       }
  //     }
  //   }

  //   .img {
  //     position: absolute;
  //     width: 100%;
  //     top: 52vh;
  //     left: 10%;

  //     img {
  //       width: 80%;
  //     }
  //   }
  // }
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