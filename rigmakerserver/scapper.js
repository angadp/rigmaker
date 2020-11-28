const axios = require('axios');
const cheerio = require('cheerio');

const getPostTitles = async () => {
	try {
		const { data } = await axios.get(
			'https://in.pcpartpicker.com/builds/'
		);
		const $ = cheerio.load(data);
		const postTitles = [];

		$('.logGroup__card').each((_idx, el) => {
			console.log("Angad")
		});

		console.log($('ul[id=userbuild_list] > li').length)

		return postTitles;
	} catch (error) {
		throw error;
	}
};

getPostTitles()
.then((postTitles) => console.log(postTitles));