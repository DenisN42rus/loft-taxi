import {recordSaga} from '../../utils/recordSaga';
import {sendCardSaga} from './paymentSaga';
import {addCard} from './cardActions';

jest.mock("../../utils/api", () => ({serverAddCard: jest.fn(() => true)}));

describe("sendCardSaga", () => {
	describe("ADD_CARD", () => {
		it("send card through api", async () => {
			const dispatched = await recordSaga(
				sendCardSaga,
				addCard({"cardName": "name", 
				"cardNumber": "number", 
				"cvc": "cvc", 
				"expiryDate": "date"})
			);

			expect(dispatched).toEqual([
				{"payload": 
				{"cardName": "name", 
				"cardNumber": "number", 
				"cvc": "cvc", 
				"expiryDate": "date"}, 
				"type": "ADD_CARD"}
			]);
		});
	});
});
