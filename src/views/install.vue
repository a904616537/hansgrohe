<template>
    <div class="install">
        <div class="regist-inner">
            <p class="regist-title">{{ $t('install.title') }}</p>
            <div class="triangle-box">
                <input readonly type="text" :placeholder="$t('install.city')" class="pub-input" @click="setCity" v-model="install.city">
                <span class="triangle"></span>
            </div>
            <div class="triangle-box">
                <select v-model="install.shop" class="pub-input select-input">
                    <option disabled value="">{{ $t('install.shop')}}</option>
                    <option value="1">位置1</option>
                    <option value="2">位置2</option>
                    <option value="3">位置3</option>
                    <option value="4">位置4</option>
                    <option value="5">位置5</option>
                </select>
                <span class="triangle"></span>
            </div>
            <input readonly type="text" :placeholder="$t('install.date')" class="pub-input" @click="setDate" v-model="install.date">
            <select v-model="install.size" class="pub-input select-input">
                <option disabled value="">{{ $t('install.size')}}</option>
                <option value="1">1 person</option>
                <option value="2">2 person</option>
                <option value="3">3 person</option>
                <option value="4">4 person</option>
                <option value="5">5 person</option>
                <option value="6">6 person or more</option>
            </select>
            <select v-model="install.water" class="pub-input select-input">
                <option disabled value="">{{ $t('install.water') }} (ppm)</option>
                <option value="90">&lt 90 ppm / &lt 5 ºdH</option>
                <option value="100">100 - 180 ppm / &gt 5-10 ºdH</option>
                <option value="190">190 - 270 ppm / &gt 10 -15 ºdH</option>
                <option value="280">280 - 350 ppm / &gt 15 -20 ºdH</option>
                <option value="350">350 - 450 ppm / &gt 20- 25 ºdH</option>
                <option value="450">&gt 450ppm / &gt 25 ºdH</option>
            </select> 
            <div class="pub-input pub-div">{{ life }}</div>
            <div class="pub-input pub-div">{{ changedate }}</div>
            <!-- <input type="text" :placeholder="$t('install.subdealer')" class="pub-input" v-model="install.subdealer"> -->
        </div>
        <div class="checkbox">
            <input type="checkbox" name="" style="display: none"/>
            <span @click="agree"><label for="checkbox"></label><label class="check" v-show="isShow"></label></span><span style="display: inline-block; margin-left: 10px; font-size: 14px;">{{ $t('install.read') }} <span class="under-line">{{ $t('install.guidelines') }}</span></span>
        </div>
        <button class="pub-btn install-btn" :disabled="!isShow" @click="next">{{ $t('install.submit') }}</button>
        <router-link to="/regist">
            <span class="under-line">{{ $t('install.back') }}</span>
        </router-link>
        <v-lang></v-lang>

        <v-comfilm ref="comfilm" v-show="isShowComfilm" :onClose="onClose"></v-comfilm>
    </div>
</template>
<script>
    import Vue        from 'vue'
    import axios      from 'axios'
    import Comfilm    from '@/components/comfilm'
    import {mapState} from 'vuex';
    import moment     from 'moment';
    export default{
        name : 'install',
        data() {
            return {
                isShow        : true,
                isShowComfilm : false,
                install : {
                    date      : null,
                    size      : '',
                    water     : '',
                    subdealer : '',
                    city      : '',
                    shop      : '' 
                }
            }
        },
        components : {
            'v-comfilm' : Comfilm,
        },
        methods : {
            agree() {
                this.isShow = !this.isShow
            },
            //获取购买的城市
            setCity() {

            },
            setDate() {
                this.$calendar.show({
                    onOk: (date)=> {
                        this.install.date = date
                    }
                });
            },
            next() {
                if(this.install.date == '' || this.install.size == ''){
                    this.isShowComfilm = !this.isShowComfilm
                    return
                } else {
                    const model = {
                        person     : JSON.parse(localStorage.user),
                        phone      : localStorage.phone,
                        number     : localStorage.number,
                        city       : this.install.city,
                        shop       : this.install.shop,
                        setdate    : this.install.date,
                        size       : this.install.size,
                        water      : this.install.water,
                        subdealer  : this.install.subdealer,
                        life       : this.life,
                        changedate : this.changedate
                    }
                    axios.post(Vue.config.network + '/buyproduct', model)
                    .then((response) => {
                        this.$router.push({path : '/complete'})
                    })
                    .catch((error) => {
                        this.$router.push({path : '/registed'})
                    });
                }
            },
            onClose() {
                this.isShowComfilm = false
            },

        },
        computed : mapState({
            lang : state => state.Language.lang,
            life() {
                if(this.install.size == '' || this.install.water == ''){
                    return this.lang == "zh"?'滤芯寿命':'CARTRIDGE LIFESPAN'
                }
                if(this.install.size == '1' && this.install.water == '90' || this.install.size == '1' && this.install.water == '100' || this.install.size == '1' && this.install.water == '190' || this.install.size == '2' && this.install.water == '90'){
                    return '12'
                }
                if(this.install.size == '1' && this.install.water == '280' || this.install.size == '2' && this.install.water == '100' || this.install.size == '3' && this.install.water == '90') {
                    return '9'
                }
                if(this.install.size == '1' && this.install.water == '350' || this.install.size == '1' && this.install.water == '450' || this.install.size == '2' && this.install.water == '190' || this.install.size == '3' && this.install.water == '100' || this.install.size == '3' && this.install.water == '190' || this.install.size == '4' && this.install.water == '90' || this.install.size == '4' && this.install.water == '100' || this.install.size == '5' && this.install.water == '90'){
                    return '6'
                }else{
                    return '3'
                }
            },
            changedate() {
                const end_time = parseInt(this.life) - 1;
                console.log('end_time', end_time)

                if(end_time > 0 && this.install.date != '') return moment(this.install.date.split('-')).add(end_time, 'months').format('YYYY-MM-DD');
                else return this.lang == "zh"?'更换日期':'REPLACEMENT DATE';
            }
        })
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
    .select-input{
        height             : 40px;
        width              : 100%;
        padding            : 0 12px;
        margin-bottom      : 10px;
        border-radius      : 10px;
        outline            : none;
        background-color   : rgb(239,239,244);
        border             : none;
        appearance         : none;
        -moz-appearance    : none;
        -webkit-appearance : none;
        -ms-appearance     : none; 
        color              : #2c3e50;
    }
    .triangle-box{
        position : relative;
    }
    .triangle{
        z-index      : 9;
        position     : absolute;
        right        : 10px;
        top          : 14px;
        width        : 0;
        height       : 0;
        border-left  : 10px solid transparent;
        border-right : 10px solid transparent;
        border-top   : 12px solid rgb(38,167,146);
    }
</style>
