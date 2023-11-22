import AuthService from '@/server/services/auth.service';

import connectDB from "../../../../utils/db";

(async ()=>await connectDB())()

export async function POST(req: Request) {
    const { user, password, name, lastname, dateOfBirth} = await req.json();

    try {
      const authService = new AuthService()
      const _user = await authService.register({ user, password, name, lastname, dateOfBirth});
      return Response.json({ _user }, {status: 200});
    } catch (error) {
      console.error((error as Record<string, any>).message);
      return Response.json({ message: 'Error en el servidor' }, {status: 500});
    }
}
