"use client"

import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';
import { useEffect, useState } from 'react';
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

	const [items, setItems] = useState<Habitude[]>([]);

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

	async function handleDelete(idToDelete: number) {

		await fetch('/api/habitude/delete', {

			method: 'DELETE',
			headers: {

				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: idToDelete })
		})

		setItems((prevItems) => prevItems.filter((item) => item.id !== idToDelete));
	}

	function addNewItem(newHabitude: Habitude) {

		setItems((prevItems) => [...prevItems, newHabitude]);
	}

	const formattedDate = moment(props.date).format('dddd D MMMM YYYY');
	const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

	useEffect(() => {

		const fetchHabitudes = async () => {

			const response = await fetch('/api/habitude');

			const data = await response.json();

			setItems(data.data);
		};

		fetchHabitudes();
	}, []);

	return (

		<Card className='lg:col-span-3 md:col-span-1'>

			<CardHeader className='space-y-1 '>

				<CardTitle className='text-2xl flex justify-between'>

					{capitalizedDate}

					<AddNewItem addNewItem={addNewItem} />
				</CardTitle>

				<CardDescription>Mes habitudes</CardDescription>
			</CardHeader>

			<CardContent className='grid gap-4'>

				<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis, restrictToParentElement]}>

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