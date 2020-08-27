
/* ServerAPI mockup - backed by localStorage for demo purposes only.
 *
 * Not efficient for large data because of localStorage limitations.
 */

import axios from "axios"

const KEY = "questions";

class LocalStorageAPI {

	constructor() {
	}

	query_questions() {
		return new Promise((resolve, reject) => {

			// localStorage.removeItem("movies") // to remove all

			var value = localStorage.getItem(KEY);

			if (!value) {
				// load initial data
				let url = "/data/questions.json";
				axios.get(url)
					.then(reply => {
						localStorage.setItem(KEY, JSON.stringify(reply.data));
						resolve(reply.data);
					});
			} else {
				let data = JSON.parse(value);
				resolve(data);
			}
		})
	}

	get_question(id) {
		return new Promise((resolve, reject) => {
			id = parseInt(id);
			var value = localStorage.getItem(KEY);
			let data = JSON.parse(value) || [];

			// search for id
			for (const x of data) {
				if (x.id == id) {
					resolve(x);
					return;
				}
			}

			reject();
		});
	}

	save_answer(item) {
		return new Promise((resolve, reject) => {

			var value = localStorage.getItem(KEY);
			let question_array = JSON.parse(value);

			if (!item.id) {
				// create object
				const seconds = Math.floor(Date.now() / 1000);
				item.id = seconds;
				question_array.push(item);
			} else {
				// edit object
				for (const x of question_array) {
					if (x.id == item.id) {
						x.title = item.title;
						x.answer = item.answer;
					}
				}
			}

			localStorage.setItem(KEY, JSON.stringify(question_array));
			resolve(item);
		})
	}

	delete_question(id) {
		return new Promise((resolve, reject) => {
			id = parseInt(id);

			var value = localStorage.getItem(KEY);
			let question_array = JSON.parse(value);

			question_array = question_array.filter(item => item.id !== id)

			localStorage.setItem(KEY, JSON.stringify(question_array));
			resolve();
		})
	}

}

// export singleton object
const api = new LocalStorageAPI();
export default api;
