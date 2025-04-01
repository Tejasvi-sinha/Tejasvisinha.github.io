# GitHub Actions Deployment Guide

This guide explains how to use the GitHub Actions workflow that has been set up in this repository to automatically deploy your portfolio website to GitHub Pages.

## What is GitHub Actions?

GitHub Actions is an automation tool that allows you to run workflows when certain events happen in your repository. In this case, we've set up a workflow that automatically deploys your website to GitHub Pages whenever you push changes to the main branch.

## The Workflow File

The workflow is defined in the `.github/workflows/deploy.yml` file. This file tells GitHub Actions what to do when you push changes to your repository.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: . # The folder the action should deploy.
          clean: true # Automatically remove deleted files from the deploy branch
```

## How It Works

1. When you push changes to the `main` branch, the workflow automatically starts.
2. The workflow checks out your code.
3. It then deploys your website to the `gh-pages` branch, which is where GitHub Pages looks for your website content.

## Using the Workflow

You don't need to do anything special to use this workflow. Just follow these steps:

1. Make your changes to your website files locally.
2. Commit and push those changes to the `main` branch of your GitHub repository:

```bash
git add .
git commit -m "Update my portfolio"
git push origin main
```

3. GitHub Actions will automatically run the workflow and deploy your changes to GitHub Pages.
4. You can check the status of the deployment by going to the "Actions" tab in your GitHub repository.

## Troubleshooting

If your deployment fails, you can check the logs in the "Actions" tab to see what went wrong. Common issues include:

- File paths that are incorrect
- Missing files
- Syntax errors in your HTML, CSS, or JavaScript

## Manual Deployment

If you prefer to deploy manually, you can still follow the instructions in the [GitHub Pages Deployment Guide](GITHUB_PAGES_DEPLOYMENT.md).

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)