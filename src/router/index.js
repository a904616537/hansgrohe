import Vue      from 'vue'
import Router   from 'vue-router'
import Regist   from '../views/regist'
import Index    from '../views/index'
import Install  from '../views/install'
import Complete from '../views/complete'
import Registed from '../views/registed'

Vue.use(Router)

var routers = [
	{
		path : '/',
		component : Index
	},{
		path      : '/regist',
		component : Regist
	},{
		path      : '/install',
		component : Install
	},{
		path      : '/complete',
		component : Complete
	},{
		path      : '/registed',
		component : Registed
	}
]



const router = new Router({
	routes : routers,
	mode   :  'history'
})

router.beforeEach((to, from, next) => {
	document.body.scrollTop = 0;
	next();
})

export default router;
