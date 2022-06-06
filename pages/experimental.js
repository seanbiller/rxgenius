// import Searchbar from '../components/experimental/searchbar'
// import DropDown from '../components/experimental/dropdown'

// const states = [
//   '-',
//   'AK - Alaska',
//   'AL - Alabama',
//   'AR - Arkansas',
//   'AS - American Samoa',
//   'AZ - Arizona',
//   'CA - California',
//   'CO - Colorado',
//   'CT - Connecticut',
//   'DC - District of Columbia',
//   'DE - Delaware',
//   'FL - Florida',
//   'GA - Georgia',
//   'GU - Guam',
//   'HI - Hawaii',
//   'IA - Iowa',
//   'ID - Idaho',
//   'IL - Illinois',
//   'IN - Indiana',
//   'KS - Kansas',
//   'KY - Kentucky',
//   'LA - Louisiana',
//   'MA - Massachusetts',
//   'MD - Maryland',
//   'ME - Maine',
//   'MI - Michigan',
//   'MN - Minnesota',
//   'MO - Missouri',
//   'MS - Mississippi',
//   'MT - Montana',
//   'NC - North Carolina',
//   'ND - North Dakota',
//   'NE - Nebraska',
//   'NH - New Hampshire',
//   'NJ - New Jersey',
//   'NM - New Mexico',
//   'NV - Nevada',
//   'NY - New York',
//   'OH - Ohio',
//   'OK - Oklahoma',
//   'OR - Oregon',
//   'PA - Pennsylvania',
//   'PR - Puerto Rico',
//   'RI - Rhode Island',
//   'SC - South Carolina',
//   'SD - South Dakota',
//   'TN - Tennessee',
//   'TX - Texas',
//   'UT - Utah',
//   'VA - Virginia',
//   'VI - Virgin Islands',
//   'VT - Vermont',
//   'WA - Washington',
//   'WI - Wisconsin',
//   'WV - West Virginia',
//   'WY - Wyoming',
// ]

// const dosage = ['10mg', '20mg', '30mg']

// export default function Experimental() {
//   return (
//     <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
//       <Searchbar title="Drug Search" />
//       <DropDown title="Form" value={dosage} />

//       <DropDown title="State" value={states} />
//     </div>
//   )
// }

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'

const locations = [
  {
    name: 'Acme Insurance Plan',
    people: [
      {
        name: 'Vyvanse - Capsule',
        priceOne: '$30',
        priceTwo: '$45',
        priceThree: '$45',
        priceFour: '$60',
      },
      {
        name: 'Vvyanse Tablet',
        priceOne: '$20',
        priceTwo: '$55',
        priceThree: '$65',
        priceFour: '$95',
      },
    ],
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="max-w-2xl px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Drug Form
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      10mg
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      20mg
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      30mg
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      40mg
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {locations.map((location) => (
                    <Fragment key={location.name}>
                      <tr className="border-t border-gray-200">
                        <th
                          colSpan={5}
                          scope="colgroup"
                          className="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6"
                        >
                          {location.name}
                        </th>
                      </tr>
                      {location.people.map((person, personIdx) => (
                        <tr
                          key={person.email}
                          className={classNames(
                            personIdx === 0
                              ? 'border-gray-300'
                              : 'border-gray-200',
                            'border-t'
                          )}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {person.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.priceOne}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.priceTwo}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.priceThree}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.priceFour}
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
