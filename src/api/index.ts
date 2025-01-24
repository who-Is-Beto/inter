import { BaseURL } from '@/constants';
import axios from 'axios';

export const api = axios.create({
  baseURL: BaseURL,
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
