--initial setup
yarn init -y
yarn add express @prisma/client

-- For development
yarn add -D typescript @types/node @types/express prisma ts-node-dev
-- For tsconfig.json file
npx typescript --init
which typescript
-- To run the application
"scripts": {
"dev": "ts-nod-dev server.ts"
},

-- Instalattion for prisma
npx prisma init

### What is prisma? ORM

prisma.io/doc

- a way to intereact with our database
- completely type safe
  Where is prisma best used? (server side)
- node / serverles API (next.js api routes)

Let get a database!

### Migration

- fill schema

* Migration commands

- npx prisma migrate dev
  ? Enter a name for the new migration: init
  --

* Prisma UI studio
  npx prisma studio
