"use client"

import Habitudes from "@/components/Habitudes";
import Header, { Mode } from "@/components/Header";
import Statistiques from "@/components/Statistiques";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Page() {
    
    const [date, setDate] = useState<Date>(new Date());

    const handleSelectDate = (selectedDate: Date | undefined) => {

        if (selectedDate) {
        
            setDate(selectedDate);
        }
    };
    return (

        <div className="flex-1 flex flex-col">
        
            <Header mode={Mode.dashboard} />

            <div className="flex-1 flex flex-col px-3">


                <Statistiques />

                <div className="mx-auto max-w-7xl flex-1 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 w-full my-3">

                    <Habitudes date={date} />

                    <Card className="col-span-1 flex justify-center items-center">

                        <Calendar mode="single" selected={date} onSelect={handleSelectDate} weekStartsOn={1} firstWeekContainsDate={1} />
                    </Card>
                </div>
            </div>
        </div>
    );
}