import React from "react"
import css from "./styles/App.module.css"
import Header from "./components/Header"
import Burger from "./components/Burger"
import Welcome from "./components/Welcome"
import About from "./components/About"
import Skills from "./components/Skills"
import EmailForm from "./components/EmailForm"
import Footer from "./components/Footer"

export default function App() {
	return (
		<div className={css.wrapper}>
			<Header />
			<Burger />
			<Welcome />
			<About />
			<Skills />
			<EmailForm />
			<Footer />
		</div>
	)
}