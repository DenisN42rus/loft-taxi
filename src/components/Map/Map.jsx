import React, {useEffect, useRef} from 'react';
import mapbox from 'mapbox-gl';
import {OrderTaxiWithConnect} from './OrderTaxi';
import { 
  Paper, 
  Grid, 
  Typography,
  Button
} from '@material-ui/core';
import styles from './map.module.css';

export function Map(props) {
	const mapContainer = React.createRef();
	let map = useRef(null);

	useEffect(() => {
		mapbox.accessToken = 'pk.eyJ1IjoiZGVuaXM0MnJ1cyIsImEiOiJja2M3NTdwZGowbHc0MnNsam9tdDNqZDY5In0.wXHr0hYqtxBIIs35Y1cx-g'

		map.current = new mapbox.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [30.3056504, 59.9429126],
			zoom: 10
		})

		return () => {
			map.current.remove();
		};
	}, []);

	const handleClick = () => {
		props.history.replace("Profile")
	}

	return (
		<>
		<div data-testid="map-wrapper" className={styles.mapWrapper}>
			<div data-testid="map" className={styles.map} ref={mapContainer}></div>
		</div>
		{localStorage.hasCard === "true" ? 
			(
				<OrderTaxiWithConnect map={map}/>
			) : (
				<Paper className={styles.formContainer}>
					<Grid container>
						<Grid item xs={12}>
							<Typography align="left" variant="h4" className="offsetBottom">
								Заполните платежные данные
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography align="left" className="offsetBottom">
								Укажите информацию о банковской карте, чтобы сделать заказ.
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Button 
							  variant="contained" 
							  color="primary"
							  fullWidth
							  onClick={handleClick}
							>
							  Перейти в профиль
							</Button>
						</Grid>
					</Grid>
				</Paper>
			)
		}
		</>
	)
}
