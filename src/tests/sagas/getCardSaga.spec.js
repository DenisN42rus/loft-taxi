import {recordSaga} from './recordSaga';
import {getCardSaga} from '../../sagas/paymentSaga';
import {addCard} from '../../actions/cardActions';

jest.mock("../../api", () => ({serverGetCard: jest.fn(() => true)}));

describe("getCardSaga", () => {
	describe("ADD_CARD", () => {
		it("get card through api", async () => {
			const dispatched = await recordSaga(
				getCardSaga,
				addCard("number", "date", "name", "cvc")
			);

			expect(dispatched).toEqual([
				{
					"payload": {
           "cardName": undefined,
           "cardNumber": undefined,
           "cvc": undefined,
           "expiryDate": undefined
         },
          "type": "ADD_CARD",
				}
			]);
		});
	});
});
