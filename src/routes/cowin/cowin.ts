import { Router } from 'express';
import logger from '../../common/logger';
import cowinService from './cowinService';

const router = Router();

router.get('/refresh', async (_, res) => {
    try {
        const availableCenter = await cowinService.refreshVaccineStatus();
        res.status(200).send(availableCenter ?? {});
    } catch(err) {
        logger.error(err);
        res.status(500).send('Failed');
    }
});

export default router;
