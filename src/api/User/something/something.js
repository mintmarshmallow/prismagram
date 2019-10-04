import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    something: async (_, args, { request }) => {
      console.log(request);
      return "asdf";
    }
  }
};
