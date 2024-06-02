import bcrypt from 'bcryptjs';
import type { NextRequest } from 'next/server';

import dbConnect from '../connect-db';
import User from '../models/user';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { email, password } = await request.json();

    const user = await User.findOne({ email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return new Response(
          JSON.stringify({
            success: true,
            token: user?.token ?? 'aijsdfioasjdfijasoifja;ijfewoi',
          }),
          {
            status: 200,
          },
        );
      }
    }

    return new Response(
      JSON.stringify({ success: false, message: 'Invalid email or password' }),
      { status: 400 },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 },
    );
  }
}
