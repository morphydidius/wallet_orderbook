import { createStore } from 'vuex';
import orderBookApi from '@/api/orderBookApi';
import btcusdt from '@/store/btcusdt';

export default createStore({
    state: {
        currentPairName: null,
    },
    getters: {
        currentAsks: state => state[state.currentPairName]?.asks || [],
        currentBids: state => state[state.currentPairName]?.bids || [],
    },
    mutations: {
        setCurrentPairName: (state, name) => {
            state.currentPairName = name;
        },
    },
    actions: {
        getOrderBookByName(context, name) {
            const moduleName = name.toLowerCase();

            context.commit('setCurrentPairName', moduleName);
            context.commit(`${moduleName}/getOrderBookStart`);

            return new Promise(resolve => {
                orderBookApi.getOrderBook(name)
                    .then(data => {
                        context.commit(`${moduleName}/getOrderBookSuccess`, data);
                        resolve(data);
                    })
                    .catch(error => {
                        context.commit(`${moduleName}/getOrderBookFailure`, error);
                    })
            });
        },
    },
    modules: {
        btcusdt,
    },
});
