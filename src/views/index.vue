<template>
	<div class="home">
	    <div class="pub-title">{{ $t("home.title") }}</div>
	    <div class="pub-img">
	        <img src="static/imgs/img.jpg" class="img" />
	    </div>
	    <router-link to="/regist">
	        <div class="pub-btn">{{ $t("home.regist") }}</div>
	    </router-link>
		<div class="pub-btn" @click="show = true">{{ $t("home.shop") }}</div>
		
	    <v-lang></v-lang>
	    <div class="keep" v-if="show">
	    	<div class="block">
		    	<img src="static/imgs/wechatcode.jpeg">
		    	<h3>{{ $t("home.shop_text") }}</h3>
		    	<div @click="show = false" class="close">{{ $t("home.close") }}</div>
	    	</div>
		</div>
	</div>
</template>
<script> 
	import Vue                    from 'vue'
	import {mapState, mapActions} from 'vuex'

	export default{
		name : 'home',
		data() {
			return {
				show : false
			}
		}
	}
</script>