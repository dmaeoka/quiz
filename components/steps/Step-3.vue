<template>
	<div>
		<h1 class="font-display text-gray text-4xl leading-none mb-6">{{ item.title }}</h1>
		<div class="flex flex-wrap -mx-4">
			<div class="w-4/12 px-4">
				<button
					class="flex flex-nowrap items-center w-full  text-xl border-2  py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline "
					:class="{ 'activeRadio': item.answer[0] == true, 'inactiveRadio': item.answer[0] == false }"
					@click.prevent="toggleActive(0)"
				>
					<check colour="text-current" />
					<span class="ml-2">Yes</span>
				</button>
			</div>
			<div class="w-4/12 px-4">
				<button
					class="flex flex-nowrap items-center w-full  text-xl border-2  py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline "
					:class="{ 'activeRadio': item.answer[1] == true, 'inactiveRadio': item.answer[1] == false }"
					@click.prevent="toggleActive(1)"
				>
					<cross colour="text-current" />
					<span class="ml-2">No</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import api from "../../config";
import Check from "~/components/graphic/Check";
import Cross from "~/components/graphic/Cross";

export default {
	name: 'step-3',
	props: {
		item: {
			type: Object,
		}
	},
	components: {
		Check,
		Cross
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

