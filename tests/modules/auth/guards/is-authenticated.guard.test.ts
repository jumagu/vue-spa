import type { RouteLocationNormalizedGeneric } from 'vue-router';
import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';

describe('Tests in isAuthenticated Guard', () => {
  const to: RouteLocationNormalizedGeneric = {
    name: undefined,
    params: {},
    matched: [],
    fullPath: '',
    query: {},
    hash: '',
    redirectedFrom: undefined,
    path: '/pokemon/1',
    meta: {},
  };

  const from: any = {};

  const next = vi.fn();

  beforeEach(() => {
    localStorage.clear();
  });

  test('Should redirect to login page if not authenticated', () => {
    isAuthenticatedGuard(to, from, next);

    expect(next).toHaveBeenCalledWith({ name: 'login' });
  });

  test('Should redirect to desired route if authenticated', () => {
    localStorage.setItem('token', 'XYZ-123');

    isAuthenticatedGuard(to, from, next);

    expect(next).toHaveBeenCalledWith();
  });

  test('Should set "last-path" item in localStorage', () => {
    isAuthenticatedGuard(to, from, next);

    const lastPath = localStorage.getItem('last-path');

    expect(lastPath).toBe(to.path);
  });

  // localStorage spy
  test('Should set "last-path" item in localStorage - spies', async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');

    isAuthenticatedGuard(to, from, next);

    expect(setItemSpy).toHaveBeenCalledWith('last-path', to.path);
  });

  test('Should redirect to desired route if authenticated - spies', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockReturnValue('XYZ-123');

    isAuthenticatedGuard(to, from, next);

    expect(next).toHaveBeenCalledWith();
  });
});
