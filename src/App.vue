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
                const state = getUrlParam('STATE');
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
                } else {
                    // window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1020286e395af06c&redirect_uri=http%3A%2F%2Ftestserver.eatisco.com%2Fwechat%2Foauth%2Flogin&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
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
