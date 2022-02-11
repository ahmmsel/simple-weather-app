import React, { useState } from 'react'

import Input from "./components/UI/Input"
import Button from "./components/UI/Button"

export default function App() {
	const [city, setCity] = useState("")
	const [result, setResult] = useState("")

	const cityChangeHandler = (e) => setCity(e.target.value)
	
	const getWeatherHandler = async (e) => {
		e.preventDefault()
		const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9dff71894761b57ca34a026656a8543&units=metric`)
		const data = await res.json()
		try {
			setResult(data.main.temp)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section className="app">
			<div className="app--container">
				<div className="app--form">
					<form onSubmit={getWeatherHandler}>
						<Input
							input={{
								type: "text",
								onChange: cityChangeHandler
							}}
						 />
						<Button styling="primary--btn" btn={{
							type: "submit",
							disabled: !city
						}}>generate</Button>
					</form>
				</div>
				<div className="app--result">
					<div className="text">
						<h1>{result && result + "	C"}</h1>
					</div>
					<div className="icon bi bi-clouds-fill"></div>
				</div>
			</div>
		</section>
	)
}