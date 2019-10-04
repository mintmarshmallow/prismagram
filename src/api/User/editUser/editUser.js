import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        editUser: async (_, args, { request, isAuthenticated }) => {
            isAuthenticated(request);
            const {
                username,
                email,
                firstName,
                lastName,
                bio
            } = args;
            console.log(username, email, firstName, bio)
            const { user } = request;
            return prisma.updateUser({
                where: {
                    id: user.id
                },
                data: {
                    username, email, firstName, lastName, bio
                }
            })
        }
    }
}