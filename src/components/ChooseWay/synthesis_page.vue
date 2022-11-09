<template>
  <div class="synthesispage">
    <div class="top">
      <van-nav-bar title="合成"
                   left-arrow
                   fixed
                   z-index='99'
                   placeholder
                   @click-left="onClickLeft" />
    </div>
    <!-- 主体内容 -->
    <div class="sythcontent">
      <van-tabs background="#121933"
                sticky
                offset-top="1.2rem"
                title-inactive-color="#666"
                title-active-color="#fff"
                v-model="synthActiveName">
        <van-tab title="三级卡牌"
                 name="1">
          <div class="threecard">
            <!-- 头部标题 -->
            <div class="threecardTop">
              <div class="title">铸造合成三级卡牌</div>
              <img class="start1"
                   src="@/assets/img/synth/start1.png"
                   alt="" />
              <img class="start2"
                   src="@/assets/img/synth/start2.png"
                   alt="" />
            </div>
            <div class="synthcard">
              <!-- 添加卡牌 -->
              <div class="addcardwarp">
                <div class="addcard">
                  <div class="top"
                       @click="showCard(1.1,'L11')">
                    <p v-if="level[1][0]">
                      <img src="@/assets/img/Compose/1.jpg">
                    </p>
                    <p v-else>
                      <span class="cardAdd">+</span>
                      <br />
                      添加一级卡牌
                    </p>
                  </div>
                  <div @click="showCard(1.1,'L11')">
                    <p v-if="level[1][1]">
                      <img src="@/assets/img/Compose/1.jpg">
                    </p>
                    <p v-else>
                      <span class="cardAdd">+</span>
                      <br />
                      添加一级卡牌
                    </p>
                  </div>
                  <div @click="showCard(2,'L12')">
                    <p v-if="level[1][2]">
                      <img src="@/assets/img/Compose/2.jpg">
                    </p>
                    <p v-else>
                      <span class="cardAdd">+</span>
                      <br />
                      添加二级卡牌
                    </p>
                  </div>
                </div>
                <div class="addcardfooter">
                  <div class="ftop">
                    <van-button style="padding: 0 50px"
                                @click="msg ='two',synthNum=3,show1 = true"
                                :disabled="level[1][0]&&level[1][1]&&level[1][2]?false : true"
                                type="info">合成</van-button>
                  </div>
                  <p>成功概率80%</p>
                  <p>合成失败(20%)全部销毁</p>
                  <p>一级卡牌*2+二级卡牌 铸造合成三级卡牌</p>
                </div>
              </div>

              <!-- 添加卡牌 -->
              <div class="addcardwarp">
                <div class="addcard">
                  <div @click="showCard(1,'L20')">
                    <p v-if="level[2][0]">
                      <img src="@/assets/img/Compose/1.jpg">
                    </p>
                    <p v-else>
                      <span class="cardAdd">+</span>
                      <br />
                      添加一级卡牌
                    </p>
                  </div>
                  <div @click="showCard(2,'L21')">
                    <p v-if="level[2][1]">
                      <img src="@/assets/img/Compose/2.jpg">
                    </p>
                    <p v-else>
                      <span class="cardAdd">+</span>
                      <br />
                      添加二级卡牌
                    </p>
                  </div>
                </div>
                <div class="addcardfooter">
                  <div class="ftop">
                    <van-button style="padding: 0 50px"
                                @click="synthNum=2,show1 = true"
                                :disabled="level[2][0]&&level[2][1]?false : true"
                                type="info">合成</van-button>
                  </div>
                  <p>成功概率40%</p>
                  <p>合成失败(60%)全部销毁</p>
                  <p>一级卡牌+二级卡牌 铸造合成三级卡牌</p>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="权益卡"
                 name="2">
          <div class="equity">
            <!-- 分红权益卡牌 -->
            <div class="econtentTtem">
              <div class="etop">
                <p class="title">实时节点分红权益卡</p>
                <img class="start1"
                     src="@/assets/img/synth/start1.png"
                     alt="" />
                <img class="start2"
                     src="@/assets/img/synth/start2.png"
                     alt="" />
              </div>
              <div class="addcard"
                   @click="showCard(3,'eq0')">
                <p class="btn"
                   v-if="equity[0]">
                  <img src="@/assets/img/Compose/3-before.png">
                  <van-badge :content="equity[0]"
                             color="#FF6343" />
                </p>
                <p v-else>
                  <span class="add">+</span>
                  <br />
                  添加三级卡牌
                </p>
              </div>
              <div class="sythnBtn">
                <van-button @click="synthNum = 5,msg='three',show3 = true"
                            :disabled="equity[0]==5?false : true"
                            style="width: 170px"
                            type="info">合成</van-button>
              </div>
              <div class="msg">
                <p>成功概率100%</p>
                <p>5张三级青铜甲犀牛卡牌可合成一次</p>
                <p>合成后不可再次参与合成</p>
              </div>
            </div>

            <div class="econtentTtem">
              <div class="etop">
                <p class="title">中级节点分红权益卡</p>
                <img class="start1"
                     src="@/assets/img/synth/start1.png"
                     alt="" />
                <img class="start2"
                     src="@/assets/img/synth/start2.png"
                     alt="" />
              </div>
              <div class="addcard"
                   @click="showCard(4,'eq1')">
                <p class="btn"
                   v-if="equity[1]">
                  <img src="@/assets/img/Compose/4-before.png">
                  <van-badge :content="equity[1]"
                             color="#FF6343" />
                </p>
                <p v-else>
                  <span class="add">+</span>
                  <br />
                  添加四级卡牌
                </p>
              </div>
              <div class="sythnBtn">
                <van-button :disabled="equity[1]==5?false : true"
                            @click="synthNum = 5,msg='four',show3 = true"
                            style="width: 170px"
                            type="info">合成</van-button>
              </div>
              <div class="msg">
                <p>成功概率100%</p>
                <p>5张四级白银甲犀牛卡牌可合成一次</p>
                <p>合成后不可再次参与合成</p>
              </div>
            </div>

            <div style="padding-bottom: 20px"
                 class="econtentTtem">
              <div class="etop">
                <p class="title">高级节点分红权益卡</p>
                <img class="start1"
                     src="@/assets/img/synth/start1.png"
                     alt="" />
                <img class="start2"
                     src="@/assets/img/synth/start2.png"
                     alt="" />
              </div>
              <div class="addcard"
                   @click="showCard(5,'eq2')">
                <p class="btn"
                   v-if="equity[2]">
                  <img src="@/assets/img/Compose/5-before.png">
                  <van-badge :content="equity[2]"
                             color="#FF6343" />
                </p>
                <p v-else>
                  <span class="add">+</span>
                  <br />
                  添加五级卡牌
                </p>
              </div>
              <div class="sythnBtn">
                <van-button :disabled="equity[2]==5?false : true"
                            @click="synthNum = 5,msg='five',show3 = true"
                            style="width: 170px"
                            type="info">合成</van-button>
              </div>
              <div class="msg">
                <p>成功概率100%</p>
                <p>5张五级黄金甲犀牛卡牌可合成一次</p>
                <p>合成后不可再次参与合成</p>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="永久权益卡"
                 name="3">
          <div class="eikycard">
            <div class="eikycardItem">
              <div class="eikytop">
                <p class="title">永久实时节点分红权益卡</p>
                <img class="start1"
                     src="@/assets/img/synth/start1.png"
                     alt="" />
                <img class="start2"
                     src="@/assets/img/synth/start2.png"
                     alt="" />
              </div>
              <div class="eikyaddcard">
                <div @click="showCard(6.1,'ei00')">
                  <p class="btn"
                     v-if="eiky[0][0]">
                    <img src="@/assets/img/Compose/actual-100-before.jpg">
                    <van-badge :content="eiky[0][0]"
                               color="#FF6343" />
                  </p>
                  <p v-else>
                    <span class="eikyadd">+</span>
                    添加100天实时节点
                    <br />
                    分红权益卡
                  </p>
                </div>
                <div @click="showCard(6.2,'ei01')">
                  <p class="btn"
                     v-if="eiky[0][1]">
                    <img src="@/assets/img/Compose/actual-200-before.jpg">
                    <van-badge :content="eiky[0][1]"
                               color="#FF6343" />
                  </p>
                  <p v-else>
                    <span class="eikyadd">+</span>
                    添加200天实时节点
                    <br />
                    分红权益卡
                  </p>
                </div>
                <div @click="showCard(6.3,'ei02')">
                  <p class="btn"
                     v-if="eiky[0][2]">
                    <img src="@/assets/img/Compose/actual-300-before.jpg">
                  </p>
                  <p v-else>
                    <span class="eikyadd">+</span>
                    添加300天实时节点
                    <br />
                    分红权益卡
                  </p>
                </div>
              </div>
              <div class="eikybtn">
                <van-button :disabled="eiky[0][0]==3&&eiky[0][1]==2&&eiky[0][2]?false : true"
                            style="width: 170px"
                            @click="synthNum=6,show2=true,msg='actual'"
                            type="info">合成</van-button>
              </div>
              <div class="eiktfooter">
                <p>成功概率100%</p>
                <p>100天*3+200天*2+300天*1可合成一张永久</p>
                <p>合成成功后销毁原卡牌</p>
              </div>
            </div>

            <div class="eikycardItem">
              <div class="eikytop">
                <p class="title">永久中级节点分红权益卡</p>
                <img class="start1"
                     src="@/assets/img/synth/start1.png"
                     alt="" />
                <img class="start2"
                     src="@/assets/img/synth/start2.png"
                     alt="" />
              </div>
              <div class="eikyaddcard">
                <div @click="showCard(6.4,'ei10')">
                  <p class="btn"
                     v-if="eiky[1][0]">
                    <img src="@/assets/img/Compose/middle-100-before.jpg">
                    <van-badge :content="eiky[1][0]"
                               color="#FF6343" />
                  </p>
                  <p v-else>
                    <span class="eikyadd">+</span>
                    添加100天中级节点
                    <br />
                    分红权益卡
                  </p>
                </div>
                <div @click="showCard(6.5,'ei11')">
                  <p class="btn"
                     v-if="eiky[1][1]">
                    <img src="@/assets/img/Compose/middle-200-before.jpg">
                    <van-badge :content="eiky[1][1]"
                               color="#FF6343" />
                  </p>
                  <p v-else>
                    <span class="eikyadd">+</span>
                    添加200天中级节点
                    <br />
                    分红权益卡
                  </p>
                </div>
                <div @click="showCard(6.6,'ei12')">
                  <p class="btn"
                     v-if="eiky[1][2]">
                    <img src="@/assets/img/Compose/middle-300-before.jpg">
                  </p>
                  <p v-else>
                    <span class="eikyadd">+</span>
                    添加300天中级节点
                    <br />
                    分红权益卡
                  </p>
                </div>
              </div>
              <div class="eikybtn">
                <van-button :disabled="eiky[1][0]==3&&eiky[1][1]==2&&eiky[1][2]?false : true"
                            @click="synthNum=6,show2=true,msg='middle'"
                            style="width: 170px"
                            type="info">合成</van-button>
              </div>
              <div class="eiktfooter">
                <p>成功概率100%</p>
                <p>100天*3+200天*2+300天*1可合成一张永久</p>
                <p>合成成功后销毁原卡牌</p>
              </div>
            </div>

            <div class="eikycardItem">
              <div class="eikytop">
                <p class="title">永久高级节点分红权益卡</p>
                <img class="start1"
                     src="@/assets/img/synth/start1.png"
                     alt="" />
                <img class="start2"
                     src="@/assets/img/synth/start2.png"
                     alt="" />
              </div>
              <div class="eikyaddcard">
                <div @click="showCard(6.7,'ei20')">
                  <p class="btn"
                     v-if="eiky[2][0]">
                    <img src="@/assets/img/Compose/high-100-before.jpg">
                    <van-badge :content="eiky[2][0]"
                               color="#FF6343" />
                  </p>
                  <p v-else>
                    <span class="eikyadd">+</span>
                    添加100天高级节点
                    <br />
                    分红权益卡
                  </p>
                </div>
                <div @click="showCard(6.8,'ei21')">
                  <p class="btn"
                     v-if="eiky[2][1]">
                    <img src="@/assets/img/Compose/high-200-before.jpg">
                    <van-badge :content="eiky[2][1]"
                               color="#FF6343" />
                  </p>
                  <p v-else>
                    <span class="eikyadd">+</span>
                    添加200天高级节点
                    <br />
                    分红权益卡
                  </p>
                </div>
                <div @click="showCard(6.9,'ei22')">
                  <p class="btn"
                     v-if="eiky[2][2]">
                    <img src="@/assets/img/Compose/high-300-before.jpg">
                  </p>
                  <p v-else>
                    <span class="eikyadd">+</span>
                    添加300天高级节点
                    <br />
                    分红权益卡
                  </p>
                </div>
              </div>
              <div class="eikybtn">
                <van-button :disabled="eiky[2][0]==3&&eiky[2][1]==2&&eiky[2][2]?false : true"
                            @click="synthNum=6,show2=true,msg='high'"
                            style="width: 170px"
                            type="info">合成</van-button>
              </div>
              <div class="eiktfooter">
                <p>成功概率100%</p>
                <p>100天*3+200天*2+300天*1可合成一张永久</p>
                <p>合成成功后销毁原卡牌</p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 合成遮罩 -->
    <van-overlay :show="show1"
                 @click="show1 = false">
      <div class="wrapper"
           @click.stop>
        <div class="maskbox">
          <div>
            风险提示: <br />
            合成后无论是否成功卡牌都将销毁
          </div>
          <div>
            <p @click="show1 = false">取消</p>
            <p @click="confirmHandler">确定</p>
          </div>
          <img class="img"
               src="@/assets/img/coincard/icon1.png"
               alt="警告" />
        </div>
      </div>
    </van-overlay>
    <van-overlay :show="show2"
                 @click="show2 = false">
      <div class="wrapper"
           @click.stop>
        <div class="maskbox">
          <div style="color: #333333">请确定是否要开始进行合成</div>
          <div>
            <p @click="show2 = false">取消</p>
            <p @click="confirmHandler2">确定</p>
          </div>
          <img class="img"
               src="@/assets/img/coincard/icon1.png"
               alt="警告" />
        </div>
      </div>
    </van-overlay>
    <!-- 选择卡牌遮罩 -->
    <div id="maskwait">
      <!-- 单选 -->
      <van-popup v-model="showcard"
                 position="bottom">
        <div class="waitWrapper"
             @click.stop>
          <div class="waitTop">
            <div @click="maskCancelHandler">取消</div>
            <div>选择{{num}}卡牌</div>
            <div @click="sureHandler">确定</div>
          </div>
          <ul class="cardContent">
            <van-radio-group v-model="cardmaskFlag"
                             @change="radio"
                             direction="horizontal">
              <li v-for="item in maskcardData"
                  :key="item.id">
                <img :src="item.url" />
                <p class="title">{{ item.title }}</p>
                <p class="text">#{{ item.ucode.padStart(6, 0) }}</p>

                <div class="cardselect">
                  <van-radio :name="item.ucode"
                             icon-size="20px"></van-radio>
                </div>
              </li>
            </van-radio-group>
          </ul>
        </div>
      </van-popup>

      <!-- 多选 -->

      <van-popup position="bottom"
                 v-model="showcards">
        <div class="waitWrapper"
             @click.stop>
          <div class="waitTop">
            <div @click="maskCancelHandler">取消</div>
            <div>选择{{num}}卡牌</div>
            <div @click="suresHandler">确定</div>
          </div>
          <ul class="cardContent">

            <van-checkbox-group v-model="cardmaskFlags"
                                :max="string == 'ei00'||string == 'ei10'||string == 'ei20'?3:string == 'ei01'||string == 'L11'||string == 'L01'||string == 'ei11'||string == 'ei21'?2:5"
                                @change="pushCard"
                                direction="horizontal">
              <li v-for="item in maskcardData"
                  :key="item.id">
                <img :src="item.url" />
                <p class="title">{{ item.title }}</p>
                <p class="text">#{{ item.ucode.padStart(6, 0) }}</p>
                <div class="cardselect">
                  <van-checkbox :name="item.ucode"
                                icon-size="20px"></van-checkbox>
                </div>
              </li>
            </van-checkbox-group>
          </ul>

        </div>
      </van-popup>

    </div>
    <!-- 权益卡遮罩 -->
    <van-overlay :show="show3"
                 :key="1.3"
                 @click="show3 = false">
      <div class="wrapper"
           @click.stop>
        <div class="maskbox">
          <div style="color: #333333">
            60%卡牌为100天分红期限<br>35%卡牌为200天分红期限<br>5%卡牌为300天分红期限
          </div>
          <div>
            <p @click="show3 = false">取消</p>
            <p @click="confirmHandler2">确定</p>
          </div>
          <img class="img"
               src="@/assets/img/coincard/icon1.png"
               alt="警告" />
        </div>
      </div>
      <!-- <Popout :show="show3">
        风险提示: <br />
        合成后无论是否成功卡牌都将销毁
      </Popout> -->
    </van-overlay>

    <!-- 合成动画 -->
    <One v-if="one"></One>
    <Two v-if="two"
         :time="timeSyn"></Two>
    <Three v-if="three"
           :primary-card="msg"
           :time="timeSyn"></Three>
    <Five v-if="five"
          :node-made="msg"
          :number="number"></Five>
    <Six v-if="six"
         :card-node="msg"></Six>
  </div>
