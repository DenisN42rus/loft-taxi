import {recordSaga} from './recordSaga';
import {registerSaga} from '../../sagas/registrationSaga';
import {register} from '../../actions/registerAction';

jest.mock("../../api", () => ({serverRegister: jest.fn(() => ({success: true}))}));

describe("registrationSaga", () => {
	describe("REGISTER", () => {
		it("register through api", async () => {
			const dispatched = await recordSaga(
				registerSaga,
				register("testLogin", "testPassword", "testName", "testSurname")
			);

			expect(dispatched[0]).toEqual(expect.objectContaining({type: "LOG_IN"}));
		});
	});
});