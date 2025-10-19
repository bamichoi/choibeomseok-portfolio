import axios from "axios";

interface RequestArgs {
  url: string;
  method: "get" | "post";
  data?: object;
}

const request = async ({ url, method, data }: RequestArgs) => {
  const res = await axios({
    url,
    method,
    data,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};

export { request };
