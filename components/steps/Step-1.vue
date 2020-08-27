<template>
	<div>
		<h1 class="font-display text-gray text-4xl leading-none mb-6">1. How old are you?</h1>

		<div class="flex flex-wrap -mx-4">
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">18-24</span>
					<span class="text-base font-bold">YEARS</span>
				</Radio>
			</div>
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">25-30</span>
					<span class="text-base font-bold">YEARS</span>
				</Radio>
			</div>
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">30+</span>
					<span class="text-base font-bold">YEARS</span>
				</Radio>
			</div>
		</div>
	</div>
</template>

<script>
import Radio from "~/components/Radio";

export default {
	name: 'step-1',
	components: {
		Radio
	},
}
</script>

