import React, { useState } from "react"
import css from "../styles/Burger.module.css"

export default function Burger() {
    const [visible, setVisible] = useState(false)
    const hide = () => {
        setVisible(false)
    }
    return (
        <div className={css.wrapper}>
            <div className={css.burger}>
                <button
                    onClick={() => setVisible(!visible)}>
                    ☰
                </button>
            </div>
            <div className={css.hidden} style={{ display: visible ? "flex" : "none" }}>
                <a
                    onClick={hide} href="#about">About</a>
                <a
                    onClick={hide} href="#skills">Skills</a>
                <a
                    onClick={hide} href="#email-form">Contact</a>
            </div>
        </div>
    )
}
