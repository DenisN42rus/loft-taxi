import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {LoginForm} from "../../components/LoginForm";
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe("LoginForm", () => {
	it("renders correctly", () => {
		const props = {
			logIn: () => {},
			navigate: () => {},
			isLoggedIn: false,
			authenticate: jest.fn()
		}

			const mockStore = {
				getState: () => ({auth: {isLoggedIn: false}}),
				subscribe: () => {},
				dispatch: () => {}
			}

			const history = createMemoryHistory();

			const {getByTestId, getByText} = render(
				<Router history={history}>
					<Provider store={mockStore}>
						<LoginForm {...props}/>
					</Provider>
				</Router>
			);

		expect(getByTestId("form")).toBeInTheDocument()
		expect(getByTestId('email')).toBeInTheDocument()
		expect(getByTestId('password')).toBeInTheDocument()
		expect(getByTestId('submit')).toBeInTheDocument()
	})
})

describe("When clicked on submit button", () => {
	it("should call 'authenticate'", () => {
		const props = {
			logIn: jest.fn(),
			navigate: jest.fn(),
			isLoggedIn: false,
			authenticate: jest.fn()
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
						<LoginForm {...props}/>
					</Provider>
				</Router>
			);
		const submit = getByTestId("submit");
		
		fireEvent.click(submit)
		expect(props.authenticate).toHaveBeenCalled();
	})
})
