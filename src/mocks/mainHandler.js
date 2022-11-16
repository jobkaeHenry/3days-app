import { rest } from "msw";

const hongsiList = () => {
  return rest.get("/hong-si", async (req, res, ctx) => {
    return res(
      ctx.json([
        {
        hongsi_id: 1,
        title:"미라클 모닝 같이해요",
        startDate :"2022-10-13",
        endDate:"2022-10-13",
        image:"https://placebear.com/640/360",
        tags:[{tag:"운동"},{tag:"자기개발"},{tag:"운동"}],
        category:2,
        currentParticipant:1,
        maxParticipant:3,
      },
      {
        hongsi_id: 2,
        title:"하이욤 여러분~",
        startDate :"2022-10-13",
        endDate:"2022-10-13",
        image:"https://placebear.com/640/360",
        tags:[{tag:"운동"},{tag:"자기개발"},{tag:"운동"}],
        category:1,
        currentParticipant:1,
        maxParticipant:10,
      },
      {
        hongsi_id: 3,
        title:"같이 런닝뛰실 분?",
        startDate :"2022-10-13",
        endDate:"2022-10-13",
        image:"https://placebear.com/640/360",
        tags:[{tag:"운동"},{tag:"자기개발"},{tag:"운동"}],
        category:3,
        currentParticipant:1,
        maxParticipant:15,
      },
    ])
    );
  });
};

export const hongsiDetail = () => {
    return rest.post("/hong-si/owning", async (req, res, ctx) => {
      return res(
        ctx.json(
          {
          board_id: 1,
          image:"https://placebear.com/640/360"
        }
        )
      );
    });
  };

export default hongsiList;
