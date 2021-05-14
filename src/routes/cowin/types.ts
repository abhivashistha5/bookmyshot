export interface VaccineSession {
    session_id: string;
    date: string;
    available_capacity: number;
    min_age_limit: number;
    vaccine: string;
    slots: string[];
}

export interface VaccineCenter {
    center_id: number;
    name: string;
    address: string;
    state_name: string;
    district_name: string;
    block_name: string;
    pincode: number;
    lat: number;
    long: number;
    from: string;
    to: string;
    fee_type: string;
    sessions: VaccineSession[];
}


export interface CowinApiResponse {
    centers: VaccineCenter[]
};

export interface AvailableCenter {
    name: string,
    address: string,
}
