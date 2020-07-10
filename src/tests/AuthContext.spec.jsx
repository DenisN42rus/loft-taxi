import React from 'react';
import {AuthProvider, AuthContext} from '../AuthContext';
import {LoginForm} from "../components/LoginForm";
import {render} from "@testing-library/react";
import {act} from "react-dom/test-utils";

describe("AuthContext", () => {
	describe("logIn", () => {
			let isLoggedIn;
			let logIn;

			beforeEach(() => {
				render(
					<AuthProvider>
						<AuthContext.Consumer>
							{
								(value) => {
									isLoggedIn = value.isLoggedIn;
									logIn = value.logIn;
									return null;
								}
							}
						</AuthContext.Consumer>
					</AuthProvider>
				)
			})

		it("should 'isLoggedIn' to be false", () => {
			expect(isLoggedIn).toBe(false)
		})

		it("sets 'isLoggedIn' to true", () => {
			act(() => {
				logIn("123", "123");
			})
			expect(isLoggedIn).toBe(true)
		})
	})
	
	describe("logOut", () => {
		it("sets 'isLoggedIn' to false", () => {
			let isLoggedIn;
			let logOut;
			let logIn;

			render(
				<AuthProvider>
					<AuthContext.Consumer>
						{
							(value) => {
								isLoggedIn = value.isLoggedIn;
								logIn = value.logIn;
								logOut = value.logOut;
								return null;
							}
						}
					</AuthContext.Consumer>
				</AuthProvider>
			)
			
			act(() => {
				logIn("123", "123");
			})
			expect(isLoggedIn).toBe(true)
			act(() => {
				logOut();
			})
			expect(isLoggedIn).toBe(false)
		})
	})
})