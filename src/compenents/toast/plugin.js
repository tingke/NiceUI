import Toast from './index'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message, propsData) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: propsData
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}