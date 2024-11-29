import axios from 'axios';
import { apiConfig, promptConfig } from './config';

export const api = axios.create(apiConfig);

export const promptApi = axios.create(promptConfig);
