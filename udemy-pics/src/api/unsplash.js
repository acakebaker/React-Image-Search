import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID QGdfGxOzAdvcR2TScvGB-zr8KB9Z3xlyBqICIbE_aqA'
      }
});