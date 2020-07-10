import React from 'react';
import {render} from "@testing-library/react";
import {SignUpForm} from "../components/SignUpForm";
import "@testing-library/jest-dom/extend-expect";

describe("SignUpForm", () => {
	it("renders correctly", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false
		}

		const {getByTestId} = render(<SignUpForm {...props}/>)

		expect(getByTestId("form")).toBeInTheDocument()
		expect(getByTestId('email')).toBeInTheDocument()
		expect(getByTestId('password')).toBeInTheDocument()
	})
})
