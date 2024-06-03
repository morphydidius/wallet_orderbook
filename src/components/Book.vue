<template>
	<div class="book">
		<select @change="changeElemsCount">
			<option
				v-for="num in elemsPerTableList"
				:value="num"
				:key="num"
			>{{ num }}</option>
		</select>

		<div
			v-for="([price, quantity], index) in ordersList"
			:key="`${price}${index}`"
		>
			{{ getPrice(price) }}&nbsp;{{ getQuantity(quantity) }}&nbsp;{{ getTotal(price, quantity) }}
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

const symbolsAfterComma = {
	btcusdt: {
		price: 2,
		quantity: 5,
	},
	bnbbtc: {
		price: 6,
		quantity: 3,
	},
	ethbtc: {
		price: 5,
		quantity: 4,
	},
};

export default {
	name: 'WoBook',
	data() {
		return {
			elemsPerTableList: [ 100, 500, 1000 ],
			elemsPerTable: null,
		};
	},
	props: {
		orders: {
			type: Array,
			required: true,
		},
	},
	computed: {
		...mapState({
			pairName: state => state.currentPairName,
		}),
		ordersList() {
			return this.elemsPerTable
				? this.orders.slice(0, this.elemsPerTable)
				: this.orders;
		},
	},
	methods: {
		changeElemsCount(e) {
			this.elemsPerTable = e.target.value;
		},
		getTotal(price, quantity) {
			return price * quantity;
		},
		getPrice(price) {
			return Number(price)
				.toFixed(symbolsAfterComma[this.pairName].price);
		},
		getQuantity(quantity) {
			return Number(quantity)
				.toFixed(symbolsAfterComma[this.pairName].quantity);
		},
	},
};
</script>

<style scoped>
.book {
	display: flex;
	flex-direction: column;
	height: 80vh;
	overflow: scroll;
}
</style>