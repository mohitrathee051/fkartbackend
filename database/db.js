
import mongoose from 'mongoose';





export const Connection =  async(username,password)=>{
    const URL = "mongodb+srv://admin123:admin123@ecommerce-web.lacomou.mongodb.net/?retryWrites=true&w=majority";
    try{
        await mongoose.connect(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });
        console.log("Database Connected Successfully");

    }catch(error){
        console.log("Error While connecting the database",error);
    }
}
export default Connection;
