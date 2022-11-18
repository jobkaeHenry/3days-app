import { rest } from "msw";

const myPageHongsi = (query) => {
  return rest.get(`/hong-si/${query}`, async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          hongsi_id: 1,
          title: "홍시 넘 좋네요~",
          startDate: "2022-10-13",
          endDate: "2022-10-16",
        },
        {
          hongsi_id: 2,
          title: "홍시 달달쓰~",
          startDate: "2022-10-13",
          endDate: "2022-10-16",
        },
        {
          hongsi_id: 3,
          title: "홍시는 근육생성에 좋아요",
          startDate: "2022-10-13",
          endDate: "2022-10-16",
        },
      ])
    );
  });
};

export default myPageHongsi;
