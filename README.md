# English Rafzerfeld Website

## Introduction

A website for English language courses in Rafzerfeld. Built with Astro and Decap CMS for content management.

## Installation

To set up the project locally, follow these steps:

1. Install dependencies:

   ```bash
   nvm install
   npm install
   ```

1. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

- **Development**: Use `npm run dev` to start the development server.
- **Build**: Use `npm run build` to create a production build.
- **Preview**: Use `npm run preview` to preview the production build.

The application will be accessible at `http://localhost:4321`.

## CMS

To manage content, use the Decap CMS interface at `http://localhost:4321/admin`.

Note that the website reads content directly from GitHub. Any changes you make in the CMS must be pushed to the repository for them to appear on the site.

Even when running the CMS locally, all content is fetched from the remote repository.

## Docker

To run the project using Docker:

1. Build the Docker image:

   ```bash
   docker build -t english-rafzerfeld .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 4321:4321 english-rafzerfeld
   ```

The application will be accessible at `http://localhost:4321`.

## Deployment

Deployed using Dokku.

### Initial Setup Dokku

On Dokku Host:

```
dokku apps:create english-rafzerfeld
dokku ports:add english-rafzerfeld http:80:4321 https:443:4321
dokku domains:add english-rafzerfeld english-rafzerfeld.ch
dokku letsencrypt:enable english-rafzerfeld
```

[Build-time configuration variables](https://dokku.com/docs/deployment/builders/dockerfiles/#build-time-configuration-variables)

On Local Machine:

```
git remote add dokku dokku@english-rafzerfeld.ch:english-rafzerfeld
```

### Deployment

#### Automatic Deployment (GitHub Actions)

Pushing to the `main` branch automatically deploys to Dokku via GitHub Actions.

**Setup:**

1. Generate SSH key on the Dokku server:

   ```bash
   ssh-keygen -t ed25519 -f dokku_github_actions
   ```

2. Add public key to authorized_keys:

   ```bash
   cat dokku_github_actions.pub >> ~/.ssh/authorized_keys
   ```

3. Add public key to Dokku:

   ```bash
   cat dokku_github_actions.pub | sudo dokku ssh-keys:add github_actions
   dokku ssh-keys:list
   ```

4. Add private key to GitHub repository secrets as `SSH_PRIVATE_KEY`:
   - Go to repository Settings → Secrets and variables → Actions
   - Add new repository secret named `SSH_PRIVATE_KEY`
   - Paste contents of `dokku_github_actions` (private key)

#### Manual Deployment

```
git push dokku main
```

Make sure you have your ssh config set up correctly to allow access to the Dokku host. (Use IP address of server as Hostname in your SSH config.)

```
Host english-rafzerfeld.ch
    HostName <server-ip>
    User ubuntu
    IdentityFile ~/.ssh/...
```

Test:

```
ssh english-rafzerfeld.ch
```
