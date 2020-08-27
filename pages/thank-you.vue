<template>
	<div>
		<Row :image="img">
			<div v-if="result == false">
				<div class="md:ml-10">
					<h1 class="font-display text-gray text-4xl leading-none md:mb-6 mb-8">
						<span class="highlight yellow">See you!</span>
					</h1>
					<p class="text-base leading-normal">Thank you for your time. We hope to hear from you in the future.</p>
					<p class="text-base leading-normal">Take care.</p>
				</div>
			</div>
			<div v-else>
				<div class="md:ml-10" v-if="result < 5">
					<h1 class="font-display text-gray text-4xl leading-none md:mb-6 mb-8">
						<span class="highlight yellow">Well done!</span>
					</h1>
					<p class="text-base leading-normal">Based on your answers, below are a few tips that we think might be helpful to you. </p>
					<ul class="mt-4 ml-4">
						<li class="help-list mb-2">Talking to someone you trust</li>
						<li class="help-list mb-2">Trying to manage your worries</li>
						<li class="help-list mb-2">Look after your physical health</li>
						<li class="help-list mb-2">Try breathing excercises</li>
						<li class="help-list mb-2">Keep a diary to help you recognise and avoid stressors</li>
						<li class="help-list">Celebrate the positives</li>
					</ul>
				</div>
				<div class="md:ml-10" v-if="result >=5 && result < 10">
					<h1 class="font-display text-gray text-4xl leading-none md:mb-6 mb-8">
						<span class="highlight yellow">Well done!</span>
					</h1>
					<p class="text-base leading-normal">Based on your answers, we think you are doing pretty well. Carry on as you were!</p>
				</div>
				<div class="md:ml-10" v-if="result >= 10">
					<h1 class="font-display text-gray text-4xl leading-none md:mb-6 mb-8">
						<span class="highlight yellow">Well done!</span>
					</h1>
					<p class="text-base leading-normal">Based on your answers, we think you are a Wellness Champion! Let’s celebrate your success together.</p>
				</div>
			</div>

			<template v-slot:buttons v-if="result != false">
				<div class="w-full border-t border-gray-light pt-8 mb-5">
					<p class="text-base leading-normal text-center">Are you interested in hearing from us in the future? </p>
				</div>

				<div class="flex w-full lg:w-6/12 lg:order-none order-2">
					<nuxt-link
						to="/"
						@click.native="clearAnswers"
						class="btn md:inline-block block w-full lg:w-auto text-center transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-gray hover:bg-gray text-gray hover:text-white font-normal py-2 px-8 rounded-full ml-auto lg:mr-2"
						type="button"
					>
						NO, THANKS
					</nuxt-link>
				</div>
				<div class="flex w-full lg:w-6/12 lg:order-none order-1">
					<button
						class="btn md:inline-block block w-full lg:w-auto text-center transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-green hover:bg-green text-green hover:text-white font-normal py-2 px-8 rounded-full lg:mb-0 mb-6 lg:ml-2"
						@click.prevent="openModal"
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
import api from "../config";
import Row from "~/components/Row";

export default {
	components: {
		Row,
	},
	data() {
		return {
			img: 11,
			result: false,
		}
	},
	head() {
		return {
			title: "See you!",
		}
	},
	mounted() {
		const t = this;
		t.$store.dispatch('set_page', false);
		t.$store.dispatch("fetch_questions")
			.then(data => {
				let factor = 0;
				let points = 0;
				const question_list = t.$store.state.question_list;
				const result = question_list.map((item, i) => {
					switch (i) {
						// How old are you
						case 0:
							if (item.answer[0] == true) //18-24
								factor = 1;
							else if(item.answer[1] == true) //25-30
								factor = .95;
							else
								factor = .9;
							break;
						// How are you feeling today?
						case 1:
							if (item.answer[0] == true) // Sad
								points -= 2;
							if (item.answer[2] == true) // Happy
								points += 2;
							break;
						// Do you have someone who you feel comfortable sharing your feelings with?
						case 2:
							if (item.answer[0] == true)
								points += 3;
							break;
						// How many times this week would you say you felt stressed to the point of worry
						case 3:
							if (item.answer[0] == true)
								points += 2;
							if (item.answer[2] == true)
								points -= 2;
							break;
						// How many times this week have you exercised moderately for more than 20 minutes?
						case 4:
							if (item.answer[1] == true)
								points += 1;
							if (item.answer[2] == true)
								points += 2;
							break;
						// How many hours do you sleep on average every day?
						case 5:
							if (item.answer[0] == true)
								points -= 1;
							if (item.answer[1] == true)
								points += 1;
							if (item.answer[2] == true)
								points += 2;
							break;
						// How many times each day do you stop to relax and breathe?
						case 6:
							if (item.answer[1] == true)
								points += 2;
							break;
					}
				});
				return Math.round(points * factor);
			})
			.then(result => {
				if (result < 5) {
					t.img = 8;
				} else if (result >=5 && result < 10) {
					t.img = 9;
				} else {
					t.img = 10;
				}
				t.result = result;
			})
			.catch(() => {});
	},
	methods: {
		openModal(e) {
			this.$store.dispatch('set_modal', true)
		},
		clearAnswers(e) {
			e.preventDefault();
			try {
				this.$store.state.question_list.map(item => {
					item.answer = item.answer.map(num => false);
					api.save_answer(item);
				});
			} catch (error) {

			}
		}
	}
};
</script>
