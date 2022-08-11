import { useState } from 'react'

function ContactUs() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

const handleNameChange = (e) => {
    setName(e.target.value)                
}


    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = {
            name,
            email, 
            phone
        }
        console.log(data)
        // possible actions
        // let res = await  fetch('/users/signup', {
        //     method: 'POST',
        //     headers:{
        //         'Content-Type'  : 'application/json'
        //     },
        //     body : JSON.stringify(data)
        // })
        // res = await res.json()

        setName('')
        setEmail('')
        setPhone('')
    }



    return (
        <div>
            <h2>Contact Us</h2>
            <form
            onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                    onChange={handleNameChange}
                    // 
                    value={name}
                    id='name' type='text' />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email' type='text' />
                </div>
                <div>
                    <label htmlFor='phone'>Phone:</label>
                    <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id='phone' type='text' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactUs