import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <main>
        <h1>
            Contact Us
        </h1>
        <form>
            <div>
                <label>Name</label>
                <input type='text' required placeholder='Abc'></input>
            </div>

            <div>
                <label>Email</label>
                <input type='email' required placeholder='Abc@xyz.com'></input>
            </div>

            <div>
                <label>Message</label>
                <input type='text' required placeholder='tell us about your query...'></input>
            </div>

            <button type='sumbit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
