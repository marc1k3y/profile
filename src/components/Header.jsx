import React from "react"
import css from "../styles/Header.module.css"

export default function Header() {
    return (
        <div className={css.wrapper}>
            <div className={css.navbar}>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#">Works</a>
            </div>
            <div className={css.title}>
                profile
            </div>
        </div>
    )
}
