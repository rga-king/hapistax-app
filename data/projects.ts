import { Projects, Category } from "@/lib/types";
import { toolkit } from "@/data/toolkit";

import cityPlumbing from "@/assets/images/city-plumbing.svg";
import bmjLearning from "@/assets/images/bmj-logo.svg";
import ecoventry from "@/assets/images/late-autumn-grapevine.jpeg";
import aroundBritain from "@/assets/images/around-britain.png";

export const projects: Projects = [
  {
    id: "cps",
    tag: "cps",
    title: {
      heading: "City Plumbing",
      link: "https://www.highbournegroup.co.uk/",
      subtitle: "Software Engineer",
      timeline: "Oct 2024 - present"
    },
    image: {
      src: cityPlumbing,
      alt: "City Plumbing website",
      width: 280,
      height: 150
    },
    category: Category.Employment,
    description: {
      short: 
        "Employed as a full-stack software engineer. Key projects: development of flagship Digital Till sales tool; design of automated security reporting tools; documentation and promotion of software development best practices.",
      full: 
        "<p>Member of a product development team creating a flagship digital till Next.js application for retail stores to increase sales opportunities; part of the platform team developing security reporting software and promoting software development best practices.</p><h5>Key projects:</h5><ul><li><strong>Product Feature Development</strong>: Implemented a new stock allocation feature in React for a digital till POS application, including unit and integration tests to ensure reliability and performance.</li><li><strong>Platform Team Initiatives</strong>: Developed security reporting software using Node.js to identify CVEs across all company AWS accounts; automated deployment using Infrastructure as Code principles with Terraform, S3, and AWS Lambda.</li><li><strong>Best Practices Development</strong>: Authored prototypes for building scalable and maintainable Spring Boot applications; completed an analysis and documentation of all public-facing and internal front-end applications to streamline future development.</li></ul>"
    },
    toolkit: [
      toolkit.javascript,
      toolkit.typescript,
      toolkit.react,
      toolkit.nextjs,
      toolkit.sass,
      toolkit.nodejs,
      toolkit.springboot,
      toolkit.jest,
      toolkit.playwright,
      toolkit.awsLambda,
      toolkit.awsInspector,
      toolkit.awsS3,
      toolkit.graphQL,
      toolkit.docker,
      toolkit.terraform
    ]
  },
  {
    id: "bmj",
    tag: "bmj",
    title: {
      heading: "BMJ Learning",
      link: "https://new-learning.bmj.com",
      subtitle: "Software Developer",
      timeline: "May 2022 - Oct 2024"
    },
    image: {
      src: bmjLearning,
      alt: "BMJ Learning website",
      width: 220,
      height: 130
    },
    category: Category.Employment,
    description: {
      short: 
        "Employed as a full-stack developer on the BMJ Learning product. Key projects: design of new authentication system; implementation of new site search feature; migration of legacy code and database to modern solutions.",
      full: 
        "<p>Member of a full-stack team developing all aspects of the <a href='https://new-learning.bmj.com' class='${siteStyles.link}' target='_blank' rel='noopener noreferrer'>BMJ Learning web application</a>; lead front-end developer from October 2023.</p><h5>Key projects:</h5><ul><li><strong>New Search Feature Implementation</strong>: Led the front-end development of a new search functionality that significantly improved user experience by reducing search times by 40%. This involved integrating React front-end components with AWS microservices.</li><li><strong>Authentication System Overhaul</strong>: Worked on the replacement of an outdated authentication system with a modern OAuth2-based solution, enhancing security and simplifying user management.</li><li><strong>API devlopment</strong>: Responsible for creating and maintaining APIs implemented in Node.js and Java (Spring Boot), ensuring their efficient performance and seamless integration with the front-end application.</li></ul>"
    },
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
    id: "elizabethCoventry",
    tag: "elizabethCoventry",
    title: {
      heading: "Elizabeth Coventry",
      link: "https://elizabethcoventry.com",
      subtitle: "Website and CMS",
      timeline: "2023 - present"
    },
    image: {
      src: ecoventry,
      alt: "Elizabeth Coventry website"
    },
    category: Category.PrivateClient,
    description: {
      short: 
        "Development of a business website and bespoke content management system for a private client.",
      full: 
        "I developed this website for a client looking to grow her business through products based on her botanical artwork. The website primarily functions as a brochure to support offline sales but is built on a scalable framework ready for e-commerce. Constructed with Next.js and TypeScript, the site uses server components to connect directly to a backend DynamoDB for seamless data fetching. Additionally, it includes a custom CMS, also built with Next.js, enabling straightforward content management and updates."
    },
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
    id: "aroundBritain",
    tag: "aroundBritain",
    title: {
      heading: "Around Britain & Through Britain",
      link: "https://aroundbritain.uk",
      subtitle: "Website and CMS",
      timeline: "2024 - present"
    },
    image: {
      src: aroundBritain,
      alt: "Around Britain website"
    },
    category: Category.PrivateClient,
    description: {
      short:
        "Bespoke blogging website and content management system for a private client.",
      full:
        "This website documents my client's journeys around Great Britain, starting in 1999 and still going strong 👏. Due to the extensive text content, I designed a clear, user-friendly structure. The client wanted a custom solution rather than standard blogging options, so I developed a unique design with a bespoke CMS, both built using Next.js and deployed via AWS Amplify. The data is managed with AWS DynamoDB for its flexibility and high performance."
    },
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
