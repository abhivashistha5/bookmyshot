import moment from 'moment';
import logger from '../../common/logger';
import cowinRepository from './cowinRepository';
import { filterSlots } from './cowinUtil';
import { AvailableCenter } from './types';

const refreshVaccineStatus = async (): Promise<AvailableCenter | null> => {
    const pincode = '301001';
    const date = moment().format('DD-MM-YYYY');

    const centerData = await cowinRepository.refreshVaccineStatus(pincode, date);

    const center = filterSlots(centerData.centers);

    if (center) {
        const availableCenter: AvailableCenter = center as AvailableCenter;
        logger.info(availableCenter);
        return availableCenter;
    } else {
        logger.info('not found');
        return null;
    }
}

export default {
    refreshVaccineStatus
};
