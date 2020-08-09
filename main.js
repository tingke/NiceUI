// import Vue from 'vue';
//  const Vue = require('./node_modules/vue/dist/vue');
import Button from './src/compenents/button';

Vue.use(Button, 'nc-button');

new Vue({
    el: '#app',
    data: {
        msg: 'hi'
    }
})