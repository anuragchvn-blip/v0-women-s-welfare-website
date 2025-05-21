import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Stethoscope } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Programs</h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Discover how we're empowering women through education, skill development, and healthcare support
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Our Focus Areas</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                How We Make a Difference
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Our programs focus on creating sustainable impact through education, skill development, and healthcare
                support
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-10 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <Card className="h-full">
                <div className="relative h-[250px] w-full">
                  <Image
                    src="/placeholder.svg?height=250&width=500"
                    alt="Education & Skill Development"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Education & Skill Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    We offer financial aid for primary & secondary education and conduct vocational training programs in
                    areas like beautician courses, sewing, and other income-generating skills. These initiatives aim to
                    help women build sustainable, independent livelihoods.
                  </CardDescription>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#002f86] mt-2"></div>
                      <p className="text-sm text-gray-500">
                        Educational scholarships for primary and secondary education
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#002f86] mt-2"></div>
                      <p className="text-sm text-gray-500">
                        Vocational training in beautician courses, sewing, and other skills
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#002f86] mt-2"></div>
                      <p className="text-sm text-gray-500">Computer literacy and digital skills training</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#002f86] mt-2"></div>
                      <p className="text-sm text-gray-500">Entrepreneurship and small business development support</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">
                      <Link href="/programs/education" className="flex items-center justify-center gap-2 w-full">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <div className="relative h-[250px] w-full">
                  <Image
                    src="/placeholder.svg?height=250&width=500"
                    alt="Healthcare Support"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <Stethoscope className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Healthcare Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    Providing financial assistance for emergency medical expenses – support women facing critical health
                    challenges—ensuring they receive the care they need, when they need it most.
                  </CardDescription>
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#002f86] mt-2"></div>
                      <p className="text-sm text-gray-500">Financial assistance for emergency medical treatments</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#002f86] mt-2"></div>
                      <p className="text-sm text-gray-500">Support for critical surgeries and hospital stays</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#002f86] mt-2"></div>
                      <p className="text-sm text-gray-500">Medication assistance for chronic conditions</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-[#002f86] mt-2"></div>
                      <p className="text-sm text-gray-500">Health check-ups and preventive care services</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">
                      <Link href="/programs/healthcare" className="flex items-center justify-center gap-2 w-full">
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

      {/* Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">Our Impact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Making a Difference</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                See how our programs have positively impacted the lives of women in our communities
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-[#002f86]">500+</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Women supported through our various programs since our founding in April 2021
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-[#002f86]">200+</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Educational scholarships provided to women for primary and secondary education
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-[#002f86]">75+</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Women received critical healthcare support during medical emergencies
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Voices of Empowerment</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Hear from the women whose lives have been transformed through our programs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#f7931e"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-500 italic mb-4">
                    "The education support I received changed my life. I was able to complete my schooling and now I'm
                    pursuing higher education. The foundation believed in me when I didn't believe in myself."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Testimonial"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Anjali</p>
                      <p className="text-sm text-gray-500">Education Program Beneficiary</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#f7931e"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-500 italic mb-4">
                    "The sewing skills I learned through the foundation's program have allowed me to start my own small
                    business. I can now support my family and give my children the education they deserve."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Testimonial"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Rekha</p>
                      <p className="text-sm text-gray-500">Skill Development Program Beneficiary</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#f7931e"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-gray-500 italic mb-4">
                    "When I needed emergency surgery, I had nowhere to turn. The foundation's healthcare support program
                    covered my medical expenses and helped me through recovery. I don't know what I would have done
                    without their help."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Testimonial"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Meena</p>
                      <p className="text-sm text-gray-500">Healthcare Program Beneficiary</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Support Our Programs</h2>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Your support can help us expand our programs and reach more women in need
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
