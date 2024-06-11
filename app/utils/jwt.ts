import { jwtVerify } from 'jose';

export const jwtSecretKey = () => {
  const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY ?? '');

  return secretKey;
};

export interface Payload {
  iat: number;
  exp: number;
}

export async function verifyToken<T extends Payload>(token: string) {
  try {
    const { payload } = await jwtVerify<T>(token, jwtSecretKey());
    // const isExpired = isTokenExpired(decodedToken);

    return payload;
  } catch (error) {
    console.error('Error while verifying token:', error);
    return false;
  }
}

export async function checkPermission(token: string) {
  try {
    const decodedToken = await jwtVerify(token, jwtSecretKey());
    const userRole = decodedToken.payload.role;

    return userRole === 'admin';
  } catch (error) {
    console.error('Error while checking permission:', error);
    return false;
  }
}

function isTokenExpired(decodedToken: any) {
  const currentTime = Math.floor(Date.now() / 1000);

  if (decodedToken) {
    return decodedToken.payload.exp <= currentTime;
  }

  return true;
}
