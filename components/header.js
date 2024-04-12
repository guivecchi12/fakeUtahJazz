import Link from "next/link";
export default function Header() {
  return (
    <div className="sticky z-50 flex flex-wrap justify-center w-full py-3 md:w-4/5 md:justify-between">
      <div className="flex">
        <img
          src="https://media.istockphoto.com/photos/closeup-of-a-basketball-with-a-tournament-bracket-picture-id1307406709?b=1&k=20&m=1307406709&s=170667a&w=0&h=EQpqUb4qLY2qDg1yHRx5gw7FAdB1YfkAEtuOhVwAA_I="
          className="w-10"
        ></img>
        <Link href="/">
          <h1 className="p-1 text-white hover:cursor-pointer">
            UTAH SPORTS PREMIUM SEATING
          </h1>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-full text-yellow-300 md:justify-between md:w-1/4 md:flex-row">
        <div className="duration-100 ease-in hover:font-bold hover:cursor-pointer">
          <Link href="/">Luxury Suites</Link>
        </div>
        <div className="duration-100 ease-in hover:font-bold hover:cursor-pointer">
          <Link href="/eide_bailly_suite">Exclusive Clubs</Link>
        </div>
        <div className="duration-100 ease-in hover:font-bold hover:cursor-pointer">
          <Link href="#contact_us">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
