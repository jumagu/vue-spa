import { mount } from '@vue/test-utils';
import type { RouteLocationNormalizedGeneric } from 'vue-router';

import App from '@/App.vue';
import router from '@/router';

describe('Tests in router', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  test('Should render HomePage when visiting /', async () => {
    await router.isReady();

    expect(wrapper.html()).toContain('Welcome to our web site');
  });

  test('Should render FeaturesPage when visiting /features', async () => {
    await router.replace('/features');
    await router.isReady();

    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');

    await router.replace('/');
    await router.push('/features');

    expect(wrapper.html()).toContain('Master Cleanse Reliac Heirloom');
  });

  test('Should render PricingPage when visiting /pricing', async () => {
    await router.replace('/pricing');
    await router.isReady();

    expect(wrapper.html()).toContain('Flexible');
  });

  test('Should render ContactPage when visiting /contact', async () => {
    await router.replace('/contact');
    await router.isReady();

    expect(wrapper.find('iframe').exists()).toBe(true);
  });

  test('Should redirect to login page when visiting /pokemon without authentication', async () => {
    localStorage.clear();

    await router.replace('/pokemon/70');
    await router.isReady();

    expect(wrapper.find('h1').text()).toBe('Login');
  });

  test('Should redirect to PokemonPage visiting /pokemon with authentication', async () => {
    localStorage.setItem('token', 'ABC-123');

    const pokemonId = 70;

    await router.replace(`/pokemon/${pokemonId}`);
    await router.isReady();

    expect(wrapper.find('h1').text()).toBe(`Pokemon ${pokemonId}`);
    expect(wrapper.html()).toContain(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`,
    );
  });

  test('Should convert the :id segment into number', () => {
    const route: RouteLocationNormalizedGeneric = {
      name: undefined,
      params: { id: '2' },
      matched: [],
      fullPath: '/pokemon/2',
      query: {},
      hash: '',
      redirectedFrom: undefined,
      meta: {},
      path: '',
    };

    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');

    expect(pokemonRoute).toBeTruthy();

    const { id } = (pokemonRoute?.props as any).default(route);

    expect(id).toBe(2);
    expect(typeof id).toBe('number');
  });

  test('Should convert the :id segment into number', () => {
    const route: any = {
      params: { id: '2abc' },
      fullPath: '/pokemon/2',
    };

    const pokemonRoute = router.getRoutes().find((route) => route.name === 'pokemon');

    expect(pokemonRoute).toBeTruthy();

    const { id } = (pokemonRoute?.props as any).default(route);

    expect(id).toBe(1);
    expect(typeof id).toBe('number');
  });
});
