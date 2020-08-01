import React from 'react';
import {render, fireEvent, act} from "@testing-library/react";
import {Form} from "./Form";
import {Formik, Field} from 'formik';

jest.mock('../Map', () => ({Map: () => <div>Map component</div>}))

describe("When clicked on submit button", () => {
	test("should call 'authenticate'", () => {
		const props = {
			authenticate: jest.fn(() => true)
		}

		act(() => {
			const container = render(<Form {...props}/>);
			const form = container.getByTestId("form");
			fireEvent.submit(form)
			expect(props.authenticate()).toBe(true);
		})
	})
})
