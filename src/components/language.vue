<template>
	<div class="language">
		<p class="pub-language">{{ $t("home.language") }}<span class="under-line" @click="langeChange">{{lang}}</span></p>
	</div>
</template>
<script>
	import Vue                    from 'vue'
	import {mapState, mapActions} from 'vuex'

	export default{
		name : 'language',
		data() {
			return {
				lang : 'en' ? '中文' : 'English',
			}
		},
		methods : {
			...mapActions([
	            'SetLanguage'
	        ]),
			langeChange() {

				if(this.lang == 'English') {
	        		this.lang = '中文';
	        		this.$i18n.set('en');
	        		this.SetLanguage('en')
				}else {
					this.$i18n.set('zh');
					this.lang = 'English';
					this.SetLanguage('zh')
				}
			},
		}
	}
</script>