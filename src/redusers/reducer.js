const initialState = {
  isLogin: false,
  isAdmin: false,
  user: 'Гость',
  news: [
    {
      'title': 'New Title',
      'description': 'This is about muffin',
      'date': 1606125963036
    }
  ]
}


const ActionType = {
  SET_USER: `SET_USER`,
  SET_ADMIN: `SET_ADMIN`,
  ADD_NEWS: `ADD_NEWS`,
  SORT_NEWS: `SORT_NEWS`,
};



const ActionCreator = {
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user
  }),
  setAdmin: (isAdmin) => ({
    type: ActionType.SET_ADMIN,
    payload: isAdmin,
  }),
  addNews: (news) => ({
    type: ActionType.ADD_NEWS,
    payload: news,
  }),
  sortNews: (news) => ({
    type: ActionType.ADD_NEWS,
    payload: news,
  })
}

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return
    case ActionType.SET_ADMIN:
      return
    case ActionType.ADD_NEWS:
      return
    case ActionType.SORT_NEWS:
      return
    default:
      return state;
  }
}
