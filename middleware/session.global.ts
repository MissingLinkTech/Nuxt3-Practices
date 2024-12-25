import { generateId } from "~/utils/strings";

export interface Session {
  id: string;
  createdAt: string;
}

export default defineNuxtRouteMiddleware(() => {
  /** create a unique session id for each visitor to track feedback */
  const session = useCookie("session");
  if (!session.value) {
    const newSession: Session = {
      id: generateId(),
      createdAt: new Date().toISOString(),
    };
    session.value = JSON.stringify(newSession);
  }
});
