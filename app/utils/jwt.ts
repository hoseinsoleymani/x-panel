import { jwtVerify } from 'jose';

export const jwtSecretKey = () => {
  const secretKey = new TextEncoder().encode(
    'Swe4g7c?UBm5Nrd96vhsVDtkyJFbqKMTm!TMw5BDRLtaCFAXNvbq?s4rGKQSZnUP',
  );

  return secretKey;
};

export async function verifyToken(token: string) {
  try {
    const decodedToken = await jwtVerify(token, jwtSecretKey());
    const isExpired = isTokenExpired(decodedToken);

    return !isExpired;
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

function isTokenExpired(decodedToken) {
  const currentTime = Math.floor(Date.now() / 1000);

  if (decodedToken) {
    return decodedToken.payload.exp <= currentTime;
  }

  return true;
}
