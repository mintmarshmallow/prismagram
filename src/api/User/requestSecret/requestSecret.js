import { generateSecret, sendMail, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";
import { throwError } from "rxjs";

export default {
  Mutation: {
    requestSecret: async (_, args, { request }) => {
      const { email } = args;
      const loginSecret = generateSecret();
      try {
        throw Error;
        await sendSecretMail(email, loginSecret);
        await prisma.updateUser({ data: { loginSecret }, where: { email } });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
};
