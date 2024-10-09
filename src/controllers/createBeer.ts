import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const createBeer = async (req: Request, res: Response) => {
    try {
        const { description, style, ABV, IBU, bottle, price } = req.body;
        const beer = await prisma.beer.create({
            data: {
                description,
                style,
                ABV,
                IBU,
                bottle,
                price
            }
        });
        
        res.status(201).json(beer)
    } catch (error) {
        
        res.status(400).json({ message: 'Failed to create' })
    }
};