import React from "react";
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {HomeWithAuth} from '../../components/Home';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';

jest.mock('../../components/LoginForm', () => ({LoginForm: () => <div>LoginForm component</div>}))
jest.mock('../../components/SignUpForm', () => ({SignUpForm: () => <div>SignUpForm component</div>}))

describe("Home", () => {
	const props = {
					logIn: () => {},
					navigate: () => {},
					logOut: () => {},
					isLoggedIn: true
				}
	it("renders correctly", () => {
		props.isLoggedIn = false

		const mockStore = {
				getState: () => ({auth: {isLoggedIn: false}}),
				subscribe: () => {},
				dispatch: () => {}
			}

			const history = createMemoryHistory();

			const {container} = render(
				<Router history={history}>
					<Provider store={mockStore}>
						<HomeWithAuth />
					</Provider>
				</Router>
			);
			
		expect(container.innerHTML).toMatch("")
	})
})