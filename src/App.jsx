import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)
export const App = () => {
  return <div className='text-purple-700 flex-center'>App</div>
}
