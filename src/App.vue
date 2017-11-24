<template>
    <div id="app">
        <v-logo></v-logo>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue                   from 'vue';
    import Cookie                from 'vue-cookie';
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
                'SetLanguage'
            ]),
        }
    }
</script>

<style>
@font-face{
    font-family : myFont;
    src         : url('/static/fonts/Futura.ttc');
}
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
