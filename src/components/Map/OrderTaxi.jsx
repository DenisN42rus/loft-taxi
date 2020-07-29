import React, {useState, useEffect} from 'react';
import {getAddresses, getRoute} from './routeActions';
import {connect} from 'react-redux';
import { 
  Paper, 
  Grid, 
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './map.module.css';

export function OrderTaxi(props) {
	const [route, setRoute] = useState({startRoute: "", endRoute: ""});
	const [newOrder, setNewOrder] = useState(true);

  const orderTaxi = (e) => {
  	e.preventDefault();

  	props.getRoute(route.startRoute, route.endRoute);
  	setNewOrder(false);
  }

  const getNewTaxi = () => {
  	setNewOrder(true);
  	setRoute({startRoute: "", endRoute: ""});
  	if (props.map.current.getLayer('route')) {
  		props.map.current.removeLayer('route');
  		props.map.current.removeSource('route');
  		props.map.current.flyTo({
		    center: [30.3056504, 59.9429126],
		    zoom: 10
		  });
  	}
  }

	const handleChange = (event) => {
    setRoute({...route, [event.target.name]: event.target.value});
  };

  useEffect(() => {
		if(!props.addresses.length) {
			props.getAddresses()
		}
	}, []);

	useEffect(() => {
		drawRoute(props.map.current, props.route);
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

  const { startRoute, endRoute } = route;
  const useStyles = makeStyles({
  	root: {
  		
  	}
  });
  const classes = useStyles();

	return (
		<>
		{newOrder ? (
			<>
			<Paper className={styles.formContainer}>
				<Grid container>
					<Grid item xs={12}>
						<FormControl fullWidth className="offsetBottom">
			        <InputLabel id="startRoute-label">Откуда</InputLabel>
			        <Select
			        	select
			        	classes={{root: classes.root, children: classes.children}}
			          labelId="startRoute-label"
			          id="startRoute"
			          name="startRoute"
			          value={startRoute}
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
	)
}

const mapStateToProps = function(state) {
  return {
    addresses: state.route.addresses,
    route: state.route.route
  }
}

export const OrderTaxiWithConnect = connect(
	mapStateToProps,
	{getAddresses, getRoute}
)(OrderTaxi);
