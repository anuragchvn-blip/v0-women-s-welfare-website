import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BookOpen, GraduationCap, School } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function EducationProgramPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <School className="h-16 w-16 text-[#f7931e]" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education Programs</h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Empowering women through access to quality education and learning opportunities
            </p>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002f86]">
                <Link href="/programs" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Programs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                  Our Education Programs
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Education is a powerful tool for empowerment. Our education programs aim to provide women with access
                  to quality education, from basic literacy to advanced skills, enabling them to build knowledge,
                  confidence, and opportunities for a better future.
                </p>
                <p className="text-gray-500 md:text-xl">
                  We believe that every woman deserves the chance to learn, grow, and reach her full potential through
                  education. Our programs are designed to be accessible, practical, and tailored to the needs of women
                  from economically challenged backgrounds.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/images/donation-handover.png"
                  alt="Women in education program"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Program Types */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                Our Educational Initiatives
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                We offer various educational programs to meet the diverse needs of women in our community
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Basic Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our basic education program focuses on literacy and numeracy skills for women who missed out on
                    formal education. We provide a supportive learning environment where women can build foundational
                    skills at their own pace.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    <li>• Reading and writing skills</li>
                    <li>• Basic mathematics</li>
                    <li>• Functional English</li>
                    <li>• Digital literacy basics</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <School className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Secondary Education Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    We help women complete their secondary education through financial assistance, study materials, and
                    tutoring support. This program aims to help women obtain formal educational qualifications that can
                    open doors to better opportunities.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    <li>• Tuition fee assistance</li>
                    <li>• Textbooks and study materials</li>
                    <li>• Exam preparation support</li>
                    <li>• Career guidance</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="h-full">
                <CardHeader>
                  <GraduationCap className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Continuing Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Our continuing education program supports women who wish to pursue higher education or specialized
                    training. We provide scholarships, mentoring, and resources to help women advance their education
                    and career prospects.
                  </CardDescription>
                  <ul className="mt-4 space-y-2 text-sm text-gray-500">
                    <li>• Scholarship opportunities</li>
                    <li>• Mentoring and guidance</li>
                    <li>• Access to online learning resources</li>
                    <li>• Networking opportunities</li>
                  </ul>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Success Stories</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Meet some of the women whose lives have been transformed through our education programs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <Card className="overflow-hidden">
                <div className="relative h-[250px] w-full">
                  <Image
                    src="/placeholder.svg?height=250&width=500"
                    alt="Success Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Priya's Journey</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "I had to drop out of school at a young age due to family circumstances. Through the foundation's
                    basic education program, I learned to read and write, and eventually completed my secondary
                    education. Today, I am pursuing a degree in social work and hope to help other women like me."
                  </p>
                  <p className="mt-4 text-sm font-medium text-[#002f86]">- Priya, 28</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="overflow-hidden">
                <div className="relative h-[250px] w-full">
                  <Image
                    src="/placeholder.svg?height=250&width=500"
                    alt="Success Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Meena's Achievement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "With the foundation's support, I was able to complete my secondary education while working
                    part-time and caring for my family. The scholarship and mentoring I received made all the
                    difference. I now work as a teacher and am able to provide for my children's education."
                  </p>
                  <p className="mt-4 text-sm font-medium text-[#002f86]">- Meena, 35</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">How to Apply</h2>
                <p className="text-gray-500 md:text-xl">
                  If you or someone you know could benefit from our education programs, we encourage you to apply. Our
                  application process is simple and designed to be accessible to all.
                </p>
                <ol className="space-y-4 text-gray-500">
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#002f86] text-white">
                      1
                    </span>
                    <div>
                      <h3 className="font-medium">Complete the Application Form</h3>
                      <p>Fill out our simple application form online or at our office.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#002f86] text-white">
                      2
                    </span>
                    <div>
                      <h3 className="font-medium">Initial Assessment</h3>
                      <p>Meet with our education coordinator to discuss your needs and goals.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#002f86] text-white">
                      3
                    </span>
                    <div>
                      <h3 className="font-medium">Program Placement</h3>
                      <p>Based on your assessment, we'll place you in the appropriate program.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#002f86] text-white">
                      4
                    </span>
                    <div>
                      <h3 className="font-medium">Begin Your Learning Journey</h3>
                      <p>Start your education program with our support every step of the way.</p>
                    </div>
                  </li>
                </ol>
                <div className="pt-4">
                  <Button className="bg-[#002f86] hover:bg-[#002f86]/90">
                    <Link href="/contact">Contact Us to Apply</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Application Process"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Support Our Education Programs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Support Our Education Programs</h2>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Your support can help us provide educational opportunities to more women in need. Consider donating or
              volunteering to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className="bg-white text-[#002f86] hover:bg-white/90">
                <Link href="/donate">Donate Now</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#002f86]">
                <Link href="/get-involved">Volunteer as a Tutor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
