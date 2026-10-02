import './App.css'
import Collection from './ui/Collection'
import bgLarge from "./assets/coffees/bg-cafe-lg.jpg"
import bgSmall from "./assets/coffees/bg-cafe-sm.jpg"
import bgCf from "./assets/coffees/bg-cafe.jpg"

function App() {
  return (
    <div className="bg-[#111315] min-h-screen relative">
      <picture className='w-full h-[300px] block'>
        <source media="(min-width: 1024px)" srcSet={bgLarge} />
        <source media="(min-width: 640px)" srcSet={bgCf} />
        <img src={bgSmall} alt="background-cafe" className="w-full h-[300px] object-cover" />
      </picture>
      <div className="relative z-10 -mt-36 flex justify-center pb-16 px-4">
        <Collection />
      </div>
    </div>
  )
}

export default App
