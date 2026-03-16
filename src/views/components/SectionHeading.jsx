export default function SectionHeading({ title }) {
  return (
    <div className="sticky top-0 z-10 -mx-6 mb-10 px-6 py-4 backdrop-blur bg-bg/90 lg:relative lg:top-auto lg:mx-0 lg:bg-transparent lg:backdrop-blur-none lg:px-0 lg:py-0 lg:mb-12">
      <h2 className="text-xs font-bold tracking-widest uppercase text-primary lg:sr-only">
        {title}
      </h2>
    </div>
  )
}
