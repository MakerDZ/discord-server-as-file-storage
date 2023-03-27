import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import uploadRoute from './routes/v1/uploadFile'
import getBucketRoute from './routes/v1/getBucketList'
import createBucketRoute from './routes/v1/createBucket'
import deleteBucketRoute from './routes/v1/deleteBucket';

export default function createServer() {
    const server = express();
    
    server.use(helmet());
    server.use(bodyParser.json());
    server.use(cors());
    
    server.use('/api', uploadRoute);
    server.use('/api', getBucketRoute);
    server.use('/api', createBucketRoute);
    server.use('/api', deleteBucketRoute);

    return server;
}

