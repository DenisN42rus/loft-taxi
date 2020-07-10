import React from 'react';
import mapbox from 'mapbox-gl';

export class Map extends React.Component {
	map = null;
	mapContainer = React.createRef();

	componentDidMount() {
		mapbox.accessToken = 'pk.eyJ1IjoiZGVuaXM0MnJ1cyIsImEiOiJja2M3NTdwZGowbHc0MnNsam9tdDNqZDY5In0.wXHr0hYqtxBIIs35Y1cx-g'

		this.map = new mapbox.Map({
			container: this.mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v9",
			center: [86.088374, 55.354727],
			zoom: 10
		})
	}

	componentWillUnmount() {
		this.map.remove()
	}

	render() {
		return <div data-testid="map-wrapper" className="map-wrapper">
			<div data-testid="map" className="map" ref={this.mapContainer}></div>
		</div>
	}
}