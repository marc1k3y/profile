import React from "react"
import css from "../styles/Skills.module.css"
import SkillsBar from "react-skillbars"

export default function Skills() {
    const skills = [
        { type: "Javascript", level: 70 },
        { type: "HTML5", level: 70 },
        { type: "CSS3", level: 75 },
        { type: "React", level: 85 },
        { type: "Redux", level: 75 },
        { type: "Axios", level: 85 },
        { type: "Node JS", level: 70 },
        { type: "Express JS", level: 65 },
        { type: "MongoDB", level: 65 },
        { type: "PostgreSQL", level: 60 },
    ]
    const colors = {
        bar: "gray",
        title: {
            text: "white",
            background: "#000"
        }
    }
    return (
        <div className={css.wrapper} id="skills">
            <h1>My skills</h1>
            <SkillsBar
                skills={skills}
                colors={colors}
                animationDelay={300}
                offset={50} />
        </div>
    )
}
