import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faDuotone, faSquarePhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
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
            <Link href='/contact_us'><button className='px-3 py-1 my-10 text-yellow-300 duration-300 ease-in border border-yellow-300 rounded hover:bg-yellow-300 hover:text-black'>Contact Us</button></Link>
          </div>
      </div>

      {/* White Section */}
      <div className="flex items-center justify-center bg-white">
        <div className='relative flex justify-center bottom-20'>
          <div className="flex flex-col w-1/3 mr-10 bg-black border border-solid">
            <div className="bg-cover h-52" 
              style={{backgroundImage: `url("https://images.unsplash.com/photo-1560449752-b5d5c1c89cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y291Y2glMjBkaW5pbmclMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`}}>
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
            <div className="bg-cover h-52" 
              style={{backgroundImage: `url("https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y291Y2glMjBkaW5pbmclMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`}}>
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
      {/* Luxury Suites */}
      <div>
        <div>EIDE BAILLY SUITE LEVEL</div>
        <div>LEVEL 3 UDO LOUNGE</div>
        <div>LOGE BOXES</div>
        <div>COURTSIDE SUITES</div>
      </div>
      {/* Exclusive Clubs */}
      <div>
        <div>TOYOTA CLUB</div>
        <div>EIDE BAILLY CLUB</div>
        <div>WCF INSURANCE CLUB</div>
        <div>LEXUS CLUB</div>
        <div>COURSIDE CLUB<br/>PRESENTED BY ENTRATA</div>
        <div>LEGENDS CLUB<br/>PRESENTED BY LGCY POWER</div>
      </div>
      
      {/* Contact Us Section */}
      <div className='flex px-40 py-20 text-2xl bg-neutral-800'>
        <div className='w-1/2'>
          <h1 className='text-4xl font-bold'>CONTACT US</h1>            
            <p className='flex pt-10'><FontAwesomeIcon icon={faSquarePhone} style={{color:'yellow'}} className="pr-3 w-7"/>801-325-2105</p>
            <p className='flex pt-10'><FontAwesomeIcon icon={faEnvelope} style={{color:'yellow'}} className="pr-3 w-7"/>bizdev@utahjazz.com</p>
            <br></br>
            <p>
              With options like single-game tickets, suite rentals and special group rates, experiencing Utah Jazz basketball has never been more convenient! Just let us know what you’re interested in and we can customize a package to fit your group and budget.
            </p>
        </div>
        <form className='flex flex-col w-2/5 pl-20'>
          <label htmlFor='input'>User Input</label>
          <input type="text" className='rounded-tr-lg rounded-bl-lg'/>
          <label htmlFor='input' >User Input</label>
          <input type="text" className='rounded-tr-lg rounded-bl-lg'/>
          <label htmlFor='input'>User Input</label>
          <input type="text" className='rounded-tr-lg rounded-bl-lg'/>
          <label htmlFor='input'>Options</label>
          <select className='text-black rounded-tr-lg rounded-bl-lg' required>
            <option value="" disabled selected>Select...</option>
            <option value="Eide">Eide</option>
          </select>
        </form>
      </div>
      
    </div>
  </>
  )
}
