import React from 'react';
import {render, fireEvent, act} from "@testing-library/react";
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
        getState: () => ({card: {cardNumber: "cardNumber", expiryDate: "expiryDate", cardName: "cardName", cvc: "cvc"}}),
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
			handleClick: jest.fn()
		}

		 const mockStore = {
        getState: () => ({card: {cardNumber: "cardNumber", expiryDate: "expiryDate", cardName: "cardName", cvc: "cvc"}}),
        subscribe: () => {},
        dispatch: () => {}
      }

		const {getByTestId} = render(
			<Provider store={mockStore}>
        <ProfileWithAuth {...props}/>
      </Provider>
     )
		const submit = getByTestId("submit");
		
		act(() => {
			fireEvent.click(submit)
		});
		expect(props.handleClick).toHaveBeenCalled();
	})
})
