<template>
  <div class="app">
    <Nav></Nav>
    <div class="contatiner">
      <div class="top">
        <transition-page>
          <router-view></router-view>
        </transition-page>
      </div>
    </div>
    <!-- <footer class="footer">
      <p class="img-icons">
        <img src="@/assets/img/icon-telegram.png"
             alt />
        <img src="@/assets/img/icon-twitter.png"
             alt />
        <img src="@/assets/img/icon-email.png"
             alt />
      </p>
      <p class="footer-p"> &copy;&nbsp;2022年EOTC版权所有。</p>
    </footer> -->
  </div>
</template>

<script>
import Nav from '@/components/Nav'

import transitionPage from '@/components/transitionPage'

export default {
  name: 'home-index',
  components: {
    Nav,
    transitionPage
  },

  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.app {
  width: 100vw;
  // height: 100vh;
  background-color: rgb(8, 11, 19);
}

.top {
  // padding-bottom: 1.5rem;
  background-color: rgb(8, 11, 19);
}

// .footer {
//   // background-color: rgb(18, 25, 42);
//   background: #11192b;
//   padding: 30px 0;
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   box-sizing: border-box;
//   .footer-p {
//     color: #fff;
//     font-size: 0.4rem;
//     margin-left: 20px;
//   }
//   .img-icons {
//     img {
//       margin: 0 20px;
//     }
//   }
// }
</style>
