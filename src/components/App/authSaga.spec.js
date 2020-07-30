import {recordSaga} from '../../utils/recordSaga';
import {authenticateSaga} from './authSaga';
import {authenticate} from './authActions';

jest.mock("../../utils/api", () => ({serverLogin: jest.fn(() => ({success: true}))}));

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
