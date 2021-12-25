import { useTheme } from 'next-themes'


export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="h-screen w-screen">
        Current Theme is {theme}
        <br/>
        <button
          className="p-3 h-12 w-12 order-2 md:order-3"
          type="button"
          aria-label="Toggle dark mode"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Button
        </button>
      </div>
    </>
  )
}
