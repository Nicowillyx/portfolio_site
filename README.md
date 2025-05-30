# Abiodun Ajibola Williams | Frontend Portfolio

🔗 **Live Site:** [nicowillyx.github.io/portfolio_site](https://nicowillyx.github.io/portfolio_site)

This is my personal portfolio website built with **HTML**, **CSS**, and **JavaScript**.  
It showcases my frontend projects and development skills.

---

## 🔗 Live Preview

[Click here to view my portfolio](https://nicowillyx.github.io/portfolio_site/)

---

## 📁 Project Structure

```
portfolio/
│
├── index.html               # Main homepage
├── style.css                # Global styling
├── script.js                # JavaScript for interaction
├── Projects/
│   ├── tip-calculator/
│   │   ├── tip-calculator.html
│   │   ├── tip-calculator.css
│   │   └── tip-calculator.js
│   └── todo-list/
│       ├── todo.html
│       ├── todo.css
│       └── todo.js
├── images/                  # Profile picture & hero image
└── README.md                # Project overview (this file)
```

---

## 💡 Features

- Responsive navigation with a custom hamburger toggle (`≡ <`)
- Nice and catchy hero section 
- Project previews (Tip Calculator & To-Do List)
- Contact form with validation and feedback
- Smooth scrolling and mobile-first design

---

## 🛠️ Built With

- HTML5  
- CSS3 (Flexbox, Media Queries)  
- JavaScript (DOM, Form Validation)

---

## ⚙️ Setup Instructions

To run locally:
1. Clone this repo
2. Open `index.html` in your browser
3. Explore the site and projects

---

## ⚠️ Challenges Faced & Solutions

### 1. Hero Section Not Filling the Screen
- Tried `100vh` and `100vw`, adjusted margins and padding, verified global reset.
- Discovered spacing was affected by parent constraints or background rendering.
- Final decision: left it as-is after testing multiple image variations.

### 2. Navbar Responsiveness on Mobile
- Initially stacked vertically and took too much height on small screens.
- Implemented hamburger toggle with `JavaScript`, but structure was off.
- Solved by creating a toggle system that switched icons and collapsed the menu cleanly.

### 3. Hamburger Icon Design
- Wanted a custom hamburger that animates to an x 
- Settled on the  icon animating to one like this (`≡ <`) inspo from a website i saw.

### 4. Live Form Validation
- Needed simple JavaScript validation without backend.
- Added input checks and success/error message feedback in real time.

### 5. README.md Formatting & Expectations
- Interpreting grading criteria and fitting them into a structured `README.md`.
- Refined markdown formatting and included all expected documentation.


---

## 📬 Contact

- **Email**: ajibolaabiodun063@gmail.com  
- **GitHub**: [@Nicowillyx](https://github.com/Nicowillyx)

---

## 📝 License

This project is open for educational or portfolio use.