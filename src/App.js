import React from "react"
import css from "./styles/App.module.css"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import About from "./components/About"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
// import EmailForm from "./components/EmailForm"

export default function App() {
	return (
		<div className={css.wrapper}>
			<Header />
			<Welcome />
			<About />
			<Skills />
			{/* <EmailForm /> */}
			<Footer />
		</div>
	)
}