import {recordSaga} from './recordSaga';
import {getAddressesSaga} from '../../sagas/routeSaga';
import {addRoute} from '../../actions/routeActions';

jest.mock("../../api", () => ({serverGetAddresses: jest.fn(() => {return []})}));

describe("addRouteSaga", () => {
	describe("ADD_ROUTE", () => {
		it("add route through api", async () => {
			const dispatched = await recordSaga(
				getAddressesSaga,
				addRoute()
			);

			expect(dispatched[0]).toEqual(expect.objectContaining({type: "ADD_ADDRESSES"}));
		});
	});
});
