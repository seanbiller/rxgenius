import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  InstantSearchSSRProvider,
  SearchBox,
  Configure,
  Panel,
  // Hits,
  HierarchicalMenu,
  Pagination,
} from 'react-instantsearch-hooks-web'
import { getServerState } from 'react-instantsearch-hooks-server'
import { history } from 'instantsearch.js/es/lib/routers/index.js'

import { Autocomplete, Hit } from '../components/autocomplete/components'
import { Hits } from '../components/autocomplete/widgets'

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
)

// import '../components/autocomplete/search.css'

export default function DemoAdmin({ serverState, url }) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <InstantSearch
          searchClient={searchClient}
          indexName="instant_search"
          routing={{
            router: history({
              getLocation: () =>
                typeof window === 'undefined' ? new URL(url) : window.location,
            }),
          }}
          initialUiState={{
            drug_index: {
              query: '',
              page: 0,
            },
          }}
        >
          <header className="pb-4 shadow-sm">
            <div className="header wrapper wrapper">
              <Autocomplete
                searchClient={searchClient}
                placeholder="Search products"
                detachedMediaQuery="none"
                openOnFocus
              />
            </div>
          </header>
          <Configure
            attributesToSnippet={['name:7', 'description:15']}
            snippetEllipsisText="…"
          />
          <div className="wrapper container">
            <div></div>
            <div>
              <Hits hitComponent={Hit} />
              <Pagination />
            </div>
          </div>
        </InstantSearch>
      </div>
    </InstantSearchSSRProvider>
  )
}

export async function getServerSideProps({ req }) {
  const protocol = req.headers.referer?.split('://')[0] || 'https'
  const url = `${protocol}://${req.headers.host}${req.url}`
  const serverState = await getServerState(<DemoAdmin url={url} />)

  return {
    props: {
      serverState,
      url,
    },
  }
}
