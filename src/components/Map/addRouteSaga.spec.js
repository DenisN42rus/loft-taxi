import {recordSaga} from './recordSaga';
import {getRouteSaga} from '../../sagas/routeSaga';
import {addRoute} from '../../actions/routeActions';

jest.mock("../../api", () => ({serverGetRoute: jest.fn(() => {return {addresses: []}})}));

describe("getRouteSaga", () => {
	describe("ADD_ROUTE", () => {
		it("add route through api", async () => {
			const dispatched = await recordSaga(
				getRouteSaga,
				addRoute()
			);

			expect(dispatched[0]).toEqual(expect.objectContaining({type: "ADD_ROUTE"}));
		});
	});
});
