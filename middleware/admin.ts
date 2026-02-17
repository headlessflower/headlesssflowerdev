export default defineNuxtRouteMiddleware(async () => {
    const user = useSupabaseUser()
    const supabase = useSupabaseClient()
    const config = useRuntimeConfig()

    // Ensure session is loaded (prevents false redirects on first paint)
    if (!user.value) {
        const { data } = await supabase.auth.getUser()
        if (!data.user) return navigateTo("/login")
    }

    const raw = String(config.public.adminEmails || "")
    const allow = String(config.public.adminEmails || "")
        .split(",")
        .map(s => s.trim().toLowerCase())
        .filter(Boolean)

    const email = String(user.value?.email || "").toLowerCase()
    if (allow.length && !allow.includes(email)) return navigateTo("/")

})

