import { prisma } from "../../../../generated/prisma-client";
export default {
  Mutation: {
    createAccount: async (_, args, { req }) => {
      console.log(req);
      const { username, email, firstName = "", lastName = "", bio = "" } = args;
      /*const user = await prisma.createUser({
        username,
        email,
        firstName,
        lastName,
        bio
      });*/
      return user;
    }
  }
};
