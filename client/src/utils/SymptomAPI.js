import axios from 'axios';

export default {
  getSymptoms() {
    return axios.get('/api/symptoms');
  },
  saveSymptom(symptomData) {
    return axios.post('/api/symptoms', symptomData);
  },
  getSymptom(id) {
    return axios.get(`/api/symptoms/${id}`);
  },
  deleteSymptom(id) {
    return axios.delete('/api/symptoms/' + id);
  },
  updateSymptom(id) {
    return axios.put(`/api/symptoms/${id}`);
  },
};
