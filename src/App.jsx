import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Navbar } from './component/Navbar'
import { Hero } from './component/Hero'
import { CockTail } from './component/CockTail'
import { About } from './component/About'

gsap.registerPlugin(ScrollTrigger, SplitText)
export const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CockTail />
      <About />
    </main>
  )
}
