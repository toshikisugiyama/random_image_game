<template>
  <div>
    <div class="modal-layer" v-if="explainModal"></div>
    <transition name="modal">
      <div class="modal" v-if="explainModal">
        <h2>せつめい</h2>
        <div class="explanation">
          <p>これは、現れるキャラクターに、その人のセンスで特徴を捉えた名前を付け、全員で共有し、以降もし同じものが現れたらその名前をいち早く叫んで、いち早く名前を叫んだキャラクターの数を競うゲームです。おかしな名前を付けたり、最初のうちに「簡単」と侮っていたら途中でまったく思い出せなくなったりと、笑いが絶えずに盛り上がります。</p>
          <ol type="1">
            <li>1人ずつ代わりばんこに、ボタンを押します。</li>
            <li>現れたのが初めて見るキャラクターだったら、自由な発想で、ふさわしいと思う名前を付けます。</li>
            <li>付けられた名前は、あとで同じ絵のキャラクターが出てきたらすばやく言えるように、しっかり覚えておきましょう。そして、またボタンを押して…とくり返していきます。</li>
            <li>すでに名前が付けられたキャラクターが現れたら、誰でもいいので、すばやく正しい名前を言います。一番多く名前を言い当てた人が勝ちです。</li>
          </ol>
        </div>
        <SwitchButtons
          :button-value="buttonValue"
          @handle-click="changeStatus"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import SwitchButtons from './SwitchButtons.vue'
export default {
  props: {
    buttonValue: {
      type: String,
    },
    explainModal: {
      type: Boolean,
    },
  },
  components: {
    SwitchButtons,
  },
  methods: {
    changeStatus() {
      this.$emit('handle-click')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  .modal-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .modal-enter {
    opacity: 0;
  }
  .modal-enter-active {
    transition: opacity 0.5s;
  }
  .modal-leave-active {
    transition: opacity 0.5s;
  }
  .modal-leave-to {
    opacity: 0;
  }
  .modal {
    position: absolute;
    width: 90%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px 10px;
    .explanation {
      height: 300px;
      font-size: 1.2rem;
      overflow: auto;
      margin: 25px auto;
      padding: 0 5px;
    }
  }
}
</style>
