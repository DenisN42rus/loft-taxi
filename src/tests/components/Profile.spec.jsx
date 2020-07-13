import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {Profile} from "../../components/Profile";
import {PropTypes} from "prop-types";

describe("Profile", () => {
	const props = {
		navigate: () => {},
		isLoggedIn: false,
		logOut: () => {}
	}

	it("renders correctly", () => {
		const {getByTestId} = render(<Profile {...props}/>)

		expect(getByTestId("form")).toBeInTheDocument()
	})
})

describe("When clicked on submit button", () => {
	it("should call 'register'", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false,
			sendCard: jest.fn()
		}

		const {getByTestId} = render(<Profile {...props}/>)
		const submit = getByTestId("submit");
		
		fireEvent.click(submit)
		expect(props.sendCard).toHaveBeenCalled();
	})
})
