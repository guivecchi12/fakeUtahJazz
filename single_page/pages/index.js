import Head from 'next/head'
import Header from './header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Utah Jazz</title>
        <meta name="description" content="single page website for Utah Jazz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1>Welcome to the Home Page</h1>
        <div class="body_text">
          <p>
            PREMIUM SEATING
            THE BEST WAY TO ENJOY ALL THE EXCITEMENT
            Whether you’re entertaining business clients, closing a major deal, or socializing with family and friends, a luxury suite provides all the convenience, comfort and service you desire. As the home of the Utah Jazz and the country’s most popular touring musical acts and family shows, Vivint Arena is the place to meet, greet, see and be seen in Utah.
          </p>

          <p>
            LUXURY SUITES
            Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.
          </p>

          <p>
            EXCLUSIVE CLUBS
            Membership into one of our exlusive clubs can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah with one of our exclusive club memberships at Vivint Arena.
          </p>
          <p>
            DIGITAL TICKETS
            All tickets will be digital and accessible in the Utah Jazz + Vivint Arena App. Printed tickets will no longer be an option.

            This move to digital-only has been made for several reasons:

            Helps to prevent fraudulent tickets from being circulated
            Increases safety and security by providing an easier way to track who’s using tickets and entering the arena
            Allows for a convenient transfer process—you can transfer your tickets with the touch of a button
            - Helps to prevent fraudulent tickets from being circulated.
            - Increases safety and security by providing an easier way to track who’s using tickets and entering the arena.
            - Allows for a convenient transfer process—you can transfer your tickets with the touch of a button.
          </p>

          <p>
            If you have questions or concerns about digital tickets, please contact your account representative.

            CONTACT US
            801-325-2105
            bizdev@utahjazz.com
            With options like single-game tickets, suite rentals and special group rates, experiencing Utah Jazz basketball has never been more convenient! Just let us know what you’re interested in and we can customize a package to fit your group and budget.
          </p>
        </div>
      </div>
    </div>
  )
}
