import React, {useEffect, useState, useRef} from 'react';
import mapbox from 'mapbox-gl';
import {connect} from 'react-redux';
import {getRoute, getAddress} from '../actions/routeActions';
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

export function Map(props) {
	const [route, setRoute] = useState({startRoute: "", endRoute: ""});
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
		props.getRoute()
	}, []);

	const drawRoute = (map, coordinates) => {
		if(coordinates.length > 0) {
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

  	props.getAddress(route.startRoute, route.endRoute)
  	drawRoute(map.current, props.coordinates)
  }

	const { startRoute, endRoute } = route;

	const paperStyle = {
		padding: "44px 60px",
    marginTop: "95px",
    marginBottom: "48px",
    top: "0",
    left: "20px",
    position: "absolute",
    maxWidth: "30%"
	}

	const textStyle = {
		marginBottom: "30px"
	}
	return (
		<>
		<div data-testid="map-wrapper" className="map-wrapper">
			<div data-testid="map" className="map" ref={mapContainer}></div>
		</div>
		{localStorage.hasCard ? 
			(
				<Paper style={paperStyle}>
					<Grid container>
						<Grid item xs={12}>
							<FormControl fullWidth style={textStyle}>
				        <InputLabel id="demo-simple-select-label">Откуда</InputLabel>
				        <Select
				          labelId="demo-simple-select-label"
				          id="demo-simple-select"
				          name="startRoute"
				          value={startRoute}
				          fullWidth
				          onChange={handleChange}
				        	>
				        	{props.addresses ? (
				        		props.addresses.map((address) => (<MenuItem key={address} value={address}>{address}</MenuItem>))
				        		) : (<></>)
				        	}
				        </Select>
				      </FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl fullWidth style={textStyle}>
				        <InputLabel id="demo-simple-select-label">Куда</InputLabel>
				        <Select
				          labelId="demo-simple-select-label"
				          id="demo-simple-select"
				          name="endRoute"
				          value={endRoute}
				          fullWidth
				          onChange={handleChange}
				        	>
				          {props.addresses ? (
				        		props.addresses.map((address) => (<MenuItem key={address} value={address}>{address}</MenuItem>))
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
							  disabled={!(route.startRoute && route.endRoute)}
							>
							  Вызвать такси
							</Button>
						</Grid>
					</Grid>
				</Paper>
			) : (
				<Paper style={paperStyle}>
					<Grid container>
						<Grid item xs={12}>
							<Typography align="left" variant="h4" style={textStyle}>
								Заполните платежные данные
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography align="left" style={textStyle}>
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
    coordinates: state.route.coordinates
  }
}

export const MapWithConnect = connect(
	mapStateToProps,
	{getRoute, getAddress}
)(Map);