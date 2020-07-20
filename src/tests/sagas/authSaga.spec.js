import {recordSaga} from './recordSaga';
import {authenticateSaga} from '../../sagas/authSaga';
import {authenticate} from '../../actions/authActions';

jest.mock("../../api", () => ({serverLogin: jest.fn(() => true)}));

describe("authSaga", () => {
	describe("AUTHENTICATE", () => {
		it("authenticates through api", async () => {
			const dispatched = await recordSaga(
				authenticateSaga,
				authenticate("testLogin", "testPassword")
			);

			expect(dispatched).toEqual([
				{
					type: "LOG_IN"
				}
			]);
		});
	});
});
