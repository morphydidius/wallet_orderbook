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
	</div>
</template>

<script>
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