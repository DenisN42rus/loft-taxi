import React from "react";
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {Home} from '../components/Home';

jest.mock('../components/LoginForm', () => ({LoginForm: () => <div>LoginForm component</div>}))
jest.mock('../components/SignUpForm', () => ({SignUpForm: () => <div>SignUpForm component</div>}))

describe("Home", () => {
	const props = {
					logIn: () => {},
					navigate: () => {},
					logOut: () => {},
					isLoggedIn: true
				}
	it("renders correctly", () => {
		props.isLoggedIn = false

		const {container} = render(<Home {...props}/>)
		expect(container.innerHTML).toMatch("LoginForm component")
	})
})