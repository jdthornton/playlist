module.exports = {
  API_URL: JSON.stringify('http://localhost:3000/api/v1'),
  SPOTIFY_APP_ID: JSON.stringify("SPOTIFY_APP_ID"),
  SPOTIFY_APP_SECRET: JSON.stringify("SPOTIFY_APP_SECRET"),
  DOMAIN_URL: JSON.stringify("http://localhost:3000"),
  PORT: 3000,
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
}
