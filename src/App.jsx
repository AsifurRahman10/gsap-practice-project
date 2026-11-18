import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Navbar } from './component/Navbar'
import { Hero } from './component/Hero'

gsap.registerPlugin(ScrollTrigger, SplitText)
export const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-dvh' />
    </main>
  )
}
