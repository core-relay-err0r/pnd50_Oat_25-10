import { FormLoading } from "@/components/ui/page-loading"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50/80 pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="h-8 w-32 bg-slate-200/60 rounded-full mb-6 animate-pulse" />
          <div className="h-12 w-3/4 bg-slate-200/60 rounded-lg mb-4 animate-pulse" />
          <div className="h-6 w-full max-w-xl bg-slate-200/60 rounded-lg animate-pulse" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <FormLoading />
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white/80 rounded-xl p-6 animate-pulse">
                <div className="h-6 w-1/2 bg-slate-200/60 rounded mb-3" />
                <div className="h-4 w-3/4 bg-slate-200/60 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
