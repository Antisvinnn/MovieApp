import axios from 'axios';
import api_key from '../../helper/apikey';
import apikey from '../../helper/apikey';

export const companiesRequest = () => axios.get(`company/23?${api_key}`);
