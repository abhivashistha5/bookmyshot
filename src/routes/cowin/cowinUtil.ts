import { VaccineCenter } from './types';

export function filterSlots(centers: VaccineCenter[]): VaccineCenter | null{
    for (let center of centers) {
        for(let session of center.sessions) {
            if (session.min_age_limit === 18 && session.available_capacity > 0) {
                return center;
            }
        }
    }
    
    return null;
}
