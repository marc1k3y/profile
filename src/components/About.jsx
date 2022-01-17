import React from "react"
import css from "../styles/About.module.css"

export default function About() {
    return (
        <div className={css.wrapper} id="about">
            <h1>Marck Naberezhnykh</h1>
            <div className={css.text}>
                I'm Web Application Developer.
            </div>
        </div>
    )
}
