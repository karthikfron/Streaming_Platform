import  axios from 'axios';



const instance=axios.create(
  {
    baseurl: 'https://api.themoviedb.org/3/',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTdiZGRhMThhMDUyNmU0OGMzMzcwNTU1MGViZWQxZSIsInN1YiI6IjY2MDJkNTcwMzUyMGU4MDE3ZWRhZDBmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EARfEwiinVeMBoizNac73bIYGDxYfqes_pWSxet-DBk'
  }
  }
);
export default instance