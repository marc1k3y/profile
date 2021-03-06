import React from "react"
import css from "../styles/Header.module.css"

export default function Header() {
    return (
        <div className={css.wrapper} id="header">
            <div className={css.navbar}>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#email-form">Contact</a>
            </div>
            <div className={css.title}>
                profile
            </div>
        </div>
    )
}
