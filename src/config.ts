import { IFonts } from "./interfaces";

const name = "Earnest";

export const config = {
  name: name,
  nameTagLine: `My name is ${name}.`,
  descriptionTagLine: "I aspire to solve real-world problems through innovation and data-driven design.",

  featurePhrases: ["Hello!", "Bonjour!"],
  aboutText:
    "I am currently a second year undergraduate studying Information Systems (Business Analytics) and Finance at Singapore Management University. I am passionate about visual and information design, and enjoy working with design/analytics tools such as Figma, Canva, PowerPoint and Tableau to create compelling visuals that communicate amazing ideas.",
  aboutText2:
    "I am driven by my passion towards technology, innovation, good design, a hunger for continuous learning, and above all, my Yakun Kopi Bing 大杯 (Large Iced Nanyang-style Coffee).",

  experience: [
    {
      compantName: "DayDayUp",
      jobPosition: "Innovation Programme Consultant, Beijing China |",
      jobDuration: "May 2024 - Present",
      jobDescription:
        "Evaluating market fit of Singaporean start-ups entering the Chinese market and vice-versa for Chinese start-ups, identifying key strategies for successful market penetration.",
    },
    {
      compantName: "SMU Product Management Club",
      jobPosition: "Member |",
      jobDuration: "Dec 2023 - April 2024",
      jobDescription:
        "I designed a product and its product strategy for GrabFood based on identified pain points in mobile food ordering and market research to determine market sizing, position and strategy.",
    },
    {
      compantName: "Asia Private Equity Club SMU",
      jobPosition: "Analyst |",
      jobDuration: "Sep 2022 - May 2023",
      jobDescription:
        "I evaluated companies by developing financial models and applying several valuation methodologies such as precedent transactions and peer comps for Venture Capital cases and DCF analysis for Private Equity cases.",
    },
    {
      compantName: "Virginia Quek Lalita & Partners",
      jobPosition: "Legal Intern |",
      jobDuration: "Feb 2022 - Apr 2022",
      jobDescription:
        "I assisted partners and associates in representing clients in court during trial, and developed polished legal documents, including affidavits, statements of claim and writs to support litigation processes and court proceedings.",
    },
  ],

  projects: [
    {
      name: "GrabMore",
      image: "/assets/project.png",
      category: "UI/UX",
      highlights: ["2024", "UI/UX"],
      description: "Developed for Internal Product Challenge | 3rd Place",
    },
    {
      name: "GrabMore",
      image: "/assets/project.png",
      category: "UI/UX",
      highlights: ["2024", "UI/UX"],
      description: "Developed for Internal Product Challenge | 3rd Place",
    },
    {
      name: "GrabMore",
      image: "/assets/project.png",
      category: "UI/UX",
      highlights: ["2024", "UI/UX"],
      description: "Developed for Internal Product Challenge | 3rd Place",
    },
    {
      name: "GrabMore",
      image: "/assets/project.png",
      category: "UI/UX",
      highlights: ["2024", "UI/UX"],
      description: "Developed for Internal Product Challenge | 3rd Place",
    },
  ],

  testimonials: [
    {
      name: "Sara",
      image: "/assets/person.jpg",
      position: "CEO ABC Company",
      highlights: ["Problem Solving", "Good Communication"],
      review: `${name} consistently delivers well-optimized code, exceeding deadlines and demonstrating strong problem-solving skills. Their collaborative spirit and eagerness to learn make them a valuable asset to the team.`,
      date: "02/02/24",
    },
    {
      name: "Sara",
      image: "/assets/person.jpg",
      position: "CEO ABC Company",
      highlights: ["Problem Solving", "Good Communication"],
      review: `${name} consistently delivers well-optimized code, exceeding deadlines and demonstrating strong problem-solving skills. Their collaborative spirit and eagerness to learn make them a valuable asset to the team.`,
      date: "02/02/24",
    },
    {
      name: "Sara",
      image: "/assets/person.jpg",
      position: "CEO ABC Company",
      highlights: ["Problem Solving", "Good Communication"],
      review: `${name} consistently delivers well-optimized code, exceeding deadlines and demonstrating strong problem-solving skills. Their collaborative spirit and eagerness to learn make them a valuable asset to the team.`,
      date: "02/02/24",
    },
    {
      name: "Sara",
      image: "/assets/person.jpg",
      position: "CEO ABC Company",
      highlights: ["Problem Solving", "Good Communication"],
      review: `${name} consistently delivers well-optimized code, exceeding deadlines and demonstrating strong problem-solving skills. Their collaborative spirit and eagerness to learn make them a valuable asset to the team.`,
      date: "02/02/24",
    },
  ],

  email: "ernest@gmail.com",
  phone: "+65 3492 3892",
  developedBy: "Ernest",

  techStack: "Nextjs - Styled-Components",
};

export const fonts: IFonts = {
  lg: "1.5rem",
  md: "1rem",
  sm: ".8rem",
};

export const projectCategoryfonts: IFonts = {
  lg: "1.5rem",
  md: "1rem",
  sm: ".8rem",
};
