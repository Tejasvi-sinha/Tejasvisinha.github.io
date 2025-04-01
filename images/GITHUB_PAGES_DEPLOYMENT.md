# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

- A GitHub account (which you already have: https://github.com/Tejasvi-sinha)
- Git installed on your computer

## Step 1: Create a New Repository

1. Log in to your GitHub account
2. Click on the '+' icon in the top right corner and select 'New repository'
3. Name your repository: `portfolio` (or any name you prefer)
4. Make sure it's set to 'Public'
5. Click 'Create repository'

## Step 2: Prepare Your Files

Your portfolio files are already organized in this folder. The key files are:

- `index.html` - The main entry point for your website
- `Tejasvi Sinha Portfolio.html` - Your portfolio content
- `Tejasvi Sinha Portfolio_files/` - Directory containing CSS, JS, and other assets
- Various image files (jpg, png, webp)
- `.nojekyll` - Ensures GitHub Pages doesn't process your site with Jekyll
- `CNAME` - Contains your custom domain (tejasvisinha.com)

## Step 3: Push Your Files to GitHub

```bash
# Navigate to your portfolio directory
cd "path/to/your/portfolio/folder"

# Initialize a new Git repository
git init

# Add all files to the repository
git add .

# Commit the files
git commit -m "Initial commit of portfolio website"

# Add your GitHub repository as the remote origin
git remote add origin https://github.com/Tejasvi-sinha/portfolio.git

# Push the files to GitHub
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on 'Settings'
3. Scroll down to the 'GitHub Pages' section
4. Under 'Source', select 'main' branch
5. Click 'Save'

## Step 5: Access Your Website

Your website will be available at:
- https://tejasvi-sinha.github.io/portfolio/

If you've set up a custom domain (as indicated in your CNAME file):
- http://tejasvisinha.com

## Step 6: Custom Domain Setup (Optional)

If you want to use your custom domain (tejasvisinha.com):

1. In your repository settings, under GitHub Pages, enter your custom domain
2. Update your domain's DNS settings to point to GitHub Pages:
   - Create an A record pointing to the following GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or create a CNAME record pointing to `tejasvi-sinha.github.io`

## Troubleshooting

- If your site doesn't appear, check that the repository is public
- Ensure your file paths are relative and not absolute
- Check that your index.html file is in the root directory
- Verify that your custom domain DNS settings are correct

## Maintaining Your Site

To update your site in the future:

```bash
# Make your changes locally
# Then commit and push them
git add .
git commit -m "Update portfolio with new content"
git push
```

GitHub Pages will automatically rebuild your site with the new changes.