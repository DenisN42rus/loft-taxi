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

		expect(getByTestId("form")).toBeInTheDocument()
	})
})
