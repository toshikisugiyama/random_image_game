<template>
  <div>
    <ExplanationModal
      v-if="explainModal"
      :button-value="buttonValue"
      @handle-click="handleClick"
    />
    <Count
      :click-count="clickCount"
      v-if="screenStatus==='started'"
    />
    <Character />
    <SwitchButtons
      :button-value="buttonValue"
      @handle-click="handleClick"
      v-if="screenStatus != 'explain'"
    />
  </div>
</template>

<script>
import ExplanationModal from './components/ExplanationModal.vue'
import Count from './components/Count.vue'
import Character from './components/Character.vue'
import SwitchButtons from './components/SwitchButtons.vue'
export default {
  data(){
    return{
      buttonValue: 'せつめい',
      screenStatus: 'top',
      explainModal: false,
      clickCount: 20,
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
            if (this.clickCount === 0) {
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
  },
}
</script>
