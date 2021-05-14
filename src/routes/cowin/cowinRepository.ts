import axios from 'axios';
import { CowinApiResponse } from './types';

const refreshVaccineStatus = async (pincode: string, date: string): Promise<CowinApiResponse> => {
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode=${pincode}&date=${date}`;

    const response = await axios.get(url,
        {
            headers: {
                "User-Agent": "PostmanRuntime/7.28.0", // somehow the api doesn't work without it
                Accept: "*/*",
                "Cache-Control": "no-cache",
                "Postman-Token": "ab798a8e-0b05-4856-8f02-805502dba476",
                "Host": "cdn-api.co-vin.in",
                "Accept-Encoding": "gzip, deflate, br",
                "Connection": "keep-alive"
            }
        }
    );

    const centerData = response.data as CowinApiResponse;

    return centerData;  
}

export default {
    refreshVaccineStatus
};
