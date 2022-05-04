require('dotenv').config()
const algoliasearch = require('algoliasearch')

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
)
const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME)

const records = require('./test.json')

index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true })
