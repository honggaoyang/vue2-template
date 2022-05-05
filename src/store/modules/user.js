export default {
    namespaced: true, //开启命名空间
    // 用于存储数据
    state: {
        sum: 111
    },

    // 用于操作数据（state）
    mutations: {
        INCRE(state, value) {
            state.sum += value
        }
    },

    // 用于响应组件中的动作
    actions: {
        increAdd(context, value) {
            if (context.state.num % 2) {
                context.commit("INCRE", value)
            }
        }
    },

    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}