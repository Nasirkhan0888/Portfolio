import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or default to dark mode
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme')
      return saved ? saved === 'dark' : true
    }
    return true
  })

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
    
    // Add/remove dark class for Tailwind
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}