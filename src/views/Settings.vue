<template>
	<v-container class="px-4">
		<v-select
			:items="currencyPairs"
			v-model="selectedPairValue"
			label="Выберите валютную пару"
			class="mt-3"
			variant="underlined"
			max-width="400px"
			clearable
		></v-select>

		<v-row class="px-3 mt-2">
			<v-btn
				variant="tonal"
				:disabled="isLoading || !selectedPairValue"
				class="px-4"
				@click="getOrderBook"
			>
				<wo-loader v-if="isLoading"></wo-loader>&nbsp;{{ btnText }}
			</v-btn>
		</v-row>

		<wo-logs />

		<v-row>
			<div v-if="asks.length || bids.length" class="pa-4">
				Аски и биды доступны в <router-link :to="{ name: 'orderBook' }">Order Book</router-link>
			</div>
		</v-row>
	</v-container>
</template>

<script>
import { mapState } from 'vuex';
import WoLogs from '@/components/Logs';
import WoLoader from '@/components/Loader';

export default {
	name: 'WoSettings',
	data() {
		return {
			currencyPairs: [
				{
					title: 'Bitcoin / Tether, BTC / USDT',
					value: 'BTCUSDT',
				},
				{
					title: 'BNB / Bitcoin, BNB / BTC',
					value: 'BNBBTC',
				},
				{
					title: 'Ethereum / Bitcoin, ETH / BTC',
					value: 'ETHBTC',
				},
			],
			selectedPairValue: null,
		};
	},
	components: {
		WoLogs,
		WoLoader,
	},
	computed: {
		...mapState({
			isLoading: state => state.isLoading,
			asks: state => state.asks,
			bids: state => state.bids,
		}),
		btnText() {
			return this.isLoading ? 'Загрузка' : 'Загрузить';
		},
	},
	mounted() {
		this.selectedPairValue = this.currencyPairs[0].value;
	},
	methods: {
		getOrderBook() {
			this.$store
				.dispatch('getOrderBookByName', this.selectedPairValue)
				.then(() => {
					this.$store.dispatch('updateOrderBook', this.selectedPairValue);
				});
		},
	}
};
</script>