</template>
<script>
import { contract, allCard, cardList, selectAll } from '@/utils/options'
import { myNft, FusingNFT, metadata } from '@/api/newReqets'
import { orderActivitys, level3, level4, level5, realTime, middleLevel, highLevel, already, alreadySyn, alreadyEquity } from '@/utils/web3'
import { Toast } from 'vant'
import One from './layout/one.vue'
import Two from './layout/two.vue'
import Three from './layout/three.vue'
import Five from './layout/five.vue'
import Six from './layout/six.vue'
export default {
  components: {
    //组件与标签映射
    One: One,
    Two: Two,
    Three: Three,
    Five: Five,
    Six: Six
  },
  data() {
    return {
      digit: null,
      //三级卡牌
      level: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0]
      ],
      equity: [0, 0, 0], //权益卡
      //永久权益卡
      eiky: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      selectAll,
      cardmaskFlag: '', //单选框
      cardmaskFlags: [], //多选框
      showcard: false, //卡牌单选遮罩
      showcards: false, //卡牌多选遮罩
      show1: false, //合成遮罩
      show2: false,
      show3: false, //权益卡牌
      num: false,
      number: null,
      time: '',
      synthActiveName: '1',
      countdownFlag: false,
      // 等级卡牌数据
      allCard,
      // 定义卡牌数据
      maskcardData: [],

      // 用户一级卡牌
      numOne: [],
      //用户二级卡牌
      numTwo: [],
      //用户三级卡牌
      numThree: [],
      //用户四级卡牌
      numFour: [],
      //用户五级卡牌
      numFive: [],
      // 100实时节点
      current100: [],
      // 200实时节点
      current200: [],
      // 300实时节点
      current300: [],
      // 100中级节点
      middle100: [],
      // 200中级节点
      middle200: [],
      // 300中级节点
      middle300: [],
      // 100高级节点
      high100: [],
      // 200高级节点
      high200: [],
      // 300高级节点
      high300: [],
      // 点击合成
      one: false,
      two: false,
      three: false,
      five: false,
      six: false,
      synthNum: 0,
      string: null,
      msg: '',
      Arr: [],
      array: [],
      cardList,
      timeSyn: ''
    }
  },
  created() {
    this.getCard()
  },
  methods: {
    // 获取用户所有卡牌数据
    async getCard() {
      this.numOne = []
      this.numTwo = []
      this.numThree = []
      this.numFour = []
      this.numFive = []
      this.current100 = []
      this.current200 = []
      this.current300 = []
      this.middle100 = []
      this.middle200 = []
      this.middle300 = []
      this.high100 = []
      this.high200 = []
      this.high300 = []
      // 请求接口获取数据
      const { data } = await myNft(3)
      // console.log(data)
      for (let i of data) {
        const asd = {}
        asd.ucode = i.ID
        asd.Activate = i.Activate
        asd.title = this.allCard[i.Activate - 1].title
        asd.url = this.allCard[i.Activate - 1].image
        if (i.Type != -1) {
          if (asd.Activate == 1) (asd.address = contract[0][i.Activate - 1]), this.numOne.push(asd)
          if (asd.Activate == 2) (asd.address = contract[0][i.Activate - 1]), this.numTwo.push(asd)
        }
      }

      this.hadReceive()
      this.hadEquity()
    },
    // 3-5级等级卡牌已拥有(全部)
    async hadReceive() {
      this.array = []
      this.Arr = []

      await already(0, 2, this.array)
      await already(0, 3, this.array)
      await already(0, 4, this.array)

      // this.hadReceiveSyn()
      for (let i = 0; i < this.array.length; i++) {
        await alreadySyn(this.array[i].Activate - 1, this.array[i].num, this.Arr)
      }
      for (let i of this.Arr) {
        const asd = {}
        if (i.data == 0) {
          asd.ucode = i.num + ''
          asd.Activate = i.Activate
          asd.status = false
          asd.ischecked = false
          asd.address = contract[0][i.Activate - 1]
          asd.title = this.allCard[i.Activate - 1].title
          asd.url = this.allCard[i.Activate - 1].image

          await orderActivitys(asd.address, asd.ucode).then((res) => {
            this.digit = res
          })
        }
        // console.log(asd)
        asd.Activate == 3 && this.digit != 1 && this.numThree.push(asd)
        asd.Activate == 4 && this.digit != 1 && this.numFour.push(asd)
        asd.Activate == 5 && this.digit != 1 && this.numFive.push(asd)
      }
    },

    // // 3-5级等级卡牌已拥有（已合成）
    // async hadReceiveSyn() {
    //   await alreadySyn(2, this.Arr)
    //   await alreadySyn(3, this.Arr)
    //   await alreadySyn(4, this.Arr)
    //   Toast.clear()

    //   let list = this.array.filter((items) => {
    //     if (!this.Arr.some((ele) => items.num == ele.num && items.Activate == ele.Activate)) return items
    //   })
    //   console.log(list)
    //   this.getRank(list)
    // },
    // // 等级卡牌
    // async getRank(val) {
    //   for (let i of val) {
    //     const asd = {}
    //     asd.ucode = i.num + ''
    //     asd.Activate = i.Activate
    //     asd.title = this.allCard[i.Activate - 1].title
    //     asd.url = this.allCard[i.Activate - 1].image
    //     asd.address = contract[0][i.Activate - 1]
    //     await orderActivitys(asd.address, asd.ucode).then((res) => {
    //       this.digit = res
    //     })
    //     i.Activate == 3 && this.digit != 1 && this.numThree.push(asd)
    //     i.Activate == 4 && this.digit != 1 && this.numFour.push(asd)
    //     i.Activate == 5 && this.digit != 1 && this.numFive.push(asd)
    //   }
    // },

    /* 查询有限权益卡牌 */
    async hadEquity() {
      let Array = []
      await alreadyEquity(2, Array)
      await alreadyEquity(3, Array)
      await alreadyEquity(4, Array)

      // console.log(Array)
      this.getEquity(Array)
    },
    async getEquity(val) {
      for (let i of val) {
        const asd = {}
        asd.ucode = i.number + ''
        asd.address = contract[1][i.Activate + 1]
        // asd.Activate = i.Activate + 1
        asd.title = this.cardList[i.Activate][i.id].title
        asd.url = this.cardList[i.Activate][i.id].image
        await orderActivitys(asd.address, asd.ucode).then((res) => {
          this.digit = res
        })
        // 实时节点
        if (i.Activate == 1) {
          i.id == 0 && this.digit != 1 && this.current100.push(asd)
          i.id == 1 && this.digit != 1 && this.current200.push(asd)
          i.id == 2 && this.digit != 1 && this.current300.push(asd)
        }

        // 中级节点
        if (i.Activate == 2) {
          i.id == 0 && this.digit != 1 && this.middle100.push(asd)
          i.id == 1 && this.digit != 1 && this.middle200.push(asd)
          i.id == 2 && this.digit != 1 && this.middle300.push(asd)
        }

        // 高级节点
        if (i.Activate == 3) {
          i.id == 0 && this.digit != 1 && this.high100.push(asd)
          i.id == 1 && this.digit != 1 && this.high200.push(asd)
          i.id == 2 && this.digit != 1 && this.high300.push(asd)
        }
      }
    },

    // 取消选择卡牌
    maskCancelHandler() {
      this.showcard = false
      this.showcards = false
    },
    // 清空
    empty() {
      this.$toast.clear()
      this.one = false
      this.level = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0]
      ]
      this.equity = [0, 0, 0]
      this.eiky = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
      this.selectAll = [
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0]
        ],
        [[], [], []],
        [
          [[], [], 0],
          [[], [], 0],
          [[], [], 0]
        ]
      ]

      setTimeout(() => {
        this.getCard()
      }, 500)
    },
    //合成动画
    async confirmHandler2() {
      Toast.loading({
        message: '正在确认中...',
        forbidClick: true,
        duration: 0
      })
      this.show2 = false
      this.show3 = false

      if (this.synthNum == 2) {
        Toast.clear()
        let synthcard = (i) => {
          this.timeSyn = i
          this.two = true
        }
        FusingNFT(this.selectAll[0][2][0], 0, this.selectAll[0][2][1])
          .then((res) => {
            let time = res.data.State
            // 合成成功 time=3
            synthcard(time)
            this.empty()
          })
          .catch((err) => {
            // console.log(err)
          })
      }
      if (this.synthNum == 3) {
        Toast.clear()
        let synthcard = (i) => {
          this.timeSyn = i
          this.three = true
        }
        FusingNFT(this.selectAll[0][1][0], this.selectAll[0][1][1], this.selectAll[0][1][2])
          .then((res) => {
            let time = res.data.State
            // 合成成功 time=3
            synthcard(time)
            this.empty()
          })
          .catch((err) => {
            // console.log(err)
          })
      }
      if (this.synthNum == 5) {
        let synthcard = (i) => {
          this.one = false
          // console.log(i)
          this.number = i
          this.five = true
        }

        let arr = () => {
          this.one = true
        }

        if (this.msg == 'three') {
          await metadata('bronze', this.selectAll[1][0].join('-'))

          // console.log(this.selectAll[1][0])
          level3(arr, this.selectAll[1][0], synthcard, this.empty)
        }
        if (this.msg == 'four') {
          await metadata('gold', this.selectAll[1][1].join('-'))

          level4(arr, this.selectAll[1][1], synthcard, this.empty)
        }
        if (this.msg == 'five') {
          await metadata('silver', this.selectAll[1][2].join('-'))

          level5(arr, this.selectAll[1][2], synthcard, this.empty)
        }
      }
      if (this.synthNum == 6) {
        let synthcard = () => {
          this.one = false
          this.six = true
        }

        let arr = () => {
          this.one = true
        }

        let Array = []
        if (this.msg == 'actual') {
          Array = [...[...this.selectAll[2][0][0], ...this.selectAll[2][0][1], this.selectAll[2][0][2]]]
          realTime(arr, Array, synthcard, this.empty)
        }
        if (this.msg == 'middle') {
          Array = [...[...this.selectAll[2][1][0], ...this.selectAll[2][1][1], this.selectAll[2][1][2]]]
          middleLevel(arr, Array, synthcard, this.empty)
        }
        if (this.msg == 'high') {
          Array = [...[...this.selectAll[2][2][0], ...this.selectAll[2][2][1], this.selectAll[2][2][2]]]
          highLevel(arr, Array, synthcard, this.empty)
        }
      }

      // this.one = false
    },
    // 合成遮罩确认
    confirmHandler() {
      this.show1 = false
      this.show2 = true
    },
    // 点击回退
    onClickLeft() {
      this.$router.back()
    },
    showCard(i, string) {
      let count = ['一', '二', '三', '四', '五']
      if (i == 0) {
        // 活动未开始
        Toast({ message: '暂未开始', duration: 500 })
      } else {
        this.string = string
        this.cardmaskFlag = ''
        this.cardmaskFlags = []
        this.num = count[i - 1] + '级'
        if (!count[i - 1]) this.num = null
        // 有卡牌
        if (i == 1 && this.numOne.length) {
          // 单选
          this.maskcardData = this.numOne
          this.showcard = true
        } else if (i == 1.1 && this.numOne.length) {
          // 多选
          this.num = '一级'
          this.maskcardData = this.numOne
          this.showcards = true
        } else if (i == 2 && this.numTwo.length) {
          // 单选
          this.maskcardData = this.numTwo
          this.showcard = true
        } else if (i == 3 && this.numThree.length) {
          // 多选
          this.maskcardData = this.numThree
          this.showcards = true
        } else if (i == 4 && this.numFour.length) {
          // 多选
          this.maskcardData = this.numFour
          this.showcards = true
        } else if (i == 5 && this.numFive.length) {
          // 多选
          this.maskcardData = this.numFive
          this.showcards = true
        } else if (i == 6.1 && this.current100.length) {
          // 多选
          this.maskcardData = this.current100
          this.showcards = true
        } else if (i == 6.2 && this.current200.length) {
          // 多选
          this.maskcardData = this.current200
          this.showcards = true
        } else if (i == 6.3 && this.current300.length) {
          // 单选
          this.maskcardData = this.current300
          this.showcard = true
        } else if (i == 6.4 && this.middle100.length) {
          // 多选
          this.maskcardData = this.middle100
          this.showcards = true
        } else if (i == 6.5 && this.middle200.length) {
          // 多选
          this.maskcardData = this.middle200
          this.showcards = true
        } else if (i == 6.6 && this.middle300.length) {
          // 单选
          this.maskcardData = this.middle300
          this.showcard = true
        } else if (i == 6.7 && this.high100.length) {
          // 多选
          this.maskcardData = this.high100
          this.showcards = true
        } else if (i == 6.8 && this.high200.length) {
          // 多选
          this.maskcardData = this.high200
          this.showcards = true
        } else if (i == 6.9 && this.high300.length) {
          // 单选
          this.maskcardData = this.high300
          this.showcard = true
        } else {
          if (i == 1.1) this.num = '一级'
          this.num ? Toast({ message: '暂无可选' + this.num + '卡牌', duration: 500 }) : Toast({ message: '暂无该卡牌' })
        }
      }
    },
    // 卡牌单选
    radio() {
      // console.log(this.cardmaskFlag)
      if (this.string == 'L02') this.selectAll[0][0][2] = this.cardmaskFlag
      if (this.string == 'L12') this.selectAll[0][1][2] = this.cardmaskFlag
      if (this.string == 'L20') this.selectAll[0][2][0] = this.cardmaskFlag
      if (this.string == 'L21') this.selectAll[0][2][1] = this.cardmaskFlag
      if (this.string == 'ei02') this.selectAll[2][0][2] = this.cardmaskFlag
      if (this.string == 'ei12') this.selectAll[2][1][2] = this.cardmaskFlag
      if (this.string == 'ei22') this.selectAll[2][2][2] = this.cardmaskFlag
      // console.log(this.selectAll)
    },
    // 卡牌多选
    pushCard() {
      // console.log(this.cardmaskFlags)
      if (this.string == 'L01') (this.selectAll[0][0][0] = this.cardmaskFlags[0]), (this.selectAll[0][0][1] = this.cardmaskFlags[1])
      if (this.string == 'L11') (this.selectAll[0][1][0] = this.cardmaskFlags[0]), (this.selectAll[0][1][1] = this.cardmaskFlags[1])
      if (this.string == 'eq0') this.selectAll[1][0] = this.cardmaskFlags
      if (this.string == 'eq1') this.selectAll[1][1] = this.cardmaskFlags
      if (this.string == 'eq2') this.selectAll[1][2] = this.cardmaskFlags
      if (this.string == 'ei00') this.selectAll[2][0][0] = this.cardmaskFlags
      if (this.string == 'ei01') this.selectAll[2][0][1] = this.cardmaskFlags
      if (this.string == 'ei10') this.selectAll[2][1][0] = this.cardmaskFlags
      if (this.string == 'ei11') this.selectAll[2][1][1] = this.cardmaskFlags
      if (this.string == 'ei20') this.selectAll[2][2][0] = this.cardmaskFlags
      if (this.string == 'ei21') this.selectAll[2][2][1] = this.cardmaskFlags
      // console.log(this.selectAll)
    },
    // 单选确认选择卡牌
    sureHandler() {
      if (this.cardmaskFlag) {
        this.showcard = false
        // 将选择的卡牌图片渲染到页面
        if (this.string == 'L02') this.level[0][2] = 1
        if (this.string == 'L12') this.level[1][2] = 1
        if (this.string == 'L20') this.level[2][0] = 1
        if (this.string == 'L21') this.level[2][1] = 1
        if (this.string == 'ei02') this.eiky[0][2] = 1
        if (this.string == 'ei12') this.eiky[1][2] = 1
        if (this.string == 'ei22') this.eiky[2][2] = 1
      } else {
        Toast({ message: '请选择卡牌' })
      }
    },
    // 多选确认选择卡牌
    suresHandler() {
      // 将选择的卡牌图片渲染到页面
      if (this.cardmaskFlags.length) {
        if (['L01', 'L11', 'ei01', 'ei11', 'ei21'].includes(this.string) && this.cardmaskFlags.length != 2) return Toast({ message: '请选择两张卡牌' })
        if (['eq0', 'eq1', 'eq2'].includes(this.string) && this.cardmaskFlags.length != 5) return Toast({ message: '请选择五张卡牌' })
        if (['ei00', 'ei10', 'ei20'].includes(this.string) && this.cardmaskFlags.length != 3) return Toast({ message: '请选择三张卡牌' })

        if (this.string == 'L11') (this.level[1][0] = 1), (this.level[1][1] = 1)
        if (this.string == 'L01') (this.level[0][0] = 1), (this.level[0][1] = 1)
        if (this.string == 'eq0') this.equity[0] = 5
        if (this.string == 'eq1') this.equity[1] = 5
        if (this.string == 'eq2') this.equity[2] = 5
        if (this.string == 'ei00') this.eiky[0][0] = 3
        if (this.string == 'ei01') this.eiky[0][1] = 2
        if (this.string == 'ei10') this.eiky[1][0] = 3
        if (this.string == 'ei11') this.eiky[1][1] = 2
        if (this.string == 'ei20') this.eiky[2][0] = 3
        if (this.string == 'ei21') this.eiky[2][1] = 2

        this.showcards = false
      } else {
        Toast({ message: '请选择卡牌' })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.synthesispage {
  // ?头部样式

  /deep/ .van-hairline--bottom::after {
    border-bottom: none;
  }

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
  //   ?主体内容
  .sythcontent {
    // margin-bottom: 120px;
    /deep/ .van-tab__text {
      font-size: 36px;
    }
    /deep/ .van-tabs__line {
      background-color: #237ff8;
    }
    // 三级卡牌
    .threecard {
      width: 100%;
      background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);
      //    头部
      .threecardTop {
        width: 400px;
        margin: 0 auto 80px;
        padding-top: 60px;
        position: relative;
        .title {
          text-align: center;
          color: #fff;
          font-size: 36px;
          font-style: oblique;
        }
        .start1 {
          position: absolute;
          top: 35px;
          left: 0;
          transform: scale(0.6);
        }
        .start2 {
          position: absolute;
          bottom: -10px;
          right: 0;
          transform: scale(0.6);
        }
      }
      .threecardlog {
        width: 100%;
        height: 232px;
        .img {
          width: 400px;
          height: 232px;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
        // display: ;
      }
      //   合成
      .synthcard {
        position: relative;
        // 倒计时
        .countdown {
          width: 470px;
          height: 80px;
          background: #2c568c;
          border-radius: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          .text {
            color: #fff;
            font-size: 28px;
            margin-left: 40px;
          }
          .time {
            margin-right: 30px;
            .block {
              display: inline-block;
              width: 48px;
              height: 48px;
              background: #64a7ff;
              border-radius: 10px;
              color: #fff;
              text-align: center;
              line-height: 48px;
            }
            .seconds {
              width: 68px;
            }

            .colon {
              color: #64a7ff;
              margin: 0 10px;
            }
          }
        }
        // 结束样式
        .bgcountdown {
          background: #6b403a;
          opacity: 1;
        }
        .bgtext {
          color: #ff7464 !important;
        }
        .bgblock {
          background: #ff7464 !important;
        }
        .bgcolon {
          color: #ff7464 !important;
        }
        .addcardwarp {
          width: 100%;
          // background: #1b2333;
          .addcard {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            // padding-top: 130px;
            div {
              width: 330px;
              height: 460px;
              border-radius: 8px;
              border: 2px solid #ccc;
              display: grid;
              place-items: center;
              color: #666;
              font-size: 36px;

              p {
                text-align: center;
                display: flex;
                flex-direction: column;
                .cardAdd {
                  font-size: 1.5rem;
                }
                img {
                  margin: auto;
                  width: 88%;
                }
              }
            }
            .top {
              width: 330px;
              height: 460px;
              margin: 0 210px 40px;
            }
          }
          .addcardfooter {
            padding-bottom: 20px;
            .ftop {
              //   width: 216px;
              margin: 60px 0 40px;
              // padding: 0 10px 0 10px;
              display: flex;
              justify-content: center;
            }
            p {
              font-size: 36px;
              color: #999;
              text-align: center;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
    // 权益卡
    .equity {
      width: 100%;
      background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);
      .econtentTtem {
        // margin-bottom: 100px;
        .etop {
          width: 430px;
          margin: 0 auto;
          padding-top: 60px;
          height: 48px;
          position: relative;
          .title {
            text-align: center;
            font-size: 36px;
            color: #fff;
            font-family: DOUYU-Regular, DOUYU;
            font-style: oblique;
          }
          .start1 {
            position: absolute;
            top: 35px;
            left: 0;
            transform: scale(0.6);
          }
          .start2 {
            position: absolute;
            bottom: -10px;
            right: 0;
            transform: scale(0.6);
          }
        }
        .addcard {
          width: 330px;
          height: 460px;
          margin: 60px auto 0;
          border: 5px solid #3e4759;
          border-radius: 8px;
          display: grid;
          place-items: center;
          p {
            color: #fff;
            font-size: 28px;
            // text-align: center;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            align-items: center;
            .add {
              color: #3e4759;
              font-size: 140px;
            }
          }

          .btn {
            position: relative;

            img {
              margin: auto;
              width: 88%;
            }
            .van-badge {
              position: absolute;
              right: 0;
              top: 0;
              width: 56px;
              height: 56px;
              font-size: 32px;
              line-height: 56px;
              text-align: center;
              border: none;
            }
          }
        }
        .sythnBtn {
          width: 330px;
          margin: 40px auto 0;
        }
        .msg {
          margin-top: 40px;
          color: #fff;
          text-align: center;
          font-size: 28px;
          p {
            &:nth-child(2) {
              margin: 20px 0;
            }
          }
        }
      }
    }
    // 永久权益卡
    .eikycard {
      width: 100%;
      background: linear-gradient(174deg, #121933 0%, #121933 0%, #06070a 100%);
      padding-bottom: 20px;
      .eikycardItem {
        padding-top: 80px;
        .eikytop {
          width: 526px;
          margin: 0 auto 0;
          position: relative;
          p {
            color: #fff;
            font-size: 36px;
            font-style: oblique;
            text-align: center;
          }
          .start1,
          .start2 {
            position: absolute;
            transform: scale(0.6);
          }
          .start1 {
            top: -15px;
            left: 8px;
          }
          .start2 {
            bottom: -2px;
            right: 8px;
          }
        }
        .eikyaddcard {
          margin-top: 60px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          div {
            width: 330px;
            height: 460px;
            border: 4px solid #3e4759;
            border-radius: 16px;
            display: grid;
            place-items: center;
            text-align: center;
            &:nth-child(1) {
              margin: 0 200px 40px;
            }
            p {
              color: #fff;
              font-size: 28px;
              display: flex;
              flex-direction: column;
              align-content: center;
              justify-content: center;
              align-items: center;
              .eikyadd {
                display: block;
                margin-bottom: 60px;
                color: #3e4759;
                font-size: 120px;
              }
            }
            .btn {
              position: relative;

              img {
                margin: auto;
                width: 88%;
              }
              .van-badge {
                position: absolute;
                right: 0;
                top: 0;
                width: 56px;
                height: 56px;
                font-size: 32px;
                line-height: 56px;
                text-align: center;
                border: none;
                border-radius: 50%;
              }
            }
          }
        }
        .eikybtn {
          display: flex;
          justify-content: center;
          margin-top: 60px;
        }
        .eiktfooter {
          margin-top: 40px;
          color: #fff;
          text-align: center;
          font-size: 28px;
          line-height: 2;
        }
      }
    }
  }
  //   ?页脚
  // .synthFooter {
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
  //   ?合成遮罩
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .maskbox {
      width: 590px;
      background-color: #fff;
      border-radius: 20px;
      position: relative;

      div {
        &:nth-child(1) {
          padding: 100px 30px 40px 30px;
          color: #fc7542;
          font-size: 32px;
          line-height: 53px;
          text-align: center;
        }
        &:nth-child(2) {
          width: 100%;
          height: 95px;
          line-height: 95px;
          display: flex;
          align-items: center;
          font-size: 32px;
          border-top: 1px solid #f3f4f5;

          p {
            flex: 1;
            text-align: center;
            font-size: 32px;
            height: 100%;
            &:nth-child(1) {
              color: #666666;
              border-right: 1px solid #f3f4f5;
            }
            &:nth-child(2) {
              color: #1b2945;
            }
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
  // ?选择卡牌遮罩
  .waitWrapper {
    padding-top: 30px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #1b2333;
    border-radius: 32px 32px 0 0;
    .waitTop {
      display: flex;
      // justify-content: center;
      div {
        &:nth-child(1) {
          height: 40px;
          color: #ccc;
          font-size: 28px;
          margin-left: 20px;
        }
        &:nth-child(2) {
          flex: 1;
          color: #fff;
          font-size: 32px;
          text-align: center;
        }
        &:nth-child(3) {
          height: 40px;
          margin-right: 20px;
          color: #237ff8;
          font-size: 28px;
        }
      }
    }
    .cardContent {
      width: 100vw;
      max-height: 60vh;
      margin: 2vw 0;
      display: flex;
      flex-wrap: wrap;
      // overflow-y: auto;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      li {
        width: calc(92vw / 4);
        box-sizing: border-box;
        margin: 1vw;
        border-radius: 10px;
        background-color: #080b13;
        position: relative;
        .cardselect {
          position: absolute;
          top: 16px;
          left: 112px;
        }
        img {
          width: 100%;
          height: 238px;
          vertical-align: middle;
          margin-bottom: 10px;
        }
        .title {
          width: 178px;
          font-size: 20px;
          color: #fff;
          transform: scale(0.9);
        }
        .text {
          color: #858992;
          font-size: 20px;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
