import React from 'react';
import {render} from "@testing-library/react";
import {MapWithConnect} from "../../components/Map";
import {Provider} from 'react-redux';

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  GeolocateControl: jest.fn(),
  Map: jest.fn(() => ({
    addControl: jest.fn(),
    on: jest.fn(),
    remove: jest.fn()
  })),
  NavigationControl: jest.fn()
}));


describe("Map", () => {
	it("renders correctly", () => {

    const mockStore = {
        getState: () => ({route: {addresses: [], coordinates: []}}),
        subscribe: () => {},
        dispatch: () => {}
      }

		const {getByTestId} = render(
      <Provider store={mockStore}>
        <MapWithConnect />
      </Provider>
    )

		expect(getByTestId("map-wrapper")).toBeInTheDocument()
		expect(getByTestId("map")).toBeInTheDocument()
	})
})

