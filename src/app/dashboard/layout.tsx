import { BadgeDollarSign, Star } from "lucide-react";

import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return(
    <div>
      <div className="container flex h-20 rounded-xl shadow-md m-auto items-center gap-4 bg-red-200">
        <BadgeDollarSign className="text-emerald-500" size={48}/>
        <h1 className="uppercase font-bold text-3xl text-red-500 "> Money Manager Petistinha</h1>
        <Star className="text-red-500" size={45}/>
      </div>
      <div className="container items-center gap-4 w-md m-auto mt-2 rounded-xl bg-red-200">
      {children}
      </div>
    </div>
  )
}