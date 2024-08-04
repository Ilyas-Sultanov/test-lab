import { HeroSection } from './components/sections/Hero/Hero'
import { HowItWorksSection } from './components/sections/HowItWorks/HowItWorks'
import { ReviewsSection } from './components/sections/Reviews/Reviews'
import { QuestionsAndAnswersSection } from './components/sections/QuestionsAndAnswers/QuestionsAndAnswers'
import { CreditsSection } from './components/sections/Credits/Credits'
import { FormSection } from './components/sections/FormSection/FormSection'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <HowItWorksSection />
        <ReviewsSection />
        <QuestionsAndAnswersSection />
        <CreditsSection />
        <FormSection />
      </main>
      <Footer />
    </>
  )
}

export default App
