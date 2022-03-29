import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function Digital_tickets(){
  return(
    <div className='flex flex-col w-full px-5 py-20 text-black md:px-40 bg-neutral-200'>
      <div className='flex flex-col items-center justify-between md:flex-row'>
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
          src={"https://www.youtube.com/embed/K7WURKGsJmo"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
          className='py-5 md:pl-10'
        />
      </div>
      <Link href=''>
        <button className='flex items-center px-3 py-1 my-3 font-bold text-black duration-300 ease-in bg-yellow-300 border border-black rounded w-fit hover:text-black hover:bg-white'>
          LEARN MORE ABOUT DIGITAL TICKETS
          <FontAwesomeIcon icon={faPlay} className="w-5 pl-2 "/>
        </button>
      </Link>
    </div>
  )
}