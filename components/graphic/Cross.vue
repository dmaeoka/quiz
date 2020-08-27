<template>
	<svg
		width="14"
		height="14"
		viewBox="0 0 14 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M8.1 6.7L13.1 1.7C13.5 1.3 13.5 0.7 13.1 0.3C12.7 -0.1 12.1 -0.1 11.7 0.3L6.7 5.3L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L5.3 6.7L0.3 11.7C-0.1 12.1 -0.1 12.7 0.3 13.1C0.7 13.5 1.3 13.5 1.7 13.1L6.7 8.1L11.7 13.1C12.1 13.5 12.7 13.5 13.1 13.1C13.5 12.7 13.5 12.1 13.1 11.7L8.1 6.7Z"
			:class="colour"
			class="fill-current"/>
	</svg>
</template>
<script>
export default {
	props: {
		colour: String
	}
};
</script>
