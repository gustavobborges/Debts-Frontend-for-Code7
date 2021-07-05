import axios from "axios";

const api_debts = axios.create({
  baseURL: "https://provadev.xlab.digital/api/v1/divida?uuid=317a7ff8-7454-4131-8cc7-8ed2ebc141bd",
});
  
export default api_debts;