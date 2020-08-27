<template>
	<div>
		<h1 class="font-display text-gray text-4xl leading-none mb-6">{{ item.title }}</h1>
		<div class="flex flex-wrap -mx-4">
			<div class="w-4/12 px-4">
				<button
					class="flex flex-col w-full py-6 border-2 rounded-md justify-center items-center"
					:class="{ 'activeBtn': item.answer[0] == true, 'inactiveBtn': item.answer[0] == false }"
					@click.prevent="toggleActive(0)"
				>
					<span class="text-2xl font-bold">0</span>
					<span class="text-base font-bold">TIME</span>
				</button>
			</div>
			<div class="w-4/12 px-4">
				<button
					class="flex flex-col w-full py-6 border-2 rounded-md justify-center items-center"
					:class="{ 'activeBtn': item.answer[1] == true, 'inactiveBtn': item.answer[1] == false }"
					@click.prevent="toggleActive(1)"
				>
					<span class="text-2xl font-bold">1-2</span>
					<span class="text-base font-bold">TIMES</span>
				</button>
			</div>
			<div class="w-4/12 px-4">
				<button
					class="flex flex-col w-full py-6 border-2 rounded-md justify-center items-center"
					:class="{ 'activeBtn': item.answer[2] == true, 'inactiveBtn': item.answer[2] == false }"
					@click.prevent="toggleActive(2)"
				>
					<span class="text-2xl font-bold">3+</span>
					<span class="text-base font-bold">TIMES</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import api from "../../config";

export default {
	name: 'step-5',
	props: {
		item: {
			type: Object,
		}
	},
	methods: {
		toggleActive(i) {
			const t = this;
			t.item.answer = t.item.answer.map(num => false);
			t.item.answer[i] = true;
			api.save_answer(t.item)
		}
	},
}
</script>

