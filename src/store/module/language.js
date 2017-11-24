import * as types from '../mutation-types'
import Cookie     from 'vue-cookie'
// initial state
const state = {
	lang : Cookie.get('lang')?Cookie.get('lang') : 'zh'
}

const actions = {
	SetLanguage({commit}, data) {
		commit(types.LANGUAGE_INIT, data);
	}
}

// mutations
const mutations = {
	[types.LANGUAGE_INIT] (state, data) {
		console.log('lang', data)
		state.lang = data;
	}
}

export default {
	state,
	actions,
	mutations
}