<template>
	<div>Logs</div>

	<div v-if="logs.length">
		<div v-for="({ old, current, date }) in logs" :key="date">
			{{ old }} {{ current }} {{ date }}
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'WoLogs',
	computed: {
		...mapState({
			logs: state => state.logs,
		}),
	},
};
</script>