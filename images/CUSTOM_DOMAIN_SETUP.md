# Setting Up a Custom Domain for Your GitHub Pages Portfolio

## Overview

This guide will walk you through the process of setting up a custom domain (tejasvisinha.com) for your GitHub Pages portfolio website.

## Prerequisites

- Your portfolio website already deployed to GitHub Pages
- Ownership of the domain tejasvisinha.com
- Access to your domain's DNS settings

## Step-by-Step Instructions

### 1. Configure GitHub Repository

1. Go to your portfolio repository on GitHub
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. In the "Custom domain" field, enter `tejasvisinha.com`
5. Click "Save"
6. Check the box for "Enforce HTTPS" (recommended for security)

### 2. Configure DNS Settings

You'll need to configure your domain's DNS settings to point to GitHub Pages. There are two ways to do this:

#### Option 1: Using A Records (Recommended)

1. Log in to your domain registrar's website (where you purchased tejasvisinha.com)
2. Find the DNS management section
3. Create four A records pointing to GitHub Pages' IP addresses:
   - `A` record: @ → 185.199.108.153
   - `A` record: @ → 185.199.109.153
   - `A` record: @ → 185.199.110.153
   - `A` record: @ → 185.199.111.153
4. If you want to use www.tejasvisinha.com as well, add a `CNAME` record:
   - `CNAME` record: www → tejasvi-sinha.github.io

#### Option 2: Using a CNAME Record

If you prefer to use only a CNAME record (some domain providers prefer this):

1. Create a `CNAME` record pointing your domain to your GitHub Pages domain:
   - `CNAME` record: @ → tejasvi-sinha.github.io
   
   Note: Some DNS providers don't allow CNAME records for the apex domain (@). In that case, use Option 1.

### 3. Verify Your CNAME File

The CNAME file in your repository should contain only your domain name:

```
tejasvisinha.com
```

This file is already included in your repository.

### 4. Wait for DNS Propagation

DNS changes can take up to 24-48 hours to propagate across the internet. Be patient if your custom domain doesn't work immediately.

### 5. Verify the Setup

1. After DNS propagation, visit your custom domain (tejasvisinha.com)
2. Ensure your portfolio website loads correctly
3. Check that HTTPS is working (look for the lock icon in your browser)

## Troubleshooting

- **Website not loading**: DNS propagation may still be in progress. Wait 24-48 hours.
- **HTTPS not working**: It can take up to 24 hours for GitHub to provision an SSL certificate for your domain.
- **404 errors**: Ensure your repository is properly set up for GitHub Pages and that the CNAME file is in the root directory.

## Maintaining Your Custom Domain

- Your custom domain configuration will persist unless you remove the CNAME file or change the custom domain setting in your repository.
- If you transfer your domain to a different registrar, you'll need to update the DNS settings with the new provider.

## Additional Resources

- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)