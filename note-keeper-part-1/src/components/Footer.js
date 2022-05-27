import React from "react"

function Footer() {
	return (
		<footer>
			<div>Copyright &copy; {getYear()}</div>
		</footer>
	)
}

function getYear() {
	return new Date().getFullYear();
}

export default Footer