<template>
	<div class="comfilm">
		<div class="mask">
			<div v-if="threeTimes">
				<div class="comfilm-inner">
					<p>{{msg.overTitle}}<br/>{{msg.overDesc}}<br/>{{msg.overText}}</p>
					<div class="sms pub-xs-input" @click="onClose">ok</div>
				</div>
			</div>	
			<div else>
				<div class="comfilm-inner">
					<p>{{msg.title}}<br/>{{msg.desc}}</p>
					<div class="sms pub-xs-input" @click="onClose">ok</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	const defTitle  = 'Please ensure all',
		  defDesc   = 'mandatory fields are filled in',
		  overTitle = 'The number has been used',
		  overDesc  = 'more than three times. Please',
		  overText  = 'change a new one.';
	export default{
		name: 'comfilm',
		data() {
			return {
				threeTimes : false,
				msg : {
					title     : defTitle,
					desc      : defDesc,
					overTitle : overTitle,
					overDesc  : overDesc,
					overText  : overText
				}
			}
		},
		props : {
			onClose : {
				type    : Function,
				default : () => console.log('onClose')
			}
		},
		methods : {
			onReset() {
				this.msg = {
					title : defTitle,
					desc  : defDesc
				}
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