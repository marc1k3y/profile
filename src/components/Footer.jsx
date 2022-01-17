import React from "react"
import css from "../styles/Footer.module.css"
import Github from "../assets/social-link/github.svg"
import Twitter from "../assets/social-link/twitter.svg"
import StackOF from "../assets/social-link/sof.svg"
import Tg from "../assets/social-link/tg.svg"
// import Gmail from "../assets/social-link/gmail.svg"

export default function Footer() {
    return (
        <div className={css.wrapper}>
            <div className={css.btn}>
                <a href="#header">On top</a>
            </div>
            <div className={css.socialLinks}>
                <a
                    href="https://t.me/marc1k3y"
                    target="_blank"
                    rel="noreferrer">
                    <img src={Tg} alt="telegram" />
                </a>
                {/* <a
                    href="https://marc1k3y@gmail.com"
                    target="_blank"
                    rel="noreferrer">
                    <img src={Gmail} alt="gmail" />
                </a> */}
                <a
                    href="https://github.com/marc1k3y"
                    target="_blank"
                    rel="noreferrer">
                    <img src={Github} alt="github" />
                </a>
                <a
                    href="https://twitter.com/marc1k3y"
                    target="_blank"
                    rel="noreferrer">
                    <img src={Twitter} alt="twitter" />
                </a>
                <a
                    href="https://stackoverflow.com/users/17510508/marc1k3y"
                    target="_blank"
                    rel="noreferrer">
                    <img src={StackOF} alt="stack overflow" />
                </a>
            </div>
            <div className={css.copyright}>
                © Copyrigh 2022 Marc1k3y
            </div>
        </div>
    )
}
