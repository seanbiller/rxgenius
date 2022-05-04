import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex min-h-fit items-center justify-center">
      <div className="container">
        <div className="mx-2 rounded-lg bg-white p-5 shadow-lg md:p-20">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Rx<span className="text-indigo-600">Genius</span>
            </h2>
            <h3 className="mt-10 text-xl md:text-3xl">Coming Soon</h3>
            <p className="text-md mt-10 md:text-xl">
              <a className="hover:underline" href="https://www.quicktoolz.com">
                RxGenius,
              </a>{' '}
              know how much your drugs will cost before you get to the pharmacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
