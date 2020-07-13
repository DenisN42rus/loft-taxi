import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {SignUpForm} from "../../components/SignUpForm";
import "@testing-library/jest-dom/extend-expect";
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe("SignUpForm", () => {
	it("renders correctly", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false,
			register: jest.fn()
		}

			const mockStore = {
				getState: () => ({auth: {isLoggedIn: false}}),
				subscribe: () => {},
				dispatch: () => {}
			}

			const history = createMemoryHistory();

			const {getByTestId} = render(
				<Router history={history}>
					<Provider store={mockStore}>
						<SignUpForm {...props}/>
					</Provider>
				</Router>
			);

		expect(getByTestId("form")).toBeInTheDocument()
		expect(getByTestId('email')).toBeInTheDocument()
		expect(getByTestId('password')).toBeInTheDocument()
	})
})

describe("When clicked on submit button", () => {
	it("should call 'register'", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false,
			register: jest.fn()
		}

		const mockStore = {
				getState: () => ({auth: {isLoggedIn: false}}),
				subscribe: () => {},
				dispatch: () => {}
			}

			const history = createMemoryHistory();

			const {getByTestId} = render(
				<Router history={history}>
					<Provider store={mockStore}>
						<SignUpForm {...props}/>
					</Provider>
				</Router>
			);
		const submit = getByTestId("submit");
		
		fireEvent.click(submit)
		expect(props.register).toHaveBeenCalled();
	})
})
