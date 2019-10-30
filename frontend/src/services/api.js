import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error && error.response.status === 401) {
      localStorage.removeItem('user_name');
      localStorage.removeItem('token');

      if (window.location.pathname !== '/') {
        // eslint-disable-next-line no-alert
        alert(
          'Sua sessâo expirou, você vai ser redirecionado para a página de login'
        );

        window.location = '/';
      }
    }

    return Promise.reject(error);
  }
);

export default api;
