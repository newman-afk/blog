import { Input } from '@/components/ui/input'

function Blog() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
          All Posts
        </h1>

        <label htmlFor="search articles" className="sr-only">
          Search articles
        </label>
        <Input
          type="text"
          id="search articles"
          placeholder="Search articles"
          className=" max-w-lg"
        />
      </div>
      <ul></ul>
    </div>
  )
}

export default Blog
