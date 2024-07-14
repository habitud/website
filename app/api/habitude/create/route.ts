import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {

    const body = await request.json();

    const habitude = await prisma.habitude.create({

        data: {

            label: body.label,
            userId: body.userId
        }
    });

    return NextResponse.json({

        habitude: habitude
    });
}
