// app/(app)/layout.tsx
export default function AppLayout({
                                      children,
                                  }: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen">
            <aside>Sidebar</aside>
            <main>{children}</main>
        </div>
    )
}