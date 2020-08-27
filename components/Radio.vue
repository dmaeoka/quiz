<template>
	<button
		class="flex flex-col w-full py-6 border-2  rounded-md justify-center items-center"
		:class="active ? `bg-green-light border-green text-green` : `border-gray-light text-gray`"
	>
		<slot>
			Something here
		</slot>
	</button>
</template>

<script>
export default {
	name: 'radio',
	props: {
		active: {
			type: Boolean,
			default: false
		}
	}
}
</script>

