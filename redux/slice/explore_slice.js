import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp for 2022",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      image: "/images/roadmaps/python.jpeg",
      mentor: " - by angala",
    },
  ],
};

export const roadMapSlice = createSlice({
  name: "roadmap",
  initialState,
  
});

// Action creators are generated for each case reducer function

export default roadMapSlice.reducer;
