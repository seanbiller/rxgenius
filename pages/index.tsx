import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
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
          <div className="mt-10 flex flex-wrap justify-center">
            <div className="m-3">
              <a
                href="https://www.facebook.com/QuickToolz"
                title="Quicktoolz On Facebook"
                className="inline-flex items-center rounded border-2 border-blue-600 bg-white py-2 px-6 font-bold tracking-wide text-gray-800 shadow-md hover:border-blue-600 hover:bg-blue-600 hover:text-white md:w-32"
              >
                <span className="mx-auto">Facebook</span>
              </a>
            </div>
            <div className="m-3">
              <a
                href="https://twitter.com/quicktoolz"
                title="Quicktoolz On Twitter"
                className="inline-flex items-center rounded border-2 border-blue-500 bg-white py-2 px-6 font-bold tracking-wide text-gray-800 shadow-md hover:border-blue-500 hover:bg-blue-500 hover:text-white md:w-32"
              >
                <span className="mx-auto">Twitter</span>
              </a>
            </div>
            <div className="m-3">
              <a
                href="https://pinterest.com/quicktoolz/"
                title="Quicktoolz On Pinterest"
                className="inline-flex items-center rounded border-2 border-red-600 bg-white py-2 px-6 font-bold tracking-wide text-gray-800 shadow-md hover:border-red-600 hover:bg-red-600 hover:text-white md:w-32"
              >
                <span className="mx-auto">Pintrest</span>
              </a>
            </div>
            <div className="m-3">
              <a
                href="https://www.reddit.com/user/quicktoolz/"
                title="Quicktoolz On Facebook"
                className="inline-flex items-center rounded border-2 border-orange-500 bg-white py-2 px-6 font-bold tracking-wide text-gray-800 shadow-md hover:border-orange-500 hover:bg-orange-500 hover:text-white md:w-32"
              >
                <span className="mx-auto">Reddit</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
