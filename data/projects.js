import bmjLearning from "@/assets/images/bmj-logo.svg";
import ecoventry from "@/assets/images/late-autumn-grapevine.jpeg";
import aroundBritain from "@/assets/images/around-britain.png";
import javascript from "@/assets/images/toolkit/javascript.svg";
import typescript from "@/assets/images/toolkit/typescript.svg";
import reactjs from "@/assets/images/toolkit/reactjs.svg";
import sass from "@/assets/images/toolkit/sass.svg";
import css3 from "@/assets/images/toolkit/css3.svg";
import cypress from "@/assets/images/toolkit/cypress.svg";
import docker from "@/assets/images/toolkit/docker.svg";
import expressjs from "@/assets/images/toolkit/expressjs.svg";
import jest from "@/assets/images/toolkit/jest.svg";
import nextjs from "@/assets/images/toolkit/next-js.png";
import nodejs from "@/assets/images/toolkit/nodejs.svg";
import spring from "@/assets/images/toolkit/spring.svg";
import dynamodb from "@/assets/images/toolkit/dynamodb.svg";
import lambda from "@/assets/images/toolkit/lambda.svg";
import amplify from "@/assets/images/toolkit/amplify.svg";
import apigateway from "@/assets/images/toolkit/apigateway.svg";
import ses from "@/assets/images/toolkit/ses.svg";
import postgres from "@/assets/images/toolkit/postgres.png";

export const projects = [
  {
    title: {
      heading: "BMJ Learning",
      link: "https://new-learning.bmj.com"
    },
    image: {
      src: bmjLearning,
      alt: "BMJ Learning website",
      width: "220",
      height: "130"
    },
    description:
      "For the last 2 and half years my day job has been full stack developer for BMJ Learning. With my background in education this has been a great fit and a fertile training ground for acquiring new skills. Our frontend is deployed as a React js application and supported by a backend architecture of REST Apis built in Nodejs and Springboot, deployed on AWS microservice platforms. We use agile software development practices that allow for rapid development of new features, robustly maintained through testing suites that include Cypress, Jest and Jasmine.",
    toolkit: [
      { image: javascript, alt: "Javascript" },
      { image: typescript, alt: "Typescript" },
      { image: reactjs, alt: "React Js" },
      { image: sass, alt: "Sass" },
      { image: nodejs, alt: "Node js" },
      { image: expressjs, alt: "Express js" },
      { image: spring, alt: "Springboot" },
      { image: jest, alt: "Jest" },
      { image: cypress, alt: "Cypress" },
      { image: amplify, alt: "AWS Amplify" },
      { image: lambda, alt: "AWS Lambda" },
      { image: dynamodb, alt: "AWS DynamoDb" },
      { image: postgres, alt: "Postgres" },
      { image: docker, alt: "Docker" }
    ]
  },
  {
    title: {
      heading: "Elizabeth Coventry",
      link: "https://elizabethcoventry.com"
    },
    image: {
      src: ecoventry,
      alt: "Elizabeth Coventry website"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    toolkit: [
      { image: javascript, alt: "Javascript" },
      { image: typescript, alt: "Typescript" },
      { image: reactjs, alt: "React Js" }
    ]
  },
  {
    title: {
      heading: "Around Britain",
      link: "https://aroundbritain.uk"
    },
    image: {
      src: aroundBritain,
      alt: "Around Britain website"
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    toolkit: [
      { image: javascript, alt: "Javascript" },
      { image: typescript, alt: "Typescript" },
      { image: reactjs, alt: "React Js" }
    ]
  }
];
