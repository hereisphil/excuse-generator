# 🎲 Excuse Generator

A simple and fun **Excuse Generator** built with HTML, CSS, and JavaScript.  
Every time you click the **"Generate New Excuse"** button (or refresh the page), you'll get a brand new, randomly generated excuse.

Perfect for quick laughs, playful procrastination, or as a starter project for learning DOM manipulation in JavaScript.

---

## 📸 Preview

**Example Output:**

> My grandma broke the car during my lunch.

![Excuse Generator Demo](https://i.ibb.co/FLGkM3c5/excuse-generator.gif)

---

## 🚀 Features

- **Randomized Excuses** – Combines random `who`, `action`, `what`, and `when` phrases.
- **Dynamic Updates** – Generates a new excuse instantly with a button click.
- **Simple UI** – Clean, centered layout with responsive design basics.
- **Hover Effects** – Interactive styling for the excuse box and button.

---

## 🛠️ How It Works

The app uses four arrays (`who`, `action`, `what`, and `when`) to store different parts of an excuse. When the page loads or the button is clicked, a random element from each array is selected and inserted into the sentence.

**Core Logic Example (from `script.js`):**

```javascript
function updateTag(tag, array) {
  let i = Math.floor(Math.random() * array.length);
  tag.innerHTML = array[i];
}
```

---

## 📦 Installation & Usage

1. Clone the Repository

   ```bash
   git clone https://github.com/hereisphil/excuse-generator.git
   cd excuse-generator
   ```

2. Open in Browser

   - Just double-click index.html, or
   - Open with a live server extension in VS Code.

3. Generate Excuses

- Click “Generate New Excuse” or refresh the page.

---

## 🎨 Styling

- Background: Dark theme (#333) with white text.
- Excuse Box: Crimson background with hover shadow effect.
- Button: Black with subtle hover and scaling effect.

---

## 📚 Learning Outcomes

This project is great for beginners to learn:

- DOM element selection (getElementById)
- Event listeners (addEventListener)
- Array randomization (Math.random() + Math.floor())
- CSS hover effects and box shadows
- Simple, semantic HTML structure

---

## 👋 About the Author

Hi! I’m Phillip Cantu, an American digital nomad, a Full Sail University web development student, and a [4Geeks Academy Full Stack Development with AI Bootcamp](https://4geeksacademy.com/us/apply?ref=REFERRALQEZPTJCK-17696). I’m passionate about creating modern, user-friendly, and practical applications that help people learn and build faster.

You can find me here:

- **GitHub:** [hereisphil](https://github.com/hereisphil)
- **LinkedIn:** [PhillipCantu](https://www.linkedin.com/in/phillipcantu/)
- **Instagram:** [@philtheotaku](https://www.instagram.com/philtheotaku/)
