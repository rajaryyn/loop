import Navbar from "@/components/navbar/Navbar";
import Sidenav from "@/components/navbar/Sidenav";
import { dashboardConfig } from "../../../../data/dashboard";

export default function DashboardLayout({ children }) {
   return <section>
      <Navbar/>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] mt-20">
        <aside className="hidden w-[200px] flex-col md:flex">
         <Sidenav items={dashboardConfig.Sidenav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
         <h1>hi</h1>
          
        </main>
      </div>
   
    
      </section>
 }