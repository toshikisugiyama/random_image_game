import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Character } from '~/models/Character'
import { InputtedCharacterData } from '~/models/InputtedCharacterData'

@Module({
  name: 'characters',
  stateFactory: true,
  namespaced: true
})
export default class Characters extends VuexModule {
  isDark: boolean = true
  @Mutation
  toggleMode (): void {
    this.isDark = !this.isDark
  }

  isSetting: boolean = false
  @Mutation
  toggleSetting (): void {
    this.isSetting = !this.isSetting
  }

  currentNumber: number = 0
  @Mutation
  commitRandomNumber (num: number): void {
    this.currentNumber = num
  }

  inputtedCharacterData: InputtedCharacterData[] = []
  @Mutation
  addCharacterData (inputtedCharacterData: InputtedCharacterData): void {
    this.inputtedCharacterData.push(inputtedCharacterData)
  }

  @Mutation
  resetName (): void {
    this.inputtedCharacterData = []
  }

  judgment: number = 0
  @Mutation
  setJudgment (judgment: number) {
    this.judgment = judgment
  }

  @Action
  judgeResult (): void {
    const data = this.inputtedCharacterData
    if (data[data.length - 1]) {
      this.setJudgment(data[data.length - 1].erratum)
    }
  }

  @Action
  resetJudgment (): void {
    this.setJudgment(0)
  }

  defaultCount: number = 10
  @Mutation
  setDefaultCount (num: number): void {
    this.defaultCount = num
  }

  remainingCount: number = this.defaultCount
  @Mutation
  calculateCount (): void {
    this.remainingCount--
  }

  @Mutation
  resetRemainingCount (): void {
    this.remainingCount = this.defaultCount
  }

  counter: number = 0
  @Mutation
  incrementCounter (): void {
    this.counter++
  }

  @Mutation
  resetCounter (): void {
    this.counter = 0
  }

  characters: Character[] = [
    {
      id: 1,
      image: require('@/static/images/0.png')
    },
    {
      id: 2,
      image: require('@/static/images/1.png')
    },
    {
      id: 3,
      image: require('@/static/images/2.png')
    },
    {
      id: 4,
      image: require('@/static/images/3.png')
    },
    {
      id: 5,
      image: require('@/static/images/4.png')
    },
    {
      id: 6,
      image: require('@/static/images/5.png')
    },
    {
      id: 7,
      image: require('@/static/images/6.png')
    },
    {
      id: 8,
      image: require('@/static/images/7.png')
    },
    {
      id: 9,
      image: require('@/static/images/8.png')
    },
    {
      id: 10,
      image: require('@/static/images/9.png')
    }
  ]
}
