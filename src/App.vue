<template>
    <div id="app">
        <v-logo></v-logo>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue                   from 'vue';
    import Cookie                from 'vue-cookie';
    import axios                 from 'axios';
    import {mapState,mapActions} from 'vuex';

    export default {
        name : 'app',
        data () {
            return {

            }
        },
        computed : mapState({
            lang : state => state.Language.lang,
        }),
        methods: {
            ...mapActions([
                'SetLanguage',
                'SetCode'
            ]),
            onWechatLogin() {
                //获取url中的参数
                function getUrlParam(name) {
                    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
                    const r = window.location.search.substr(1).match(reg);
                    if (r != null) return unescape(r[2]); return null;
                }

                const code = getUrlParam('code');
                const state = getUrlParam('state');
                console.log('state', state)
                this.SetCode(state);
                if(code) {
                    axios.get(Vue.config.network + '/wechat/oauth/login?code=' + code)
                    .then((response) => {
                        console.log('response', response)
                    })
                    .catch((error) => {
                        console.log('error', error)
                    });
                }
                
            }
        },
        created() {
            this.onWechatLogin();
        }
    }
</script>

<style>

#app {
    font-family             : myFont;
    -webkit-font-smoothing  : antialiased;
    -moz-osx-font-smoothing : grayscale;
    text-align              : center;
    color                   : #2c3e50;
    margin                  : 0;
    text-decoration         : none;
}

</style>
