import axios from "axios";
import {baseUrl} from "../constantst/urls";


const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzc2MGRkYWUwMzQ0NmE0MDY1MDRjM2I0ZDM4OGViNyIsInN1YiI6IjY2NmVmOWMzMmQwNDc1OTRlMzZiYzU1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-TIf_1Cnut6IJv0xDqQY-TCi_9-cNAuIq4AQ_MIN4A';

export const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'authorization': `Bearer ${accessToken}`,
        'accept': 'application/json'
    }
})


