import {recordSaga} from './recordSaga';
import {addCoordinatesSaga} from '../../sagas/routeSaga';
import {addCoordinates} from '../../actions/routeActions';

jest.mock("../../api", () => ({serverGetAddress: jest.fn(() => {return []})}));

describe("addRouteSaga", () => {
	describe("ADD_ROUTE", () => {
		it("add route through api", async () => {
			const dispatched = await recordSaga(
				addCoordinatesSaga,
				addCoordinates()
			);

			expect(dispatched).toEqual([
				{
					payload: {
						coordinates: []
					},
          "type": "ADD_COORDINATES"
				}
			]);
		});
	});
});
