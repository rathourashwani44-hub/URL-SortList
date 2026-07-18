import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/dark.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen flex items-center">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-0">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-[50vh] md:h-[50vh]">
          
          {/* Left Content */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 items-center md:items-start justify-center order-2 md:order-1">
            
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left ${poppins.className} leading-tight`}>
              The best URL shortener in the market
            </h1>
            
            <p className="px-4 sm:px-6 md:px-0 text-center md:text-left text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl">
              We are the most straightforward URL shortener in the world. Most of the URL shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
            </p>
            
            <div className='flex gap-3 sm:gap-4 md:gap-5 justify-center md:justify-start flex-wrap mt-2'>
              <Link href="/shorten">
                <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm sm:text-base px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-center leading-5 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95'>
                  Try Now
                </button>
              </Link>
              <Link href="/github">
                <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-2xl text-sm sm:text-base px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 text-center leading-5 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95'>
                  GitHub
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] order-1 md:order-2">
            <Image 
              className="mix-blend-darken object-cover rounded-xl md:rounded-2xl shadow-lg" 
              src={"/office.jpg"} 
              fill={true} 
              alt="Vector is beautiful please see this"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={90}
            />
          </div>
          
        </div>
      </section>
    </main>
  );
}