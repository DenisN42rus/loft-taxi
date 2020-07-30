import React from 'react';
import {render} from "@testing-library/react";
import {OrderTaxiWithConnect} from "./OrderTaxi";
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

describe("OrderTaxi", () => {
	it("renders correctly", () => {
		const props = {
			map: {
				current: {
					isStyleLoaded: jest.fn(() => true)
				}
				
			},
			route: 
			{
				addresses: [], 
				route: []
			}
		}

    const mockStore = {
        getState: () => ({route: {addresses: [], route: []}}),
        subscribe: () => {},
        dispatch: () => {}
      }

		const {getByTestId} = render(
      <Provider store={mockStore}>
        <OrderTaxiWithConnect {...props}/>
      </Provider>
    )

		expect(getByTestId("submit")).toBeInTheDocument()
	})
})