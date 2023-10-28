import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BadgeDollarSign, Star } from "lucide-react";


export default function Home() {
  return (
    <main>
      <div className="flex pb-60 items-center h-screen">
        <div className="container space-y-2 p-8 max-w-md rounded-xl bg-red-200 shadow-md">
          <span className="flex items-center gap-2">
            <BadgeDollarSign className="flex text-emerald-500" size={48}/>
            <h1 className="uppdercase text-red-500 font-bold text-xl gap-4 items-center">Money Manager Petistinha</h1>
            <Star className="text-red-500" size={45}/>
          </span>
            <Input type="email"placeholder="Digite seu e-mail..."/> 
            <Input type="password"placeholder="Digite sua senha"/>
            <Button variant="destructive">Enviar</Button>
        </div>
      </div>
    </main>
  )
}
