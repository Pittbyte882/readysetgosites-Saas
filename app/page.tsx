import { ThemeProvider } from "@/lib/theme-context"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Integrations } from "@/components/integrations"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Demo } from "@/components/demo"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Integrations />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
        <Demo />
        <Contact />
        <Footer />
      </main>
      <ThemeSwitcher />
    </ThemeProvider>
  )
}