<template>
	<div class="font-body h-full py-10 md:px-0 px-4">
		<div class="fixed top-0 left-0 md:h-full h-48 md:w-64 w-full bg-green z-0">
			<span class="font-display text-white opacity-50 text-4xl md:inline-block hidden p-6" v-if="showPagination">
				{{ showPagination }}
			</span>
		</div>
		<div class="container relative z-10 bg-white rounded-md md:px-10 px-5 pb-10 pt-10">
			<img src="../assets/img/logo.svg" alt="Logo infomentum" class="m-auto mb-5 logo md:w-full w-48" />
			<nuxt />
		</div>
		<div
			class="popup -translate-x-1/2 -translate-y-1/2 bg-white fixed left-0 p-8 top- top-0 transform w-full z-50 rounded-sm"
			v-show="showPopup"
		>
			<form @submit.prevent="onSubmit">
				<button
					class="absolute top-0 right-0 p-1 transform -translate-x-2 translate-y-2"
					@click="hidePopup"
					aria-label="Submit Form"
				>
					<cross colour="text-black" />
				</button>
				<input
					type="email"
					class="py-2 text-gray border-0 border-b-2 border-gray w-full text-base bg-transparent"
					required
					name="email"
					placeholder="Your email address..." />
				<button class="hidden" type="submit">Submit</button>
			</form>
		</div>
		<div
			class="mask fixed z-10 bg-black top-0 left-0 h-full w-full opacity-25"
			v-show="showPopup"
		></div>
	</div>
</template>

<script>
import Cross from "~/components/graphic/Cross";

export default {
	components: {
		Cross
	},
	head: {
		meta: [],
		link: []
	},
	mounted() {
		this.$store.dispatch("fetch_questions");
	},
	computed: {
		showPopup() {
			return this.$store.state.modal
		},
		showPagination() {
			return this.$store.state.page
		}
	},
	methods: {
		hidePopup() {
			this.$store.dispatch('set_modal', 0)
		},
		onSubmit() {
			this.$store.dispatch('set_modal', 0)
		}
	}
};
</script>

<style lang="scss" scoped>
	.logo {
		max-width: 260px;
	}
	.popup {
		max-width: 435px;
		top: 50%;
		left: 50%;
	}
</style>
