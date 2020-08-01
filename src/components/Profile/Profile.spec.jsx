import React from 'react';
import {render, fireEvent, act, wait} from "@testing-library/react";
import {ProfileWithAuth} from "./Profile";
import {PropTypes} from "prop-types";
import {Provider} from 'react-redux';

describe("Profile", () => {
	const props = {
		navigate: () => {},
		isLoggedIn: false,
		logOut: () => {}
	}

	 const mockStore = {
    getState: () => ({
    	card: 
    	{
    		cardNumber: "cardNumber", 
    		expiryDate: "expiryDate", 
    		cardName: "cardName", 
    		cvc: "cvc"
    	},
    	auth: {token: "token"}
    }),
    subscribe: () => {},
    dispatch: () => {}
  }

	it("renders correctly", () => {
		const {getByTestId} = render(
			<Provider store={mockStore}>
        <ProfileWithAuth {...props}/>
      </Provider>
		)

		expect(getByTestId("form")).toBeInTheDocument()
	})
})

describe("When clicked on submit button", () => {
	it("should call 'register'", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false,
			sendCard: jest.fn(() => true)
		}

		const mockStore = {
      getState: () => ({
      	card: 
      	{
      		cardNumber: "cardNumber", 
      		expiryDate: "expiryDate", 
      		cardName: "cardName", 
      		cvc: "cvc"
      	},
      	auth: {token: "token"}
      }),
      subscribe: () => {},
      dispatch: () => {}
    }

		const {getByTestId} = render(
			<Provider store={mockStore}>
        <ProfileWithAuth {...props}/>
      </Provider>
     )
    const form = getByTestId("form");
    
		fireEvent.submit(form)
		expect(props.sendCard()).toBe(true);
	})
})
