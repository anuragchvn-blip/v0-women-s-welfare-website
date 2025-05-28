import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Heart, Mail, MessageSquare, Share2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Users className="h-16 w-16 text-[#f7931e]" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Involved</h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Join us in our mission to empower women and create positive change in our communities
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Join Our Cause</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                Ways to Make a Difference
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                There are many ways you can support our mission and help empower women in need
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <Heart className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Donate</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Your financial support helps us provide education, skills training, and healthcare assistance to
                    women in need. All donations are eligible for tax benefits under Section 80G.
                  </CardDescription>
                  <div className="mt-6">
                    <Button className="bg-[#f7931e] hover:bg-[#f7931e]/90 w-full">
                      <Link href="/donate" className="flex items-center justify-center gap-2 w-full">
                        Donate Now <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <Users className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Volunteer</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Contribute your time and skills—there are opportunities for all levels of experience. Whether you
                    can help with teaching, event organization, or administrative support, your contribution is
                    valuable.
                  </CardDescription>
                  <div className="mt-6">
                    <Button className="bg-[#002f86] hover:bg-[#002f86]/90 w-full">
                      <a href="#volunteer-form" className="flex items-center justify-center gap-2 w-full">
                        Volunteer With Us <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="h-full">
                <CardHeader>
                  <Share2 className="h-10 w-10 text-[#002f86]" />
                  <CardTitle className="mt-4">Spread the Word</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Follow us on social media and share our mission to amplify our impact. Raising awareness about our
                    work helps us reach more women in need and connect with potential supporters.
                  </CardDescription>
                  <div className="mt-6">
                    <Button className="bg-[#002f86] hover:bg-[#002f86]/90 w-full">
                      <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
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

      {/* Volunteer Opportunities */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">Volunteer Opportunities</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">How You Can Help</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                We have various volunteer opportunities that match different skills and interests
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Education Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Help with tutoring, teaching basic literacy, or assisting with educational workshops. Your knowledge
                    can help women gain valuable skills.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Skills Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Share your professional skills by teaching vocational courses in areas like sewing, beautician
                    services, computer skills, or other marketable abilities.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle>Event Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Help organize and run fundraising events, awareness campaigns, or community outreach programs to
                    expand our impact.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <Card>
                <CardHeader>
                  <CardTitle>Administrative Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Assist with office tasks, documentation, data management, or communications to help our operations
                    run smoothly.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <Card>
                <CardHeader>
                  <CardTitle>Healthcare Assistance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Medical professionals can volunteer to provide basic health check-ups, health education, or
                    assistance with medical support programs.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <Card>
                <CardHeader>
                  <CardTitle>Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Become a mentor to women seeking to build their careers or start small businesses, sharing your
                    experience and guidance.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer-form" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Join Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">
                  Volunteer Application
                </h2>
                <p className="text-gray-500 md:text-xl">
                  Fill out the form to express your interest in volunteering with us. We'll contact you to discuss how
                  your skills and interests align with our current needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Users className="h-8 w-8 text-[#002f86]" />
                    <div>
                      <h3 className="font-medium">Join a Community of Changemakers</h3>
                      <p className="text-sm text-gray-500">
                        Connect with like-minded individuals committed to making a difference.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Heart className="h-8 w-8 text-[#002f86]" />
                    <div>
                      <h3 className="font-medium">Make a Meaningful Impact</h3>
                      <p className="text-sm text-gray-500">
                        Your contribution directly helps women in need build better lives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Calendar className="h-8 w-8 text-[#002f86]" />
                    <div>
                      <h3 className="font-medium">Flexible Commitment</h3>
                      <p className="text-sm text-gray-500">
                        Volunteer opportunities to fit your schedule and availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle>Volunteer Application Form</CardTitle>
                  <CardDescription>Please provide your information and areas of interest</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="interests" className="text-sm font-medium">
                        Areas of Interest
                      </label>
                      <select
                        id="interests"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#002f86]"
                      >
                        <option value="">Select an area of interest</option>
                        <option value="education">Education Support</option>
                        <option value="skills">Skills Training</option>
                        <option value="events">Event Support</option>
                        <option value="admin">Administrative Support</option>
                        <option value="healthcare">Healthcare Assistance</option>
                        <option value="mentorship">Mentorship</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="availability" className="text-sm font-medium">
                        Availability
                      </label>
                      <select
                        id="availability"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#002f86]"
                      >
                        <option value="">Select your availability</option>
                        <option value="weekdays">Weekdays</option>
                        <option value="weekends">Weekends</option>
                        <option value="evenings">Evenings</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Tell us about your skills and experience
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Share any relevant skills, experience, or why you'd like to volunteer with us"
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">Submit Application</Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">Attend Events</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Upcoming Events</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Participate in fundraisers, workshops, and community activities to support our cause
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal delay={0.1}>
              <Card>
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Event"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Annual Fundraising Gala</CardTitle>
                    <span className="text-sm bg-[#002f86] text-white px-2 py-1 rounded">Upcoming</span>
                  </div>
                  <CardDescription>June 15, 2025 • 6:00 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    Join us for an evening of celebration and support as we raise funds for our educational programs.
                    Enjoy dinner, entertainment, and inspiring stories from the women we've helped.
                  </p>
                  <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">Register to Attend</Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card>
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Event"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Skills Workshop Series</CardTitle>
                    <span className="text-sm bg-[#f7931e] text-white px-2 py-1 rounded">Monthly</span>
                  </div>
                  <CardDescription>Every Last Saturday • 10:00 AM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    Volunteer to teach or attend our monthly skills workshops covering topics from basic computer
                    literacy to financial management, designed to build practical skills.
                  </p>
                  <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">Learn More</Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card>
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Event"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Community Outreach Day</CardTitle>
                    <span className="text-sm bg-[#002f86] text-white px-2 py-1 rounded">Upcoming</span>
                  </div>
                  <CardDescription>July 8, 2025 • 9:00 AM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 mb-4">
                    Join us as we visit local communities to raise awareness about our programs and identify women who
                    could benefit from our support. Help us spread the word!
                  </p>
                  <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">Volunteer</Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#f7931e]/20 px-3 py-1 text-sm">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Have Questions?</h2>
                <p className="text-gray-500 md:text-xl">
                  If you have any questions about volunteering, attending events, or other ways to get involved, please
                  don't hesitate to contact us.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-8 w-8 text-[#002f86]" />
                    <div>
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-sm text-gray-500">chandrajaifoundation@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MessageSquare className="h-8 w-8 text-[#002f86]" />
                    <div>
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-sm text-gray-500">+91 9739013404</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-[#002f86] hover:bg-[#002f86]/90">
                    <Link href="/contact" className="flex items-center gap-2">
                      Contact Us <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image src="/placeholder.svg?height=400&width=600" alt="Contact Us" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
