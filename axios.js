const axios = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      $.ajax(url, {
        method: 'GET',
        success: (response) => {
          resolve({
            data: response
          });
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  },
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      $.ajax(url, {
        method: 'POST',
        data,
        success: (response) => {
          resolve({
            data: response
          });
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  }
};
