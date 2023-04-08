const axios = require("axios");

export async function process_function(params: any) {
  let result: Result = {
    status: 200,
    message: "",
  };

  axios
    .get(params.url)
    .then(function (response: any) {
      result = {
        status: 200,
        message: response.data,
      };
    })
    .catch(function (error: any) {
      result = {
        status: error.code,
        message: error.message,
      };
    })

  return result;
}
