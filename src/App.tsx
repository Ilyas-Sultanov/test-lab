import { HeroSection } from './components/sections/Hero/Hero'
import { HowItWorksSection } from './components/sections/HowItWorks/HowItWorks'
import { ReviewsSection } from './components/sections/Reviews/Reviews'
import { QuestionsAndAnswersSection } from './components/sections/QuestionsAndAnswers/QuestionsAndAnswers'
import { CreditsSection } from './components/sections/Credits/Credits'

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ReviewsSection />
        <QuestionsAndAnswersSection />
        <CreditsSection />
      </main>
    </>
  )
}

export default App
