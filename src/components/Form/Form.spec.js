import React from 'react';
import {render, fireEvent, act} from "@testing-library/react";
import {Form} from "../../components/Form";
import {Formik, Field} from 'formik';


describe("When clicked on submit button", () => {
	test("should call 'authenticate'", () => {
		const props = {
			authenticate: jest.fn()
		}

		let container = null;
		let submit = null;

		act(() => {
			container = render(<Form {...props}/>);
		});

		
		act(() => {
			submit = container.getByTestId("submit");
			fireEvent.click(submit)
		});
		expect(props.authenticate).toHaveBeenCalled();
	})
})
