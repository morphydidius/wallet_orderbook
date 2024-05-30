<template>
	<div class="book">
		<div
			v-for="[price, quantity] in orders"
			:key="price"
		>
			{{ price }}&nbsp;{{ quantity }}&nbsp;{{ getTotal(price, quantity) }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'WoBook',
	props: {
		orders: {
			type: Array,
			required: true,
		},
	},
	methods: {
		getTotal(price, quantity) {
			return price * quantity;
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