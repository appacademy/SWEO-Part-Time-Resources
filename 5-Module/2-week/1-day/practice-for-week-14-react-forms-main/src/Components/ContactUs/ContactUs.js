import {useState} from 'react'

function ContactUS(){
    const [name, setName] =  useState('')
    const [email, setEmail] =  useState('')
    const [phone, setPhone] =  useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name, 
            email, 
            phone
        }
        // possible actions
        // const newUser =  await fetch('/some/api/signup', {
        //     method : 'POSt',
        //     headers : {
        //         'Content-Type' : 'application/JSon'
        //     },
        //     body : JSON.stringify(data)
        // })
        // let something = await newUser.json()
        console.log(data)
        
        setEmail('')
        setName('')
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
          onChange={(e) => {
            setName(e.target.value)
            // console.log(e.target.value)
          }} 
            value={name}
          id='name' type='text' />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
          onChange={(e) => {
            setEmail(e.target.value)
          }} 
          value={email}
          id='email' type='text' />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
          onChange={(e) => {
            setPhone(e.target.value)
          }} 
          value={phone}
          id='phone' type='text' />
        </div>
        <button>Submit</button>
      </form>
    </div>
    )
}

export default ContactUS