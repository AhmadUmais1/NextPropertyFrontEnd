import axios from 'axios';

export const callApi = async () => {
  try {
    const response = await axios.get('https://realtor.bh/api/v1/site/init');
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
};
export default callApi;