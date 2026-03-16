import Sidebar from './views/components/Sidebar'
import Home    from './views/pages/Home'
import Footer  from './views/components/Footer'

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <div className="max-w-screen-xl mx-auto lg:flex">
        {/* Left: sticky sidebar — ~45% on desktop */}
        <div className="lg:w-[45%] lg:shrink-0">
          <Sidebar />
        </div>

        {/* Right: scrollable content — ~55% on desktop */}
        <div className="lg:w-[55%]">
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  )
}
