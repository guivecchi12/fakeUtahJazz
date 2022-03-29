import Head from 'next/head'
import Header from '../components/header'
import Digital from '../components/digital_tickets'
import Contact from '../components/contact_us'
import Carousel from '../components/carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown, faCircleInfo, faCircleCheck, faCar, faSignsPost, faCirclePlus, faStreetView, faUsers, faLightbulb } from '@fortawesome/free-solid-svg-icons'


export default function Eide(){
    return (
        <div className='flex flex-col items-center'>
            <Head>
                <title>Eide Bailly Suite</title>
                <meta name="description" content="Eide Bailly Suite for Utah Jazz" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex justify-center w-full text-white bg-black'><Header/></div>
            <div className='flex flex-col items-center pb-10 mt-10 md:justify-between md:w-4/5 md:flex-row'>
                <h1 className='text-4xl font-bold'>Eide Bailly Suite Level</h1>
                <div className='flex justify-between mt-5 md:mt-0'>
                    <a href='' className='flex items-center justify-center px-3 py-1 mr-10 border border-black rounded shadow-sm w-fit hover:bg-yellow-300 hover:text-black'>
                        <FontAwesomeIcon icon={faFileArrowDown} className="w-[15px] min-w-[15px]"/>
                        <span className='pl-2 font-bold'>Download Info</span>
                    </a>
                    <a href='#contact_us' className='flex items-center justify-center px-3 py-1 font-bold border border-black rounded shadow-sm w-fit hover:bg-yellow-300 hover:text-black'>
                        Contact Us
                    </a>   
                </div>
            </div>

            <Carousel/>
            
            <div className='flex items-center justify-center w-full py-3 bg-[#fffb07]'>
                <FontAwesomeIcon icon={faCircleInfo} className='w-8'/>
                <p className='w-3/4 pl-5'>Did you know? Wheter you're closing an important budiness deal or celebrating with your employees, renting a suite for a Jazz game is perfect for any occasion. Call or text 801.325.2203 to learn more.</p>
            </div>

            {/* Info */}
            <div className='flex flex-col items-center justify-center w-full text-white bg-black'>

                {/* About */}
                <div className='flex flex-col justify-between w-full py-10 border-b md:w-3/4 md:flex-row md:items-start'>
                    <h2 className='self-start text-3xl font-bold'>About</h2>
                    <div className='flex items-start ml-5 md:ml-0'>
                        <div className='w-5 pt-2 mr-2'><FontAwesomeIcon icon={faStreetView} style={{color:'yellow'}}/></div>
                        <div>
                            <h3 className='pb-2 text-2xl font-bold'>Location</h3>
                            <p className='pb-2'>Suite Level (Level 4)</p>
                            <button className='flex items-center px-3 py-1 font-bold text-black duration-300 ease-in bg-[#fffb07] border border-black rounded w-fit hover:text-black hover:bg-white'>View Arena Map</button>
                        </div> 
                    </div>
                    <div className='flex items-start pt-2 ml-5 md:pt-0 md:ml-0'>
                        <div className='w-6 pt-2 mr-2'><FontAwesomeIcon icon={faUsers} style={{color:'yellow'}}/></div>
                        <div>
                            <h3 className='pb-2 text-2xl font-bold'><span>Capacity</span></h3>
                            <p>Acommodates 18-32 people</p>
                        </div>
                    </div>
                    <div className='flex items-start pt-2 ml-5 md:pt-0 md:pr-20 md:ml-0'>
                        <div className='w-4 pt-2 mr-2'><FontAwesomeIcon icon={faLightbulb} style={{color:'yellow'}}/></div>
                        <div>
                            <h3 className='pb-2 text-2xl font-bold'>Event Availability</h3>
                            <p className='pb-2'>
                                Utah Jazz Games 
                                (including playoffs)
                                <br/>Concerts and select
                            </p>
                            <p>
                                Concerts and select
                                special events
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <div className='flex flex-col justify-between w-full py-10 border-b md:w-3/4 md:flex-row md:items-start'>
                    <div className='md:w-[12.5%] md:pr-[2%]'>
                        <h3 className='pb-2 text-3xl font-bold'>Benefits & Amenities</h3>
                    </div>
                    <div className='flex flex-col md:w-[43%] md:pr-[8%] ml-5 md:ml-0'>
                        <div className='flex items-start pb-3'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCircleCheck} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>Private Suite</p>
                        </div>
                        <div className='flex items-start pb-3'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCircleCheck} style={{color:'yellow'}}/></div>
                            <p className='flex pl-2'>420-490 square feet depending on the location</p>
                        </div>
                        <div className='flex items-start pb-3'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCircleCheck} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>Lounge seating area for four with coffee table at the back of suite</p>
                        </div>
                        <div className='flex items-start pb-3'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCircleCheck} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>High-top counter in middle, and drink rails at the back of the fixed-seating area</p>
                        </div>
                        <div className='flex items-start'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCircleCheck} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>Dedicated suite attendant for each game and arena event</p>
                        </div>
                    </div>
                    <div className='flex flex-col pt-3 md:pt-0 md:w-[43%] ml-5 md:ml-0'>
                        <div className='flex items-start pb-3'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCircleCheck} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>Flat screen TV in each suite</p>
                        </div>
                        <div className='flex items-start pb-3'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCircleCheck} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>WiFi access</p>
                        </div>
                        <div className='flex items-start pb-3'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCircleCheck} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>18-32 tickets in a luxury suite (varies by location)</p>
                        </div>
                        <div className='flex items-start pb-3'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCircleCheck} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>VIP parking passes</p>
                        </div>
                        <div className='flex items-start'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCircleCheck} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>Food credit for catering to both Utah Jazz games and arena events</p>
                        </div>
                    </div>
                </div>

                {/* Parking */}
                <div className='flex flex-col justify-between w-full py-10 border-b md:w-3/4 md:flex-row'>
                    <div className='md:w-[12.5%] pr-[2%]'>
                        <h3 className='pb-2 text-3xl font-bold'>Parking & Check-In</h3>
                    </div>

                    <div className='ml-5 md:ml-0 flex flex-col items-start justify-between md:w-[43%] md:pr-[8%]'>
                        <div className='flex items-start pb-3'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faCar} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>VIP parking in the Park Place lot located right next to Vivint Smart-Home Arena</p>
                        </div>

                        <button className='flex items-center px-3 py-1 font-bold text-black duration-300 ease-in bg-[#fffb07] border border-black rounded w-fit hover:text-black hover:bg-white'>View Parking Map</button>
                    </div>

                    <div className='ml-5 md:ml-0 flex flex-col items-start justify-between md:w-[43%] md:mt-0 mt-3'>
                        <div className='flex items-start pb-3'>
                            <div className='w-5 pt-1 min-w-[20px]'><FontAwesomeIcon icon={faSignsPost} style={{color:'yellow'}}/></div>
                            <p className='pl-2'>Easy check-in: Talk to the host at any suite level (level 4) entrance to check-in</p>
                        </div>
                        <button className='flex items-center px-3 py-1 font-bold text-black duration-300 ease-in bg-[#fffb07] border border-black rounded w-fit hover:text-black hover:bg-white'>View Check-in Location</button>
                    </div>
                </div>

                {/* Uses */}
                <div className='flex items-center w-full pt-5 pb-2 md:py-10 md:w-3/4'>
                    <div className='w-5 min-w-[20px]'><FontAwesomeIcon icon={faCirclePlus} style={{color:'yellow'}}/></div>
                    <h3 className='pl-2 text-3xl font-bold'>Possible Uses</h3>
                </div>

                <div className='flex flex-wrap justify-between pb-10 w-[85%] md:w-3/4 '>
                    <div className='w-full mb-4 md:mb-0 md:w-[15%]'>
                        <h4 className='w-1/2 pb-3 text-2xl font-bold'>Business Development</h4>
                        <p className='py-3 border-t'>Client Entertainment</p>
                        <p className='pb-3'>Relationship Development</p>
                        <p>Generate Referrals by Inviting Clients to Bring Colleagues & Friends </p>
                    </div>
                    <div className='w-full mb-4 md:mb-0 md:w-[15%]'>
                        <h4 className='w-1/2 pb-3 text-2xl font-bold'>Client Retention</h4>
                        <p className='py-3 border-t'>Renew Accounts</p>
                        <p className='pb-3'>Reduce Attrition</p>
                        <p className='pb-3'>Relationship Development</p>
                        <p className='pb-3'>Current Customer Upsell</p>
                        <p>New Product/Service Launch</p>
                    </div>
                    <div className='w-full mb-4 md:mb-0 md:w-[15%]'>
                        <h4 className='w-1/2 pb-3 text-2xl font-bold'>Employee Usage</h4>
                        <p className='py-3 border-t'>Employee Recruitment & Retention</p>
                        <p className='pb-3'>Employee Benefit Programs</p>
                        <p className='pb-3'>Employee Incentives</p>
                        <p className='pb-3'>Internal Contests</p>
                        <p className='pb-3'>Team Building</p>
                        <p className='pb-3'>Employee Families</p>
                        <p className='pb-3'>Holiday Events/Parties</p>
                        <p>Conferences</p>
                    </div>
                    <div className='w-full mb-4 md:mb-0 md:w-[15%]'>
                        <h4 className='w-1/2 pb-3 text-2xl font-bold'>Executive Utilization</h4>
                        <p className='py-3 border-t'>Executive Team Building</p>
                        <p className='pb-3'>Quarterly Meetings</p>
                        <p className='pb-3'>Investors & Shareholders </p>
                        <p>Personal Entertainment </p>
                    </div>
                    <div className='w-full mb-4 md:mb-0 md:w-[15%]'>
                        <h4 className='w-1/2 pb-3 text-2xl font-bold'>Community Relations</h4>
                        <p className='py-3 border-t'>Complement Current Charitable Programs</p>
                        <p className='pb-3'>Donate for Auctions or Raffles</p>
                        <p>Host 501(c)(3) Organizations</p>
                    </div>
                </div>
            </div>
            <div className='flex items-end h-[25rem] text-white bg-tailor_food bg-center'>
                <p className='flex items-center justify-center bg-black bg-opacity-80'>
                    <span className='md:w-[60%] p-5 text-center'>
                        Tailor your food and beverage experience to your group each night. Choose from an expansive menu based on who you will be hosting for that event. Submit your food and beverage orders 2 business days prior to the event. Access to your suite and food service will start 90 minutes prior to tipoff
                    </span> 
                </p>
            </div>
            
            <Digital/>
            <Contact/>
        </div>
    )
}