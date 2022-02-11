
import React from 'react'
import style from "./Button.module.scss"

const Button = (props) => {
	let btnType;

	if (props.styling === "primary--btn") {
		btnType = style["primary--btn"]
	} else if (props.styling === "secondary--btn") {
		btnType = style["secondary--btn"]
	} else {
		btnType = props.className
	}

	let styling = `${btnType} ${props.className}`

	return (
		<button className={styling} {...props.btn}>{props.children}</button>
	)
}

export default Button