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
                let state = getUrlParam('STATE');
                console.log('state', state)
                if(code && code != '') {
                    state = getUrlParam('state');
                    this.SetCode(state);
                    axios.get(Vue.config.network + '/wechat/oauth/login?code=' + code)
                    .then((response) => {
                        console.log('response', response)
                    })
                    .catch((error) => {
                        console.log('error', error)
                    });
                } else {
                    if(process.env.NODE_ENV == 'development') {
                        // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx06c82c3cbb012752&redirect_uri=http%3A%2F%2Ffiltration.hansgrohe.com.cn&response_type=code&scope=snsapi_userinfo&state="+state+"#wechat_redirect";
                    } else {
                        window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx06c82c3cbb012752&redirect_uri=http%3A%2F%2Ffiltration.hansgrohe.com.cn&response_type=code&scope=snsapi_userinfo&state="+state+"#wechat_redirect";
                    }
                    
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
