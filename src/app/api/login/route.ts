import connectDB from '../../utils/db';
import UserDAO from '../../dao/userDao';
import jwt from 'jsonwebtoken';

connectDB();

export async function POST(req: Request) {
    const { username, password } = await req.json();

    try {
      const user = await UserDAO.getUserByUsername(username);

      if (!user || user?.password !== password) {
        return Response.json({ message: 'Credenciales inválidas' }, {status: 400});
      }

      const token = jwt.sign({ userId: user?._id, username: user?.username }, 'secretKey', {
        expiresIn: '1h',
      });

      return Response.json({ token }, {status: 200});
    } catch (error) {
      console.error((error as Record<string, any>).message);
      return Response.json({ message: 'Error en el servidor' }, {status: 500});
    }
}
