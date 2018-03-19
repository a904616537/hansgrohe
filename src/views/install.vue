<template>
    <div class="install">
        <div class="regist-inner">
            <p class="regist-title">{{ $t('install.title') }}</p>
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
<<<<<<< HEAD
                <option value="90">&lt 90</option>
                <option value="100">100 - 180</option>
                <option value="190">190 - 270</option>
                <option value="280">280 - 350</option>
                <option value="350">350 - 450</option>
                <option value="450">450 - 530</option>
                <option value="530">&gt 530</option>
=======
                <option value="90">&lt 90 ppm / &lt 5 ºdH</option>
                <option value="100">100 - 180 ppm / &gt 5-10 ºdH</option>
                <option value="190">190 - 270 ppm / &gt 10 -15 ºdH</option>
                <option value="280">280 - 350 ppm / &gt 15 -20 ºdH</option>
                <option value="350">350 - 450 ppm / &gt 20- 25 ºdH</option>
                <option value="450">450 - 530 ppm / &gt 25- 30 ºdH</option>
                <option value="530">&gt 530 ppm / &gt 30 ºdH</option>
>>>>>>> fb75c16c7559db48890af18936b921281a668c7f
            </select> 
            <div class="pub-input pub-div">{{ life }}</div>
            <div class="pub-input pub-div">{{ changedate }}</div>
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

<<<<<<< HEAD
        <v-comfilm ref="comfilm" v-show="isShowComfilm" :onClose="onClose"></v-comfilm>
    </div>
</template>
<script>
    import Vue        from 'vue'
    import axios      from 'axios'
    import Comfilm    from '@/components/comfilm'
    import {mapState} from 'vuex';
    import moment     from 'moment';
=======
        <v-comfilm v-show="isShowComfilm" :onClose="onClose"></v-comfilm>
    </div>
</template>
<script>
    import Comfilm from '@/components/comfilm'
    import {mapState} from 'vuex';
    import moment from 'moment';
>>>>>>> fb75c16c7559db48890af18936b921281a668c7f
    export default{
        name : 'install',
        data() {
            return {
                isShow        : true,
                isShowComfilm : false,
                install : {
                    date  : '',
                    size  : '',
                    water : '',
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
<<<<<<< HEAD
                } else {
                    const model = {
                        person     : JSON.parse(localStorage.user),
                        phone      : localStorage.phone,
                        number     : localStorage.number,
                        setdate    : this.install.date,
                        size       : this.install.size,
                        water      : this.install.water,
                        life       : this.life,
                        changedate : this.install.changedate
                    }
                    axios.post(Vue.config.network + '/buyproduct', model)
                    .then((response) => {
                        this.$router.push({path : '/complete'})
                    })
                    .catch((error) => {
                        this.$router.push({path : '/registed'})
                    });
=======
                }else{
                    this.$router.push({path : '/complete'})
>>>>>>> fb75c16c7559db48890af18936b921281a668c7f
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
                const end_time = parseInt(this.life);
<<<<<<< HEAD
=======
                console.log('this.install.date', this.install.date)
>>>>>>> fb75c16c7559db48890af18936b921281a668c7f
                if(end_time > 0 && this.install.date != '') return moment(this.install.date).add(end_time, 'M').format('YYYY-MM-DD');
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
</style>