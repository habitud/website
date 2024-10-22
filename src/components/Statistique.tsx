import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { Statistique } from "@/interfaces/Statistique";

export default function propsistique(props: Statistique) {

    return (

        <Card className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 px-4 py-10 sm:px-6 xl:px-8">
            
            <dt className="text-sm font-medium leading-6 text-gray-500">{props.name}</dt>
        
            <dd className={cn( props.change < 0 ? 'text-rose-600' : 'text-green-700', 'text-xs font-medium', )} > {props.change}</dd>

            <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-foreground">{props.value}%</dd>
        </Card>
    );
}
