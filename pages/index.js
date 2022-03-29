import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import Digital from '../components/digital_tickets'
import Contact from '../components/contact_us'


export default function Home() {
  return (
    <>
      <Head>
        <title>Utah Jazz</title>
        <meta name="description" content="single page website for Utah Jazz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col items-center w-full text-white bg-black'>
        <Header/>
        <div className='w-4/5 border-b border-white'/>
      </div>
      
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
      <div className="flex items-center justify-center md:bg-white">
        <div className='relative flex flex-col items-center justify-center bottom-20 md:flex-row'>
          <div className="flex flex-col w-full bg-black md:border md:border-solid md:mr-10 md:w-1/3">
            <div className="bg-center bg-cover h-52 bg-eide">
            </div>
            <div className="flex flex-col justify-center px-14 md:h-[342px]">
              <h4 className='py-5 text-xl text-yellow-300'>LUXURY SUITES</h4>
              <p>
                Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
              </p>
              <Link href=''><button className='px-3 py-1 my-4 text-yellow-300 duration-300 ease-in border border-yellow-300 rounded md:my-3 mt-9 w-fit hover:bg-yellow-300 hover:text-black'>Learn More</button></Link>
            </div>  
          </div>

          <div className="flex flex-col w-full bg-black md:border md:border-solid md:mr-10 md:w-1/3">
            <div className="bg-center bg-cover h-52 bg-exclusive">
            </div>
            <div className="flex flex-col justify-center px-14 md:h-[342px]">
              <h4 className='py-5 text-xl text-yellow-300'>EXCLUSIVE CLUBS</h4>
              <p>
                Membership into one of our exlusive clubs can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah with one of our exclusive club memberships at Vivint Arena.
              </p>
              <Link href=''><button className='px-3 py-1 my-3 text-yellow-300 duration-300 ease-in border border-yellow-300 rounded w-fit hover:bg-yellow-300 hover:text-black'>Learn More</button></Link>
            </div>
          </div>  
        </div>
      </div>

      <Digital/>

      {/* Final Black Div */}
      <div className='w-full py-20 px-[10%]'>
        {/* Luxury Suites */}
        <h3 className='py-5 text-3xl font-bold text-yellow-300'>LUXURY SUITES</h3>
        <div className='flex flex-wrap justify-between'>
          <div 
            className="flex items-center w-full justify-center md:w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-eide_opacity"
          >
            EIDE_BAILLY_SUITE_LEVEL 
          </div>
          <div className="flex items-center w-full justify-center md:w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-exclusive_opacity">LEVEL 3 UDO LOUNGE</div>
          <div className="flex items-center w-full justify-center md:w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-loge_boxes">LOGE BOXES</div>
          <div className="flex items-center w-full justify-center md:w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-courtside">COURTSIDE SUITES</div>
        </div>

        {/* Exclusive Clubs */}
        <h3 className='py-5 text-3xl font-bold text-yellow-300'>EXCLUSIVE CLUBS</h3>

        <div className='flex flex-wrap justify-between'>
          <div className="flex items-center justify-center w-full md:w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-toyota">
            TOYOTA CLUB
          </div>

          <div className="flex items-center justify-center w-full md:w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-eide_opacity">
            EIDE BAILLY CLUB
          </div>

          <div className="flex items-center justify-center w-full md:w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-wcf">
            WCF INSURANCE CLUB
          </div>

          <div className="flex items-center justify-center w-full md:w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-lexus">
            LEXUS CLUB
          </div>

          <div className="flex flex-col items-center justify-center w-full md:w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-entrata">
            <p>COURTSIDE CLUB</p>
            <p>PRESENTED BY ENTRATA</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full md:w-[48%] mb-20 text-2xl font-bold bg-center bg-cover h-[20rem] bg-lgcy_power">
            <p>LEGENDS CLUB</p>
            <p>PRESENTED BY LGCY POWER</p>
          </div>
        </div>
      </div>

      <Contact/>
    </div>
  </>
  )
}
