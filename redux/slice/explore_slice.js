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
      mentor: " - Francis Z",
    },
    {
      title: "iOS & Swift - The Complete iOS App Development Roadmap",
      description:
        "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!You will create a portfolio of 15 apps to be able apply for junior developer jobs at a technology company, and Master app design so you'll know how to wireframe, mockup and prototype your app idea,Create apps that use Machine Learning using Apple’s new CoreML",
      image:
        "https://images.macrumors.com/t/nYhlVfR_6eKG3rVp2E8Rw8LgCg4=/2341x/article-new/2020/10/appleevent2020_feature.jpg",
      mentor: " - angala",
    },
    {
      title: "iOS & Swift - The Complete iOS App Development Roadmap",
      description:
        "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!You will create a portfolio of 15 apps to be able apply for junior developer jobs at a technology company, and Master app design so you'll know how to wireframe, mockup and prototype your app idea,Create apps that use Machine Learning using Apple’s new CoreML",
      image:
        "https://images.macrumors.com/t/nYhlVfR_6eKG3rVp2E8Rw8LgCg4=/2341x/article-new/2020/10/appleevent2020_feature.jpg",
      mentor: " - Francis Z",
    },
    {
      title: "AWS Certified DevOps Engineer Professional 2022 - Hands On!",
      description:
        "Pass the AWS Certified DevOps Engineer Professional Certification (DOP-C01) with 20 hours of advanced hands-on videos.",
      image:
        "https://d1rytvr7gmk1sx.cloudfront.net/wp-content/uploads/2021/07/devops-concept.jpg",
      mentor: " - ozhan illah",
    },
    {
      title: "NFT MASTERY for Creators - Beginner to Advanced 2022 Roadmap",
      description:
        "Learn how to Create, Mint, and Sell Non-Fungible Tokens in no time, Bonus: FREE NFT & a second “hidden” NFT included!,How to use the most popular platforms for buying, creating and selling NFTs",
      image:
        "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/02/20/3080776-16902935.jpg?itok=PzcjJlM1",
      mentor: " - Elon Musk",
    },
    {
      title: "Metaverse Fundamentals: Blockchain, Cryptocurrency and NFTs",
      description:
        "Learn how to Create, Mint, and Sell Non-Fungible Tokens in no time, Bonus: FREE NFT & a second “hidden” NFT included!",
      image:
        "https://wp.technologyreview.com/wp-content/uploads/2022/06/Infosys-metaverse-image.png",
      mentor: " - Zuck",
    },
  ],
};

export const roadMapSlice = createSlice({
  name: "roadmap",
  initialState,
});

// Action creators are generated for each case reducer function

export default roadMapSlice.reducer;
