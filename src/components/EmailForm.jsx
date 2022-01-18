import React, { useState } from "react"
import axios from "axios"

export default function EmailForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const resetForm = () => {
        setForm({ name: "", email: "", message: "" })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: form
        }).then((response) => {
            if (response.data.status === "success") {
                console.log("Message Sent.")
                resetForm()
            } else if (response.data.status === "fail") {
                console.log("Message failed to send.")
            }
        })
    }

    return (
        <form id="contact-form"
            onSubmit={e => handleSubmit(e)}
            method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    value={form.name}
                    onChange={e => setForm(form => ({ ...form, name: e.target.value }))}
                    type="text"
                    className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                    value={form.email}
                    onChange={e => setForm(form => ({ ...form, email: e.target.value }))}
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    value={form.message}
                    onChange={e => setForm(form => ({ ...form, message: e.target.value }))}
                    className="form-control"
                    rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
