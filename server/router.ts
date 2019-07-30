import { ServerResponse } from "http";

export default (url: string | undefined, data: any, res: ServerResponse) => {
  if (url) {
    if (/^\/register$/.test(url)) {
    }
  }
};
