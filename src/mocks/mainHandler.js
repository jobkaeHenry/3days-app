import { rest } from "msw";

const hongsiList = () => {
  return rest.post("https://www.server.com/hong-si/owning", async (req, res, ctx) => {
    return res(
      ctx.json({
        hongsi_id: 1,
        title: "홍시가 맛나네요",
        startDate: "2022-10-13",
        endDate: "2022-10-13",
      })
    );
  });
};

export const hongsiDetail = () => {
    return rest.post("https://www.server.com/hong-si/owning", async (req, res, ctx) => {
      return res(
        ctx.json({
          hongsi_id: 1,
          title: "홍시가 맛나네요",
          startDate: "2022-10-13",
          endDate: "2022-10-13",
        })
      );
    });
  };

export default hongsiList;
