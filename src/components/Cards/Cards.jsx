import React, { memo } from 'react';
import CountUp from 'react-countup';
import { Card, Typography, Grid, CardContent } from '@material-ui/core';
import cn from 'classnames';
import styles from './Cards.module.css';

const Cards = memo(({ confirmed, deaths, recovered, lastUpdate }) => {
	if(!confirmed) return <>Loading...</>;

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.infected)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Infected</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
						<Typography variant="body2">Number of active cases of COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Recovered</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={recovered.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
						<Typography variant="body2">Number of recovered cases of COVID-19</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>Deaths</Typography>
						<Typography variant="h5">
							<CountUp start={0} end={deaths.value} duration={2.5} separator="," />
						</Typography>
						<Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography>
						<Typography variant="body2">Number of deaths cases of COVID-19</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
});

export default Cards;
