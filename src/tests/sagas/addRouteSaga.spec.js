import {recordSaga} from './recordSaga';
import {addRouteSaga} from '../../sagas/routeSaga';
import {addRoute} from '../../actions/routeActions';

jest.mock("../../api", () => ({serverGetRoute: jest.fn(() => {return {addresses: []}})}));

describe("addRouteSaga", () => {
	describe("ADD_ROUTE", () => {
		it("add route through api", async () => {
			const dispatched = await recordSaga(
				addRouteSaga,
				addRoute()
			);

			expect(dispatched).toEqual([
				{
					payload: {
						addresses: []
					},
          "type": "ADD_ROUTE",
				}
			]);
		});
	});
});
