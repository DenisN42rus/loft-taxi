import {registerMiddleware} from '../../middlewares/registerMiddleware';
import {register} from '../../actions/registerAction';
import {serverRegister} from '../../api';

jest.mock("../../api", () => ({serverRegister: jest.fn(() => true)}))

describe("registerMiddleware", () => {
	describe("REGISTER", () => {
		it("send card through api", async () => {
			const dispatch = jest.fn()

			await registerMiddleware({dispatch})()(
				register("email", "password", "name", "surname")
			)

			expect(serverRegister).toBeCalledWith("email", "password", "name", "surname")

		})
	})
})