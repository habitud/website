import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(request: NextRequest) {

    const body = await request.json();

    await prisma.habitude.delete({

        where: {

            id: body.id,
            label: body.label
        }
    })

    return new NextResponse();
}
