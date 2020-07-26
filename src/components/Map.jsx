import React, {useEffect, useState, useRef} from 'react';
import mapbox from 'mapbox-gl';
import {connect} from 'react-redux';
import {getAddresses, getRoute} from '../actions/routeActions';
import { 
  Paper, 
  Grid, 
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core';
import styles from '../css/map.module.css';

export function Map(props) {
	const [route, setRoute] = useState({startRoute: "", endRoute: ""});
	const [newOrder, setNewOrder] = useState(true);
	const mapContainer = React.createRef();
	let map = useRef(null);

	useEffect(() => {
		mapbox.accessToken = 'pk.eyJ1IjoiZGVuaXM0MnJ1cyIsImEiOiJja2M3NTdwZGowbHc0MnNsam9tdDNqZDY5In0.wXHr0hYqtxBIIs35Y1cx-g'

		map.current = new mapbox.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v9",
			center: [30.3056504, 59.9429126],
			zoom: 10
		})

		return () => {
			map.current.remove();
		};
	}, []);

	useEffect(() => {
		if(!props.addresses.length) {
			props.getAddresses()
		}
	}, []);

	useEffect(() => {
		drawRoute(map.current, props.route);
	}, [props.route])

	const drawRoute = (map, coordinates) => {
		if(map && map.isStyleLoaded() && coordinates.length > 0) {
		  map.flyTo({
		    center: coordinates[0],
		    zoom: 15
		  });
		 
		  map.addLayer({
		    id: "route",
		    type: "line",
		    source: {
		      type: "geojson",
		      data: {
		        type: "Feature",
		        properties: {},
		        geometry: {
		          type: "LineString",
		          coordinates
		        }
		      }
		    },
		    layout: {
		      "line-join": "round",
		      "line-cap": "round"
		    },
		    paint: {
		      "line-color": "#ffc617",
		      "line-width": 8
		    }
		  });
		}
	};

	const handleClick = () => {
		props.history.replace("Profile")
	}

	const handleChange = (event) => {
    setRoute({...route, [event.target.name]: event.target.value});
  };

  const orderTaxi = (e) => {
  	e.preventDefault();

  	props.getRoute(route.startRoute, route.endRoute);
  	setNewOrder(false);
  }

  const getNewTaxi = () => {
  	setNewOrder(true);
  	setRoute({startRoute: "", endRoute: ""});
  	if (map.current.getLayer('route')) {
  		map.current.removeLayer('route');
  		map.current.removeSource('route');
  		map.current.flyTo({
		    center: [30.3056504, 59.9429126],
		    zoom: 10
		  });
  	}
  }

	const { startRoute, endRoute } = route;

	return (
		<>
		<div data-testid="map-wrapper" className={styles.mapWrapper}>
			<div data-testid="map" className={styles.map} ref={mapContainer}></div>
		</div>
		{localStorage.hasCard === "true" ? 
			(	<>
				{newOrder ? (
					<>
					<Paper className={styles.formContainer}>
						<Grid container>
							<Grid item xs={12}>
								<FormControl fullWidth className="offsetBottom">
					        <InputLabel id="startRoute-label">Откуда</InputLabel>
					        <Select
					          labelId="startRoute-label"
					          id="startRoute"
					          name="startRoute"
					          value={startRoute}
					          fullWidth
					          onChange={handleChange}
					        	>
					        	{props.addresses ? (
					        		props.addresses.map((address) => {
					        			if(address === endRoute) {
					        				return null;
					        			}
					        			return (<MenuItem key={address} value={address}>{address}</MenuItem>);
					        		})
					        		) : (<></>)
					        	}
					        </Select>
					      </FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl fullWidth className="offsetBottom">
					        <InputLabel id="endRoute-label">Куда</InputLabel>
					        <Select
					          labelId="endRoute-label"
					          id="endRoute"
					          name="endRoute"
					          value={endRoute}
					          fullWidth
					          onChange={handleChange}
					        	>
					          {props.addresses ? (
					        		props.addresses.map((address) => {
					        			if(address === startRoute) {
					        				return null;
					        			}
					        			return (<MenuItem key={address} value={address}>{address}</MenuItem>);
					        		})
					        		) : (<></>)
					        	}
					        </Select>
					      </FormControl>
							</Grid>
							<Grid item xs={12}>
								<Button 
								  variant="contained" 
								  color="primary"
								  fullWidth
								  onClick={orderTaxi}
								  data-testid="submit"
								  disabled={!(route.startRoute && route.endRoute)}
								>
								  Вызвать такси
								</Button>
							</Grid>
						</Grid>
					</Paper>
					</>
					) : (
					<>
					<Paper className={styles.formContainer}>
						<Grid container>
							<Grid item xs={12}>
								<Typography className="offsetBottom" align="left" variant="h4">
			            Заказ размещён
			          </Typography>
							</Grid>
							<Grid item xs={12}>
								<Typography className="offsetBottom" align="left">
			            Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
			          </Typography>
							</Grid>
							<Grid item xs={12}>
								<Button 
								  variant="contained" 
								  color="primary"
								  fullWidth
								  onClick={getNewTaxi}
									>
								  Сделать новый заказ
								</Button>
							</Grid>
						</Grid>
					</Paper>
					</>
					)
				}
				</>
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

const mapStateToProps = function(state) {
  return {
    addresses: state.route.addresses,
    route: state.route.route
  }
}

export const MapWithConnect = connect(
	mapStateToProps,
	{getAddresses, getRoute}
)(Map);