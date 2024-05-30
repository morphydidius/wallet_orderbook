<template>
	<div>
		Выберите валютную пару:

		<br>

		<select ref="currencyPair" @change="selectPair">
			<option
				v-for="pair in currencyPairs"
				:value="pair.value"
				:key="pair.value"
			>{{ pair.name }}</option>
		</select>

		<br>

		<button @click="getOrderBook">Отправить</button>

		<div v-if="isLoading">Загрузка...</div>

		<div v-if="asks.length || bids.length">
			Аски и биды в <router-link :to="{ name: 'orderBook' }">Order Book</router-link>
		</div>

		<wo-logs />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import WoLogs from '@/components/Logs';

export default {
	name: 'WoSettings',
	data() {
		return {
			currencyPairs: [
				{
					name: 'Bitcoin / Tether, BTC / USDT',
					value: 'BTCUSDT',
				},
				{
					name: 'BNB / Bitcoin, BNB / BTC',
					value: 'BNBBTC',
				},
				{
					name: 'Ethereum / Bitcoin, ETH / BTC',
					value: 'ETHBTC',
				},
			],
			selectedPairValue: null,
		};
	},
	components: {
		WoLogs,
	},
	computed: {
		...mapState({
			isLoading: state => state.isLoading,
			asks: state => state.asks,
			bids: state => state.bids,
		}),
	},
	mounted() {
		this.selectedPairValue = this.$refs.currencyPair.value;
	},
	methods: {
		getOrderBook() {
			this.$store.dispatch('getOrderBookByName', this.selectedPairValue);
		},
		selectPair(e) {
			this.selectedPairValue = e.target.value;
		},
	}
};
</script>