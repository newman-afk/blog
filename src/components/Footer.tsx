import { GitHubLogoIcon } from '@radix-ui/react-icons'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className=" flex flex-col gap-2 p-4 text-center text-sm md:p-6">
      <div className="flex items-center justify-center gap-3">
        <a
          href="https://github.com/newman-afk/blog"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubLogoIcon className=" h-6 w-6" />
        </a>
      </div>
      <p>Rust • © {currentYear} • Rust Blog</p>
      <a
        href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
        target="_blank"
        rel="noreferrer"
      >
        Tailwind Nextjs Theme
      </a>
    </footer>
  )
}

export default Footer
