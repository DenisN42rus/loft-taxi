import React from 'react';
import {render, fireEvent, act, wait} from "@testing-library/react";
import {ProfileWithAuth} from "../../components/Profile";
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
	it("should call 'register'", async () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false,
			sendCard: jest.fn()
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
    const submit = getByTestId("submit");

		await wait(() => {
			fireEvent.click(submit)
		});
  		expect(props.sendCard).toHaveBeenCalled();
	})
})
