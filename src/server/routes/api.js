import express from 'express';
import spotify from '../controllers/spotify';
import async from '../utils/wrappers';

var router = express.Router();

router.get('/token', async(spotify.getToken));

export default router;
