const {Prisma} = require ('prisma-binding');

const getPrismaTestInstance = () => {
    return new Prisma({
        typeDefs: 'src/generated/prisma.graphql'
        endpoint:"https://test-server-netflix420.herokuapp.com/test/dev"
    })
}