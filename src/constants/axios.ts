import axios from 'axios';
import { apiURL } from './url';

export const fetchAxios = axios.create({
	baseURL: apiURL,
	timeout: 4000,
});
