import express from 'express';
import * as tweetController from '../controller/tweet';

const router = express.Router();

router.get('/', tweetController.getTweets);

export default router;
