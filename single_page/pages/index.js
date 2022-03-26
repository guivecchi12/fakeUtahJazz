import Link from 'next/link'
import Head from 'next/head'
import React, {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faSquarePhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Header from './header'


export default function Home() {
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
  }

  return (
    <>
      <Head>
        <title>Utah Jazz</title>
        <meta name="description" content="single page website for Utah Jazz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center w-full text-white bg-black'><Header/></div>

      {/* Black Section */}
      <div className='flex flex-col items-center justify-center w-full text-white bg-black'>
        <div className="flex flex-col items-center justify-center w-4/5 pb-24">
          <div className="flex flex-col items-center justify-center w-4/5 py-5 mt-24 text-center">
            <h1 className='text-5xl font-bold'>PREMIUM SEATING</h1>
            <h3 className='py-5 text-3xl text-yellow-300'>THE BEST WAY TO ENJOY ALL THE EXCITEMENT</h3>
            <p>Whether you’re entertaining business clients, closing a major deal, or socializing with family and friends, a luxury suite provides all the convenience, comfort and service you desire. As the home of the Utah Jazz and the country’s most popular touring musical acts and family shows, Vivint Arena is the place to meet, greet, see and be seen in Utah.</p>
            <Link href='#contact_us'><button className='px-3 py-1 my-10 text-yellow-300 duration-300 ease-in border border-yellow-300 rounded hover:bg-yellow-300 hover:text-black'>Contact Us</button></Link>
          </div>
      </div>

      {/* White Section */}
      <div className="flex items-center justify-center bg-white">
        <div className='relative flex justify-center bottom-20'>
          <div className="flex flex-col w-1/3 mr-10 bg-black border border-solid">
            <div className="bg-center bg-cover h-52 bg-eide">
            </div>
            <div className="flex flex-col justify-center px-14">
              <h4 className='py-5 text-xl text-yellow-300'>LUXURY SUITES</h4>
              <p>
                Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
              </p>
              <Link href=''><button className='px-3 py-1 my-3 text-yellow-300 duration-300 ease-in border border-yellow-300 rounded mt-9 w-fit hover:bg-yellow-300 hover:text-black'>Learn More</button></Link>
            </div>  
          </div>

          <div className="flex flex-col w-1/3 bg-black border border-solid">
            <div className="bg-center bg-cover h-52 bg-exclusive">
            </div>
            <div className="flex flex-col justify-center px-14">
              <h4 className='py-5 text-xl text-yellow-300'>EXCLUSIVE CLUBS</h4>
              <p>
                Membership into one of our exlusive clubs can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah with one of our exclusive club memberships at Vivint Arena.
              </p>
              <Link href=''><button className='px-3 py-1 my-3 text-yellow-300 duration-300 ease-in border border-yellow-300 rounded w-fit hover:bg-yellow-300 hover:text-black'>Learn More</button></Link>
            </div>
          </div>  
        </div>
      </div>

      {/* Gray Section */}
      <div className='flex flex-col w-full px-40 py-20 text-black bg-neutral-200'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-4xl font-bold'>DIGITAL TICKETS</h1>
            <br/>
            <p className='text-lg font-bold'>
              All tickets will be digital and accessible in the Utah Jazz + Vivint Arena App. Printed tickets will no longer be an option.
              <br/><br/>
              This move to digital-only has been made for several reasons:
              <br/><br/>
              Helps to prevent fraudulent tickets from being circulated
              <br/>
              Increases safety and security by providing an easier way to track who’s using tickets and entering the arena
              <br/>
              Allows for a convenient transfer process—you can transfer your tickets with the touch of a button
              <br/>
              - Helps to prevent fraudulent tickets from being circulated.
              <br/>
              - Increases safety and security by providing an easier way to track who’s using tickets and entering the arena.
              <br/>
              - Allows for a convenient transfer process—you can transfer your tickets with the touch of a button.
            </p>
          </div>
          <iframe
          width="653"
          height="380"
          src={"https://www.youtube.com/watch?v=K7WURKGsJmo"} 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          className='py-5 pl-10'
          />
        </div>
        <Link href=''>
          <button className='flex items-center px-3 py-1 my-3 font-bold text-black duration-300 ease-in bg-yellow-300 border border-black rounded w-fit hover:text-black hover:bg-white'>
            LEARN MORE ABOUT DIGITAL TICKETS
            <FontAwesomeIcon icon={faPlay} className="w-5 pl-2 "/>
          </button>
        </Link>
      </div>

      {/* Final Black Div */}
      <div className='w-full py-20 px-[10%]'>
        {/* Luxury Suites */}
        <h3 className='py-5 text-3xl font-bold text-yellow-300'>LUXURY SUITES</h3>
        <div className='flex flex-wrap justify-between'>
          <div 
            className="flex items-center justify-center w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-eide_opacity"
          >
            EIDE_BAILLY_SUITE_LEVEL 
          </div>
          <div className="flex items-center justify-center w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-exclusive_opacity">LEVEL 3 UDO LOUNGE</div>
          <div className="flex items-center justify-center w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-loge_boxes">LOGE BOXES</div>
          <div className="flex items-center justify-center w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-courtside">COURTSIDE SUITES</div>
        </div>

        {/* Exclusive Clubs */}
        <h3 className='py-5 text-3xl font-bold text-yellow-300'>EXCLUSIVE CLUBS</h3>

        <div className='flex flex-wrap justify-between'>
          <div className="flex items-center justify-center w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-toyota">
            TOYOTA CLUB
          </div>

          <div className="flex items-center justify-center w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-eide_opacity">
            EIDE BAILLY CLUB
          </div>

          <div className="flex items-center justify-center w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-wcf">
            WCF INSURANCE CLUB
          </div>

          <div className="flex items-center justify-center w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-lexus">
            LEXUS CLUB
          </div>

          <div className="flex flex-col items-center justify-center w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-entrata">
            <p>COURTSIDE CLUB</p>
            <p>PRESENTED BY ENTRATA</p>
          </div>
          <div className="flex flex-col items-center justify-center w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-lgcy_power">
            <p>LEGENDS CLUB</p>
            <p>PRESENTED BY LGCY POWER</p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contact_us" className='flex px-40 py-20 text-2xl bg-neutral-800'>
        <div className='w-1/2'>
          <h1 className='text-4xl font-bold'>CONTACT US</h1>            
            <p className='flex pt-10'><FontAwesomeIcon icon={faSquarePhone} style={{color:'yellow'}} className="pr-3 w-7"/>801-325-2105</p>
            <p className='flex pt-10'><FontAwesomeIcon icon={faEnvelope} style={{color:'yellow'}} className="pr-3 w-7"/>bizdev@utahjazz.com</p>
            <br></br>
            <p>
              With options like single-game tickets, suite rentals and special group rates, experiencing Utah Jazz basketball has never been more convenient! Just let us know what you’re interested in and we can customize a package to fit your group and budget.
            </p>
        </div>
        <form onSubmit={formSubmit} className='flex flex-col w-2/5 pl-20'>

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
      
    </div>
  </>
  )
}
