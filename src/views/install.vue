<template>
	<div class="install">
		<div class="regist-inner">
			<p class="regist-title">{{ $t('install.title') }}</p>
			<input type="text" :placeholder="$t('install.date')" class="pub-input">
			<input type="text" :placeholder="$t('install.status')" class="pub-input">
			<input type="text" :placeholder="$t('install.size')" class="pub-input">
			<input type="text" :placeholder="$t('install.water')" class="pub-input">
			<input type="text" :placeholder="$t('install.life')" class="pub-input">
			<input type="text" :placeholder="$t('install.changedate')" class="pub-input">
		</div>	    
		<div class="checkbox">
			<input type="checkbox" name="" style="display: none"/>
			<span @click="agree"><label for="checkbox"></label><label class="check" v-show="isShow"></label></span><span style="display: inline-block; margin-left: 10px; font-size: 14px;">{{ $t('install.read') }} <span class="under-line">{{ $t('install.guidelines') }}</span></span>
		</div>
	    <router-link to="/complete">
	        <button class="pub-btn install-btn" :disabled="!isShow">{{ $t('install.submit') }}</button>
	    </router-link>
	    <router-link to="/regist">
	    	<span class="under-line">{{ $t('install.back') }}</span>
	    </router-link>
	    <v-lang></v-lang>
	</div>
</template>
<script>
	export default{
		name : 'install',
		data() {
			return {
				isShow : true,
			}
		},
		methods : {
			agree() {
				this.isShow = !this.isShow
			}
		}
	}
</script>
<style>
	.checkbox{
		margin-left : 20px;
		position    : relative;
		font-size   : 12px;
	}

	.checkbox label{
		cursor           : pointer;
		position         : absolute;
		width            : 20px;
		height           : 20px;
		top              : 0;
		left             : 0;
		background-color : rgb(239,239,244);
		border-radius    : 5px;
	}
	.checkbox .check:after{
		opacity      : 0.2;
		content      : '';
		position     : absolute;
		width        : 9px;
		height       : 5px;
		background   : transparent;
		top          : 6px;
		left         : 5px;
		border       : 2px solid #000;
		border-top   : none;
		border-right : none;
		transform    : rotate(-45deg);
	}
</style>