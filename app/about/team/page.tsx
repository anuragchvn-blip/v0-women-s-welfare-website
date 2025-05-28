import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Volunteers */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#002f86]">Volunteers</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl">
                Our dedicated volunteers are the heartbeat of our foundation, offering their time and talents to uplift our mission.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal delay={0.1}>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Mentorship Volunteer</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500">
                    Provides guidance and support to women enrolled in our training programs, fostering growth and confidence.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Event Volunteer</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500">
                    Helps plan and organize events that raise awareness and support for our foundation's mission.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Fundraising Volunteer</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500">
                    Supports our fundraising efforts through outreach and donor engagement to secure vital resources.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Administrative Volunteer</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-gray-500">
                    Assists with daily operations, ensuring smooth communication and coordination across departments.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
