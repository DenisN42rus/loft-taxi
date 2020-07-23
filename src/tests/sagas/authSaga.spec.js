import {recordSaga} from './recordSaga';
import {authenticateSaga} from '../../sagas/authSaga';
import {authenticate} from '../../actions/authActions';

jest.mock("../../api", () => ({serverLogin: jest.fn(() => ({success: true}))}));

describe("authSaga", () => {
	describe("AUTHENTICATE", () => {
		it("authenticates through api", async () => {
			const dispatched = await recordSaga(
				authenticateSaga,
				authenticate("testLogin", "testPassword")
			);

			expect(dispatched[0]).toEqual(expect.objectContaining({type: "LOG_IN"}));
		});
	});
});
