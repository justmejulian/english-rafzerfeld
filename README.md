# English Rafzerfeld Website

This repository contains the source code for the English Rafzerfeld website.

The website is built using [Astro](https://astro.build).

It also uses [Decap](https://decapcms.org/) for content management.

## Development

1. Install dependencies:

   ```sh
   nvm install
   npm install
   ```

1. Start the development server:

   ```sh
   npm run dev
   ```

   The website will be available at `http://localhost:4321`.

## CMS

To manage content, use the Decap CMS interface at `http://localhost:4321/admin`.

Note that the website reads content directly from GitHub. Any changes you make in the CMS must be pushed to the repository for them to appear on the site.

Even when running the CMS locally, all content is fetched from the remote repository.


