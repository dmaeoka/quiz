<template>
	<Row :image="page_id">
		<step-1 v-if="page_id == 1"      :item="question" />
		<step-2 v-else-if="page_id == 2" :item="question" />
		<step-3 v-else-if="page_id == 3" :item="question" />
		<step-4 v-else-if="page_id == 4" :item="question" />
		<step-5 v-else-if="page_id == 5" :item="question" />
		<step-6 v-else-if="page_id == 6" :item="question" />
		<step-7 v-else-if="page_id == 7" :item="question" />

		<template v-slot:buttons>
			<div class="flex w-full lg:w-6/12 lg:order-none order-2">
				<button
					class="btn md:inline-block block w-full lg:w-auto text-center transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-gray hover:bg-gray text-gray hover:text-white font-normal py-2 px-8 rounded-full "
					@click.prevent="onBack">
					BACK
				</button>
			</div>
			<div class="flex w-full lg:w-6/12 lg:order-none order-1">
				<nuxt-link
					class="btn md:inline-block block w-full lg:w-auto text-center transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-green hover:bg-green text-green hover:text-white font-normal py-2 px-8 rounded-full lg:mb-0 mb-6 ml-auto"
					:to="detailslink()"
					type="button"
				>
					NEXT
				</nuxt-link>
			</div>
		</template>
	</Row>
</template>

<script>
import api from "../config";
import Row from "~/components/Row";
import Step1 from "~/components/steps/Step-1";
import Step2 from "~/components/steps/Step-2";
import Step3 from "~/components/steps/Step-3";
import Step4 from "~/components/steps/Step-4";
import Step5 from "~/components/steps/Step-5";
import Step6 from "~/components/steps/Step-6";
import Step7 from "~/components/steps/Step-7";

export default {
	components: {
		Row,
		Step1,
		Step2,
		Step3,
		Step4,
		Step5,
		Step6,
		Step7
	},
	watch: {
		$route(to, from ) {
			const id = parseInt(to.query.id);
			this.page_id = id;
			this.$store.dispatch('set_page', `${id}/7`);
			this.get_question(id);
		}
	},
	mounted() {
		const id = this.page_id;
		if (id) {
			this.get_question(id);
		}
	},
	data() {
		return {
			question: {
				title: "",
				answer: ""
			}
		};
	},
	head() {
		return {
			title: this.question.title
		}
	},
	asyncData({query, redirect}) {
		// pick query params, result will be merged with data
		const id = parseInt(query.id);
		const t = this;
		if (id && typeof id == "number" && id <= 7 ) {
			return {
				page_id: parseInt(query.id)
			}
		} else {
			return redirect('/')
		}
	},
	methods: {
		onBack() {
			this.$router.go(-1);
		},
		detailslink() {
			const t = this;
			const count = this.$store.getters.count;
			return (t.page_id < count) ? `/page?id=${t.page_id + 1}` : "/thank-you"
		},
		get_question(id) {
			const t = this;
			api.get_question(id)
				.then(data => {
					t.question = data;
					t.$store.dispatch('set_page', `${id}/7`)
				})
				.catch(() => {});
		}
	}
};
</script>
