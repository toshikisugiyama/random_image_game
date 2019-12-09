<template>
  <div>
    <ExplanationModal
      v-if="explainModal"
      :button-value="buttonValue"
      @handle-click="handleClick"
    />
    <header>
      <Count
        :click-count="clickCount"
        v-if="screenStatus==='started'"
      />
    </header>
    <main>
      <Character
        :random-number="randomNumber"
        :max-num="maxNum"
        v-if="screenStatus==='started'"
      />
      <div v-else>?</div>
      <SwitchButtons
        :button-value="buttonValue"
        @handle-click="handleClick"
        v-if="screenStatus != 'explain'"
      />
    </main>
  </div>
</template>

<script>
import ExplanationModal from './components/ExplanationModal.vue'
import Count from './components/Count.vue'
import Character from './components/Character.vue'
import SwitchButtons from './components/SwitchButtons.vue'
import 'normalize.css'
const images = 10
export default {
  data(){
    return{
      buttonValue: 'せつめい',
      screenStatus: 'top',
      explainModal: false,
      clickCount: 20,
      maxNum: images,
      randomNumber: this.getRandomNum(0, images),
    }
  },
  components: {
    ExplanationModal,
    Count,
    Character,
    SwitchButtons,
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
          this.buttonValue = 'はじめる'
          this.screenStatus = 'start'
          this.explainModal = false
          break;
          case 'start':
            this.buttonValue = 'つぎへ'
            this.screenStatus = 'started'
            break;
          case 'started':
            this.clickCount -= 1
            this.randomNumber = this.getRandomNum(0, images)
            if (this.clickCount <= 0) {
              this.clickCount = 0
              this.screenStatus = 'start'
              this.buttonValue = 'もういっかい'
            }
            break;
        default:
          this.buttonValue = 'せつめい'
          this.screenStatus = 'top'
          this.explainModal = false
          this.lickCount = 20
          break;
      }
    },
    getRandomNum(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
