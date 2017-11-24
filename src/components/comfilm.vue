<template>
	<div class="comfilm">
		<div class="mask">
			<div class="comfilm-inner">
				<p>Please ensure all <br> mandatory fields are filled in</p>
				<div class="sms pub-xs-input" @click="onClose">ok</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'comfilm',
		data() {
			return {

			}
		},
		props : {
			onClose : {
				type : Function,
				default : () => console.log('onClose')
			}
		}
	}
</script>
<style>
	.comfilm .mask{
		background-color : rgba(216,216,216,.7);
		position         : absolute;
		top              : 0;
		left             : 0;
		right            : 0;
		height           : 100%;
		padding-top      : 70%;
	}
	.comfilm-inner{
		background-color : #686C72;
		color            : #fff;
		margin           : 0 30px;
		padding          : 20px 0;
		border-radius    : 10px;
	}
	.comfilm-inner .sms{
		background-color : rgb(38,167,146);
		color            : #fff;
		text-align       : center;
		font-weight      : bold;
		line-height      : 40px;
		border-radius    : 10px;
		margin-top       : 14px;
		margin           : 0 auto;
	}	
</style>