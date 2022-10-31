import createFaunaDocument, { faunaQuery } from './createFaunaDocument'
import deleteFaunaDocument from './deleteFaunaDocument'
import faunaClient from './faunaClient'
import queryAllByFaunaIndexes from './queryAllByFaunaIndexes'
import queryTermByFaunaIndexes from './queryTermByFaunaIndexes'
import updateFaunaDocument from './updateFaunaDocument'

export default { faunaClient, faunaQuery, createFaunaDocument, updateFaunaDocument, deleteFaunaDocument, queryAllByFaunaIndexes, queryTermByFaunaIndexes }
