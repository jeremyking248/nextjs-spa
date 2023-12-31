# nextjs-spa
Attempt to create a single page app using Next.js

Unfortunately, dynamic routes are incompatible with static export (both of which are necessary for a single page app). Run the project to see for yourself.

## Installation
```
npm install
```

## Usage
To run a development server on http://localhost:3000
```
npm run dev
```

To build for production
```
npm run build
```

## What I did
1. Initialize project using the [recommended tool](https://nextjs.org/docs/getting-started/installation#automatic-installation)
    ```
    npx create-next-app@latest
    ```
    Today this installs `create-next-app@14.0.1`

1. Accept all the default settings
    * TypeScript **yes**
    * ESLint **yes**
    * Tailwind CSS **no**
    * 'src/' directory **yes**
    * App Router **yes**
    * custom import alias **no**

1. Add dynamic route `/users/[userId]` and associated pages

1. In `next.config.js` set output to `export` to enable [static exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

    This causes an error in dynamic routes because they must be resolved at build time
    ```
    Error: Page "/users/[userId]/page" is missing exported function "generateStaticParams()", which is required with "output: export" config.
    ```


## *The following README was auto-generated*

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
>
> ## Getting Started
>
> First, run the development server:
>
> ```bash
> npm run dev
> # or
> yarn dev
> # or
> pnpm dev
> # or
> bun dev
> ```
>
> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
>
> You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
>
> This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
>
> ## Learn More
>
> To learn more about Next.js, take a look at the following resources:
>
> - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
> - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
>
> You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
>
> ## Deploy on Vercel
>
> The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
>
> Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
> 