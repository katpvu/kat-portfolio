let portfolioData = {
    "aboutMe": {
      "name": "Kat Vu",
      "initials": "kv",
      "role": "Software Engineer",
      "roleDescription": "",
      "aboutme": "Hi there! I am a full-stack web developer who finds thrill in designing and developing web applications from scratch. With a blend of creativity and technical expertise, I thrive on the excitement of transforming ideas into functional and visually appealing websites. I have a deep appreciation for the art of design, constantly seeking innovative ways to create user-friendly interfaces that enhance the overall user experience. Oh, and I also love to crochet and knit! :)",
      "location": "San Jose, CA",
      "profileImgUrl": "images/smaller-prof.jpg",
    },
    "socialLinks":[
        {
          "name": "linkedin",
          "url": "https://www.linkedin.com/in/kat-vu-57b50411b/",
          "className": "linkedin"
        },
        {
          "name": "github",
          "url": "https://github.com/katpvu",
          "className": "github"
        }
      ],
    "projects": [
        {
          "name": "bean bunny",
          "shortDescription": "Fullstack web app using Ruby on Rails for backend and React-Redux for frontend. Purpose is for finding and organizing coffee shops.",
          "description": "Full-stack web application for finding coffee shops based on city location, allowing users to organize saved businesses into collections and create ratings. Utilizes the Yelp API to obtain real-life information and database seeding optimization. Collection creation is automated based on business city location to enhance organizational impact.",
          "imgurl": "images/projects/bean-bunny-thumb.png",
          "techstack": ["rails", "ruby", "javascript", "react", "redux", "postgresql"],
          "liveLink": "https://bean-bunny.onrender.com/",
          "sourceCode": "https://github.com/katpvu/bean-bunny"
        },
        {
          "name": "grubGlobe",
          "shortDescription": "Fullstack web app built using MERN stack. A social, interactive, and AI-augmented platform for discovering food recipes from all over the world.",
          "description": "Full-stack MERN project, integrating a 3D interactive model and AI chatbot to help users find diverse recipes from all over the world. Also implements a badge rewarding system based on user accomplishments to encourage user stickiness, search feature based on keywords, and a recommendations pages based on user's existing data.",
          "imgurl": "images/projects/grubGlobe.png",
          "techstack": ["mongodb", "javascript", "express", "react", "redux", "node.js"],
          "liveLink": "https://grubglobe.herokuapp.com/",
          "sourceCode": "https://github.com/ziqi23/Grub-Globe-2"
        },
        {
          "name": "CAT-ASTROPHE",
          "shortDescription": "Vanilla Javascript project utilizing DOM manipulation and canvas. Minigame for achieving highest score and dealing with increasingly difficult obstacles.",
          "description": "2D minigame for obtaining the highest score. Point acquisition and overcoming obstacles are facilitated by keypresses",  
          "imgurl": "images/projects/cat-astrophe.png",
          "techstack": ["html5", "CSS3", "javascript"],
          "liveLink": "https://katpvu.github.io/cat-tastrophe/",
          "sourceCode": "https://github.com/katpvu/cat-tastrophe"
        }
      ],
      "skills":  [
        {
          "name": "javascript",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
        },
        {
          "name": "aws",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        },
        {
          "name": "canvasjs",
          "imageUrl": "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg"
        },
        {
          "name": "CSS3",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
        },
        {
          "name": "express",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
        },
        {
          "name": "figma",
          "imageUrl": "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
        },
        {
          "name": "git",
          "imageUrl": "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        },
        {
          "name": "heroku",
          "imageUrl": "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
        },
        {
          "name": "html5",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
        },
        {
          "name": "mongodb",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
        },
        {
          "name": "node.js",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
        },
        {
          "name": "postgresql",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
        },
        {
          "name": "postman",
          "imageUrl": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        },
        {
          "name": "rails",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg"
        },
        {
          "name": "react",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
        },
        {
          "name": "redux",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
        },
        {
          "name": "ruby",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg"
        },
        {
          "name": "sqlite",
          "imageUrl": "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg"
        },
        {
          "name": "webpack",
          "imageUrl": "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
        },
      ],
      "categorizedSkills": [
        {
          "category": "frontend development",
          "skills": "Javascript, HTML, CSS, React, Redux, canvas.js, Responsive Design"
        },
        {
          "category": "backend development",
          "skills": "Ruby on Rails, Node, Express, PostgreSQL, MongoDB, mongoose"
        },
        {
          "category": "other tools & technologies",
          "skills": "AWS, Heroku, Figma, Postman"
        }
      ]
};

export default portfolioData;