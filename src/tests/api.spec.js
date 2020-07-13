import {serverLogin, serverAddCard} from "../api";

describe("serverLogin", () => {
	it("return success", async () => {
		const email = "test@test.com";
		const password = "123123";
		const data = await serverLogin(email, password);

		expect(data).toBe(true)
	})
})

describe("serverAddCard", () => {
	it("return success", async () => {
		const cardNumber = "0000 0000 0000 0000";
		const expiryDate = "1016";
		const cardName = "TEST";
		const cvc = "000";
		const data = await serverAddCard(cardNumber, expiryDate, cardName, cvc);

		expect(data).toBe(true)
	})
})