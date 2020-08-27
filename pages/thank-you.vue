<template>
	<div>
		<Row :image="11">
			<div class="md:ml-10">
				<h1 class="font-display text-gray text-4xl leading-none md:mb-6 mb-8">
					<span class="highlight yellow">See you!</span>
				</h1>
				<p class="text-base leading-normal">Thank you for your time. We hope to hear from you in the future.</p>
				<p class="text-base leading-normal">Take care.</p>
			</div>
			<template v-slot:buttons>
				<div class="w-full border-t border-gray-light pt-8 mb-5">
					<p class="text-base leading-normal text-center">Are you interested in hearing from us in the future? </p>
				</div>

				<div class="flex w-full lg:w-6/12 lg:order-none order-2">
					<nuxt-link
						to="/"
						class="btn md:inline-block block w-full lg:w-auto text-center transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-gray hover:bg-gray text-gray hover:text-white font-normal py-2 px-8 rounded-full ml-auto lg:mr-2"
						type="button"
					>
						NO, THANKS
					</nuxt-link>
				</div>
				<div class="flex w-full lg:w-6/12 lg:order-none order-1">
					<button
						class="btn md:inline-block block w-full lg:w-auto text-center transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-green hover:bg-green text-green hover:text-white font-normal py-2 px-8 rounded-full lg:mb-0 mb-6 lg:ml-2"
						v-on:click.prevent="openModal"
						type="button"
					>
						YES PLEASE
					</button>
				</div>
			</template>
		</Row>
	</div>
</template>

<script>
import Row from "~/components/Row";

export default {
	components: {
		Row,
	},
	head() {
		return {
			title: "Diego Maeoka"
		}
	},
	mounted() {
		this.$store.dispatch('set_page', false);
	},
	methods: {
		openModal(e) {
			this.$store.dispatch('set_modal', true)
		}
	}
};
</script>
