import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import { menuStore } from '~/store/modules/menus'
import { slidersStore } from '~/store/modules/sliders'
import { albumStore } from '~/store/modules/albums'
import { weddingsStore } from '~/store/modules/weddings'
import { couplesStore } from '~/store/modules/couples'
import { settingsStore } from '~/store/modules/settings'
import { loginStore } from '~/store/modules/logins'

const store = () =>
  // eslint-disable-next-line import/no-named-as-default-member
  new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
      storeMenus: menuStore,
      storeSliders: slidersStore,
      storeAlbums: albumStore,
      storeWeddings: weddingsStore,
      storeCouples: couplesStore,
      storeSettings: settingsStore,
      storeLogins: loginStore,
    },
  })

export default store
