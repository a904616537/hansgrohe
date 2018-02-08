<template>
	<div class="home">
	    <div class="pub-title">{{ $t("home.title") }}</div>
	    <div class="pub-img">
	        <img src="static/imgs/img.jpg" class="img" />
	    </div>
	    <router-link to="/regist">
	        <div class="pub-btn">{{ $t("home.regist") }}</div>
	    </router-link>
	    <v-lang></v-lang>
	</div>
</template>
<script> 
	import Vue                    from 'vue'
	import {mapState, mapActions} from 'vuex'

	export default{
		name : 'home',
		data() {
			return {
				
			}
		},
	}
</script>