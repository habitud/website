import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {

    const body = await request.json();

    await prisma.habitude.delete({

        where: {

            id: body.id
        }
    })

    return new NextResponse();
}
