import Vue          from 'vue'
import Vuex         from 'vuex'
import * as actions from './actions'
import  Language    from './module/language'
import  Code        from './module/code'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	modules : {
		Language,
		Code
	},
	// strict  : debug
})