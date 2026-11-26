import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      aria-label="Toggle theme"
      className="rounded-full border border-amber-500/40 px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-amber-400 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-200"
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeToggle