import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from '../components/App';

jest.mock('../components/Home', () => ({HomeWithAuth: () => <div>Home component</div>}))
jest.mock('../components/Header', () => ({Header: () => <div>Header component</div>}))
jest.mock('../components/Map', () => ({Map: () => <div>Map component</div>}))
jest.mock('../components/Profile', () => ({Profile: () => <div>Profile component</div>}))

describe("App", () => {
	describe("When isLoggedIn = false", () => {
		it("renders correctly", () => {
			const {container} = render(<App />)
			expect(container.innerHTML).toMatch("Home component")
		})
	})
	describe("When isLoggedIn = true", () => {
		it("renders correctly", () => {
			const {container} = render(<App isLoggedIn={true}/>)
			expect(container.innerHTML).toMatch("Header component")
		})
	})
})

