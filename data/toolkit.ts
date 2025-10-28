import { Tool } from "@/lib/types";

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
import awsInspector from "@/assets/images/toolkit/inspector.svg";
import graphQL from "@/assets/images/toolkit/graphQL.svg";
import playwright from "@/assets/images/toolkit/playwright.svg";
import awsS3 from "@/assets/images/toolkit/s3.svg";
import terraform from "@/assets/images/toolkit/terraform.svg";
import vite from "@/assets/images/toolkit/vitejs.svg";
import zustand from "@/assets/images/toolkit/zustand.svg";


export const toolkit: Record<string, Tool> = {
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
  },
  awsInspector: {
    image: awsInspector,
    alt: "Amazon Inspector",
    href: "https://aws.amazon.com/inspector/"
  },
  graphQL: {
    image: graphQL,
    alt: "GraphQL",
    href: "https://graphql.org/"
  },
  awsS3: {
    image: awsS3,
    alt: "Amazon Simple Storage Service",
    href: "https://aws.amazon.com/s3/"
  },
  playwright: {
    image: playwright,
    alt: "Playwright",
    href: "https://playwright.dev/"
  },
  terraform: {
    image: terraform,
    alt: "Terraform",
    href: "https://developer.hashicorp.com/terraform"
  },
  vite: {
    image: vite,
    alt: "Vitejs",
    href: "https://vite.dev/"
  },
  zustand: {
    image: zustand,
    alt: "Zustand",
    href: "https://zustand.docs.pmnd.rs/getting-started/introduction"
  }
};
