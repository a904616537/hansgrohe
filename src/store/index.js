import Vue          from 'vue'
import Vuex         from 'vuex'
import * as actions from './actions'
import  Language    from './module/language'
<<<<<<< HEAD
import  Code        from './module/code'
=======
>>>>>>> fb75c16c7559db48890af18936b921281a668c7f

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	modules : {
<<<<<<< HEAD
		Language,
		Code
=======
		Language
>>>>>>> fb75c16c7559db48890af18936b921281a668c7f
	},
	// strict  : debug
})