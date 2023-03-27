import express from 'express';
import multer from 'multer';
import authenticateApiKey from '../../middleware/api_auth';
import uploadFileController from '../../controllers/v1/uploadFile';

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/v1/upload_file', authenticateApiKey, upload.single('file'), uploadFileController);

export default router;