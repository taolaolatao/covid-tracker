import React, { useState, useEffect } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { fetchCountriesData } from '../../api';
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		(async () => setCountries(await fetchCountriesData()))();
	}, [])

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect onChange={e => handleCountryChange(e.target.value)}>
				<option value="">Global</option>
				{countries.length ? countries.map((country, index) => <option key={index} value={country}>{country}</option>) : null}
			</NativeSelect>
		</FormControl>
	);
}

export default CountryPicker;
