"use client"

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';
import { useState } from 'react';
import SortableLinks from '@/components/SortableLinks';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AddNewItem from '@/components/AddNewItem';
import Habitude from '@/interfaces/Habitude';
import moment from "moment"
import 'moment/locale/fr';

moment.locale('fr');


interface Props {
	
	date: Date;
}

export default function Habitudes(props: Props) {

	const sensors = useSensors(

		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const [items, setItems] = useState<Habitude[]>([
		
		{
			id: 1,
			label: "Réveil 6h30"
		},
		{
			id: 2,
			label: "Marcher 10km"
		}
	]);

	function handleDragEnd(event: any) {

		const { active, over } = event;

		if (active.id !== over.id) {
			setItems((prevItems) => {
				const oldIndex = prevItems.findIndex((item) => item.id === active.id);
				const newIndex = prevItems.findIndex((item) => item.id === over.id);

				return arrayMove(prevItems, oldIndex, newIndex);
			});
		}
	}

	function handleDelete(idToDelete: number) {
		setItems((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
	}

	let idx = Date.now();

	function addNewItem(newItem: string) {
		setItems((prevItems) => [...prevItems, { id: idx, label: newItem }]);
	}

	const formattedDate = moment(props.date).format('dddd D MMMM YYYY');
	const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

	return (

		<Card className='lg:col-span-3 md:col-span-1'>

			<CardHeader className='space-y-1 '>

				<CardTitle className='text-2xl flex justify-between'>
					{capitalizedDate}
					<AddNewItem addNewItem={addNewItem} />
				</CardTitle>
				<CardDescription>List Popular web development frameworks</CardDescription>
			</CardHeader>
			<CardContent className='grid gap-4'>
				<DndContext
					sensors={sensors}
					collisionDetection={closestCenter}
					onDragEnd={handleDragEnd}
					modifiers={[restrictToVerticalAxis, restrictToParentElement]}
				>
					<SortableContext items={items} strategy={verticalListSortingStrategy}>
						{items.map((item) => (
							<SortableLinks key={item.id} id={item} onDelete={handleDelete} />
						))}
					</SortableContext>
				</DndContext>
			</CardContent>
		</Card>
	);
};