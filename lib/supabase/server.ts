import { createServerClient as createSupabaseServerClient, type SupabaseClient } from "@supabase/ssr"
import { cookies } from "next/headers"

// Placeholder client that returns null for all operations when Supabase is not configured
function createPlaceholderClient(): SupabaseClient {
  const noopResponse = { data: null, error: { message: "Supabase not configured", code: "NOT_CONFIGURED" } }
  const noopQuery = {
    select: () => noopQuery,
    insert: () => noopQuery,
    update: () => noopQuery,
    delete: () => noopQuery,
    eq: () => noopQuery,
    order: () => noopQuery,
    limit: () => noopQuery,
    single: () => Promise.resolve(noopResponse),
    then: (resolve: (value: typeof noopResponse) => void) => Promise.resolve(noopResponse).then(resolve),
  }
  
  return {
    from: () => noopQuery,
    auth: {
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    },
  } as unknown as SupabaseClient
}

export async function createServerClient(): Promise<SupabaseClient> {
  const supabaseUrl = process.env.supabaseSUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.supabase_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase environment variables not configured - using placeholder client")
    return createPlaceholderClient()
  }

  const cookieStore = await cookies()

  return createSupabaseServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}
