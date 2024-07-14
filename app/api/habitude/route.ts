import Habitude from '@/interfaces/Habitude';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {

    const habitudes: Habitude[] = await prisma.habitude.findMany();

    return NextResponse.json({

        data: habitudes
    });
}

export async function POST(request: NextRequest) {

    const body = await request.json();

    const habitude: Habitude = await prisma.habitude.findUnique({

        where: {

            id: body.id
        }
    });

    return NextResponse.json({

        data: habitude
    });
}
