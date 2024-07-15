import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const config = {

    runtime: 'edge',
    schedule: '0 0 * * *'
}

export async function GET() {

    const habitudes = await prisma.habitude.findMany();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await prisma.history.createMany({

        data: habitudes.map(habitude => ({

            habitudeId: habitude.id,
            date: today,
            status: false
        })),
        skipDuplicates: true
    })

    return NextResponse.json({

        message: "Insertion quotidienne réalisée avec succès"
    })
}