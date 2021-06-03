import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// get all joke
//eg: http://127.0.0.1:3000/
//    http://127.0.0.1:3000/?joke_id=ckph6po9l0000hse5sdrtby89
app.get("/", async (req: Request, res: Response) => {
  const jokes = await prisma.joke.findMany({
    include: { creator: true },
  });
  res.json({
    jokes: jokes,
  });
});

// create a joke
app.post("/", async (req: Request, res: Response) => {
  // use the below when we call by api fetch
  // const text = req.body.text;
  // const userId = req.body.userId;

  const joke = await prisma.joke.create({
    data: {
      text: "Joke number to be deleted",
      userId: "ckph6oqz700007ge5ia5d2klp",
    },
  });

  res.json({ joke });
});

// get a single joke
//eg: http://127.0.0.1:3000/ckph6po9l0000hse5sdrtby89
app.get("/:joke_id", async (req: Request, res: Response) => {
  const { joke_id } = req.params;
  const joke = await prisma.joke.findFirst({
    where: {
      id: joke_id,
    },
    include: { creator: true },
  });
  res.json(joke);
});

// delete a single joke
app.delete("/:joke_id", async (req: Request, res: Response) => {
  const { joke_id } = req.params;
  const joke = await prisma.joke.delete({
    where: {
      id: joke_id,
    },
  });
  res.json({
    message: `joke with id=${joke.id} is deleted!`,
  });
});

app.listen(3000, () => {
  console.log(`Server running at 127.0.0.1`);
});
