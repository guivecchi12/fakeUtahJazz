import React, {useState} from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact(){
  const defaultUser = {
    userInput1: '',
    userInput2: '',
    userInput3: '',
    option: '',
    shortText: ''
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
    alert("Thank you for your input, \nWe'll get back to you as soon as possible")
    setUser(defaultUser)
  }

  return(
    <div id="contact_us" className='flex flex-col px-5 py-5 text-white md:text-2xl md:py-20 md:px-40 bg-neutral-800 md:flex-row'>
        <div className='md:w-1/2'>
          <h1 className='text-4xl font-bold'>CONTACT US</h1>
          {/* Phone number */}
          <Link href="tel:801-325-2105">
            <div className='flex pt-5 md:pt-10 hover:cursor-pointer'>
              <FontAwesomeIcon icon={faSquarePhone} style={{color:'yellow'}} className="pr-3 w-7"/>
              <p className='jazzMonumentRegular'>801-325-2105</p>
            </div> 
          </Link> 
          {/* Email */}
          <Link  href="mailto:bizdev@utahjazz.com">
            <div className='flex pt-3 md:pt-10 hover:cursor-pointer'>
              <FontAwesomeIcon icon={faEnvelope} style={{color:'yellow'}} className="pr-3 w-7"/>
              <p className='jazzMonumentRegular'>bizdev@utahjazz.com</p>
            </div>
          </Link>
          <br></br>

          <p className='w-4/5 md:w-full'>
            With options like single-game tickets, suite rentals and special group rates, experiencing Utah Jazz basketball has never been more convenient! Just let us know what you’re interested in and we can customize a package to fit your group and budget.
          </p>
        </div>
        <form onSubmit={formSubmit} className='flex flex-col w-1/2 mt-7 md:mt-0 md:w-2/5 md:pl-20'>

          <label htmlFor='input' className='mb-1'>User Input</label>
          <input 
            type="text" 
            className='pl-1 text-black rounded-tr-lg rounded-bl-lg'
            name="userInput1"
            onChange={handleChange}
            value={user.userInput1}
            label="userInput1"
            required
          />

          <label htmlFor='input' className='mb-1 md:pt-5' >User Input</label>
          <input 
            type="text" 
            className='pl-1 text-black rounded-tr-lg rounded-bl-lg '
            name="userInput2"
            onChange={handleChange}
            value={user.userInput2}
            label="userInput2"
            required
          />

          <label htmlFor='input' className='mb-1 md:pt-5'>User Input</label>
          <input 
            type="text" 
            className='pl-1 text-black rounded-tr-lg rounded-bl-lg'
            name="userInput3"
            onChange={handleChange}
            value={user.userInput3}
            label="userInput3"
            required
          />

          <label htmlFor='input' className='mb-1 md:pt-5'>Options</label>
          <select 
            onChange={handleChange}
            value={user.option}
            name="option"
            className='text-black rounded-tr-lg rounded-bl-lg' 
            required
          >
            <option value="" disabled selected>Select...</option>
            <option value="Eide">Eide</option>
          </select>

          <label htmlFor='input' className='mb-1 md:pt-5'>Short text</label>
          <textarea
            className='h-24 pl-1 text-sm text-black align-text-top rounded-tr-lg rounded-bl-lg md:full'
            name="shortText"
            onChange={handleChange}
            value={user.shortText}
            label="shortText"
            required
          />
          <button className='flex items-center px-4 py-1 my-3 text-base text-black uppercase duration-300 ease-in bg-yellow-300 border border-black rounded jazzBold w-fit hover:text-black hover:bg-white'>Submit</button>
        </form>
      </div>
  )
}