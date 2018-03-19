import * as types from '../mutation-types'
// initial state
const state = {
	code : null
}

const actions = {
	SetCode({commit}, data) {
		commit(types.CODE_INIT, data);
	}
}

// mutations
const mutations = {
	[types.CODE_INIT] (state, data) {
		state.code = data;
	}
}

export default {
	state,
	actions,
	mutations
}