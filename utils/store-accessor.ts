import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Characters from '~/store/characters'

// eslint-disable-next-line import/no-mutable-exports
let charactersStore: Characters

function initialiseStores (store: Store<any>): void {
  charactersStore = getModule(Characters, store)
}

export { initialiseStores, charactersStore }
