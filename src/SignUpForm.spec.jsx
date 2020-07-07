import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {SignUpForm} from "./SignUpForm";
import "@testing-library/jest-dom/extend-expect";

describe("SignUpForm", () => {
	it("renders correctly", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false
		}

		const {getByLabelText} = render(<SignUpForm {...props}/>)

		expect(getByLabelText('Email:')).toHaveAttribute('name', 'email')
		expect(getByLabelText('Password:')).toHaveAttribute('name', 'password')
		expect(getByLabelText('Name:')).toHaveAttribute('name', 'name')
		expect(getByLabelText('LastName:')).toHaveAttribute('name', 'lastName')
	})
})

describe("When changed input", () => {
	it("should change input value", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false
		}
		const {getByPlaceholderText } = render(<SignUpForm {...props}/>)
		const email = getByPlaceholderText ("email");
		const password = getByPlaceholderText ("password");

		fireEvent.change(email, {target: {value: "test"}})
		expect(email.value).toBe("test")
		fireEvent.change(password, {target: {value: "test"}})
		expect(password.value).toBe("test")
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
		const {getByTestId} = render(<SignUpForm {...props} handleSubmit={handleSubmit}/>)
		const submit = getByTestId("submit");

		fireEvent.click(submit);
    expect(props.navigate).toHaveBeenCalled();
	})
})