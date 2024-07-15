import Habitude from '@/interfaces/Habitude';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    const body = await request.json();

    const habitudes: Habitude[] = await prisma.habitude.findMany({

        where: {

            userId: body.userId
        }
    });

    return NextResponse.json({

        data: habitudes
    });
}
