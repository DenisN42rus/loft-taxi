import {serverLogin, serverAddCard, serverGetCard, serverGetRoute, serverGetAddress} from "../api";

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

describe("serverGetCard", () => {
	it("return success", async () => {
		const data = await serverGetCard();

		expect(data).toStrictEqual({
			cardName: "123",
			cardNumber: "123",
			cvc: "123",
			expiryDate: "2020-07-17T05:25:10.561Z",
			id: "rec4NwqbXyWY2Ju7E"
		})
	})
})

describe("serverGetRoute", () => {
	it("return success", async () => {
		const data = await serverGetRoute();

		expect(data).toStrictEqual({
			addresses: [
			"Пулково (LED)",
			"Шаверма на Невском",
			"Инфекционная больница им. Боткина",
			"Волковское кладбище"
			]})
	})
})

describe("serverGetAddress", () => {
	it("return success", async () => {
		const data = await serverGetAddress("Пулково (LED)", "Шаверма на Невском");

		expect(data).toHaveLength(24)
	})
})
