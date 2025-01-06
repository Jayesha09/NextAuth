NextAuth- authentication system

This project implements a secure and scalable authentication system using Better Auth, integrated with Next.js for the frontend and Prisma as the database layer. Built to simplify credentials-based authentication, this system leverages the robust features of Better Auth, providing a seamless and user-friendly experience for login, sign-up, and user management. The application incorporates best practices for modern web development, utilizing ShadCN UI components for a sleek and responsive interface.

Additionally, the project integrates tools like ArcJet for enhanced development workflows and debugging, ensuring optimal performance and maintainability. By combining these cutting-edge tools, this authentication system serves as a strong foundation for building secure and efficient web applications.




Technologies and Tools Used
Next.js: For building the frontend and server-side rendering.
Better Auth: Simplified credentials-based authentication system.
Prisma: Database ORM for managing and querying the database.
ShadCN UI Components: For a sleek, responsive, and user-friendly interface.
ArcJet: Used to validate email addresses and prevent temporary or random emails from being stored in the database, ensuring secure and reliable user data.

##Screenshot 

This is the simple home page 

![image alt](https://github.com/Jayesha09/NextAuth/blob/d8002e55b7ea0228ed905ccebe226e1d461c4abc/P1.png)


This is the sign-up page where the email domain does not have an MX record, which is a type of DNS record that specifies the mail server for receiving emails. ArcJet validates email domains by checking for the presence of an MX record to ensure the provided email is from a valid and active domain.

![image alt](https://github.com/Jayesha09/NextAuth/blob/d8002e55b7ea0228ed905ccebe226e1d461c4abc/P2.png)

This is with a valid domain

![image alt](https://github.com/Jayesha09/NextAuth/blob/d8002e55b7ea0228ed905ccebe226e1d461c4abc/P3.png)

This is the login page

![image alt](https://github.com/Jayesha09/NextAuth/blob/d8002e55b7ea0228ed905ccebe226e1d461c4abc/P4.png)

This is the simple dashboard after successful login


![image alt](https://github.com/Jayesha09/NextAuth/blob/d8002e55b7ea0228ed905ccebe226e1d461c4abc/P5.png)



This is the user's record in the Prisma database.

![image alt](https://github.com/Jayesha09/NextAuth/blob/d8002e55b7ea0228ed905ccebe226e1d461c4abc/P6.png)



#################################


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
