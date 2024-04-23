import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:3000/MCOC/inmunidades/luchadores"
  baseURL: "http://localhost:3000/MCOC/luchadores/all/inmnunidades"
});
