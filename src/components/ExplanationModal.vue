<template>
  <div>
    <div
      class="modal-layer"
      v-if="explainModal"
    ></div>
    <transition name="modal">
      <div class="modal" v-if="explainModal">
        <h2>あそびかた</h2>
        <div class="explanation">
          <p>これは、現れる<span class="strong">キャラクター</span>に、その人のセンスで特徴を捉えた<span class="strong">名前</span>を付け、全員で<span class="strong">共有</span>し、以降もし同じものが現れたらその<span class="strong">名前</span>をいち早く<span class="strong">叫んで</span>、いち早く<span class="strong">名前</span>を叫んだ<span class="strong">キャラクター</span>の数を競う<span class="strong">ゲーム</span>です。おかしな<span class="strong">名前</span>を付けたり、最初のうちに「簡単」と侮っていたら途中でまったく思い出せなくなったりと、<span class="strong">笑い</span>が絶えずに盛り上がります。</p>
          <ol type="1">
            <li><span class="strong">1人ずつ</span>代わりばんこに、<span class="strong">ボタン</span>を押します。</li>
            <li>現れたのが<span class="strong">初めて</span>見る<span class="strong">キャラクター</span>だったら、自由な発想で、ふさわしいと思う<span class="strong">名前</span>を付けます。</li>
            <li>付けられた<span class="strong">名前</span>は、あとで同じ絵のキャラクターが出てきたらすばやく言えるように、しっかり<span class="strong">覚えて</span>おきましょう。そして、また<span class="strong">ボタン</span>を押して…とくり返していきます。</li>
            <li>すでに<span class="strong">名前</span>が付けられた<span class="strong">キャラクター</span>が現れたら、<span class="strong">誰でも</span>いいので、<span class="strong">すばやく正しい名前</span>を言います。一番多く<span class="strong">名前</span>を言い当てた人が<span class="strong">勝ち</span>です。</li>
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
    z-index: 10;
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
    z-index: 10;
    overflow: auto;
    h2 {
      text-align: center;
    }
    .explanation {
      height: 250px;
      font-size: 0.8rem;
      line-height: 2;
      overflow-y: scroll;
      margin: 25px auto;
      padding: 0 5px;
      color: #333;
      @media screen and (min-width: 768px) {
        height: auto;
        padding: 0 30px;
      }
      p {
        margin-bottom: 60px;
        .strong {
          font-weight: bold;
          font-size: 1.2rem;
          color: rgb(138, 6, 6);
        }
      }
      ol {
        li {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 20px;
          .strong {
            font-size: 1rem;
            color: rgb(138, 6, 6);
          }
        }
      }
    }
  }
}
.container.dark {
  .modal-layer {
    background-color: rgba(255, 255, 255, 0.6)
  }
  .modal {
    background-color: #333;
    .explanation {
      color: #fff;
      .strong {
        color: #badd1f;
      }
    }
  }
}
</style>
