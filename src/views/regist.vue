<template>
	<div class="regist">
		<div class="regist-inner">
			<p class="regist-title">{{ $t("regist.number") }}</p>
			<input type="text" :placeholder="$t('regist.holdnumber')" class="pub-input" v-model="user.number">
			<p>{{ $t('regist.tip') }}</p>
			<p class="regist-title">{{ $t('regist.info') }}</p>
			<input type="text" :placeholder="$t('regist.name')" class="pub-input" v-model="user.name">
			<template>
				<v-distpicker  hide-area
					:province = "user.province"
					:city     = "user.city"
					@province = "onProvince"
					@city     = "onCity"
				></v-distpicker>
			</template>
			<input type="text" :placeholder="$t('regist.address')" class="pub-input" v-model="user.address">
			<input type="text" :placeholder="$t('regist.postcode')" class="pub-input" v-model="user.postcode">
			<input type="phone" :placeholder="$t('regist.mobile')" class="pub-input pub-sm-input" maxlength="13" v-model="phone">
			<input type="text" :placeholder="$t('regist.code')" class="pub-input pub-xs-input input-code" v-model="user.code">
			<div class="sms pub-xs-input" @click="getCode" v-show="show">{{ $t('regist.sms') }}</div>
			<div class="sms pub-xs-input sms-time" v-show="!show">{{ count}} s</div>
		</div>	    
        <div class="pub-btn" @click="next">{{ $t('regist.next') }}</div>
	    <v-lang></v-lang>
	    <v-comfilm v-show="isShow" :onClose="onClose"></v-comfilm>
	</div>
</template>
<script>
	import Comfilm     from '@/components/comfilm'
	import VDistpicker from 'v-distpicker'

	export default{
		name : 'regist',
		data() {
			return {
				show   : true,
				isShow : false,
				count  : '',
				timer  : null,
				phone  : '', 
				user : {
					name     : '',
					address  : '',
					postcode : '',
					code     : '',
					number   : '',
					province : '',
					city     : '',
				}

			}
		},
		watch : {
			phone(newValue, oldValue) {
				this.phone = newValue.length > oldValue.length ? newValue.replace(/\s/g, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3') : this.phone.trim()
			}
		},
		components : {
			'v-comfilm'    : Comfilm,
			'v-distpicker' : VDistpicker
		},
		methods : {
			getCode() {
				const time = 60;
				if(!this.timer) {
					this.count = time;
					this.show  = false;
					this.timer = setInterval(() => {
						if(this.count > 0 && this.count <= time){
							this.count --;
						}else{
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					},1000)
				}
			},
			onProvince(obj) {
                this.user.province = obj.value;
            },
            onCity(obj) {
                this.user.city = obj.value;
            },
			next() {
				if( this.user.number   == '' ||
					this.user.name     == '' || 
					this.user.address  == '' ||
					this.user.province == '' ||
				    this.user.city     == '' ||
				    this.user.postcode == '' ||
				    this.phone         == '' ||
				    this.user.code     == '' ){
					this.isShow = !this.isShow
					return
				}else{
					this.$router.push({path : '/install'})
				}
			},
			onClose() {
				this.isShow = false;
			}
		}
	}
</script>
<style>
	select[data-v-a078dc08] {
		padding          : 0 6px;
		margin-bottom    : 10px;
		border-radius    : 10px;
		outline          : none;
		width            : 47.85%;
		background-color : rgb(239,239,244);
		border           : none;
	}
	select[data-v-a078dc08]:first-child{
		margin-right : 10px;
	}
</style>