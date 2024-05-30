<template>
	<div>
		<div v-if="currentPairName">{{ currentPairName }}</div>

		<div v-else>Не выбрана пара</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
	name: 'WoOrderBook',
	computed: {
		...mapState([
			'currentPairName',
		]),
		...mapGetters([
			'currentAsks',
			'currentBids',
		]),
	},
};
</script>