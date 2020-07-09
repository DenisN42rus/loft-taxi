import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {Profile} from "../components/Profile";
import {PropTypes} from "prop-types";
import "@testing-library/jest-dom/extend-expect";

describe("Profile", () => {
	const props = {
		navigate: () => {},
		isLoggedIn: false,
		logOut: () => {}
	}

	it("renders correctly", () => {
		const {getByTestId} = render(<Profile {...props}/>)

		expect(getByTestId("logOut")).toBeInTheDocument()
	})
})

describe("When clicked on logOut button", () => {
	const props = {
		navigate: () => {},
		isLoggedIn: true,
		logOut: () => {props.isLoggedIn = false}
	}

	it("sets 'isLoggedIn' to false", () => {
		const {getByTestId} = render(<Profile {...props}/>)

		fireEvent.click(getByTestId("logOut"))
		expect(props.isLoggedIn).toBe(false)
	})
})