import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {LoginForm} from "../components/LoginForm";
import "@testing-library/jest-dom/extend-expect";

describe("LoginForm", () => {
	it("renders correctly", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false
		}

		const {getByTestId, getByText} = render(<LoginForm {...props}/>)

		expect(getByTestId("form")).toBeInTheDocument()
		expect(getByTestId('email')).toBeInTheDocument()
		expect(getByTestId('password')).toBeInTheDocument()
	})
})

describe("When clicked on submit button", () => {
	it("should call 'handleSubmit'", () => {
		const props = {
			logIn: jest.fn(),
			navigate: jest.fn(),
			isLoggedIn: false
		}

		const handleSubmit = jest.fn();
		const {getByTestId} = render(<LoginForm {...props} handleSubmit={handleSubmit}/>)
		const submit = getByTestId("submit");

		fireEvent.click(submit)
		expect(props.logIn).toHaveBeenCalled();
		setTimeout(() => {
      expect(props.navigate).toHaveBeenCalled();
    }, 0)
	})
})