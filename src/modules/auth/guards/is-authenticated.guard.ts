import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric,
} from 'vue-router';

const isAuthenticatedGuard = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext,
) => {
  localStorage.setItem('last-path', to.path);
  const token = localStorage.getItem('token');

  if (!token) next({ name: 'login' });
  else next();
};

export default isAuthenticatedGuard;
