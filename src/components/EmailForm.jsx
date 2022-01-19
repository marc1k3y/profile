import React, { useState } from "react"
import { send } from "emailjs-com"
import css from "../styles/EmailForm.module.css"

export default function EmailForm() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Marck',
        message: '',
        reply_to: '',
    })

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        send(
            'service_vnkr5bu',
            'template_7vbhaio',
            toSend,
            'user_x0Z66RspzE2Gvkh1TsUk1'
        )
            .then((response) => {
                alert("I will definitelly answer!")
                console.log('SUCCESS!', response.status, response.text)
            })
            .catch((err) => {
                console.log('FAILED...', err)
            })
    }

    return (
        <div className={css.wrapper} id="email-form">
            <form onSubmit={onSubmit}>
                <h1>Contact with me</h1>
                <input
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
