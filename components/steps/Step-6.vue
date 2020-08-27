<template>
	<div>
		<h1 class="font-display text-gray text-4xl leading-none mb-6">6. How many hours do you sleep on average every day?</h1>

		<div class="flex flex-wrap -mx-4">
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">&lt; 6</span>
					<span class="text-base font-bold">HOURS</span>
				</Radio>
			</div>
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">6-8</span>
					<span class="text-base font-bold">HOURS</span>
				</Radio>
			</div>
			<div class="w-4/12 px-4">
				<Radio>
					<span class="text-2xl font-bold">8+</span>
					<span class="text-base font-bold">HOURS</span>
				</Radio>
			</div>
		</div>
	</div>
</template>

<script>
import Radio from "~/components/Radio";

export default {
	name: 'step-6',
	components: {
		Radio,
	},
}
</script>

