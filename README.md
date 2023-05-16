To view deployed [Marveled](https://marveled.vercel.app/) site,
visit **marveled.vercel.app**

## How I worked on this project

My goal is to simulate professional work environment.

- I built this app based on Figma design: [Screenshot of designs](docs/figma.JPG)
- I worked on the tasks based on kanban board: [Screenshot of tasks](docs/kanban-board.png)
- I used feature branches and Pull Requests: [Example PR](https://github.com/cathleys/marveled/pull/23)

## How to navigate this project

- Somewhat complex application logic: [Example code](https://github.com/cathleys/marveled/blob/b8a85f1930eceb63100abc550423f16ae26a6008/features/hero/component/hero-detail/hero-info.tsx)
- Responsive CSS using styled components: [Example code](https://github.com/cathleys/marveled/blob/f08f0e0fa88292934e7221b190b73be4f495eef4/features/comics/component/comic-details/comic-details-by-id.tsx)
- This app has multiple API calls from Marvel API: [Example data request](https://github.com/cathleys/marveled/blob/f08f0e0fa88292934e7221b190b73be4f495eef4/features/comics/api/use-comics-by-id.tsx) and [data transformation](https://github.com/cathleys/marveled/pull/29)
- Integration test using Cypress: [Example test](docs/test.JPG)
- CI/CD pipeline set up: [Screenshot of CI/CD](docs/github-cli.JPG)
- Encounters merge-conflicts: [Example conflict](docs/merge-conflict.JPG)

## Why I built the project this way

- In a nutshell, the tech stack used in this app are widely supported by majority of users according to this [article](https://profy.dev/article/react-tech-stack).

- styled-components is a react-specific CSS-in-JS styling solution that helps me to design with a custom css style.

- Typescript helps to check javascript. This allows me to reduce bugs and errors in the code and make sure that the values are type safe.

- Testing is essential part of app development. Cypress is a beginner and user-friendly with a great UI which helps me to test atleast part of the Marveled app easily.

- I'm focused on Frontend/React development since it's something I'm interested in for now. I am planning to also learn backend in my dev journey.

- Whenever I get stuck on a certain task, I usually reach out for help to essentially solve the problem and learn from their experience. I think I need to mention this since I'm a human and actively learning. I can't improve this app without their existence.

## If I had more time I would change this

- Separate some codes to its respective files such as the css styles, consistently.
- Refactor some of the code: Especially this [part](https://github.com/cathleys/marveled/blob/1bfd8b15d867f7b27e86c8b38bac8babf5c2a8e3/features/characters/component/character-by-events/character-by-events-card.tsx) and this [part](https://github.com/cathleys/marveled/blob/main/config/routes.tsx)
- Add more features, first is to make it AI powered app using Allan AI perhaps.

## The Application

The application is a comic book character app where you can search for marvel heroes and their comics using Marvel API. It has some added cool features that you can play around with as well.

![The running application](docs/app.gif)

## Getting Started

This project is built with Next.js, TypeScript, Cypress & styled-components among others. To start working on the project, first clone the repository and install the dependencies.

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Now you can open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Tests

This project is covered with Cypress tests. Although most tests for production apps are currently written with React Testing Library, Cypress is the best option to get started with testing. When you're new to testing the start can be very cumbersome and feel like you're in a completely new dev environment.

Cypress makes it much easier to get started with testing.

To run the Cypress tests on your local machine use this command:

```bash
npm run cypress
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
