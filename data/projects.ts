import { Tool } from "@/lib/types";
import { Projects } from "@/lib/types";

import bmjLearning from "@/assets/images/bmj-logo.svg";
import ecoventry from "@/assets/images/late-autumn-grapevine.jpeg";
import aroundBritain from "@/assets/images/around-britain.png";
import javaScriptImg from "@/assets/images/toolkit/javascript.svg";
import typeScriptImg from "@/assets/images/toolkit/typescript.svg";
import reactImg from "@/assets/images/toolkit/reactjs.svg";
import sassImg from "@/assets/images/toolkit/sass.svg";
import css3Img from "@/assets/images/toolkit/css3.svg";
import cypressImg from "@/assets/images/toolkit/cypress.svg";
import dockerImg from "@/assets/images/toolkit/docker.svg";
import expressjsImg from "@/assets/images/toolkit/expressjs.svg";
import jestImg from "@/assets/images/toolkit/jest.svg";
import nextjsImg from "@/assets/images/toolkit/next-js.png";
import nodejsImg from "@/assets/images/toolkit/nodejs.svg";
import springbootImg from "@/assets/images/toolkit/spring.svg";
import dynamoDBImg from "@/assets/images/toolkit/dynamodb.svg";
import awsLambdaImg from "@/assets/images/toolkit/lambda.svg";
import awsAmplifyImg from "@/assets/images/toolkit/amplify.svg";
import awsApiGatewayImg from "@/assets/images/toolkit/apigateway.svg";
import awsSesImg from "@/assets/images/toolkit/ses.svg";
import postgresImg from "@/assets/images/toolkit/postgres.png";
import reduxImg from "@/assets/images/toolkit/redux.svg";

const toolkit: Record<string, Tool> = {
  javascript: {
    image: javaScriptImg,
    alt: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Glossary/JavaScript"
  },
  typescript: {
    image: typeScriptImg,
    alt: "TypeScript",
    href: "https://www.typescriptlang.org/"
  },
  react: {
    image: reactImg,
    alt: "React",
    href: "https://react.dev/"
  },
  redux: {
    image: reduxImg,
    alt: "Redux Toolkit",
    href: "https://redux-toolkit.js.org/"
  },
  sass: {
    image: sassImg,
    alt: "Sass",
    href: "https://sass-lang.com/"
  },
  css: {
    image: css3Img,
    alt: "CSS3",
    href: "https://www.w3.org/Style/CSS/Overview.en.html"
  },
  cypress: {
    image: cypressImg,
    alt: "Cypress",
    href: "https://www.cypress.io/"
  },
  docker: {
    image: dockerImg,
    alt: "Docker",
    href: "https://www.docker.com/"
  },
  expressjs: {
    image: expressjsImg,
    alt: "Express.js",
    href: "https://expressjs.com/"
  },
  jest: {
    image: jestImg,
    alt: "Jest",
    href: "https://jestjs.io/"
  },
  nextjs: {
    image: nextjsImg,
    alt: "Next.js",
    href: "https://nextjs.org/"
  },
  nodejs: {
    image: nodejsImg,
    alt: "Node.js",
    href: "https://nodejs.org/"
  },
  springboot: {
    image: springbootImg,
    alt: "Spring Boot",
    href: "https://spring.io/projects/spring-boot"
  },
  dynamoDB: {
    image: dynamoDBImg,
    alt: "DynamoDB",
    href: "https://aws.amazon.com/dynamodb/?did=ap_card&trk=ap_card"
  },
  awsLambda: {
    image: awsLambdaImg,
    alt: "AWS Lambda",
    href: "https://aws.amazon.com/lambda/?nc2=h_ql_prod_fs_lbd"
  },
  awsAmplify: {
    image: awsAmplifyImg,
    alt: "AWS Amplify",
    href: "https://aws.amazon.com/amplify/?did=ap_card&trk=ap_card"
  },
  awsApiGateway: {
    image: awsApiGatewayImg,
    alt: "AWS API Gateway",
    href: "https://aws.amazon.com/api-gateway/?did=ap_card&trk=ap_card"
  },
  awsSes: {
    image: awsSesImg,
    alt: "AWS SES",
    href: "https://aws.amazon.com/ses/?did=ap_card&trk=ap_card"
  },
  postgres: {
    image: postgresImg,
    alt: "PostgreSQL",
    href: "https://www.postgresql.org/"
  }
};

export const projects: Projects = [
  {
    title: {
      heading: "BMJ Learning",
      link: "https://new-learning.bmj.com"
    },
    image: {
      src: bmjLearning,
      alt: "BMJ Learning website",
      width: 220,
      height: 130
    },
    description:
      "For the past two and a half years, I have been a full-stack developer at BMJ Learning, where my background in education has been a perfect fit. I work on a React frontend supported by a backend of REST APIs built with Node.js and Spring Boot, all deployed on AWS microservice platforms. Our agile development practices enable rapid feature development and are reinforced by comprehensive testing suites, including Cypress, Jest, and Jasmine, to ensure robust maintenance and reliability.",
    toolkit: [
      toolkit.javascript,
      toolkit.typescript,
      toolkit.react,
      toolkit.redux,
      toolkit.sass,
      toolkit.nodejs,
      toolkit.expressjs,
      toolkit.springboot,
      toolkit.jest,
      toolkit.cypress,
      toolkit.awsAmplify,
      toolkit.awsLambda,
      toolkit.dynamoDB,
      toolkit.postgres,
      toolkit.docker
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
      "I developed this website for a client looking to grow her business through products based on her botanical artwork. The website primarily functions as a brochure to support offline sales but is built on a scalable framework ready for e-commerce. Constructed with Next.js and TypeScript, the site uses server components to connect directly to a backend DynamoDB for seamless data fetching. Additionally, it includes a custom CMS, also built with Next.js, enabling straightforward content management and updates.",
    toolkit: [
      toolkit.javascript,
      toolkit.typescript,
      toolkit.react,
      toolkit.nextjs,
      toolkit.css,
      toolkit.nodejs,
      toolkit.jest,
      toolkit.cypress,
      toolkit.dynamoDB,
      toolkit.awsAmplify,
      toolkit.awsLambda,
      toolkit.awsSes
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
      "This website documents my client's journey around the coast of Great Britain, started in 1999 and nearing completion this year 👏. Due to the extensive text content, I designed a clear, user-friendly structure. The client wanted a custom solution rather than standard blogging options, so I developed a unique design with a bespoke CMS, both built using Next.js and deployed via AWS Amplify. The data is managed with AWS DynamoDB for its flexibility and high performance.",
    toolkit: [
      toolkit.javascript,
      toolkit.typescript,
      toolkit.react,
      toolkit.nextjs,
      toolkit.css,
      toolkit.nodejs,
      toolkit.jest,
      toolkit.cypress,
      toolkit.dynamoDB,
      toolkit.awsAmplify,
      toolkit.awsLambda,
      toolkit.awsSes
    ]
  }
];
