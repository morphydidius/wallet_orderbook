<template>
	<div class="wo__logs">
		<div class="pb-2">Логи изменений</div>
		
		<v-table v-if="logs.length">
			<thead>
				<tr>
					<th class="text-left">
						Предыдущая
					</th>

					<th class="text-left">
						Текущая
					</th>

					<th class="text-left">
						Время
					</th>
				</tr>
			</thead>

			<tbody>
				<tr
					v-for="({ old, current, date }) in logs"
					:key="date"
				>
					<td>{{ old || '-' }}</td>

					<td>{{ current }}</td>

					<td>{{ date }}</td>
				</tr>
			</tbody>
		</v-table>

		<div v-else>-</div>
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