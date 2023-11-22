import mongoose, { Error } from 'mongoose';

mongoose.set('strictQuery', false)

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@pruebastecnicas.sm4lf1d.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', (error as Error).message);
    process.exit(1);
  }
};

export default connectDB;
