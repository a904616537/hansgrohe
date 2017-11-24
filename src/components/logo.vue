<template>
    <div class="logo clearfloat">
        <!-- <div class="logo-text"><span>hansgrohe</span></div> -->
        <div class="logo-text"><img src="static/imgs/logo.jpg" style="height: 40px;"></div>
    </div>
</template>

<script>
    export default {
        name: 'logo',
        data () {
            return {

            }
        }
    }
</script>

<style>
.logo-text{
    width       : 66.66%;
    float       : right;
    color       : #fff;
    margin      : 20px 0;
    font-weight : bolder;
    overflow    : hidden;
}
.logo-text span{
    position  : relative;
    top       : -4px;
    font-size : 24px;
}
</style>
