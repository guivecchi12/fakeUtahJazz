import Head from 'next/head';
import Header from './header';

export default function ContactUs(){
    return (
        <div className='flex flex-col items-center w-full h-screen bg-black'>
            <Head>
                <title>Contact Page</title>
                <meta name="description" content="Utah Jazz Contact Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <div className='flex items-center h-1/2'>
                <p className='text-white'>Contact Us</p>
            </div>
        </div>
    )
}