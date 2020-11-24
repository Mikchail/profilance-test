import {news} from '../database'
import {users} from '../database'

const initialState = {
  isAdmin: false,
  user: false,
  isUserError: false,
  filterBy: ``,
  news: news
};



const checkUser = (user) => {
  const person = users.find((it) => it.name === user.name && it.password === user.password);
  if (person) {
    return person;
  }
  return null;
};

export const Operations = {
  setUser: (user) => {
    return (dispatch) => {
      const person = checkUser(user);
      if (person) {
        dispatch(ActionCreator.setUser(user.name));
        dispatch(ActionCreator.setUserError(false));
      } else {
        dispatch(ActionCreator.setUserError(true));
        return null;
      }
      if (person.isAdmin) {
        dispatch(ActionCreator.setAdmin(true));
      } else {
        dispatch(ActionCreator.setAdmin(false));
      }
    };
  },
  logout: () => {
    return (dispatch) => {
      dispatch(ActionCreator.setUser(false));
      dispatch(ActionCreator.setUserError(false));
      dispatch(ActionCreator.setAdmin(false));
    };
  },
};

export const ActionType = {
  SET_USER: `SET_USER`,
  SET_ADMIN: `SET_ADMIN`,
  SET_FILTER_STRING: `SET_FILTER_STRING`,
  ADD_NEWS: `ADD_NEWS`,
  LOGOUT: `LOGOUT`,
  SET_USER_ERROR: `SET_USER_ERROR`,
  SORT_NEWS: `SORT_NEWS`,
  DELETE_NEWS: `DELETE_NEWS`,
  SET_APPROVED_NEWS: `SET_APPROVED_NEWS`,
};

export const ActionCreator = {
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user,
  }),
  setSortString: (user) => ({
    type: ActionType.SET_FILTER_STRING,
    payload: user,
  }),
  setAdmin: (isAdmin) => ({
    type: ActionType.SET_ADMIN,
    payload: isAdmin,
  }),
  addNews: (news) => ({
    type: ActionType.ADD_NEWS,
    payload: news,
  }),
  setApproved: (id) => ({
    type: ActionType.SET_APPROVED_NEWS,
    payload: id,
  }),
  sortNews: (news) => ({
    type: ActionType.SORT_NEWS,
    payload: news,
  }),
  setUserError: (err) => ({
    type: ActionType.SET_USER_ERROR,
    payload: err,
  }),
  deleteNews: (id) => ({
    type: ActionType.DELETE_NEWS,
    payload: id,
  }),
};

const setApprovedById = (state, id) => {
  const indexOfNews = state.news.findIndex((it) => it.id === id);
  const news = state.news[indexOfNews];
  const newNews = {
    ...news,
    approved: true,
  };
  return [...state.news.slice(0, indexOfNews), newNews, ...state.news.slice(indexOfNews + 1)];
};

const deleteNewsById = (state, id) => {
  const indexOfNews = state.news.findIndex((it) => it.id === id);
  return [...state.news.slice(0, indexOfNews), ...state.news.slice(indexOfNews + 1)];
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {...state, user: action.payload};
    case ActionType.SET_ADMIN:
      return {...state, isAdmin: action.payload};
    case ActionType.SET_USER_ERROR:
      return {...state, isUserError: action.payload};
    case ActionType.ADD_NEWS:
      return {...state, news: [...state.news, action.payload]};
    case ActionType.SET_APPROVED_NEWS:
      return {...state, news: setApprovedById(state, action.payload)};
    case ActionType.SET_FILTER_STRING:
      return {...state, filterBy: action.payload};
    case ActionType.DELETE_NEWS:
      return {...state, news: deleteNewsById(state, action.payload)};
    default:
      return state;
  }
};
