import Nav from "@/components/ui/nav";
import Sidebar from "@/components/ui/sidebar";
import TopHeader from "@/components/ui/top-header";
import Stats from "@/components/ui/stats";

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action."

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
 {/* sidebar was here */}
      <Sidebar />
      <Nav />
      <div className="flex flex-col">
{/* header was here */}
        <TopHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Diabetes Program Management Dashboard</h1>
          </div>
            <Stats />
        </main>
      </div>
    </div>
  )
}
