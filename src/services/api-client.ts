import axios from "axios";
import { environments } from '../environments/environment';

export default axios.create({
  baseURL: `${environments.apiMCOC}/luchadores/all/inmnunidades`,
});
