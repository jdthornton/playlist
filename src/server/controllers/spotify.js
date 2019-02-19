import axios from 'axios';

const options = {
  method: 'post',
  url: 'https://accounts.spotify.com/api/token',
  params: {
    grant_type: "client_credentials"
  },
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  auth: {
    username: SPOTIFY_APP_ID,
    password: SPOTIFY_APP_SECRET
  }
}

const controllers = {
  getToken: async (req, res) => {
    let { data, status } = await axios(options);
    if(status === 200){
      res.json({token: data.access_token})
    } else {
      res.status(500)
      throw new Error();
    }
  }
}

export default controllers
