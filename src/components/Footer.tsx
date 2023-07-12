import { GitHubLogoIcon } from '@radix-ui/react-icons'

function Footer() {
  return (
    <div className=" flex flex-col gap-2 p-6 text-center text-xs">
      <div className="flex items-center justify-center gap-3">
        <a href="">
          <GitHubLogoIcon />
        </a>
      </div>
      <p>Rust • © 2023 • Rust Blog</p>
      <p>Tailwind Nextjs Theme</p>
    </div>
  )
}

export default Footer
