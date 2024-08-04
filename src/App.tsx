import { HeroSection } from './components/sections/Hero/Hero'
import { HowItWorksSection } from './components/sections/HowItWorks/HowItWorks'
import { ReviewsSection } from './components/sections/Reviews/Reviews'

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ReviewsSection />
      </main>
    </>
  )
}

export default App
