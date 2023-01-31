import { SETPARAMS, UPDATE_SEARCH } from '../action-types/search'
import axios from 'axios'
import { Dispatch } from 'redux'

export const setParams = (payload: any) => ({type: SETPARAMS, payload})
export const updateSearch = (payload: any) => ({type: UPDATE_SEARCH, payload})

export const getDatas = () => {
	return async (dispatch: Dispatch, getState: any) => {
        const { count } = getState('search')
        try {
            const res = await axios.post(
                'http://3.141.23.218:5000/interview/keyword_search',
                {
                    "login_token": "INTERVIEW_SIMPLY2021",
                    "search_phrase": count.param ? count.param : "hat",
                }
            )
            dispatch(updateSearch(res.data.data.products))
        } catch (e) {
            console.error('fetch error: ', e);
        }
	}
}