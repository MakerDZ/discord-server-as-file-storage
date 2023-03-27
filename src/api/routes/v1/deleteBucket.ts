import express from 'express';
import authenticateApiKey from '../../middleware/api_auth';
import deleteBucketController from '../../controllers/v1/deleteBucket';

const router = express.Router();

router.post('/v1/delete_bucket', authenticateApiKey, deleteBucketController);

export default router;