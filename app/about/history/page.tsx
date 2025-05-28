import Link from "next/link"
import { ArrowLeft, Calendar, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Calendar className="h-16 w-16 text-[#f7931e]" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our History</h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              The journey of Chandra-Jai Social Foundation from its inception to today
            </p>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002f86]">
                <Link href="/about" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Our Journey</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                From a small initiative to a growing foundation making a difference in women's lives
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#002f86]/20"></div>

            {/* Timeline items */}
            <div className="space-y-24">
              <ScrollReveal>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-[#002f86] flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold text-[#002f86]">April 2021</h3>
                      <h4 className="text-lg font-semibold mt-2">Foundation Established</h4>
                      <p className="text-gray-500 mt-2">
                        Chandra-Jai Social Foundation was officially registered under Section 8 of the Companies Act,
                        2013, with a vision to empower women through education and skill development.
                      </p>
                    </div>
                    <div className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden">
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-[#002f86] flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-2 md:text-left md:pl-12">
                      <h3 className="text-xl font-bold text-[#002f86]">June 2021</h3>
                      <h4 className="text-lg font-semibold mt-2">First Educational Program</h4>
                      <p className="text-gray-500 mt-2">
                        Launched our first educational assistance program, providing support to 25 women for their
                        primary and secondary education needs.
                      </p>
                    </div>
                    <div className="md:order-1 relative h-[250px] md:h-[300px] rounded-xl overflow-hidden">
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-[#002f86] flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold text-[#002f86]">September 2021</h3>
                      <h4 className="text-lg font-semibold mt-2">Skill Development Initiative</h4>
                      <p className="text-gray-500 mt-2">
                        Started our first skill development program, offering beautician training to 15 women from
                        economically challenged backgrounds.
                      </p>
                    </div>
                    <div className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden">
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-[#002f86] flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-2 md:text-left md:pl-12">
                      <h3 className="text-xl font-bold text-[#002f86]">April 2022</h3>
                      <h4 className="text-lg font-semibold mt-2">80G Certification</h4>
                      <p className="text-gray-500 mt-2">
                        Received 80G certification (AAJCC4382PF20221), allowing donors to receive tax benefits for their
                        contributions to our foundation.
                      </p>
                    </div>
                    <div className="md:order-1 relative h-[250px] md:h-[300px] rounded-xl overflow-hidden">
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-[#002f86] flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="md:text-right md:pr-12">
                      <h3 className="text-xl font-bold text-[#002f86]">Present Day</h3>
                      <h4 className="text-lg font-semibold mt-2">Growing Impact</h4>
                      <p className="text-gray-500 mt-2">
                        Today, we continue to expand our programs and reach, having supported over 200 women through
                        education and skill development, 50+ marriage support cases, and 75 health support cases.
                      </p>
                    </div>
                    <div className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden">
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Annual Reports</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Transparency is one of our core values. View our annual reports to see how we've utilized resources and
                the impact we've made.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <FileText className="h-8 w-8 text-[#002f86]" />
                  <CardTitle>Annual Report 2022-23</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    Our most recent annual report detailing our activities, impact, and financial statements for the
                    fiscal year 2022-23.
                  </p>
                  <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">Download PDF</Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <FileText className="h-8 w-8 text-[#002f86]" />
                  <CardTitle>Annual Report 2021-22</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    Our annual report for the fiscal year 2021-22, highlighting our first full year of operations and
                    initial impact.
                  </p>
                  <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">Download PDF</Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  <FileText className="h-8 w-8 text-[#002f86]" />
                  <CardTitle>Impact Report</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    A special report focusing on the impact of our programs on the lives of women and their communities.
                  </p>
                  <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">Download PDF</Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Be Part of Our Future</h2>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Join us in our mission to empower women and create positive change in our communities. Your support can
              help us write the next chapter of our story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className="bg-white text-[#002f86] hover:bg-white/90">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002f86]">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
