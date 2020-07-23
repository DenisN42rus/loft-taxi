export const serverLogin = async ({email, password}) => {
	return fetch(
		`https://loft-taxi.glitch.me/auth`,
		{
			method: "POST",
			headers: {
		    'Content-Type': 'application/json'
		  },
			body: JSON.stringify({email: email, password: password})
		}
	).then(res => res.json()).then(data => data)
}

export const serverRegister = async ({email, password, name, surname}) => {
	return fetch(
		`https://loft-taxi.glitch.me/register`,
		{
			method: "POST",
			headers: {
		    'Content-Type': 'application/json'
		  },
			body: JSON.stringify({email: email, password: password, name: name, surname: surname})
		}
	).then(res => res.json()).then(data => data)
}

export const serverAddCard = async ({cardNumber, expiryDate, cardName, cvc, token}) => {
	return fetch(
		`https://loft-taxi.glitch.me/card`,
		{
			method: "POST",
			headers: {
		    'Content-Type': 'application/json'
		  },
			body: JSON.stringify({
				cardNumber: cardNumber, 
				expiryDate: expiryDate, 
				cardName: cardName, 
				cvc: cvc,
				token: token
			})
		}
	).then(res => res.json()).then(data => data.success)
}

export const serverGetCard = async (token) => {
	return fetch(
		`https://loft-taxi.glitch.me/card?token=${token}`
	).then(res => res.json()).then(data => data)
}

export const serverGetAddresses = async () => {
	return fetch(
		`https://loft-taxi.glitch.me/addressList`
	).then(res => res.json()).then(data => data)
}

export const serverGetRoute = async ({startRoute, endRoute}) => {
	return fetch(
		`https://loft-taxi.glitch.me/route?address1=${startRoute}&address2=${endRoute}`
	).then(res => res.json()).then(data => data)
}

