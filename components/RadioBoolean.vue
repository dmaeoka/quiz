<template>
	<button
		class="flex flex-nowrap items-center w-full  text-xl border-2  py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:shadow-outline "
		:class="active ? `bg-green border-green text-white hover:bg-green hover:text-white` : `bg-white text-gray text-xl border-2 border-gray hover:bg-gray hover:text-white`"
	>
		<check v-if="active" colour="text-current" />
		<cross v-else colour="text-current" />
		<span v-if="active" class="ml-2">Yes</span>
		<span v-else class="ml-2">No</span>
	</button>
</template>

<script>
import Check from "~/components/graphic/Check";
import Cross from "~/components/graphic/Cross";

export default {
	name: 'radio-boolean',
	components: {
		Check,
		Cross
	},
	props: {
		active: {
			type: Boolean,
			default: false
		}
	}
}
</script>

