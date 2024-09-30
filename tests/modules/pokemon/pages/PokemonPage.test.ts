import { mount, RouterLinkStub } from '@vue/test-utils';

import PokemonPage from '@/modules/pokemon/pages/PokemonPage.vue';

describe('Tests in <PokemonPage />', () => {
  const id = 25;

  const wrapper = mount(PokemonPage, {
    props: { id },
    global: {
      stubs: {
        // Stubs a component for components under testing.
        RouterLink: RouterLinkStub,
      },
    },
  });

  test('Should be rendered correctly', () => {
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    );
  });

  test('Should redirect to the next pokemon', () => {
    const link = wrapper.findComponent(RouterLinkStub);

    expect(link.props().to).toEqual({ name: 'pokemon', params: { id: 26 } });
  });
});
