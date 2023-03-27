import express from 'express';
import authenticateApiKey from '../../middleware/api_auth';
import getBucketListController from '../../controllers/v1/getBucketList';

const router = express.Router();

router.get('/v1/get_bucket_list', authenticateApiKey, getBucketListController);

export default router;