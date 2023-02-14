const axios = require("axios");

export async function process_function(params: any) {


  axios
    .get(params.url)
    .then(function (response:any) {

      console.log(response);
    })
    .catch(function (error:any) {

      console.log(error);
    })
    .finally(function () {

    });

  console.log(params);
  return "OK";
}
