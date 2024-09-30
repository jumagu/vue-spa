import { shallowMount } from '@vue/test-utils';

import router from '@/router';
import LandingLayout from '@/modules/landing/layouts/LandingLayout.vue';

describe('Tests in <LandingLayout />', () => {
  test('Should be rendered correctly', () => {
    const wrapper = shallowMount(LandingLayout, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('main').exists()).toBe(true);
    expect(wrapper.find('footer').exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true);
  });
});
