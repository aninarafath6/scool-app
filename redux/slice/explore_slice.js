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
    {
      title: "The Complete JavaScript roadmap 2022: From Zero to Expert!",
      description:
        "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
      image: "https://cdn.mos.cms.futurecdn.net/EzgdmaCQuT84bgDL4fhXZS.jpg",
      mentor: " - by anin arafath",
    },
    {
      title: "The Complete Python Road Map | Learn Python by Doing in 2022",
      description:
        "Go from Beginner to Expert in Python by building projects. The best investment for your Python journey!, and From foundations to expert, learn about every major Python topic, working with Python 3.,Interact with REST APIs using Python and build a currency converter",
      image:
        "https://besthqwallpapers.com/Uploads/17-2-2020/121822/thumb2-python-glitter-logo-programming-language-grid-metal-background-python-creative.jpg",
      mentor: " - angala",
    },
    {
      title: "iOS & Swift - The Complete iOS App Development Roadmap",
      description:
        "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!You will create a portfolio of 15 apps to be able apply for junior developer jobs at a technology company, and Master app design so you'll know how to wireframe, mockup and prototype your app idea,Create apps that use Machine Learning using Apple’s new CoreML",
      image:
        "https://images.macrumors.com/t/nYhlVfR_6eKG3rVp2E8Rw8LgCg4=/2341x/article-new/2020/10/appleevent2020_feature.jpg",
      mentor: " - angala",
    },
  ],
};

export const roadMapSlice = createSlice({
  name: "roadmap",
  initialState,
});

// Action creators are generated for each case reducer function

export default roadMapSlice.reducer;
