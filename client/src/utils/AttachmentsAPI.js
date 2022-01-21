import axios from 'axios';

export default {
  // Gets all attachments
  getAttachments() {
    return axios.get('/api/attachments');
  },
  // Saves an attachment to the database
  saveAttachment(attachmentData) {
    return axios.post('/api/attachments', attachmentData);
  },
  // Deletes the attachment with the given id
  deleteAttachment(id) {
    return axios.delete('/api/attachments/' + id);
  },
  // update an attachment in the database
  updateAttachment(id) {
    return axios.put('/api/attachments/' + id);
  },
};
