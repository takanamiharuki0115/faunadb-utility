import createClasses from './createClasses'
import createFaunaDocument, { faunaQuery } from './createFaunaDocument'
import createIndexes from './createIndexes'
import deleteFaunaDocument from './deleteFaunaDocument'
import faunaClient from './faunaClient'
import queryAllByFaunaIndexes from './queryAllByFaunaIndexes'
import queryTermByFaunaIndexes from './queryTermByFaunaIndexes'
import queryTermsByFaunaIndexes from './queryTermsByFaunaIndexes'
import updateFaunaDocument from './updateFaunaDocument'

export default {
  faunaClient,
  faunaQuery,
  createClasses,
  createFaunaDocument,
  createIndexes,
  deleteFaunaDocument,
  queryAllByFaunaIndexes,
  queryTermByFaunaIndexes,
  queryTermsByFaunaIndexes,
  updateFaunaDocument
}
