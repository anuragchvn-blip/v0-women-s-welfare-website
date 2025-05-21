import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Mail className="h-16 w-16 text-[#f7931e]" />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              We'd love to hear from you. Reach out with questions, feedback, or to learn more about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <Card className="border-2 border-[#002f86]/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#002f86]">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="donation">Donation Question</SelectItem>
                        <SelectItem value="volunteer">Volunteer Information</SelectItem>
                        <SelectItem value="program">Program Information</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>
                  <Button className="w-full bg-[#002f86] hover:bg-[#002f86]/90">Send Message</Button>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter text-[#002f86]">Contact Information</h2>
                <p className="mt-2 text-gray-500">
                  We're here to help. Contact us through any of the following methods.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
                <Card>
                  <CardHeader>
                    <Phone className="h-10 w-10 text-[#002f86]" />
                    <CardTitle className="mt-4">Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <a href="tel:+919886366004" className="text-[#002f86]">
                        +91 9886366004
                      </a>
                      <p className="mt-1 text-sm text-gray-500">Monday - Friday: 9am - 5pm IST</p>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Mail className="h-10 w-10 text-[#002f86]" />
                    <CardTitle className="mt-4">Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <a href="mailto:info@chandrajaisocialfoundation.org" className="text-[#002f86]">
                        info@chandrajaisocialfoundation.org
                      </a>
                      <p className="mt-1 text-sm text-gray-500">We aim to respond within 24-48 hours</p>
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <MapPin className="h-10 w-10 text-[#002f86]" />
                    <CardTitle className="mt-4">Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Tower - D - 202, EON Waterfront
                      <br />
                      SR NO 72/2/2 KHARADI PUNE
                      <br />
                      Vadgaon Sheri, Pune City
                      <br />
                      Maharashtra, India - 411014
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#002f86]">Office Hours</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Find Us</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl">Visit our office in Pune</p>
          </div>
          <div className="mt-12">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
              {/* Placeholder for map - in a real implementation, you would use a map component or iframe */}
              <div className="flex h-full items-center justify-center bg-gray-200">
                <p className="text-gray-500">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
