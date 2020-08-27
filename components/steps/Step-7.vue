<template>
	<div>
		<h1 class="font-display text-gray text-4xl leading-none mb-6">7. How many times each day do you stop to relax and breathe?</h1>

		<div class="flex flex-wrap -mx-4">
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">0</span>
					<span class="text-base font-bold">TIME</span>
				</Radio>
			</div>
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">1+</span>
					<span class="text-base font-bold">TIMES</span>
				</Radio>
			</div>
		</div>
	</div>
</template>

<script>
import Radio from "~/components/Radio";

export default {
	name: 'step-7',
	components: {
		Radio,
	},
}
</script>

