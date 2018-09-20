const resolvers = require('../src/resolvers')
const {getPrismaTestInstance} = require('./getPrismaTestInstance')
afterEach(async () =>{
    await getPrismaTestInstance().mutation.deleteManyUsers({})
})

test('Query users all works', async () => {
    await getPrismaTestInstance().mutation.createUser(
        {
            data:{
                name:"test1",
                lastname:"test2",
                email:"test@gmail.com",
                password:"eltest",
                birth_date:"1992-01-01T00:00:00"
            }
        }, `{Id}`);
    
    let token = jwt.sign({userId:user},APP_SECRET)
    
        expect(
             await resolvers.Query.users(
            {},
            {},
            {request:{Authorization:'JWT ${token}'}
            db:getPrismaTestInstance()},
            `{name,lastname,email,}`
        )
     ).toMatchSnapshot()



})