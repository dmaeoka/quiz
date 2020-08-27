<template>
	<div>
		<h1 class="font-display text-gray text-4xl leading-none mb-6">3. Do you have someone who you feel comfortable sharing your feelings with?</h1>

		<div class="flex flex-wrap -mx-4">
			<div class="w-4/12 px-4">
				<radio-boolean :active="true" />
			</div>
			<div class="w-4/12 px-4">
				<radio-boolean />
			</div>
		</div>
	</div>
</template>

<script>
import RadioBoolean from "~/components/RadioBoolean";

export default {
	name: 'step-3',
	components: {
		RadioBoolean,
	},
}
</script>

