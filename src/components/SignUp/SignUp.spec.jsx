import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {SignUp} from "./SignUp";
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

jest.mock('../Map', () => ({Map: () => <div>Map component</div>}))

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
						<SignUp {...props}/>
					</Provider>
				</Router>
			);

		expect(getByTestId("form")).toBeInTheDocument()
		expect(getByTestId('email')).toBeInTheDocument()
		expect(getByTestId('password')).toBeInTheDocument()
	})
})
