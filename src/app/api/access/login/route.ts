import AuthService from "@/server/services/auth.service";
import connectDB from "@/utils/db";

(async ()=>await connectDB())()

export async function POST(req: Request) {
    const { user, password } = await req.json();

    try {
      const authService = new AuthService()
      const token = await authService.login({user, password})
      return Response.json({ token }, {status: 200});
    } catch (error) {
      console.error((error as Record<string, any>).message);
      return Response.json({ message: 'Error en el servidor' }, {status: 500});
    }
}
