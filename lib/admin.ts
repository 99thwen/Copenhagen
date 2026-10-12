
export const ADMIN_UID = "1va1Xyc8q3QLdy5cGkXUqrIoqH83";

export function isAdminUser(uid: string | null | undefined) {
  return uid === ADMIN_UID;
}
