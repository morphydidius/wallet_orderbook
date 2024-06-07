<template>
	<div class="book">
		<select @change="changeElemsCount">
			<option
				v-for="num in elemsPerTableList"
				:value="num"
				:key="num"
			>{{ num }}</option>
		</select>

		<v-table
			height="85vh"
			fixed-header
		>
			<thead>
				<tr>
					<th class="text-left">Price</th>
					<th class="text-left">Quantity</th>
					<th class="text-left">Total</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="([price, quantity], index) in ordersList"
					:key="`${price}${index}`"
				>
					<td>{{ getPrice(price) }}&nbsp;</td>
					<td>{{ getQuantity(quantity) }}&nbsp;</td>
					<td>{{ getTotal(price, quantity) }}</td>
				</tr>
			</tbody>
		</v-table>
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
