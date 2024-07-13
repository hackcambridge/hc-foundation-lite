# Hack Cambridge Foundation Website Lite

This project is the testing framework for the Hack Cambridge Foundation master website.\
This website may be used to test whether future websites are compatible with the existing setup.\
Docker images can be created for the future website setup, and pushed into the Hack Cambridge account.\
These public docker images can then be pulled into this Docker container for testing.\
Please verify whether your images are working properly here, before deploying the container.

## Links to annual hackathons

* Hack Cambridge 2016 - First
* Hack Cambridge 2017 - Recurse
* Hack Cambridge 2018 - Ternary
* Hack Cambridge 2019 - 4D
* Hack Cambridge 2020 - 101
* Hack Cambridge 2021 - Hex
* Hack Cambridge 2022 - Atlas
* Hack Cambridge 2023 - Spyder

This is a template for creating applications using Next.js 14 (pages directory) and NextUI (v2).

[Try it on CodeSandbox](https://githubbox.com/nextui-org/next-pages-template)

>Note: Since Next.js 14, the pages router is recommend migrating to the [new App Router](https://nextjs.org/docs/app) to leverage React's latest features
>
>Read more: [Pages Router](https://nextjs.org/docs/pages)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-pages-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-pages-template/blob/main/LICENSE).
