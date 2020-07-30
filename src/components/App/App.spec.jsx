import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {AppWithConnect} from '../../components/App';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

jest.mock('../Header', () => ({HeaderWithConnect: () => <div>Header component</div>}))
jest.mock('../Map', () => ({Map: () => <div>Map component</div>}))
jest.mock('../Profile', () => ({Profile: () => <div>Profile component</div>}))

describe("App", () => {
	describe("When isLoggedIn = false", () => {
		it("renders correctly", () => {
			const mockStore = {
				getState: () => ({auth: {isLoggedIn: false}}),
				subscribe: () => {},
				dispatch: () => {}
			}

			const history = createMemoryHistory();

			const {container} = render(
				<Router history={history}>
					<Provider store={mockStore}>
						<AppWithConnect />
					</Provider>
				</Router>
			);
			
			expect(container.innerHTML).toMatch("")
		})
	})
	describe("When isLoggedIn = true", () => {
		it("renders correctly", () => {
			const mockStore = {
				getState: () => ({auth: {isLoggedIn: true}}),
				subscribe: () => {},
				dispatch: () => {}
			}

			const history = createMemoryHistory();

			const {container} = render(
				<Router history={history}>
					<Provider store={mockStore}>
						<AppWithConnect />
					</Provider>
				</Router>
			);

			expect(container.innerHTML).toMatch("Header component")
		})
	})
})

