# Next.js SSG + Keystone.js Embedded Template

Live demo is available [here](https://next-keystone-embedded.netlify.app/).

## Getting Started

### Install dependencies:

```bash
npm i
# or
yarn
```

### Run the development server:

Inside development mode you are able to preview the website aswell as edit the content.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for production:

When building for production it will automatically generate static pages based on content that is inside database file.

```bash
npm run build
# or
yarn build
```

## Editing content

Open [http://localhost:8000](http://localhost:8000) with your browser to see access Admin UI.

Note: You can edit the content through Admin UI only in **development mode**.

## GraphQL

GraphQL is accessible on [http://localhost:8000/api/graphql](http://localhost:8000/api/graphql).
