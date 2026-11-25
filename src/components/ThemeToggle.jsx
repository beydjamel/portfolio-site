import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="fixed right-4 top-4 z-50 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-medium text-slate-800 backdrop-blur transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;
