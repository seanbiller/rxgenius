import Image from 'next/image'
import SeanProfilePic from '../public/SeanProfilePic.png'
import KimiProfilePic from '../public/KimiProfilePic.png'

const people = [
  {
    name: 'Kimiya Monfared',
    role: 'CoFounder',
    imageUrl: KimiProfilePic,
    bio: 'Kimiya currently works part-time in a local pharmacy and attends the University of Texas at Austin pursuing a Bachelor of Science. She cofounded RxGenius as an effort to solve a number of problems she observed during her four years in the pharmacy.',
    linkedinUrl: 'https://www.linkedin.com/in/seanbiller/',
  },

  {
    name: 'Sean Biller',
    role: 'CoFounder',
    imageUrl: SeanProfilePic,
    bio: `I love to make new and interesting solutions to problems that shouldn't exist. Healthcare shouldn't be this hard and the cost of your prescriptions shouldn't be a mystery. Kimiya and I created this company so can make an educated choice next time you choose your insurance or before you decide which medication is right for you.`,
    linkedinUrl: 'https://www.linkedin.com/in/kimiya-monfared-804466132/',
  },
]

export default function Team() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Team
            </h2>
            <p className="text-xl text-gray-500">
              RxGenius was cofounded in 2022 by Kimiya Monfared and Sean Biller
              in Austin, Texas.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        className="rounded-lg object-cover shadow-lg"
                        src={person.imageUrl}
                        alt=""
                        width={500}
                        height={500}
                      ></Image>
                    </div>
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>

                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
