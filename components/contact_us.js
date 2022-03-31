import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact(){
  const defaultUser = {
    userInput1: '',
    userInput2: '',
    userInput3: '',
    option: ''
  }
  const [user, setUser] = useState(defaultUser)

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  
  const formSubmit = (e) =>{
    e.preventDefault()
    console.log("Submited user: ")
    console.log(user)
    setUser(defaultUser)
  }

  return(
    <div id="contact_us" className='flex flex-col items-center px-5 py-5 text-white md:text-2xl md:py-20 md:px-40 bg-neutral-800 md:flex-row'>
        <div className='w-1/2'>
          <h1 className='text-4xl font-bold'>CONTACT US</h1>            
          <a href="tel:801-325-2105" className='flex pt-10'><FontAwesomeIcon icon={faSquarePhone} style={{color:'yellow'}} className="pr-3 w-7"/>801-325-2105</a>
          <a href="mailto:bizdev@utahjazz.com" className='flex pt-10'><FontAwesomeIcon icon={faEnvelope} style={{color:'yellow'}} className="pr-3 w-7"/>bizdev@utahjazz.com</a>
          <br></br>
          <p>
            With options like single-game tickets, suite rentals and special group rates, experiencing Utah Jazz basketball has never been more convenient! Just let us know what you’re interested in and we can customize a package to fit your group and budget.
          </p>
        </div>
        <form onSubmit={formSubmit} className='flex flex-col w-1/2 mt-7 md:mt-0 md:w-2/5 md:pl-20'>

          <label htmlFor='input'>User Input</label>
          <input 
            type="text" 
            className='pl-1 text-black rounded-tr-lg rounded-bl-lg'
            name="userInput1"
            onChange={handleChange}
            value={user.userInput1}
            label="userInput1"
          />

          <label htmlFor='input' >User Input</label>
          <input 
            type="text" 
            className='pl-1 text-black rounded-tr-lg rounded-bl-lg '
            name="userInput2"
            onChange={handleChange}
            value={user.userInput2}
            label="userInput2"
          />

          <label htmlFor='input'>User Input</label>
          <input 
            type="text" 
            className='pl-1 text-black rounded-tr-lg rounded-bl-lg '
            name="userInput3"
            onChange={handleChange}
            value={user.userInput3}
            label="userInput3"
          />

          <label htmlFor='input'>Options</label>
          <select onChange={handleChange} value={user.option} name="option" className='text-black rounded-tr-lg rounded-bl-lg' required>
            <option value="" disabled selected>Select...</option>
            <option value="Eide">Eide</option>
          </select>
          <button className='flex items-center px-4 py-1 my-3 text-base font-bold text-black duration-300 ease-in bg-yellow-300 border border-black rounded w-fit hover:text-black hover:bg-white'>Submit</button>
        </form>
      </div>
  )
}