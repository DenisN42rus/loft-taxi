import {serverLogin, serverAddCard, serverGetCard, serverGetRoute, serverGetAddresses} from "../api";

describe("serverLogin", () => {
	it("return success", async () => {
		const email = "test@test.com";
		const password = "123123";
		const data = await serverLogin({email, password});

		expect(data.success).toBe(true)
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
	it("return card", async () => {
		const data = await serverGetCard();

		expect(data).toHaveProperty("cardNumber")
	})
})

describe("serverGetAddresses", () => {
	it("return addresses", async () => {
		const data = await serverGetAddresses();

		expect(data).toStrictEqual({
			addresses: [
			"Пулково (LED)",
			"Шаверма на Невском",
			"Инфекционная больница им. Боткина",
			"Волковское кладбище"
			]})
	})
})

describe("serverGetRoute", () => {
	it("return route", async () => {
		const data = await serverGetRoute({startRoute: "Пулково (LED)", endRoute: "Шаверма на Невском"});

		expect(data).toHaveLength(24)
	})
})
