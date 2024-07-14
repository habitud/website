import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import React from 'react';

export default function AddNewItem({ addNewItem }: { addNewItem: any }) {

    const [itemName, setItemName] = React.useState("");

    const [open, setOpen] = React.useState(false);

    const handleSubmit = async () => {

        if (itemName.trim() === "") return;

        const response = await fetch('/api/habitude/create', {

            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ label: itemName })
        });

        const json = await response.json();

        addNewItem(json.habitude.label);

        setItemName("");

        setOpen(false);
    };


    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key === 'Enter') handleSubmit();
    };

    return (

        <Dialog open={open} onOpenChange={setOpen}>

            <DialogTrigger asChild>

                <Button variant="outline" size="icon">

                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">

                <DialogHeader className="text-start">

                    <DialogTitle>Ajouter une habitude</DialogTitle>

                    <DialogDescription>

                        Veuillez renseigner le nom de votre nouvelle habitude
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 pt-2">

                    <Input id="name" value={itemName} onChange={(e: any) => setItemName(e.target.value)} onKeyDown={handleKeyDown} />
                </div>

                <DialogFooter>

                    <Button onClick={handleSubmit} className="w-full">Ajouter</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
