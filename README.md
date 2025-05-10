# SoftSell Solutions - Software Resale Marketing

A modern, responsive React + Vite web app for buying and selling unused software licenses.  
Includes dark/light mode toggle, animated navigation, and an AI-powered chat widget.

---

## 🚀 Getting Started

### 1. **Clone the repository**
```sh
git clone <your-repo-url>
cd software-resale-marketing
```

### 2. **Install dependencies**
```sh
npm install
```

### 3. **Start the development server**
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Project Structure

```
src/
  components/
    Header.jsx
    Footer.jsx
    ChatWidget.jsx
    ThemeToggle.jsx
    ...
  styles/
    global.css
  App.jsx
  main.jsx
index.html
```

---

## 🌗 Dark/Light Mode

- Toggle button is fixed on the right side of the page.
- Clicking it switches the entire site between dark and light mode.
- Uses Tailwind CSS `darkMode: 'class'` strategy.

---

## 💬 AI Chat Widget

- Click the chat icon in the bottom-right to open the chat.
- Ask questions like:
  - "How do I sell my license?"
  - "How long does it take to get paid?"
  - "Is my data secure?"
- If the question is not recognized, a fallback response and "Contact us" link are shown.
- User messages appear in yellow, bot responses in green.
- The chat widget is always visible and styled for light mode.

---

## ✨ Features

- Responsive layout (mobile & desktop)
- Modern UI with Tailwind CSS
- Animated navigation and sections (Framer Motion)
- SEO meta tags in `index.html`
- Accessible, intuitive chat UX

---

## 📝 Customization

- **Logo:** Update the logo in `Header.jsx` as needed.
- **Meta tags:** Edit `index.html` for SEO and Open Graph info.
- **Chat Q&A:** Edit `EXAMPLES` in `ChatWidget.jsx` to add more hardcoded answers.

---

## 📦 Build for Production

```sh
npm run build
```

---

## ❓ Troubleshooting

- **Blank screen:**  
  - Check browser console for errors.
  - Ensure all imports/exports are correct.
  - Make sure `main.jsx` renders `<App />` directly.

- **Dark mode not working:**  
  - Ensure `tailwind.config.js` has `darkMode: 'class'`.
  - Use `dark:` classes in your components.

---

## 📄 License

MIT

---