import { Spinner } from "@/components/ui/spinner"

interface PageLoadingProps {
  title?: string
  sections?: number
}

export function PageLoading({ title, sections = 3 }: PageLoadingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80">
      {/* Hero skeleton */}
      <div className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge skeleton */}
            <div className="h-8 w-32 bg-slate-200/60 rounded-full mb-6 animate-pulse" />
            {/* Title skeleton */}
            <div className="h-12 w-3/4 bg-slate-200/60 rounded-lg mb-4 animate-pulse" />
            <div className="h-10 w-1/2 bg-slate-200/60 rounded-lg mb-6 animate-pulse" />
            {/* Subtitle skeleton */}
            <div className="h-6 w-full max-w-2xl bg-slate-200/60 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>

      {/* Content sections skeleton */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: sections }).map((_, i) => (
            <div key={i} className="bg-white/80 rounded-xl border border-slate-200/50 p-6 animate-pulse">
              <div className="h-10 w-10 bg-slate-200/60 rounded-lg mb-4" />
              <div className="h-6 w-3/4 bg-slate-200/60 rounded-lg mb-3" />
              <div className="h-4 w-full bg-slate-200/60 rounded-lg mb-2" />
              <div className="h-4 w-2/3 bg-slate-200/60 rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Centered spinner */}
      <div className="flex justify-center py-8">
        <Spinner className="w-8 h-8 text-sky-500" />
      </div>
    </div>
  )
}

export function CardGridLoading({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white/80 rounded-xl border border-slate-200/50 p-6 animate-pulse">
          <div className="h-40 bg-slate-200/60 rounded-lg mb-4" />
          <div className="h-6 w-3/4 bg-slate-200/60 rounded-lg mb-3" />
          <div className="h-4 w-full bg-slate-200/60 rounded-lg mb-2" />
          <div className="h-4 w-2/3 bg-slate-200/60 rounded-lg" />
        </div>
      ))}
    </div>
  )
}

export function FormLoading() {
  return (
    <div className="max-w-xl mx-auto bg-white/80 rounded-xl border border-slate-200/50 p-8 animate-pulse">
      <div className="h-8 w-1/2 bg-slate-200/60 rounded-lg mb-6" />
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <div className="h-4 w-24 bg-slate-200/60 rounded mb-2" />
            <div className="h-12 w-full bg-slate-200/60 rounded-lg" />
          </div>
        ))}
        <div className="h-12 w-full bg-sky-200/60 rounded-lg mt-6" />
      </div>
    </div>
  )
}
