import { request } from "@/shared/api";

interface ReqMoonAgeArgs {
  solYear: string;
  solMonth: string;
  solDay: string;
}

export const requestMoonAge = async ({
  solYear,
  solMonth,
  solDay,
}: ReqMoonAgeArgs) => {
  const res = await request({
    url: `http://apis.data.go.kr/B090041/openapi/service/LunPhInfoService/getLunPhInfo?solYear=${solYear}&solMonth=${solMonth}&solDay=${solDay}&ServiceKey=OiPJM4a68P%2FNJRXy%2F%2FHuv1QKu5xeC%2FIm94bPEG6cod3FDJXPIOXDkyXpyUB%2F%2FaEBHUyJ2P%2BCJAZ7c15uzAqc0g%3D%3D`,
    method: "get",
  });

  return res;
};
