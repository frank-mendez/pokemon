import { configureStore } from '@reduxjs/toolkit'
import reducers from '../Reducers/Reducers'

const store = configureStore({
	reducer: reducers,
})

export default store
