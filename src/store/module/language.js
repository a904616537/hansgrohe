import * as types from '../mutation-types'
import Cookie     from 'vue-cookie'
// initial state
const state = {
	lang : Cookie.get('lang')?Cookie.get('lang') : 'en'
}

const actions = {
	SetLanguage({commit}, data) {
		commit(types.LANGUAGE_INIT, data);
	}
}

// mutations
const mutations = {
	[types.LANGUAGE_INIT] (state, data) {
<<<<<<< HEAD
=======
		console.log('lang', data)
>>>>>>> fb75c16c7559db48890af18936b921281a668c7f
		state.lang = data;
	}
}

export default {
	state,
	actions,
	mutations
}