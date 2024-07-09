import Statistique from "./Statistique";

const stats = [
    { name: 'Réussite globale', value: 32, change: 4.75 },
    { name: 'Réussite quotidienne', value: 50, change: 54.02 },
    { name: 'Réussite hebdomadaire', value: 28, change: -1.39 },
    { name: 'Réussite mensuelle', value: 35, change: 10.18 }
  ]

export default function Statistiques() {

    return (

        <dl className="mx-auto max-w-7xl w-full grid lg:grid-cols-4 gap-3 mt-3 md:grid-cols-2 sm:grid-cols-1">

            {stats.map((stat) => (

                <Statistique key={stat.name} name={stat.name} value={stat.value} change={stat.change}/>
            ))} 
        </dl>
    );
}