import {cardMiddleware} from '../../middlewares/cardMiddleware';
import {sendCard} from '../../actions/cardActions';
import {serverAddCard} from '../../api';
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../api", () => ({serverAddCard: jest.fn(() => true)}))

describe("cardMiddleware", () => {
	describe("SEND_CARD", () => {
		it("send card through api", async () => {
			const dispatch = jest.fn()

			await cardMiddleware({dispatch})()(
				sendCard("cardNumber", "expiryDate", "cardName", "cvc")
			)

			expect(serverAddCard).toBeCalledWith("cardNumber", "expiryDate", "cardName", "cvc")
			expect(dispatch).toBeCalledWith(
				{payload:  {
   	     "cardName": "cardName",
   	     "cardNumber": "cardNumber",
   	     "cvc": "cvc",
   	     "expiryDate": "expiryDate",
   	   },
   	   "type": "ADD_CARD",}
			)
		})
	})
})