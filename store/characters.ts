import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Character } from '~/models/Character'
import { InputtedCharacterData } from '~/models/InputtedCharacterData'
const charactersNumber = 15
const charactersUrl = 'https://raw.githubusercontent.com/toshikisugiyama/illustrator-works/master'

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
  judgeResult (): void {
    const data = this.inputtedCharacterData
    if (data[data.length - 1]) {
      this.judgment = data[data.length - 1].erratum
    }
  }

  @Mutation
  resetJudgment (): void {
    this.judgment = 0
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

  createCharactersArray (charactersNumber: number) {
    const characters: Array<Character> = []
    for (let i: number = 1; i <= charactersNumber; i++) {
      const id = i
      const drawingId: string = id < 10 ? '0' + id.toString() : id.toString()
      const image = `${charactersUrl}/drawing-${drawingId}/${drawingId}.svg`
      const character: Character = { id, image }
      characters.push(character)
    }
    return characters
  }

  characters: Character[] = [...this.createCharactersArray(charactersNumber)]
}
