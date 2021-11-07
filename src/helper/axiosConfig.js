import axios from 'axios';

const axiosInit = () => {
	axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
};

export default axiosInit;
