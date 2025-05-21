import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Heart, HeartHandshake, Lightbulb, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ModernHero } from "@/components/modern-hero"
import { SuccessShowcase } from "@/components/success-showcase"
import { ErrorBoundary } from "@/components/error-boundary"
import { AnimatedCounter } from "@/components/animated-counter"
import { GamesSection } from "@/components/educational-games/games-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <ModernHero />

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                  Empowering Women Through Support & Opportunity
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Chandra-Jai Social Foundation is committed to empowering women from economically challenged
                  communities by providing access to education, vocational training, healthcare support, and
                  opportunities for self-reliance.
                </p>
                <div className="pt-4">
                  <Button className="bg-[#002f86] hover:bg-[#002f86]/90">
                    <Link href="/about" className="flex items-center gap-2">
                      Learn More About Us <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/images/foundation-logo.png"
                  alt="Chandra-Jai Social Foundation"
                  fill
                  className="object-contain"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">Our Focus Areas</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                How We Make a Difference
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Our programs focus on creating sustainable impact through education, skill development, and healthcare
                support.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Education & Skill Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We offer financial aid for primary & secondary education and conduct vocational training programs in
                    areas like beautician courses, sewing, and other income-generating skills. These initiatives aim to
                    help women build sustainable, independent livelihoods.
                  </CardDescription>
                  <div className="mt-6">
                    <Button variant="outline" className="text-[#002f86]">
                      <Link href="/programs/education" className="flex items-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <Stethoscope className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Healthcare Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Providing financial assistance for emergency medical expenses – support women facing critical health
                    challenges—ensuring they receive the care they need, when they need it most.
                  </CardDescription>
                  <div className="mt-6">
                    <Button variant="outline" className="text-[#002f86]">
                      <Link href="/programs/healthcare" className="flex items-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Success Stories</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                Lives We've Transformed
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Meet some of the women whose lives have been changed through our programs
              </p>
            </div>
          </ScrollReveal>

          <ErrorBoundary>
            <SuccessShowcase />
          </ErrorBoundary>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm">Our Impact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Making a Difference Together</h2>
              <p className="max-w-[700px] text-white/80 md:text-xl">
                Since our founding in April 2021, we've been able to make a significant impact
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#f7931e] mb-2">
                  <AnimatedCounter end={500} duration={2} />+
                </div>
                <p className="text-white/80">Women Supported</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#f7931e] mb-2">
                  <AnimatedCounter end={200} duration={2} />+
                </div>
                <p className="text-white/80">Educational Scholarships</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#f7931e] mb-2">
                  <AnimatedCounter end={150} duration={2} />+
                </div>
                <p className="text-white/80">Skill Development Graduates</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold text-[#f7931e] mb-2">
                  <AnimatedCounter end={75} duration={2} />+
                </div>
                <p className="text-white/80">Healthcare Cases Supported</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Educational Games Section */}
      <GamesSection />

      {/* Why Support */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/images/donation-handover.png"
                  alt="Supporting women in need"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Why Support Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                  Why Your Support Matters
                </h2>
                <p className="text-gray-500 md:text-xl">Your contribution helps us:</p>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex gap-4 items-start">
                    <Lightbulb className="h-6 w-6 text-[#f7931e] mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Empower women through education and training</h3>
                      <p>Your support helps women gain the knowledge and skills they need for self-reliance.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Heart className="h-6 w-6 text-[#f7931e] mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Support healthcare needs in emergency situations</h3>
                      <p>You help provide critical medical care when women need it most.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <HeartHandshake className="h-6 w-6 text-[#f7931e] mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Create pathways to independence and dignity</h3>
                      <p>Your generosity helps women build sustainable futures for themselves and their families.</p>
                    </div>
                  </li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm text-[#002f86] font-medium">
                    💡 All donations are eligible for tax benefits under Section 80G
                  </p>
                  <p className="text-sm text-gray-500">Registration Number: AAJCC34382F22021</p>
                </div>
                <div className="pt-4">
                  <Button className="bg-[#f7931e] hover:bg-[#f7931e]/90">
                    <Link href="/donate" className="flex items-center gap-2">
                      Donate Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">Join Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Get Involved</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                There are many ways you can support our mission and make a difference
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Contribute your time and skills—there are opportunities for all levels of experience. Whether you
                    can help with teaching, event organization, or administrative support, your contribution is
                    valuable.
                  </CardDescription>
                  <div className="mt-6">
                    <Button variant="outline" className="text-[#002f86]">
                      <Link href="/get-involved" className="flex items-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Spread the Word</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Follow us on social media and share our mission to amplify our impact. Raising awareness about our
                    work helps us reach more women in need and connect with potential supporters.
                  </CardDescription>
                  <div className="mt-6">
                    <Button variant="outline" className="text-[#002f86]">
                      <Link href="/contact" className="flex items-center gap-2">
                        Connect With Us <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Our Commitment</h2>
                <p className="text-gray-500 md:text-lg">
                  Established in April 2021, Chandra-Jai Social Foundation is dedicated to empowering women through
                  assistance in primary & secondary Education, run special skill development, re-skilling programs for
                  women from economically challenged sector & funding medical expenses in special cases. Led by our
                  founder Ashwani Maheshwari and CEO Padmini Giri, we're committed to creating lasting change.
                </p>
                <div className="pt-4">
                  <Button className="bg-[#002f86] hover:bg-[#002f86]/90">
                    <Link href="/about" className="flex items-center gap-2">
                      Learn More About Us <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/images/foundation-logo.png"
                  alt="Chandra-Jai Social Foundation"
                  fill
                  className="object-contain"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
