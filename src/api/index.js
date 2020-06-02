import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://covid19.mathdro.id/api',
	timeout: 5000,
	responseType: 'json'
})

export const fetchData = async (country) => {
	let urlDefault = api.defaults.baseURL;

	if(country) urlDefault += `/countries/${country}`;

	try {
		const { data: { confirmed, recovered, deaths, lastUpdate } } = await api.get(urlDefault);
		const modifiedData = { confirmed, recovered, deaths, lastUpdate }

		return modifiedData;
	} catch (error) {
		return error;
	}
}

export const fetchDailyData = async () => {
	try {
		const { data } = await api.get('/daily');
		const modifiedData = data.map(dailyData => ({
			confirmed: dailyData.confirmed.total,
			deaths: dailyData.deaths.total,
			date: dailyData.reportDate
		}))

		return modifiedData;
	} catch (error) {
		return error;
	}
}

export const fetchCountriesData = async () => {
	try {
		const { data: { countries } } = await api.get('/countries');

		return countries.map(country => country.name);
	} catch (error) {
		return error;
	}
}
