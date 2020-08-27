<template>
	<div>
		<h1 class="font-display text-gray text-4xl leading-none mb-6">5. How many times this week have you exercised moderately for more than 20 minutes?</h1>

		<div class="flex flex-wrap -mx-4">
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">0</span>
					<span class="text-base font-bold">TIME</span>
				</Radio>
			</div>
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">1-2</span>
					<span class="text-base font-bold">TIMES</span>
				</Radio>
			</div>
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">3+</span>
					<span class="text-base font-bold">TIMES</span>
				</Radio>
			</div>
		</div>
	</div>
</template>

<script>
import Radio from "~/components/Radio";

export default {
	name: 'step-5',
	components: {
		Radio,
	},
}
</script>

