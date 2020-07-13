import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {Header} from "../../components/Header";
import "@testing-library/jest-dom/extend-expect";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe("Header", () => {
	it("render correctly", () => {
		const props = {
					navigate: () => {},
					logOut: () => {}
				};

			const history = createMemoryHistory();
		
			const {getByText} = render(
				<Router history={history}>
						<Header {...props}/>
				</Router>
			);

		expect(getByText("Выйти")).toBeInTheDocument()
	})
})

// describe("When clicked on navigation buttons", () => {
// 	it("opens corresponding page", () => {
// 		const props = {
// 					navigate: jest.fn(),
// 					logOut: () => {}
// 				};
// 		const history = createMemoryHistory();
		
// 			const {getByText, container} = render(
// 				<Router history={history}>
// 						<Header />
// 				</Router>
// 			);
// 		const mapBtn = getByText("Карта");
// 		const profileBtn = getByText("Профиль");

// 		fireEvent.click(mapBtn)
// 		expect(container.innerHTML).toMatch("Map component")
// 		fireEvent.click(profileBtn)
// 		expect(container.innerHTML).toMatch("Profile component")
// 	})
// })

describe("When clicked on logOut button", () => {
	const props = {
		navigate: () => {},
		isLoggedIn: true,
		logOut: () => {props.isLoggedIn = false}
	}

	it("sets 'isLoggedIn' to false", () => {
		const history = createMemoryHistory();
		
			const {getByText} = render(
				<Router history={history}>
						<Header {...props}/>
				</Router>
			);

		fireEvent.click(getByText("Выйти"))
		expect(props.isLoggedIn).toBe(false)
	})
})