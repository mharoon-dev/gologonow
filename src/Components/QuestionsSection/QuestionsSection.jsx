import React from "react";
import Question from "../Question/Question.jsx";
import "./questionsSection.css";

const QuestionsSection = () => {
  const questions = [
    {
      number: "01",
      name: "WEB DEVELOPMENT",
      details:
        "Tech6 Solutions does not take it lightly; instead, we Strive for success! Whether it's a basic landing page, a website, a web application, a mobile application, or a software solution, we can meet your demands using a wide selection of platforms and languages, including WordPress, Shopify, Wix, Weebly, Squarespace, and others. We design and develop Mobile Applications using a variety of innovative methods to generate Native, Hybrid, and Cross-Platform applications.",
    },
    {
      number: "02",
      name: "APP DEVELOPMENT",
      details:
        "Tech6 Solutions is a leading mobile app development company operating in the USA, UAE, Pakistan, and internationally. We Provide extensive customization and functionality leveraging Android’s broad reach and flexibility to enhance ROI. We are able to us Reac Native to deliver apps that work seamlessly across Android, iOS, and Windows, ensuring efficiency and consistency. We Offer customized web applications with potentia integration of hybrid and VR/AR features. ",
    },
    {
      number: "03",
      name: "UI/UX",
      details:
        "Tech6 Solutions thrive at the intersection of design and business through our UI UX design services and craft beautiful and functional experiences that can be launched quickly. We tackle difficult problem statements and transform them into meaningful experiences. ",
    },
    {
      number: "04",
      name: "ANIMATIONS",
      details:
        "In the design line, we assist with logos, graphics, drawings, character and motion animations, 2D and 3D projects, and more.Our post-production experts produce the most unique and original material",
    },
    {
      number: "05",
      name: "BRANDING",
      details:
        "For a business to stand out from the competition and for marketing to be successful, it needs a strong brand identity. Tech6 Solutions offers comprehensive services in brand identity design, including strategy development, visual design, and audience targeting. Effective branding requires careful consideration of visual elements, target audience, and overall design intent",
    },
    {
      number: "05",
      name: "CONTENT WRITING",
      details:
        "Unique content is crucial for converting leads and increasing organic reach. Tech6 Solutions offers specialized content writing services for blogs, copy, e-books, and newsletters. Well-written blog posts can boost reader engagement, expand the audience, and direct them through the sales funnel. In a competitive digital world, attention-grabbing content is critical for driving conversions.",
    },
  ];

  return (
    <div className="questionsContainer">
      <div className="questionLeft">
        <h1 className="questionsHeading">
          Getting your business <span>digital</span>
        </h1>
        <p className="questionsDescription">
          Our team of determined and competent professionals has learned skills
          to help you establish the groundwork for exponential growth.
        </p>
        <p className="questionsDescription">
          Our primary focus is on providing what is best for you.
        </p>
      </div>
      <div className="right">
        {questions.map((question) => (
          <Question
            key={question.number}
            number={question.number}
            name={question.name}
            details={question.details}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsSection;
