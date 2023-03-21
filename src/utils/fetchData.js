// import axios from 'axios';

export const exerciseOptions ={
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY
    }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  }
};

export const fetchData = async (url,options) =>{
    const responce = await fetch (url,options)
    const data = await responce.json();
    return data
}

// export const fetchData = (urlData) =>{
//     let options = {
//         method: 'GET',
//         headers: {
//         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//         'X-RapidAPI-Key': 'da65803042msh194a96e332593f3p17a598jsnfa6b4c49b383'
//         },
//         url: urlData,
//     }
//     axios.request(options).then(function (response) {
//         console.log(response.data);
//         return response.data;
//     }).catch(function (error) {
//         console.error(error);
//     });
// }