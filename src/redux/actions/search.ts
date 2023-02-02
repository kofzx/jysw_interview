import { UPDATE_LIST } from '../action-types/search'
import axios from 'axios'
import { AppDispatch } from '../../store'

export const updateList = (payload: any) => ({ type: UPDATE_LIST, payload })

export const fetchList = (keywords: string) => {
	return async (dispatch: AppDispatch) => {
        try {
            const res = await axios.post(
                'http://3.141.23.218:5000/interview/keyword_search',
                {
                    "login_token": "INTERVIEW_SIMPLY2021",
                    "search_phrase": keywords || "hat",
                }
            )
            dispatch(updateList(res.data.data.product_trends))
        } catch (e) {
            console.error('fetch error: ', e)
        }
	}
}