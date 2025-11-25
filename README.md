# Jigar Trivedi - Portfolio Website

A modern, responsive, and animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This project showcases my work as a Data Analyst and Developer.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## ✨ Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices.
- **Smooth Animations:** Engaging entrance and scroll animations using Framer Motion.
- **Interactive Elements:** Dynamic hover effects on project cards and buttons.
- **Single Page Navigation:** Smooth scrolling to different sections (About, Experience, Projects, Contact).
- **Resume Download:** Integrated button to download the professional resume.

## 🛠️ Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site.

## 📂 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with font and metadata settings
│   ├── page.tsx        # Main page assembling all sections
│   └── globals.css     # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx        # Hero section with profile and intro
│   ├── About.tsx       # About me section
│   ├── Experience.tsx  # Work experience timeline
│   ├── Projects.tsx    # Project showcase grid
│   ├── Contact.tsx     # Contact information and footer
│   └── Navbar.tsx      # Floating navigation bar
├── public/
│   ├── images/         # Project and profile images
│   └── resume.pdf      # PDF Resume file
└── ...
```

## 🎨 Customization

To update the content, simply modify the relevant component files in the `components/` directory.

- **Personal Info:** `components/Hero.tsx`
- **Bio:** `components/About.tsx`
- **Work History:** `components/Experience.tsx`
- **Projects:** `components/Projects.tsx`
- **Contact Details:** `components/Contact.tsx`

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and deploy your site.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

This project is for personal portfolio usage.
