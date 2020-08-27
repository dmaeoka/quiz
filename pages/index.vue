<template>
	<Row>
		<div class="md:ml-10">
			<h1 class="font-display text-gray text-4xl leading-none md:mb-6 mb-8">
				<span class="highlight yellow">Welcome!</span><br />
				Thank you for joining us.
			</h1>
			<p class="text-base leading-normal">We all know that mental wellness is equally important as physical well-being. Let’s go through a couple a questions to find out how you have been doing recently.</p>
		</div>

		<template v-slot:buttons>
			<div class="flex w-full lg:w-6/12 lg:order-none order-2">
				<nuxt-link
					class="btn md:inline-block block w-full lg:w-auto text-center transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-gray hover:bg-gray text-gray hover:text-white font-normal py-2 px-4 rounded-full "
					to="/thank-you"
					type="button"
				>
					I’D LIKE TO OPT OUT
				</nuxt-link>
			</div>
			<div class="flex w-full lg:w-6/12 lg:order-none order-1">
				<nuxt-link
					class="btn md:inline-block block w-full lg:w-auto text-center transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-green hover:bg-green text-green hover:text-white font-normal py-2 px-4 rounded-full lg:mb-0 mb-6 ml-auto"
					to="/page?id=1"
					type="button"
				>
					LET'S GET STARTED
				</nuxt-link>
			</div>
		</template>
	</Row>
</template>

<script>
import Row from "~/components/Row";

export default {
	components: {
		Row
	},
	head() {
		return {
			title: "Initial Title"
		}
	},
	mounted() {
		this.$store.dispatch('set_page', false);
	}
};
</script>
