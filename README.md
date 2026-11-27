# Personal Portfolio Website

A responsive personal portfolio website presenting Kamal Pratap Singh's profile, technical skills, selected project work, education, professional experience, and contact links.

> **Development note:** This portfolio was developed with substantial assistance from **ChatGPT**. ChatGPT helped plan the page structure, write and refine the HTML and CSS, organize the skills and education sections, and improve the visual presentation. The portfolio owner supplied the personal information and project context, reviewed the changes, and is responsible for checking and maintaining the published content.

---

## 1. Project Overview

The goal of this project is to create a professional online portfolio with a modern dark interface and purple/blue accent colors. The page is organized into clear sections so visitors can quickly understand the portfolio owner's background, technical interests, project experience, and ways to make contact.

The current HTML includes:

- A hero section with a profile image, name, professional tagline, and profile links.
- An About Me section describing the owner's software-engineering interests.
- A Technical Skills section with eight skill categories.
- A Projects section featuring a File Manager Application.
- An Education section listing B.Sc. and B.Tech. studies.
- A Professional Experience section listing a Full Stack Developer Internship at Datheon.
- A Contact section with email and professional profile links.

## 2. Features and Design

### Visual design

- Dark background with purple and blue accent colors.
- Gradient styling in the hero section.
- Profile image displayed in a circular frame.
- Card-based layouts for skills, projects, education, and experience.
- Hover transitions on interactive cards and links.
- Consistent section spacing and typography.

### Responsive layout

The CSS includes responsive breakpoints to adapt the layout to different screen widths, including:

- Desktop layouts.
- Tablet layouts.
- Mobile layouts.

The stylesheet also includes `prefers-reduced-motion` rules to reduce selected animations for visitors who request reduced motion in their operating-system settings.

### Portfolio navigation

The navigation menu links to the page's main sections:

`Home`, `About`, `Skills`, `Projects`, `Education`, `Experience`, and `Contact`.

### Technical skills displayed

The current skills section groups technologies and concepts into these categories:

1. Frontend Development
2. Backend Development
3. Database Engineering
4. System Design & Architecture
5. Programming & Computer Science
6. Networking & Web Protocols
7. Software Engineering & Quality
8. Development Tools & Technologies

Only retain skills that the portfolio owner can accurately explain and demonstrate.

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic content |
| CSS3 | Layout, colors, cards, responsive styling, and transitions |
| JavaScript | Referenced by the HTML for interactive behavior; implementation should be included in `script.js` |

The current HTML references `style.css` and `script.js`. The CSS file contains the page's visual styling. The JavaScript source was not included with the files used to prepare this README, so specific JavaScript behavior is not documented here.

## 4. Project Structure

Use the following structure when organizing the project locally:

```text
portfolio/
├── index.html
├── style.css
├── script.js
└── images/
    ├── logo.png
    └── singh.png
```

### File descriptions

- `index.html` — Main portfolio page and its content sections.
- `style.css` — Global styles, hero layout, navigation, cards, responsive rules, and visual effects.
- `script.js` — JavaScript file referenced by the HTML. Include the actual project script here if the page uses particle or typing effects.
- `images/logo.png` — Logo image used in the navigation.
- `images/singh.png` — Profile image used in the hero section.

Keep the filenames and folder paths consistent with the references in `index.html`, or update the HTML paths if you choose different names.

## 5. Run the Project Locally

This is a front-end website. To preview it locally:

1. Place `index.html`, `style.css`, `script.js`, and the `images` folder in the same project directory as shown above.
2. Confirm that the filenames in the HTML match the actual files.
3. Open the project folder in Visual Studio Code.
4. Start the page using a local development server, such as the VS Code Live Server extension.
5. Open the local URL shown by the development server in your browser.

You can also open `index.html` directly in a browser for a basic preview. A local server is recommended when testing JavaScript and asset loading.

## 6. Personalization Checklist

Before publishing the portfolio, review and replace the remaining placeholders:

- `YOUR_LINKEDIN_URL` — Add the correct LinkedIn profile URL.
- `YOUR_GITHUB_URL` — Add the correct GitHub profile URL.
- `YOUR_LEETCODE_URL` — Add the correct LeetCode profile URL.
- `YOUR_EMAIL` — Add the email address intended for public contact.
- `href="#"` — Replace placeholder project links with the actual GitHub repository and live demo URLs, or remove those links until they are available.

Also verify:

- The profile image and logo load correctly.
- All education dates, institution names, and descriptions are accurate.
- Internship dates, designation, and organization details are accurate.
- Every listed skill reflects the owner's current knowledge.
- The website works at desktop, tablet, and mobile widths.
- All navigation and external links work as expected.

## 7. Content and Accuracy

This portfolio is a presentation of the owner's background and work. It should not imply professional experience, qualifications, technical proficiency, project deployment, or certifications that cannot be verified.

The current page content includes the following education entries:

- **Bachelor of Science (B.Sc.)** — Physics & Mathematics, Chhatrapati Shahuji Maharaj Kanpur University, April 2019 – April 2022.
- **Bachelor of Technology (B.Tech.)** — Amity University, Noida, 2024 – 2027.

The current professional experience entry is:

- **Full Stack Developer Intern** — Datheon, November 2026 – Present.


## 8. AI-Assisted Development Acknowledgment

This website was created through a collaborative, AI-assisted workflow. **ChatGPT assisted with the portfolio's HTML and CSS implementation, section organization, responsive styling, and iterative refinements based on the owner's feedback and supplied materials.**

The personal profile information, education details, experience details, project information, links, and final published content should be reviewed and approved by the portfolio owner.

This acknowledgment describes the development assistance used; it does not claim that ChatGPT independently verified the personal information or tested a live deployment.

---

## Status

...........................?
