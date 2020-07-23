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
