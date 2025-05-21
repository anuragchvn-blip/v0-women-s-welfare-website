import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Meet the dedicated individuals who work tirelessly to fulfill our mission of empowering women
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

      {/* Leadership Team */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Leadership Team</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Our leadership team brings diverse expertise and a shared commitment to our mission
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card className="overflow-hidden">
                <div className="relative h-[300px] w-full">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Founder" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Founder & Executive Director</CardTitle>
                  <CardDescription>Leading our mission since 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    With over 15 years of experience in social work and community development, our founder brings
                    vision, dedication, and strategic direction to our organization. Their passion for women's
                    empowerment has been the driving force behind our foundation's growth and impact.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center gap-4 border-t p-4">
                  <Link href="#" className="text-gray-400 hover:text-[#002f86]">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-[#002f86]">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </CardFooter>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="overflow-hidden">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Program Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Program Director</CardTitle>
                  <CardDescription>Overseeing our initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our Program Director has extensive experience in designing and implementing educational and skill
                    development programs. They ensure that our initiatives effectively address the needs of the women we
                    serve and create meaningful, lasting impact in their lives.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center gap-4 border-t p-4">
                  <Link href="#" className="text-gray-400 hover:text-[#002f86]">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-[#002f86]">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </CardFooter>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="overflow-hidden">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Development Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Development Director</CardTitle>
                  <CardDescription>Building partnerships and resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our Development Director leads fundraising and partnership initiatives, building relationships that
                    support our mission and expand our impact. With a background in nonprofit development, they work to
                    ensure our foundation has the resources needed to serve our community effectively.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center gap-4 border-t p-4">
                  <Link href="#" className="text-gray-400 hover:text-[#002f86]">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-[#002f86]">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </CardFooter>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Program Staff */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Program Staff</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Our dedicated program staff work directly with the women we serve, providing support, guidance, and
                expertise
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal delay={0.1}>
              <Card className="overflow-hidden">
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Education Coordinator"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Education Coordinator</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500">
                    Oversees our educational assistance programs, ensuring women have access to quality education
                    opportunities.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="overflow-hidden">
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Skills Training Instructor"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Skills Training Instructor</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500">
                    Leads our beautician and sewing training programs, teaching practical skills for employment and
                    entrepreneurship.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="overflow-hidden">
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Health Support Coordinator"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Health Support Coordinator</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500">
                    Manages our health assistance program, helping women access necessary medical care and support.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="overflow-hidden">
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Community Outreach Specialist"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Community Outreach Specialist</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500">
                    Builds relationships within the community, identifying needs and connecting women with our programs.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Board of Directors</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Our board provides governance, oversight, and strategic guidance to our foundation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Board Chairperson</CardTitle>
                  <CardDescription>Governance & Leadership</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    With extensive experience in nonprofit governance, our Board Chairperson provides leadership and
                    strategic direction to ensure our foundation fulfills its mission effectively and ethically.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Treasurer</CardTitle>
                  <CardDescription>Financial Oversight</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our Treasurer brings financial expertise to the board, ensuring proper financial management,
                    transparency, and accountability in all our operations and programs.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle>Secretary</CardTitle>
                  <CardDescription>Documentation & Compliance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    The Board Secretary maintains our official records, ensures compliance with legal requirements, and
                    supports effective communication among board members and stakeholders.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Our Volunteers</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                We are grateful for the dedicated volunteers who contribute their time, skills, and passion to our cause
              </p>
            </div>
          </ScrollReveal>

          <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl mb-8">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Volunteer Group Photo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-white">
              <h3 className="text-xl font-bold">Volunteer Team</h3>
              <p className="mt-2 text-white/80">Our amazing volunteers during a recent community event</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-500">
                    <li>• Event Support: Help organize and run our community events and fundraisers</li>
                    <li>• Skills Training: Share your expertise as a trainer or mentor</li>
                    <li>• Administrative Support: Assist with office tasks and program coordination</li>
                    <li>• Outreach: Help spread awareness about our mission and programs</li>
                    <li>• Fundraising: Support our fundraising initiatives and campaigns</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Join Our Volunteer Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-500">
                    We welcome volunteers who share our passion for empowering women and making a positive difference in
                    our community. Whether you can offer a few hours a month or more regular support, your contribution
                    is valuable.
                  </p>
                  <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">
                    <Link href="/get-involved">Apply to Volunteer</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Connect With Our Team</h2>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Have questions about our team or interested in joining our efforts? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className="bg-white text-[#002f86] hover:bg-white/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002f86]">
                <Link href="/get-involved">Join Our Team</Link>
              </Button>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <Link href="#" className="text-white/80 hover:text-white">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
