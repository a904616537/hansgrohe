<template>
	<div class="complete">
	    <div class="pub-title">{{ $t('complete.title')}}</div>
	    <div class="complete-text">{{ $t('complete.text') }}</div>
	    <div class="pub-img">
	        <img src="/static/imgs/img.jpg" class="img" />
	    </div>
        <div class="pub-btn">{{ $t('complete.close') }}</div>
	</div>
</template>
<script>
	export default{
		name : 'complete',
		data() {
			return {

			}
		}
	}
</script>