import {recordSaga} from '../../utils/recordSaga';
import {getCardSaga} from './paymentSaga';
import {addCard} from './cardActions';

jest.mock("../../utils/api", () => ({serverGetCard: jest.fn(() => true)}));

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
