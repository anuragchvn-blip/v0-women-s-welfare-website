import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Activity, Stethoscope, PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HealthcarePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002f86] mb-4">Healthcare Support Program</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide financial assistance for emergency medical expenses and support women facing critical health
            challenges—ensuring they receive the care they need, when they need it most.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <ScrollReveal>
          <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Healthcare support"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002f86] mb-4">Our Healthcare Mission</h2>
            <p className="text-gray-600 mb-6">
              Our healthcare support program is designed to provide timely financial assistance to women facing critical
              health challenges. We understand that medical emergencies can be overwhelming, both emotionally and
              financially. Our goal is to ensure that women from economically challenged backgrounds receive the medical
              care they need without the burden of financial stress.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#002f86]">
                <Link href="/donate" className="flex items-center gap-2">
                  Support Our Cause <Heart className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline">
                <Link href="/get-involved" className="flex items-center gap-2">
                  Get Involved <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-bold text-[#002f86] mb-8 text-center">Our Healthcare Initiatives</h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <ScrollReveal delay={0.1}>
          <Card className="h-full">
            <CardHeader>
              <Activity className="h-8 w-8 text-[#002f86] mb-2" />
              <CardTitle>Emergency Medical Assistance</CardTitle>
              <CardDescription>Financial support for urgent medical needs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We provide financial assistance for emergency medical treatments, surgeries, and critical care to ensure
                women receive timely medical attention without financial barriers.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-[#002f86]">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Card className="h-full">
            <CardHeader>
              <Stethoscope className="h-8 w-8 text-[#002f86] mb-2" />
              <CardTitle>Preventive Healthcare</CardTitle>
              <CardDescription>Regular health check-ups and screenings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We organize regular health camps and screenings to promote preventive healthcare and early detection of
                health issues among women in underserved communities.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-[#002f86]">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Card className="h-full">
            <CardHeader>
              <PlusCircle className="h-8 w-8 text-[#002f86] mb-2" />
              <CardTitle>Mental Health Support</CardTitle>
              <CardDescription>Counseling and mental wellness programs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We provide access to mental health counseling and support groups to address the psychological well-being
                of women facing health challenges or recovering from medical treatments.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-[#002f86]">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002f86] mb-4">Impact Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Read about the women whose lives have been transformed through our healthcare support program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Meena's Journey to Recovery</CardTitle>
                <CardDescription>Emergency Surgery Support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Meena, a 35-year-old single mother, needed an emergency surgery but couldn't afford it. Our foundation
                  provided financial assistance, enabling her to receive the necessary treatment and recover fully.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read Full Story
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Priya's Preventive Care</CardTitle>
                <CardDescription>Early Detection Saved a Life</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Through one of our health camps, Priya was diagnosed with a treatable condition at an early stage.
                  With our support for treatment costs, she was able to recover quickly and continue supporting her
                  family.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Read Full Story
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#002f86] mb-4">How You Can Help</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Your support can make a significant difference in the lives of women facing health challenges.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <Button className="bg-[#002f86]">
            <Link href="/donate" className="flex items-center gap-2">
              Donate Now <Heart className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline">
            <Link href="/get-involved" className="flex items-center gap-2">
              Volunteer <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline">
            <Link href="/contact" className="flex items-center gap-2">
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  )
}
