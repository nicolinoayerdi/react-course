import axios from "axios";

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID sDQquYCwWG9iAgpSEYq-ZI89ViBitM_UpqD2oLRAc88'
	}
	/*
	const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID sDQquYCwWG9iAgpSEYq-ZI89ViBitM_UpqD2oLRAc88'
			}
		});

	 */
})
