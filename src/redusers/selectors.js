export const getApprovedNews = (state) => {
  return state.news.filter((it) => it.approved);
};
export const getNotApprovedNews = (state) => {
  return state.news.filter((it) => !it.approved);
};