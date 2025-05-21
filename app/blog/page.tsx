import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h1>
            <p className="max-w-[700px] text-white/80 md:text-xl">
              Stay updated with our latest news, stories, and insights on social welfare and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="w-full py-8 md:py-12 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-4 md:gap-8">
            <div className="md:col-span-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="health">Health & Wellness</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="advocacy">Advocacy</SelectItem>
                  <SelectItem value="stories">Success Stories</SelectItem>
                  <SelectItem value="events">Events</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#002f86] mb-8">Featured Article</h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/donation-handover.png"
                alt="Featured article thumbnail"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>April 15, 2023</span>
                <span className="mx-2">•</span>
                <User className="h-4 w-4" />
                <span>Admin</span>
              </div>
              <h3 className="text-2xl font-bold text-[#002f86]">
                Making a Difference: Our Recent Educational Materials Distribution
              </h3>
              <p className="text-gray-500">
                Last month, our foundation organized a distribution drive to provide educational materials to
                underprivileged students. This initiative aims to support their academic journey and ensure they have
                the necessary tools for learning...
              </p>
              <Button className="bg-[#002f86] hover:bg-[#002f86]/90">
                <Link href="/blog/educational-materials-distribution">Read Full Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="w-full py-12 md:py-24 bg-[#f7931e]/10">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#002f86] mb-8">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 20, 2023</span>
                </div>
                <CardTitle className="text-xl">New Skills Training Program Launched</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="mb-4">
                  We're excited to announce our new skills training program designed to help individuals enter the
                  workforce with confidence.
                </CardDescription>
                <Link
                  href="/blog/skills-training"
                  className="inline-flex items-center gap-1 text-[#002f86] text-sm font-medium"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>February 15, 2023</span>
                </div>
                <CardTitle className="text-xl">Annual Fundraising Event Announced</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="mb-4">
                  Save the date for our annual fundraising event, featuring special guests and entertainment.
                </CardDescription>
                <Link
                  href="/blog/fundraising-event"
                  className="inline-flex items-center gap-1 text-[#002f86] text-sm font-medium"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>January 10, 2023</span>
                </div>
                <CardTitle className="text-xl">Success Story: Rahul's Journey</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="mb-4">
                  Read about Rahul's inspiring journey from scholarship recipient to community leader.
                </CardDescription>
                <Link
                  href="/blog/rahuls-journey"
                  className="inline-flex items-center gap-1 text-[#002f86] text-sm font-medium"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-[#002f86] text-[#002f86]">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full py-12 md:py-24 bg-[#002f86] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
            <p className="max-w-[600px] text-white/80 md:text-xl">
              Stay updated with our latest news, stories, and events. We'll never spam your inbox.
            </p>
            <div className="w-full max-w-md space-y-2">
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-[#f7931e] hover:bg-[#f7931e]/90">Subscribe</Button>
              </form>
              <p className="text-xs text-white/60">
                By subscribing, you agree to our{" "}
                <Link href="/privacy" className="underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
