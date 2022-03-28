import Link from 'next/link'
import Head from 'next/head'
import Header from './header'
import Digital from './digital_tickets'
import Contact from './contact_us'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown, faCircleInfo } from '@fortawesome/free-solid-svg-icons'


export default function Eide(){
    return (
        <div className='flex flex-col items-center'>
            <Head>
                <title>Eide Bailly Suite</title>
                <meta name="description" content="Eide Bailly Suite for Utah Jazz" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex justify-center w-full pb-10 text-white bg-black'><Header/></div>
            <div className='flex items-center justify-between w-4/5 pb-10 mt-10'>
                <h1 className='text-4xl font-bold'>Eide Bailly Suite Level</h1>
                <div className='flex'>
                    <a href='' className='flex items-center justify-center px-3 py-1 mr-10 border border-black rounded shadow-sm w-fit hover:bg-yellow-300 hover:text-black'>
                        <FontAwesomeIcon icon={faFileArrowDown} className="w-3"/>
                        <span className='pl-2 font-bold'>Download Info</span>
                    </a>
                    <a href='#contact_us' className='flex items-center justify-center px-3 py-1 font-bold border border-black rounded shadow-sm w-fit hover:bg-yellow-300 hover:text-black'>
                        Contact Us
                    </a>   
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className='w-full h-[400px]'/>
            <div className='flex items-center justify-center w-full bg-yellow-300'>
                <FontAwesomeIcon icon={faCircleInfo} className='w-8'/>
                <p className='w-3/4 pl-5'>Did you know? Wheter you're closing an important budiness deal or celebrating with your employees, renting a suite for a Jazz game is perfect for any occasion. Call or text 801.325.2203 to learn more.</p>
            </div>
            <p>
                ABOUT
                Location
                Suite Level (Level 4)
                Capacity
                Accommodates 18–32 people
                Event Availability
                Utah Jazz Games (including playoffs)
                Concerts and select special events
            </p>
            <p>
                BENEFITS & AMENITIES
                Private Suite
                420–490 square feet depending on the location
                Lounge seating area for four with coffee table at the back of suite
                High-top counter in middle, and drink rails at the back of the fixed-seating area
                Dedicated suite attendant for each game and arena event
                Flat screen TV in each suite
                WiFi access
                18–32 tickets in a luxury suite (varies by location)
                VIP parking passes
                Food credit for catering to both Utah Jazz games and arena events
            </p>
            <p>
                PARKING & CHECK-IN
                VIP parking in the Park Place lot located right next to Vivint Smart Home Arena
                Easy check-in: Talk to the host at any suite level (level 4) entrance to check-in 
            </p>
            <p>
                POSSIBLE USES
                Business Development
                Client Entertainment
                Relationship Development
                Generate Referrals by Inviting Clients to Bring Colleagues & Friends
                Client Retention
                Renew Accounts
                Reduce Attrition
                Relationship Development
                Current Customer Upsell
                New Product/Service Launch
                Employee Usage
                Employee Recruitment & Retention
                Employee Benefit Programs
                Employee Incentives
                Internal Contests
                Team Building
                Employee Families
                Holiday Events/Parties
                Conferences
                Executive Utilization
                Executive Team Building
                Quarterly Meetings
                Investors & Shareholders
                Personal Entertainment
                Community Relations
                Complement Current Charitable Programs
                Donate for Auctions or Raffles
                Host 501(c)(3) Organizations
            </p>
            <p>
                Tailor your food and beverage experience to your group each night. Choose from an expansive menu based on who you will be hosting for that event. Submit your food and beverage orders 2 business days prior to the event. Access to your suite and food service will start 90 minutes prior to tipoff
            </p>
            <Digital/>
            <Contact/>
        </div>
    )
}