import axios from "./utils/request";

axios.get("/hello", {})
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  }).finally(() => {
  console.log("get function finished");
})
