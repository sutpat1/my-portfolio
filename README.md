# Personal Portfolio Website

A responsive, SEO-friendly portfolio website built using **React**, **Next.js**, **TypeScript**, and **Tailwind CSS** to showcase personal projects, skills, and contact information.

## 🌐 Live Demo

[Visit the Portfolio](https://sharvutpat.com/)

---

## 🚀 Features

- ⚡ **Next.js Framework**: Optimized for performance with built-in server-side rendering and routing.
- 🎨 **Tailwind CSS**: Utility-first CSS for consistent, clean, and responsive UI design.
- ✉️ **Contact Form**: Secure form powered by the [Resend](https://resend.com/) email API.
- 🔐 **API Security**: Uses environment variables to safely store API keys and follow best practices.
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
- 🔍 **SEO Optimized**: Meta tags and structure designed for better search engine visibility.

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Framework**: Next.js
- **Email Service**: Resend Email API

---

## 📁 Folder Structure 
<pre lang="markdown">src/
  ├── app/
  │   ├── api/
  │   │   └── send/
  │   │       └── route.tsx       # Email API endpoint
  │   ├── components/             # UI components
  │   │   ├── AboutSection.tsx    # About section with tabs
  │   │   ├── EmailSection.tsx    # Contact form
  │   │   ├── HeroSection.tsx     # Hero section with animations
  │   │   ├── NavBar.tsx          # Navigation
  │   │   ├── ProjectsSection.tsx # Projects showcase
  │   │   └── ...                 # Other components
  │   ├── globals.css             # Global styles
  │   ├── layout.tsx               # Root layout
  │   └── page.tsx                 # Home page
  └── ...
  public/
  ├── images/                     # Image assets
  └── documents/                  # PDFs and other documents</pre>
 ---
 
 ## 🚀 Getting Started
 
 **Prerequisites**
 
 * Node.js (v14.0.0 or later)
 * npm or yarn
 
 ## Installation
 
 
 1. Clone the repository
 
    ```bash
    git clone https://github.com/sutpat1/my-portfolio.git
    cd my-portfolio
 
 2. Install dependencies
 
    ```bash
    npm install
    ```
 
    **or**
 
    ```bash
    yarn install
    ```
 
 3. Set up environment variables
 Create a .env.local file in the root directory and add:
 
    ```bash
    RESEND_API_KEY=your_resend_api_key
    FROM_EMAIL=your_email@example.com
    ```
 
 4. Run the development server
 
    ```bash
    npm run dev
    ```
 
    **or**
 
    ```bash
    yarn dev
    ```
 
 5. Open http://localhost:3000 with your browser to see the result.
 
 ---
 
 ## 📱 Features Breakdown
 
 **Dynamic Navigation**
 
 * Smooth scrolling to sections
 * Mobile-responsive menu
 * Fixed navigation bar
 
 **Hero Section**
 
 * Type animation for dynamic text
 * Download CV button
 * Contact button
 * Animated entrance effects
 
 **About Section**
 
 * Tabbed interface for Skills, Education, and Certifications
 * Clean, bordered container design
 * Responsive image and text layout
 
 **Projects Section**
 
 * Filterable project categories
 * Project cards with hover effects
 * GitHub and live preview links
 * Animated entrance of cards when scrolling
 
 **Contact Section**
 
 * Functional contact form
 * Email validation
 * Success notification
 * Social media links
 
 ---
 
 ## 🔧 Customization
 
 To use this portfolio template for your own projects:
 
 * Update personal information in components
 * Replace images in the /public/images/ directory
 * Update project data in ProjectsSection.jsx
 * Modify the skills and other information in AboutSection.jsx
 * Set up your own Resend API account and update environment variables
 
 ---
 
 ## 📄 License
 
 This project is open source and available under the MIT License.
 
 ---
 
 ## 🤝 Acknowledgements
 
 Next.js team for the amazing framework
 Tailwind CSS for the utility-first CSS
 Resend for the email API service
