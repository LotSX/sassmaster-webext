export default {
    post: (url, body) => {
          return window.fetch(url, {
                  method: 'post',
                  headers: {
                            "Content-type": "application/json"
                          },
                  body: JSON.stringify(body)
                }).then(r => r && r.json());
        }
};

