import Vuex from 'vuex'

import mutations from '~/store/mutations'
import actions from '~/store/actions'
import getters from '~/store/getters'
import state from '~/store/state'

import { menuStore } from '~/store/modules/menus'
import { slidersStore } from '~/store/modules/sliders'
import { albumStore } from '~/store/modules/albums'
import { weddingsStore } from '~/store/modules/weddings'
import { couplesStore } from '~/store/modules/couples'
import { settingsStore } from '~/store/modules/settings'
import { authStore } from '~/store/modules/auth'
import { uploadsStore } from '~/store/modules/uploads'
import { bgsStore } from '~/store/modules/backgrounds'
import { eventsStore } from '~/store/modules/events'
import { countDownStore } from '~/store/modules/countdowns'
import { musicStore } from '~/store/modules/music'
import { guestkbookStore } from '~/store/modules/guestkbooks'

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
      storeAuth: authStore,
      storeUploads: uploadsStore,
      storeBgs: bgsStore,
      storeEvents: eventsStore,
      storeCountDown: countDownStore,
      storeMusic: musicStore,
      storeQuestKbook: guestkbookStore,
    },
  })

export default store
