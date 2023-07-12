function Home() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className=" md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
          Latest
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A blog created with React.js and Tailwind.css
        </p>
      </div>
      <ul></ul>
    </div>
  )
}

export default Home
