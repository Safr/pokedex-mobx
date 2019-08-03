import axios from 'axios';

export const fetchAsync = url => axios.get(url).then(res => res);
