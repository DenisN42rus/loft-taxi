import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {HomeWithAuth} from '../../components/Home';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';

jest.mock('../../components/Login', () => ({Login: () => <div>Login component</div>}))
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
				getState: () => ({auth: {isLoggedIn: true}}),
				subscribe: () => {},
				dispatch: () => {}
			}

		const history = createMemoryHistory();

		const {container, getByTestId} = render(
			<Router history={history}>
				<Provider store={mockStore}>
					<HomeWithAuth />
				</Provider>
			</Router>
		);

		expect(getByTestId('form')).toBeInTheDocument()
	})
})