<template>
  <div id="three">
    <van-popup v-model="show"
               :closeable="!show1"
               close-icon="close">
      <div class="imgs"
           v-if="show1">
        <div class="img"><img src="@/assets/img/Compose/1.jpg"></div>
        <div class="img"><img src="@/assets/img/Compose/1.jpg"></div>
        <div class="img"><img src="@/assets/img/Compose/2.jpg"></div>
      </div>

      <!-- 合成成功 -->
      <div class="pics"
           v-if="show2">
        <p>
          <img src="@/assets/img/Compose/3-before.png">
          <img src="@/assets/img/synth/success.png">
        </p>
      </div>

      <!-- 合成失败 -->
      <div class="images"
           v-if="show3">
        <div class="image">
          <p><img src="@/assets/img/Compose/1.jpg"></p>
          <p><img src="@/assets/img/Compose/2.jpg"></p>
        </div>
        <div class="img"><img src="@/assets/img/synth/failed.png"></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  props: ['primaryCard', 'time'],
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false
    }
  },
  created() {
    this.showTime()
  },
  methods: {
    showTime() {
      // console.log(this.primaryCard)
      // let time = Math.random()
      console.log(this.time)
      this.show = true
      this.show1 = true
      setTimeout(() => {
        this.show1 = false
      }, 2000)
      setTimeout(() => {
        if (this.primaryCard == 'one') {
          this.show2 = true
        }
        if (this.primaryCard == 'two') {
          this.time == 3 ? (this.show2 = true) : (this.show3 = true)
        }
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
        left: 8%;
        animation: rotate1 2s linear infinite;
      }

      &:nth-of-type(2) {
        right: 8%;
        animation: rotate2 2s linear infinite;
      }

      &:nth-of-type(3) {
        right: 30%;
        animation: rotate3 2s linear infinite;
      }

      img {
        width: 100%;
      }
    }
  }

  .pics {
    width: 100vw;
    margin-top: 26vh;

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

  .images {
    position: relative;

    .image {
      position: absolute;
      top: 30vh;
      width: 100%;

      p {
        position: absolute;
        width: 40%;

        &:nth-of-type(1) {
          left: 20%;
        }

        &:nth-of-type(2) {
          right: 20%;
        }

        img {
          width: 100%;
        }
      }
    }

    .img {
      position: absolute;
      width: 100%;
      top: 52vh;
      left: 10%;

      img {
        width: 80%;
      }
    }
  }
}

@keyframes rotate1 {
  0% {
    left: 8%;
  }

  60% {
    left: 20%;
    opacity: 1;
  }

  90% {
    left: 20%;
    transform: rotate(-40deg);
  }

  100% {
    left: 20%;
    transform: rotate(-40deg);
    opacity: 0.5;
  }
}

@keyframes rotate2 {
  0% {
    right: 8%;
  }

  60% {
    right: 20%;
    opacity: 1;
  }

  90% {
    right: 20%;
    transform: rotate(40deg);
  }

  100% {
    right: 20%;
    transform: rotate(40deg);
    opacity: 0.5;
  }
}

@keyframes rotate3 {
  0% {
    top: 40vh;
    right: 30%;
    opacity: 1;
  }

  80% {
    top: 30vh;
    opacity: 1;
  }

  100% {
    top: 30vh;
    opacity: 0.5;
  }
}
</style>