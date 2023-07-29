import axios from "axios";
const instance = axios.create({
  baseURL: 'https://m.maizuo.com',
  // timeout: 1000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16804846362473716478902273","bc":"310100"}',
    'X-Host': 'mall.film-ticket.film.list'
  }
});

export const getData = (config: any) => {
  return instance(config)
}
