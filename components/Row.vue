<template>
	<div>
		<div class="flex flex-wrap">
			<div class="flex flex-col justify-center lg:w-7/12 md:px-4 w-full mb-8 md:mb-0">
				<slot>This is the default content if nothing gets specified to go here</slot>
			</div>
			<div class="flex w-full lg:w-5/12">
				<img
					:src="list_images[image]"
					class="m-auto w-full" />
			</div>
		</div>
		<div class="flex flex-wrap md:mt-16 mt-8" v-if="!!$slots.buttons">
			<slot name="buttons"></slot>
		</div>
		<div class="absolute left-0 bottom-0 w-full bg-red-500 h-1 rounded-b-md "></div>
	</div>
</template>

<script>
export default {
	name: 'row',
	props: {
		image: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			list_images: [
				require('~/assets/img/Scooter.svg'), // id:0
				require('~/assets/img/Netflix.svg'), // id: 1
				require('~/assets/img/Flowers.svg'), // id: 2
				require('~/assets/img/Meetup.svg'), // id: 3
				require('~/assets/img/Laptop-Girl.svg'), // id: 4
				require('~/assets/img/Yoga.svg'), // id: 5
				require('~/assets/img/Laptop-Girl.svg'), // id: 6
				require('~/assets/img/Party.svg'), // id: 7
				require('~/assets/img/Help.png'), // id: 8
				require('~/assets/img/Thumbs-Up.png'), // id: 9
				require('~/assets/img/Cup.png'), // id: 10
				require('~/assets/img/Bye.png'), // id: 11

			]
		}
	}
};
</script>
