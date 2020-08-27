/*
 * Data store, managed by Vuex - https://vuex.vuejs.org/
 *
 * Currently just holds our list of questions.
 */

import Vuex from 'vuex';
import api from "../config";

const store = () => {
	return new Vuex.Store({
		state: {
			question_list: [],
			modal: false,
			page: false
		},
		// data getter helpers
		getters: {
			count(state) {
				return state.question_list.length;
			},
		},
		// syncronous mutations of data
		mutations: {
			set_questions(state, array) {
				state.question_list = array || [];
			},
			set_modal(state, value) {
				state.modal = value || false;
			},
			set_page(state, value) {
				state.page = value || false;
			},
		},
		// asynchronous actions that contain logic, mutate data
		actions: {
			fetch_questions(context) {
				api.query_questions().then(question =>
					context.commit('set_questions', question));
			},
			set_modal(context, value) {
				context.commit('set_modal', value);
			},
			set_page(context, value) {
				context.commit('set_page', value);
			}
		},
	})
}

export default store
