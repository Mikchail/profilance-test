import {getDateTimeString} from '../utils';

export const getApprovedNews = (state) => {
  return state.news.filter((it) => it.approved);
};

export const getFilterApprovedNews = (state) => {
  const filter = state.filterBy;
  const news = getApprovedNews(state);
  return news.filter((it) => {
    let date = getDateTimeString(it.date)
    if (
      it.title.toLowerCase().search(filter) !== -1 ||
      it.description.toLowerCase().search(filter) !== -1 ||
      date.search(filter) !== -1
    ) {
      return it;
    } else {
      return null
    }
  });
};
export const getNotApprovedNews = (state) => {
  return state.news.filter((it) => !it.approved);
};
