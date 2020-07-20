import {recordSaga} from './recordSaga';
import {registerSaga} from '../../sagas/registrationSaga';
import {register} from '../../actions/registerAction';

jest.mock("../../api", () => ({serverRegister: jest.fn(() => true)}));

describe("registrationSaga", () => {
	describe("REGISTER", () => {
		it("register through api", async () => {
			const dispatched = await recordSaga(
				registerSaga,
				register("testLogin", "testPassword", "testName", "testSurname")
			);

			expect(dispatched).toEqual([
				{
					type: "LOG_IN"
				}
			]);
		});
	});
});