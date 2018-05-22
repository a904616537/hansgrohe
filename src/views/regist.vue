<template>
	<div class="regist">
		<div class="regist-inner">
			<p class="regist-title">{{ $t("regist.number") }}</p>
			<input type="text" :placeholder="$t('regist.holdnumber')" class="pub-input" v-model="number">
			<p>{{ $t('regist.tip') }}</p>
			<p class="regist-title">{{ $t('regist.info') }}</p>
			<input type="text" :placeholder="$t('regist.name')" class="pub-input" v-model="user.name">
			<template>
				<v-distpicker  hide-area
				:province = "user.province"
				:city     = "user.city"
				:placeholders="placeholders"
				@province = "onProvince"
				@city     = "onCity"
				></v-distpicker>
			</template>
			<input type="text" :placeholder="$t('regist.address')" class="pub-input" v-model="user.address">
			<input type="text" :placeholder="$t('regist.postcode')" class="pub-input" v-model="user.postcode">
			<input type="phone" :placeholder="$t('regist.mobile')" class="pub-input pub-sm-input" maxlength="13" v-model="phone">
			<input type="text" :placeholder="$t('regist.code')" class="pub-input pub-xs-input input-code" v-model="code">
			<div class="sms pub-xs-input" @click="getCode" v-show="show">{{ $t('regist.sms') }}</div>
			<div class="sms pub-xs-input sms-time" v-show="!show">{{ count}} s</div>
		</div>	    
        <div class="pub-btn" @click="next">{{ $t('regist.next') }}</div>
	    <v-lang></v-lang>
	    <v-comfilm ref="comfilm" v-show="isShow" :onClose="onClose"></v-comfilm>
	</div>
</template>
<script>
	import Vue         from 'vue'
	import axios       from 'axios'
	import Comfilm     from '@/components/comfilm'
	import VDistpicker from 'v-distpicker'
	import {mapState, mapActions} from 'vuex'
	

	export default{
		name : 'regist',
		data() {
			return {
				show    : true,
				isShow  : false,
				count   : '',
				timer   : null,
				phone   : '',
				number  : '',
				code    : '',
				getcode : '',
				user    : {
					name     : '',
					address  : '',
					postcode : '',
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
		computed : mapState({
			wechat_code : state => state.Code.code,
			lang        : state => state.Language.lang,
			placeholders() {
				if(this.lang === 'zh') {
					return {
						province : '省',
						city     : '市',
						area     : '区',
					}
				} else {
					return {
						province : 'Province',
						city     : 'City',
						area     : 'Area',
					}
				}
			}
		}),
		methods : {
			getCode() {
				axios.get(Vue.config.network + '/user/sms?phone=' + this.phone)
				.then((response) => {
					console.log('response', response)
					this.getcode = response.data.code;
					// alert('your code:' + response.data.code)
				})
				.catch((error) => {});

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
				if(this.number    		== '' ||
					this.user.name     	== '' || 
					this.user.address  	== '' ||
					this.user.province 	== '' ||
					this.user.city     	== '' ||
					this.user.postcode 	== '' ||
					this.phone         	== '' ||
					this.code          	== '') {
					this.isShow = !this.isShow
					return
				} else {
					if(this.code != this.getcode) {
						this.$refs.comfilm.msg = {
							title : 'Failed!',
							desc  : 'Incorrect Code'
						}
						this.isShow = !this.isShow
					} else {
						localStorage.user = JSON.stringify(this.user);
						localStorage.phone = this.phone;
						localStorage.number = this.number;
						this.$router.push({path : '/install'})
					}
				}
			},
			onClose() {
				this.isShow = false;
				this.$refs.comfilm.onReset();
			}
		},
		created() {
			if(this.wechat_code) {
				this.number = this.wechat_code;
			}
		}
	}
</script>
<style>
	.regist .address select{
		padding            : 0 10px;
		margin-bottom      : 10px;
		border-radius      : 10px;
		outline            : none;
		width              : 47.85%;
		background-color   : rgb(239,239,244);
		border             : none;
		appearance         : none;
		-moz-appearance    : none;
		-webkit-appearance : none;
		-ms-appearance     : none; 
		color              : #2c3e50;
	}
	.regist .address select:first-child{
		margin-right : 10px;
	}
</style>