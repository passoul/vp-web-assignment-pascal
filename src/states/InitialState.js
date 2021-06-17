  /**
   * our application state is always kept in plain JavaScript objects and arrays
   */
  // define initial state of user
export const InitialState = {
  loading: false,
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [{
        title: 'The Avengers',
        image: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
        comment: 'New York blows up in this!'
      },
      {
        title: 'Dark City',
        image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
        comment: 'This looks mysterious. Cool!'
      },
      {
        title: 'Hot Tub Time Machine',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
        comment: 'Someone said this was fun. Maybe!'
      },],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
}