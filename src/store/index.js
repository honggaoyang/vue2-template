// 引入 vue
import Vue from 'vue'

// 引入 vuex
import Vuex from 'vuex'

// 使用Vuex
Vue.use(Vuex)


import userOptions from "./modules/user"


// 创建store并导出 store
export default new Vuex.Store({
    modules: {
        user: userOptions,
    }
})

