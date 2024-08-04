import { HeroSection } from './components/sections/Hero/Hero'
import { HowItWorksSection } from './components/sections/HowItWorks/HowItWorks'
import { ReviewsSection } from './components/sections/Reviews/Reviews'
import { QuestionsAndAnswersSection } from './components/sections/QuestionsAndAnswers/QuestionsAndAnswers'

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ReviewsSection />
        <QuestionsAndAnswersSection />
      </main>
    </>
  )
}

export default App
