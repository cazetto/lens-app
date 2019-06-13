import { put, takeEvery, all, call } from 'redux-saga/effects';

// Actions
export const POSTS_SEARCH_REQUESTED = 'POSTS_SEARCH_REQUESTED';
export const POSTS_SEARCH_REQUEST_COMPLETED = 'POSTS_SEARCH_REQUEST_COMPLETED';
export const POSTS_SEARCH_REQUEST_ERROR = 'POSTS_SEARCH_REQUEST_ERROR';

// Action Creators
// export function postSearchRequest(keyword) {
//   return { type: POSTS_SEARCH_REQUEST, keyword };
// }

// Initial State
export const INITIAL_STATE = {
  searchKeyword: 'initial keyword',
  list: [],
}

// Reducer
export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case POSTS_SEARCH_REQUESTED:
      return { ...state, isFetching: true, searchKeyword: action.keyword };
      break;
    case POSTS_SEARCH_REQUEST_COMPLETED:
      console.log('Passando aqui');
      return { ...state, isFetching: false, list: action.payload };
      break;
    default:
      return state;
  }
}

const api = url => fetch(url).then(res => res.json())

// Sagas
export function* fetchPosts(keyword) {
  console.log('fetchPosts', { keyword });
  let people = yield api('https://swapi.co/api/people');
  let payload = people.results;
  console.log('fetchPosts', { payload });
  yield put({ type: 'POSTS_SEARCH_REQUEST_COMPLETED', payload })
}

export function* watchFetchPosts() {
  yield takeEvery(POSTS_SEARCH_REQUESTED, ({ keyword }) => fetchPosts(keyword))
}
