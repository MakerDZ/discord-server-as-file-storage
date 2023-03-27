import express from 'express';
import authenticateApiKey from '../../middleware/api_auth';
import createBucketController from '../../controllers/v1/createBucket';

const router = express.Router();

router.post('/v1/create_bucket', authenticateApiKey, createBucketController);

export default router;