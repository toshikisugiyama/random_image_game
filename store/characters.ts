import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
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
      image: require('@/assets/images/0.png')
    },
    {
      id: 2,
      image: require('@/assets/images/1.png')
    },
    {
      id: 3,
      image: require('@/assets/images/2.png')
    },
    {
      id: 4,
      image: require('@/assets/images/3.png')
    },
    {
      id: 5,
      image: require('@/assets/images/4.png')
    },
    {
      id: 6,
      image: require('@/assets/images/5.png')
    },
    {
      id: 7,
      image: require('@/assets/images/6.png')
    },
    {
      id: 8,
      image: require('@/assets/images/7.png')
    },
    {
      id: 9,
      image: require('@/assets/images/8.png')
    },
    {
      id: 10,
      image: require('@/assets/images/9.png')
    }
  ]
}
