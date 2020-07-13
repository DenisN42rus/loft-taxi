import {authMiddleware} from '../../middlewares/authMiddleware';
import {authenticate} from '../../actions/authActions';
import {serverLogin} from '../../api';

jest.mock("../../api", () => ({serverLogin: jest.fn(() => true)}))

describe("authMiddleware", () => {
	describe("AUTHENTICATE", () => {
		it("authenticate through api", async () => {
			const dispatch = jest.fn()

			await authMiddleware({dispatch})()(
				authenticate("testlogin", "tetspassword")
			)

			expect(serverLogin).toBeCalledWith("testlogin", "tetspassword")
			expect(dispatch).toBeCalledWith(
				{type: "LOG_IN"}
			)
		})
	})
})