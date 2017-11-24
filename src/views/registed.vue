<template>
	<div class="registed">
	    <div class="pub-title">{{ $t('registed.title')}}</div>
	    <div class="complete-text">{{ $t('registed.text') }}</div>
	    <div class="pub-img">
	        <img src="/static/imgs/img.jpg" class="img" />
	    </div>
        <div class="pub-btn">{{ $t('complete.close') }}</div>
	</div>
</template>
<script>
	export default{
		name : 'registed',
		data() {
			return {

			}
		}
	}
</script>