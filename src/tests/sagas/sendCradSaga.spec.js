import {recordSaga} from './recordSaga';
import {sendCardSaga} from '../../sagas/paymentSaga';
import {addCard} from '../../actions/cardActions';

jest.mock("../../api", () => ({serverAddCard: jest.fn(() => true)}));

describe("sendCardSaga", () => {
	describe("ADD_CARD", () => {
		it("send card through api", async () => {
			const dispatched = await recordSaga(
				sendCardSaga,
				addCard("number", "date", "name", "cvc")
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
