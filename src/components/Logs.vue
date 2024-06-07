<template>
	<div class="wo__logs py-8">
		<div class="pb-4">Логи изменений:</div>

		<v-table density='compact'>
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

					<td>{{ normalize(date) }}</td>
				</tr>
			</tbody>
		</v-table>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import dayjs from 'dayjs';

export default {
	name: 'WoLogs',
	computed: {
		...mapState({
			logs: state => state.logs,
		}),
	},
	methods: {
		normalize(date) {
			return dayjs(date).format('YYYY-MM-DD HH:mm:ss') ;
		},
	}
};
</script>