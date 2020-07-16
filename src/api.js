export const serverLogin = async (email, password) => {
	return fetch(
		`https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
	).then(res => res.json()).then(data => data.success)
}

export const serverRegister = async (email, password, name, surname) => {
	return fetch(
		`https://loft-taxi.glitch.me/register?email=${email}&password=${password}&name=${name}&surname=${surname}&token=AUTH_TOKEN`,
		{method: "POST"}
	).then(res => res.json()).then(data => data.success)
}

export const serverAddCard = async (cardNumber, expiryDate, cardName, cvc) => {
	return fetch(
		`https://loft-taxi.glitch.me/card?cardNumber=${cardNumber}&expiryDate=${expiryDate}&cardName=${cardName}&cvc=${cvc}&token=AUTH_TOKEN`,
		{method: "POST"}
	).then(res => res.json()).then(data => data.success)
}

export const serverGetCard = async () => {
	return fetch(
		`https://loft-taxi.glitch.me/card?token=AUTH_TOKEN`
	).then(res => res.json()).then(data => data)
}

export const serverGetRoute = async () => {
	return fetch(
		`https://loft-taxi.glitch.me/addressList`
	).then(res => res.json()).then(data => data)
}

export const serverGetAddress = async (startRoute, endRoute) => {
	return fetch(
		`https://loft-taxi.glitch.me/route?address1=${startRoute}&address2=${endRoute}`
	).then(res => res.json()).then(data => data)
}

