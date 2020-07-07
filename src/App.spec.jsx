import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from './App';

jest.mock('./Home', () => ({HomeWithAuth: () => <div>Home component</div>}))
jest.mock('./Map', () => ({Map: () => <div>Map component</div>}))
jest.mock('./Profile', () => ({ProfileWithAuth: () => <div>Profile component</div>}))

describe("App", () => {
	it("renders correctly", () => {
		const {container} = render(<App />)
		expect(container.innerHTML).toMatch("Home component")
	})
})

describe("When clicked on navigation buttons", () => {
	describe("isLoggedIn = true", () => {
		it("opens the Map page", () => {
			const {getByText, container} = render(<App isLoggedIn={true}/>)

			fireEvent.click(getByText('Map'))
			expect(container.innerHTML).toMatch("Map component")
		})

		it("opens the Profile page", () => {
			const {getByText, container} = render(<App isLoggedIn={true}/>)

			fireEvent.click(getByText('Profile'))
			expect(container.innerHTML).toMatch("Profile component")
		})

		it("opens the Hoem page", () => {
			const {getByText, container} = render(<App isLoggedIn={true}/>)

			fireEvent.click(getByText('Home'))
			expect(container.innerHTML).toMatch("Home component")
		})
	})

	describe("isLoggedIn = false", () => {
		it("opens the Home page", () => {
			const {getByText, container} = render(<App isLoggedIn={false}/>)

			fireEvent.click(getByText('Map'))
			expect(container.innerHTML).toMatch("Home component")
		})
	})
})