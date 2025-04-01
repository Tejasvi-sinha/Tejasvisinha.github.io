# Setting Up Your Portfolio on GitHub Pages

## Overview

This guide will walk you through the process of deploying your portfolio website to GitHub Pages, making it accessible online at `https://tejasvi-sinha.github.io/portfolio/` or at your custom domain `tejasvisinha.com`.

## Step-by-Step Instructions

### 1. Create a New Repository on GitHub

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click the '+' icon in the top-right corner and select 'New repository'
3. Name your repository: `portfolio`
4. Make it public
5. Click 'Create repository'

### 2. Prepare Your Local Files

Your portfolio files are already well-organized. Make sure you have:

- All HTML files (including `index.html` and `Tejasvi Sinha Portfolio.html`)
- All CSS and JavaScript files in the `Tejasvi Sinha Portfolio_files` directory
- All image files
- The `.nojekyll` file (prevents GitHub from processing your site with Jekyll)
- The `CNAME` file (for your custom domain)

### 3. Initialize Git and Push to GitHub

Open a command prompt or terminal and run the following commands:

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

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on 'Settings'
3. Scroll down to the 'Pages' section
4. Under 'Source', select 'main' branch
5. Click 'Save'

### 5. Set Up Custom Domain (Optional)

If you want to use your custom domain (tejasvisinha.com):

1. In your repository settings, under GitHub Pages, enter your custom domain
2. Update your domain's DNS settings to point to GitHub Pages:
   - Create an A record pointing to the following GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or create a CNAME record pointing to `tejasvi-sinha.github.io`

### 6. Verify Deployment

Your website should now be available at:
- https://tejasvi-sinha.github.io/portfolio/

Or if you've set up a custom domain:
- http://tejasvisinha.com

## Troubleshooting

- If your site doesn't appear, check that the repository is public
- Ensure your file paths are relative and not absolute
- Check that your index.html file is in the root directory
- Verify that your custom domain DNS settings are correct

## Updating Your Site

To update your site in the future:

```bash
# Make your changes locally
# Then commit and push them
git add .
git commit -m "Update portfolio with new content"
git push
```

GitHub Pages will automatically rebuild your site with the new changes.