import axios from "axios";

interface IAxios {
  url: string;
  method: string;
  token?: string;
  contentType?: string;
  data?: any;
}

export async function useAxios({ url, method, token, contentType = "application/json", data }: IAxios) {
  return axios({
    url: url,
    method: method,
    headers: {
      Authorization: token ?? "",
      "Content-Type": contentType,
    },
    data: data,
  });
}
