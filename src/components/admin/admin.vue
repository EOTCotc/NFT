<template>
  <div id="admin">
    <div class="top">
      <van-nav-bar title="管理数据上传"
                   fixed
                   :border=false
                   z-index='99'
                   placeholder />
    </div>

    <div class="content">
      <van-tabs background="#121933"
                sticky
                color="#237FF8"
                offset-top="1.2rem"
                title-inactive-color="#666"
                title-active-color="#fff"
                v-model="synthActiveName">
        <van-tab title="等级卡牌"
                 name="1">

          <div class="nowaitcard"
               v-if="rankCardFlag.length=== 0">
            <van-empty class="custom-image"
                       :image="require('@/assets/img/cardPage/cardNull.png')"
                       description="暂无需上传的等级卡牌" />
          </div>
          <div v-else
               class="waitcard">

            <div class="waitcarditem"
                 v-for="item in rankCardFlag.filter((e) => {return e.Activate==value1})"
                 :key="item.num">
              <div class="left">
                <img :src="item.image">
              </div>
              <div class="right">
                <div>
                  <span>{{ item.title }}</span>
                  <span>
                    <van-checkbox icon-size="16px"
                                  @change="look(item.Activate,item.num,$event)"
                                  v-model="item.ischecked"></van-checkbox>
                  </span>
                </div>
                <div>#{{ item.num }}</div>
                <div>钱包地址：{{ item.casting}}</div>
              </div>

              <!-- 页脚 -->
              <div class="waitfooter">
                <div class="left">
                  <p><span class="sl">
                      <van-checkbox v-model="changeCheck">全选</van-checkbox>
                    </span>已选择 {{ selecked }} 个</p>
                  <!-- <p>提示:只能同时选择一种类型的NFT</p> -->
                </div>
                <div class="right">
                  <van-button round
                              :disabled="isselect"
                              block
                              type="info"
                              @click="getRank">上传</van-button>
                </div>
              </div>

            </div>

            <div class="nowaitcard"
                 v-if="!rankCardFlag.filter((e) => {return e.Activate==value1}).length">
              <van-empty class="custom-image "
                         :image="require('@/assets/img/cardPage/cardNull.png')"
                         description="该等级卡牌暂无需上传" />
            </div>

          </div>

          <van-dropdown-menu z-index="99999"
                             v-if="rankCardFlag.length">
            <van-dropdown-item v-model="value1"
                               @change="changeList"
                               background="#121933"
                               :options="option1" />
          </van-dropdown-menu>
        </van-tab>

        <van-tab title="权益卡牌"
                 name="2">

          <div class="nowaitcard"
               v-if="equityCard.length=== 0">
            <van-empty class="custom-image"
                       :image="require('@/assets/img/cardPage/cardNull.png')"
                       description="暂无需上传的权益卡牌" />
          </div>
          <div v-else
               class="waitcard">

            <div class="waitcarditem"
                 v-for="item in equityCard.filter((e) => {return e.Activate==value2})"
                 :key="item.num">
              <div class="left">
                <img :src="item.image">
              </div>
              <div class="right">
                <div>
                  <span>{{ item.title }}</span>
                  <span>
                    <van-checkbox icon-size="16px"
                                  @change="looks(item.Activate,item.num,$event)"
                                  v-model="item.ischecked"></van-checkbox>
                  </span>
                </div>
                <div>#{{ item.num }}</div>
                <div>钱包地址：{{ item.casting}}</div>
              </div>

              <!-- 页脚 -->
              <div class="waitfooter">
                <div class="left">
                  <p><span class="sl">
                      <van-checkbox v-model="changeChecks">全选</van-checkbox>
                    </span>已选择 {{ seleckeds }} 个</p>
                  <!-- <p>提示:只能同时选择一种类型的NFT</p> -->
                </div>
                <div class="right">
                  <van-button round
                              :disabled="isselects"
                              block
                              type="info"
                              @click="getEquity">上传</van-button>
                </div>
              </div>

            </div>

            <div class="nowaitcard"
                 v-if="!equityCard.filter((e) => {return e.Activate==value2}).length">
              <van-empty class="custom-image "
                         :image="require('@/assets/img/cardPage/cardNull.png')"
                         description="该权益卡牌暂无需上传" />
            </div>

          </div>

          <van-dropdown-menu z-index="99999"
                             v-if="equityCard.length">
            <van-dropdown-item v-model="value2"
                               @change="changeLists"
                               background="#121933"
                               :options="option2" />
          </van-dropdown-menu>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      synthActiveName: '1',
      i: 1,
      e: 1,
      value1: 1,
      value2: 1,
      an: null,
      bn: null,
      rank: [],
      equity: [],
      option1: [
        { text: '一级卡牌', value: 1 },
        { text: '二级卡牌', value: 2 },
        { text: '三级卡牌', value: 3 },
        { text: '四级卡牌', value: 4 },
        { text: '五级卡牌', value: 5 }
      ],
      option2: [
        { text: '联合会权益卡', value: 1 },
        { text: '创世会权益卡', value: 2 },
        { text: '实时节点分红权益卡', value: 3 },
        { text: '实时节点永久分红权益卡', value: 4 },
        { text: '中级节点分红权益卡', value: 5 },
        { text: '中级节点永久分红权益卡', value: 6 },
        { text: '高级节点分红权益卡', value: 7 },
        { text: '高级节点永久分红权益卡', value: 8 },
        { text: '免手续费权益卡', value: 9 }
      ],
      // 等级卡牌
      rankCardFlag: [
        { Activate: 1, status: false, num: '000001', image: require('@/assets/img/Compose/3-before.png'), title: '3级青铜甲犀牛', casting: 'asdh44654654sd', ischecked: false },
        { Activate: 4, status: false, num: '000002', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'asdh44654654sd', ischecked: false },
        { Activate: 4, status: false, num: '000092', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'asdh44654654sd', ischecked: false },
        { Activate: 2, status: false, num: '000031', image: require('@/assets/img/Compose/3-before.png'), title: '2级青铜甲犀牛', casting: 'asdh44654654sd', ischecked: false },
        { Activate: 4, status: false, num: '000102', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'asdh44654654sd', ischecked: false },
        { Activate: 5, status: false, num: '000003', image: require('@/assets/img/Compose/5-before.png'), title: '5级黄金甲犀牛', casting: 'asdh44654654sd', ischecked: false }
      ],
      // 权益卡牌
      equityCard: [
        { Activate: 1, status: false, num: '000001', image: require('@/assets/img/Compose/3-before.png'), title: '3级青铜甲犀牛', casting: 'asdh44654654sd', ischecked: false },
        { Activate: 4, status: false, num: '000002', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'asdh44654654sd', ischecked: false },
        { Activate: 4, status: false, num: '000092', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'asdh44654654sd', ischecked: false },
        { Activate: 2, status: false, num: '000031', image: require('@/assets/img/Compose/3-before.png'), title: '2级青铜甲犀牛', casting: 'asdh44654654sd', ischecked: false },
        { Activate: 4, status: false, num: '000102', image: require('@/assets/img/Compose/4-before.png'), title: '4级白银甲犀牛', casting: 'asdh44654654sd', ischecked: false },
        { Activate: 5, status: false, num: '000003', image: require('@/assets/img/Compose/5-before.png'), title: '5级黄金甲犀牛', casting: 'asdh44654654sd', ischecked: false }
      ]
    }
  },
  methods: {
    look(a, b, c) {
      console.log(a, b, c)
      this.an = a
      if (c) {
        this.rank.push(b)
      } else {
        this.rank.splice(
          this.rank.findIndex((item) => item === b),
          1
        )
      }
      console.log(this.an, this.rank)
    },
    looks(a, b, c) {
      console.log(a, b, c)
      this.bn = a
      if (c) {
        this.equity.push(b)
      } else {
        this.equity.splice(
          this.equity.findIndex((item) => item === b),
          1
        )
      }
      console.log(this.bn, this.equity)
    },
    changeList(i) {
      this.i = i
      this.rank = []
      // this.changeCheck = false
      this.rankCardFlag.map((e) => (e.ischecked = false))
    },
    changeLists(e) {
      this.e = e
      this.equity = []
      // this.changeChecks = false
      this.equityCard.map((e) => (e.ischecked = false))
    },
    // 上传等级卡牌
    getRank() {
      console.log(this.an, this.rank)
      this.$toast('上传成功')
    },
    // 上传权益卡牌
    getEquity() {
      console.log(this.bn, this.equity)
      this.$toast('上传成功')
    }
  },
  computed: {
    // 用户选择的上传卡牌数
    selecked() {
      return this.rankCardFlag.filter((card) => card.ischecked === true).length
    },
    seleckeds() {
      return this.equityCard.filter((card) => card.ischecked === true).length
    },
    // 是否可上传卡牌
    isselect() {
      return this.selecked > 0 ? false : true
    },
    isselects() {
      return this.seleckeds > 0 ? false : true
    },
    changeCheck: {
      get() {
        return this.selecked == this.rankCardFlag.filter((e) => e.Activate == this.i).length
      },
      set(v) {
        if (v) {
          this.rankCardFlag.filter((e) => e.Activate == this.i).map((e) => (e.ischecked = true))
        } else {
          this.rankCardFlag.filter((e) => e.Activate == this.i).map((e) => (e.ischecked = false))
        }
      }
    },
    changeChecks: {
      get() {
        return this.seleckeds == this.equityCard.filter((e) => e.Activate == this.e).length
      },
      set(v) {
        if (v) {
          this.equityCard.filter((e) => e.Activate == this.e).map((e) => (e.ischecked = true))
        } else {
          this.equityCard.filter((e) => e.Activate == this.e).map((e) => (e.ischecked = false))
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  height: 1.2rem;
  /deep/ .van-nav-bar__content {
    background-color: #1b2945;
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

.content {
  background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);

  /deep/ .van-dropdown-menu__bar {
    background: #121933;
    height: 70px;
    .van-dropdown-menu__title {
      color: #fff;
    }
    width: 100%;
    position: fixed;
    top: 178px;
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

  //无卡样式
  .nowaitcard {
    padding-top: 2.8rem;
    .custom-image /deep/ .van-empty__image {
      width: 260px;
      height: 172px;
    }
    .custom-image /deep/ .van-empty__description {
      font-size: 28px;
    }
  }

  .waitcard {
    width: 100%;
    padding-top: 70px;
    padding-bottom: 100px;
    background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);

    .waitcarditem {
      width: 690px;
      padding: 30px;
      margin: 0 auto 30px;
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
          color: #858992;
          font-size: 22px;
          margin-top: 10px;
        }
      }
    }
    .right {
      display: flex;
      justify-content: center;
      /deep/ .van-button {
        width: 260px;
        text-align: center;
        .van-button__text {
          width: 100%;
        }
      }
    }
  }
}
</style>