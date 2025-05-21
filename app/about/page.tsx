import Image from "next/image"
import Link from "next/link"
import { Award, Heart, Shield, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Chandra-Jai Social Foundation
              </h1>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                We are dedicated to empowering women through assistance in primary & secondary Education, run special
                skill development, re-skilling programs for women from economically challenged sector & funding medical
                expenses in special cases.
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl bg-white/10">
              <Image
                src="/images/foundation-logo.png"
                alt="Chandra-Jai Social Foundation Team"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Empowering Women</h2>
                <p className="text-gray-500 md:text-xl">
                  Chandra-Jai Social Foundation is committed to empowering women from economically challenged
                  communities by providing access to education, vocational training, healthcare support, and
                  opportunities for self-reliance.
                </p>
                <p className="text-gray-500 md:text-xl">
                  Through our programs, we aim to help women become self-reliant and independent, enabling them to
                  contribute to their families and communities with dignity and confidence.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Our Vision</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                  Creating Self-Reliant Women
                </h2>
                <p className="text-gray-500 md:text-xl">
                  We envision a world where all women have the education, skills, support, and opportunities they need
                  to lead independent and fulfilling lives. A world where women are empowered to make their own choices
                  and shape their own futures.
                </p>
                <p className="text-gray-500 md:text-xl">
                  Our vision is to create a network of self-reliant women who can support themselves and their families
                  through the education and skills they've acquired, while also having access to necessary support
                  during important life events and health emergencies.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About CJS Foundation Leadership */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">Our Leadership</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">About CJS Foundation</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Meet the visionary leaders behind our foundation who drive our mission forward
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 mt-8 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <Card className="overflow-hidden h-full">
                <div className="relative h-[350px] w-full">
                  <Image
                    src="/images/ashwani-maheshwari.jpeg"
                    alt="Ashwani Maheshwari - Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Ashwani Maheshwari</CardTitle>
                  <CardDescription className="text-[#f7931e] font-medium">Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Operating Partner at Kedaara Capital. Ashwani Maheshwari is a veteran business leader with over
                    three decades of experience across top industrial sectors. As the founder of CJS Foundation, he
                    brings his strategic foresight and leadership to drive transformative community initiatives.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="overflow-hidden h-full">
                <div className="relative h-[350px] w-full">
                  <Image src="/images/padmini-giri.jpeg" alt="Padmini Giri - CEO" fill className="h-full w-full object-contain"/>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Padmini Mani</CardTitle>
                  <CardDescription className="text-[#f7931e] font-medium">CEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Global Talent Acquisition Strategist. Padmini Mani leads the CJS Foundation with a strong background
                    in global talent acquisition and organizational development. With leadership roles at top technology
                    firms, she's known for building high-performing teams and championing diversity.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                Guided by Our Core Values
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Our work is guided by a set of core values that inform everything we do.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal delay={0.1}>
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We believe in empowering women with skills and support rather than creating dependencies. Our focus
                    is on long-term self-reliance.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We are committed to transparency, accountability, and ethical practices in all aspects of our work.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card>
                <CardHeader>
                  <Star className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We strive for excellence in all our programs and services, continuously learning and improving to
                    better serve the women in our communities.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <Card>
                <CardHeader>
                  <Award className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Respect</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We honor the dignity, diversity, and rights of all individuals, valuing each woman's unique
                    experiences and perspectives.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/images/donation-handover.png"
                  alt="Educational support activities"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Our History</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Our Journey</h2>
                <p className="text-gray-500 md:text-xl">
                  Founded in April 2021, Chandra-Jai Social Foundation began with a vision to empower women through
                  education and practical skill development. We are registered under Section 8 of the Companies Act,
                  2013, with a commitment to serve women in need.
                </p>
                <p className="text-gray-500 md:text-xl">
                  Our foundation has grown steadily, implementing various programs focused on educational assistance,
                  skill development, marriage support, and health assistance. We are proud to have received 80G
                  certification (AAJCC34382F22021), allowing donors to receive tax benefits for their contributions.
                </p>
                <p className="text-gray-500 md:text-xl">
                  Our journey has been one of growth, learning, and unwavering commitment to our mission of empowering
                  women and helping them build independent lives.
                </p>
                <div className="pt-4">
                  <Button className="bg-[#002f86] hover:bg-[#002f86]/90">
                    <Link href="/about/history">Learn More About Our History</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                Meet Our Leadership Team
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Our dedicated team brings diverse expertise and a shared commitment to our mission.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card className="overflow-hidden">
                <div className="relative h-[300px] w-full">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Founder</CardTitle>
                  <CardDescription>Executive Director</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    With a passion for women's empowerment, our founder brings vision, dedication, and strategic
                    direction to our organization.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="overflow-hidden">
                <div className="relative h-[300px] w-full">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Program Director</CardTitle>
                  <CardDescription>Director of Programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our Program Director oversees our skill development initiatives, ensuring they effectively address
                    the needs of women we serve.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card className="overflow-hidden">
                <div className="relative h-[300px] w-full">
                  <Image src="/placeholder.svg?height=300&width=300" alt="Team Member" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Development Director</CardTitle>
                  <CardDescription>Director of Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Our Development Director leads fundraising and partnership initiatives, building relationships that
                    support our mission and expand our impact.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
          <div className="flex justify-center mt-12">
            <ScrollReveal delay={0.4}>
              <Button className="bg-[#002f86] hover:bg-[#002f86]/90">
                <Link href="/about/team">View Full Team</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Legal Information</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                Registration & Compliance
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                We are committed to transparency and accountability in all aspects of our work.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Section 8 Registration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Registered under Section 8 of the Companies Act, 2013, as a not-for-profit company.
                  </CardDescription>
                  <p className="text-sm text-gray-500">Registration Date: April 20, 2021</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>80G Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Donations to our foundation are eligible for tax benefits under Section 80G.
                  </CardDescription>
                  <p className="text-sm text-gray-500">Certificate Number: AAJCC34382F22021</p>
                  <p className="text-sm text-gray-500">Valid from: April 6, 2022</p>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle>PAN Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">Our Permanent Account Number (PAN) details.</CardDescription>
                  <p className="text-sm text-gray-500">PAN: AAJCC4382P</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
