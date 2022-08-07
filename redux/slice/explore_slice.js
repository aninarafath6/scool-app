import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      title: "Stock Market Trading: The Complete Technical Analysis Roadmap",
      description:
        "From stock market basics to advanced trading strategies, choose from a wide variety of mentorship programmes to fit your goals",
      image:
        "https://fundfolio.gumlet.io/fundfolio/Breakout-Universiy/shariqueNew.png?w=828&q=75",
      mentor: " - Sharique Samsudheen",
    },
    {
      title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      description:
        "Learn To Trade The Stock Market. #1 Trading course. Inc: Technical Analysis, Candlesticks, Stocks, Day Trading +++",
      image: "https://miro.medium.com/max/1838/1*c_fiB-YgbnMl6nntYGBMHQ.jpeg",
      mentor: " - by joshua",
    },
    {
      title: "The Complete JavaScript roadmap 2022: From Zero to Expert!",
      description:
        "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
      image: "https://cdn.mos.cms.futurecdn.net/EzgdmaCQuT84bgDL4fhXZS.jpg",
      mentor: " - by anin arafath",
    },
  ],
};

export const roadMapSlice = createSlice({
  name: "roadmap",
  initialState,
});

// Action creators are generated for each case reducer function

export default roadMapSlice.reducer;
