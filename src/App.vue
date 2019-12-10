<template>
  <div class="container" :class="{dark: isDark}">
    <ExplanationModal
      :explain-modal="explainModal"
      :button-value="buttonValue"
      @handle-click="handleClick"
    />
    <header>
      <SwitchMode
        :is-dark="isDark"
        @change-mode="changeMode"
      />
      <Count
        :click-count="clickCount"
        v-if="screenStatus==='started'"
      />
      <Reset
        @reset-all="resetAll"
      />
    </header>
    <main>
      <h1 v-if="screenStatus==='top'">名前をつけて早く呼ぶゲーム</h1>
      <Character
        :random-number="randomNumber"
        :max-num="maxNum"
        v-if="screenStatus==='started'"
      />
      <div class="finish" v-else-if="screenStatus==='finished'">おしまい</div>
      <div class="question-mark" v-else>?</div>
      <SwitchButtons
        :button-value="buttonValue"
        @handle-click="handleClick"
        v-if="screenStatus != 'explain'"
      />
    </main>
    <footer>
      <p>&#169;Toshiki Sugiyama</p>
    </footer>
  </div>
</template>

<script>
import ExplanationModal from './components/ExplanationModal.vue'
import Reset from './components/Reset.vue'
import Count from './components/Count.vue'
import Character from './components/Character.vue'
import SwitchButtons from './components/SwitchButtons.vue'
import SwitchMode from './components/SwitchMode.vue'
import 'normalize.css'
const images = 10
export default {
  components: {
    ExplanationModal,
    Reset,
    Count,
    Character,
    SwitchButtons,
    SwitchMode,
  },
  data(){
    return{
      buttonValue: 'せつめい',
      screenStatus: 'top',
      explainModal: false,
      clickCount: 20,
      maxNum: images,
      randomNumber: this.getRandomNum(0, images),
      isDark: false,
    }
  },
  methods: {
    handleClick(){
      switch (this.screenStatus) {
        case 'top':
          this.buttonValue = 'とじる'
          this.screenStatus = 'explain'
          this.explainModal = true
          break;
        case 'explain':
        case 'finished':
          this.buttonValue = 'はじめる'
          this.screenStatus = 'explained'
          this.explainModal = false
          this.clickCount = 20
          break;
        case 'explained':
          this.buttonValue = 'つぎへ'
          this.screenStatus = 'started'
          break;
        case 'started':
          this.clickCount -= 1
          this.randomNumber = this.getRandomNum(0, images)
          if (this.clickCount <= 0) {
            this.screenStatus = 'finished'
            this.buttonValue = 'もういっかい'
          }
          break;
        default:
          this.buttonValue = 'せつめい'
          this.screenStatus = 'top'
          this.explainModal = false
          this.clickCount = 20
          break;
      }
    },
    getRandomNum(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    },
    resetAll() {
      this.buttonValue = 'せつめい'
      this.screenStatus = 'top'
      this.explainModal = false
      this.clickCount = 20
    },
    changeMode(){
      this.isDark = !this.isDark
    }
  },
}
</script>

<style lang="scss" scoped>
  .container {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    font-size: 62.5%;
    transition: background-color 1s;
    * {
      box-sizing: border-box;
      user-select: none;
    }
    header {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 768px;
      margin: 0 auto;
      padding: 0 10px;
    }
    main {
      height: 400px;
      max-width: 768px;
      margin: 0 auto;
      padding: 0 10px;
      h1 {
        position: absolute;
        left: -50%;
        transform: translate(50%,-100%);
        width: 100%;
        text-align: center;
      }
      .question-mark, .finish {
        height: 300px;
        line-height: 300px;
        margin: 0 auto 25px;
        text-align: center;
      }
      .question-mark {
        font-size: 15rem;
      }
      .finish {
        font-size: 2rem;
      }
    }
    footer {
      max-width: 768px;
      margin: 0 auto;
      p {
        text-align: center;
        margin: 0;
      }
    }
  }
  .container.dark {
    background-color: #000;
    * {
      color: #fff;
    }
  }
</style>
