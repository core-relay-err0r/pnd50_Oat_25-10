import { createBrowserClient, type SupabaseClient } from "@supabase/ssr"

// Placeholder client for when Supabase is not configured
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

export function createClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.supabaseSUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.supabase_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase environment variables not configured - using placeholder client")
    return createPlaceholderClient()
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
