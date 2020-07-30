import {recordSaga} from '../../utils/recordSaga';
import {registerSaga} from './registrationSaga';
import {register} from './registerAction';

jest.mock("../../utils/api", () => ({serverRegister: jest.fn(() => ({success: true}))}));
jest.mock('../Map', () => ({Map: () => <div>Map component</div>}))

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