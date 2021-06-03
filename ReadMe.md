# Sample Node API

Sample API using Node, Prisma and Postgresql.

## Tech Stack

**Server:** Node, Express, Prisma, PostgreSQL

## Installation

Install main libraries with yarn

```bash
  yarn init -y
  yarn add express @prisma/client

```

Install development related packages:

```bash
  yarn add -D typescript @types/node @types/express prisma ts-node-dev

```

For tsconfig.json file

```bash
  npx typescript --init
  which typescript
```

For prisma initialization:

```bash
  npx prisma init
```

Prisma Migration commands:

```bash
  npx prisma migrate dev
  ? Enter a name for the new migration: init
```

Prisma UI studio:

```bash
  npx prisma studio
```

To run the node server:

```bash
 "scripts": {
  "dev": "ts-nod-dev server.ts"
 },

```

## API Reference

#### Get all jokes

```http
  GET /
  example: http://127.0.0.1:3000/
           http://127.0.0.1:3000/?joke_id=ckph6po9l0000hse5sdrtby89

```

#### Get joke by id

```http
  GET /:joke_id

  example: http://127.0.0.1:3000/ckph6po9l0000hse5sdrtby89
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `joke_id` | `string` | **Required**. joke_id of joke to fetch |

#### Save joke

```http
  POST /
  example: http://127.0.0.1:3000

  {
      text: "Joke ...",
      userId: "ckph6oqz700007ge5ia5d2klp",
  },
```

#### Remove a joke

```http
  DELETE /
  example: http://127.0.0.1:3000/ckph6po9l0000hse5sdrtby89

```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `joke_id` | `string` | **Required**. joke_id of joke to fetch |
