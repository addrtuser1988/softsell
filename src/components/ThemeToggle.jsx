import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      className="fixed top-1/2 right-4 z-[9999] bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full p-3 shadow-lg transition"
      style={{ transform: "translateY(-50%)" }}
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;