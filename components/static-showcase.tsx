"use client"

// The most minimal possible component - just a static image and text
export function StaticShowcase() {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
        {/* Static image */}
        <img
          src="/placeholder.svg?height=400&width=600"
          alt="Women Empowerment"
          className="h-full w-full object-cover"
        />

        {/* Simple text overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-xl font-bold">Women Empowerment - Inspirational Video</h3>
          <p className="mt-2">Watch our success stories</p>
        </div>
      </div>
    </div>
  )
}
