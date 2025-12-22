"use client"

import { BreadcrumbItem } from "@/components/ui/breadcrumb"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Fragment } from "react"

interface BreadcrumbNavProps {
  items: { name: string; url: string }[]
  className?: string
}

export function BreadcrumbNav({ items, className = "" }: BreadcrumbNavProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <Fragment key={item.url}>
              <BreadcrumbItem>
                {index === 0 ? (
                  // Home link with icon
                  <BreadcrumbLink asChild>
                    <Link href={item.url} className="flex items-center gap-1.5 text-slate-500 hover:text-slate-700">
                      <Home className="w-3.5 h-3.5" />
                      <span className="sr-only">{item.name}</span>
                    </Link>
                  </BreadcrumbLink>
                ) : isLast ? (
                  // Current page (no link)
                  <BreadcrumbPage className="text-slate-700 font-medium">{item.name}</BreadcrumbPage>
                ) : (
                  // Middle links
                  <BreadcrumbLink asChild>
                    <Link href={item.url} className="text-slate-500 hover:text-slate-700">
                      {item.name}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && (
                <BreadcrumbSeparator>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </BreadcrumbSeparator>
              )}
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
