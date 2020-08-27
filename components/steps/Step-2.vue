<template>
	<div>
		<h1 class="font-display text-gray text-4xl leading-none mb-6">2. How are you feeling today?</h1>

		<div class="flex flex-wrap -mx-4">
			<div class="w-4/12 px-4">
				<Radio>
					<img src="../../assets/img/icon-sad.svg" alt="" class="mb-2" />
					<span class="text-base font-bold">SAD</span>
				</Radio>
			</div>
			<div class="w-4/12 px-4">
				<Radio>
					<img src="../../assets/img/icon-neutral.svg" alt="" class="mb-2" />
					<span class="text-base font-bold">NEUTRAL</span>
				</Radio>
			</div>
			<div class="w-4/12 px-4">
				<Radio>
					<img src="../../assets/img/icon-smilling.svg" alt="" class="mb-2" />
					<span class="text-base font-bold">HAPPY</span>
				</Radio>
			</div>
		</div>
	</div>
</template>

<script>
import Radio from "~/components/Radio";

export default {
	name: 'step-2',
	components: {
		Radio
	},
}
</script>

