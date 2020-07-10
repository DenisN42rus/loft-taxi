import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import {Header} from "../components/Header";
import "@testing-library/jest-dom/extend-expect";

describe("Header", () => {
	it("render correctly", () => {
		const props = {
					navigate: () => {},
					logOut: () => {}
				};
		const {getByText} = render(<Header {...props}/>);

		expect(getByText("Выйти")).toBeInTheDocument()
	})
})

describe("When clicked on navigation buttons", () => {
	it("opens orresponding page", () => {
		const props = {
					navigate: jest.fn(),
					logOut: () => {}
				};
		const {getByText, container} = render(<Header {...props}/>);
		const mapBtn = getByText("Карта");
		const profileBtn = getByText("Профиль");

		fireEvent.click(mapBtn)
		expect(props.navigate).toHaveBeenCalled();
		fireEvent.click(profileBtn)
		expect(props.navigate).toHaveBeenCalled();
	})
})

describe("When clicked on logOut button", () => {
	const props = {
		navigate: () => {},
		isLoggedIn: true,
		logOut: () => {props.isLoggedIn = false}
	}

	it("sets 'isLoggedIn' to false", () => {
		const {getByText} = render(<Header {...props}/>)

		fireEvent.click(getByText("Выйти"))
		expect(props.isLoggedIn).toBe(false)
	})
})