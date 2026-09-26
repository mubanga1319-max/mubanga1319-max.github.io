# Setup Guide: Putting Your Site Online

This folder is a complete website. GitHub Pages hosts it for free and builds it automatically. You do not need to install anything on your computer.

---

## Part 1: Put the site online (about 20 minutes)

### Step 1: Create a GitHub account
1. Go to **github.com** and click **Sign up**.
2. Choose your username carefully. It becomes part of your free address. For example, the username `mubangamwansa` gives **mubangamwansa.github.io**.
3. Verify your email address.

### Step 2: Create the repository (the site's folder on GitHub)
1. Click the **+** at the top right, then **New repository**.
2. For **Repository name**, type exactly: `YOURUSERNAME.github.io` (replace YOURUSERNAME with your GitHub username).
3. Choose **Public**. Free GitHub Pages sites must be public.
4. Click **Create repository**.

### Step 3: Upload the files
1. Unzip the site folder on your computer.
2. On your new repository page, click **uploading an existing file** (or **Add file → Upload files**).
3. Open the unzipped folder and select **everything inside it**: the folders `_layouts`, `_posts` and `assets`, and all the files. Drag them into the upload box. Use Chrome or Edge, which upload folders correctly.
4. Click **Commit changes**.

Check that you can see the `_layouts`, `_posts` and `assets` folders in the repository. If any folder is missing, upload it again.

### Step 4: Switch on GitHub Pages
1. In the repository, click **Settings**, then **Pages** in the left menu.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Set **Branch** to **main** and the folder to **/ (root)**, then click **Save**.
4. Wait two to five minutes. Your site will appear at **https://YOURUSERNAME.github.io**.

---

## Part 2: Add a new blog post

1. In the repository, open the `_posts` folder.
2. Click **Add file → Create new file**.
3. Name the file with the date and a short title, joined by hyphens, ending in `.md`. Example:
   `2026-10-03-what-is-a-totem-really-saying.md`
4. Paste this at the top, then write your post underneath it:

```
---
layout: post
title: "What is a totem really saying?"
summary: "One sentence that appears under the title and on the post card."
tag: Kinship
date: 2026-10-03 09:00:00 +0200
---
Your first paragraph goes here.

## A section heading

More paragraphs. Use *asterisks* for italics and **double asterisks** for bold.

> A line starting with > becomes a highlighted quotation.
```

5. Click **Commit changes**. The post appears on the site within a few minutes.

Notes:
- A post dated in the future will not appear until that date.
- Tags used so far: Kinship, Governance, Language, Ecology, Research. You can use any word.

---

## Part 3: Edit pages

- **About page:** edit `about.html`. Replace "Details to be added" with your public contact details, such as an email address or LinkedIn link.
- **Research page:** edit `research.html` to add contact details for contributors.
- **The Series:** edit `series.html` to update each book's status.
- **Site name and description:** edit `_config.yml`.

To edit a file on GitHub, open it and click the pencil icon, make your changes, then click **Commit changes**.

---

## Part 4: Move to your own domain later

When you buy a domain (for example `mubangamwansa.com`):

1. In the repository, go to **Settings → Pages → Custom domain**, type your domain and click **Save**. GitHub adds a file called `CNAME` for you.
2. Log in to the company where you bought the domain and open its **DNS settings**. Add:
   - Four **A** records for `@` pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One **CNAME** record for `www` pointing to `YOURUSERNAME.github.io`
3. Wait up to 24 hours for the change to spread, then tick **Enforce HTTPS** in **Settings → Pages**.
4. In `_config.yml`, set `url: "https://yourdomain.com"`.

Your posts, pages and links all move with you. Nothing needs to be rebuilt. Check GitHub's own help pages on custom domains if anything has changed since this guide was written.

---

## Keep your work safe

- Keep a copy of this folder on your computer and in cloud storage.
- Turn on two-factor authentication in GitHub (**Settings → Password and authentication**).
- Publish public essays only. Keep unpublished journal papers and field notes off the site until they are accepted.
