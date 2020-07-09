import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {LoginForm} from "../components/LoginForm";
import "@testing-library/jest-dom/extend-expect";

describe("Profile", () => {
	it("renders correctly", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false
		}

		const {getByTestId, getByLabelText} = render(<LoginForm {...props}/>)

		expect(getByTestId("form")).toBeInTheDocument()
		expect(getByLabelText('Email:')).toHaveAttribute('name', 'email')
		expect(getByLabelText('Password:')).toHaveAttribute('name', 'password')
	})
})

describe("When changed input", () => {
	it("should change input value", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false
		}
		const {getByTestId} = render(<LoginForm {...props}/>)
		const email = getByTestId("email");
		const password = getByTestId("password");

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
		const {getByTestId} = render(<LoginForm {...props} handleSubmit={handleSubmit}/>)
		const submit = getByTestId("submit");

		fireEvent.click(submit)
		expect(props.logIn).toHaveBeenCalled();
		setTimeout(() => {
      expect(props.navigate).toHaveBeenCalled();
    }, 0)
	})
})