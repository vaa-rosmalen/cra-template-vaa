import ky, { Input, Options } from "ky";
import { message } from "antd";

// @ts-ignore
const API_URL = window.API_URL;

let instance = ky.create({
  prefixUrl: API_URL
});

export { instance };

export const updateToken = token => {
  instance = instance.create({
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json"
    },
    prefixUrl: API_URL,
    hooks: {
      afterResponse: [
        (input, options, response) => {
          if (response.status === 403) {
            // keycloak.updateToken(2).error(() => {
            console.error("api.ky.js: something went wrong");
            //   keycloak.login();
            // });
          }
          return response;
        }
      ]
    },
    retry: {
      limit: 2,
      // methods: [],
      maxRetryAfter: 2
    }
  });
};

export const api = {
  get: (url: Input, options?: Options | undefined) =>
    instance(url, options).then(res => res.json()),
  post: (url: Input, options?: Options | undefined) =>
    instance.post(url, options).then(res => res.json()),
  put: (url: Input, options?: Options | undefined) =>
    instance.put(url, options).then(res => res.json()),
  patch: (url: Input, options?: Options | undefined) =>
    instance.patch(url, options).catch(error => {
      error.response.json().then(response => {
        message.error(response.detail);
        console.error(response);
      });
    }),
  delete: (url: Input, options?: Options | undefined) =>
    instance.delete(url, options).catch(error => {
      error.response.json().then(response => {
        message.error(response.detail);
        console.error(response);
      });
    })
};
