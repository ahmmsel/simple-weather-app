import React from 'react'
import style from "./Input.module.scss"

const Input = (props) => {
	let styling = `${style["primary--input"]} ${props.className}`
	return (
		<input className={styling} {...props.input} />
	)
}

export default Input