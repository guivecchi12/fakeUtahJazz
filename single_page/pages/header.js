import Link from 'next/link'
export default function header(){
    return(
        <div className="flex justify-between w-4/5 px-2 py-3 border-b border-white border-solid">
            <div className='flex'>
                <img src="https://media.istockphoto.com/photos/closeup-of-a-basketball-with-a-tournament-bracket-picture-id1307406709?b=1&k=20&m=1307406709&s=170667a&w=0&h=EQpqUb4qLY2qDg1yHRx5gw7FAdB1YfkAEtuOhVwAA_I=" className='w-10'></img>
                <Link href='/'><h1 className="p-1 text-white hover:cursor-pointer">UTAH JAZZ PREMIUM SEATING</h1></Link>
            </div>
            <div className="flex justify-between w-1/4 text-yellow-300">
                <Link href='/'><span className="duration-100 ease-in hover:font-bold hover:cursor-pointer">Luxury Suites</span></Link>
                <Link href='/eide_bailly_suite'><span className="duration-100 ease-in hover:font-bold hover:cursor-pointer">Exclusive Clubs</span></Link>
                <Link href='#contact_us'><span className="duration-100 ease-in hover:font-bold hover:cursor-pointer">Contact Us</span></Link>
            </div>
        </div>
    )
}