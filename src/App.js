import React from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
	state = {
		data: {},
		country: ''
	}

	async componentDidMount(){
		const covidData = await fetchData();
		this.setState({ data: covidData });
	}

	handleCountryChange = async country => {
		const covidDataByCountry = await fetchData(country);
		this.setState({ data: covidDataByCountry, country: country });
	}

	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="Corona 19" />
				<Cards {...data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
