import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {SignUpForm} from "../../components/SignUpForm";
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
