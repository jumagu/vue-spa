import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';
import router from '@/router';

describe('Tests in <App />', () => {
  test('Should be rendered correctly with <RouterView />', () => {
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });

    const routerView = wrapper.findComponent({ name: 'RouterView' });

    expect(routerView.exists()).toBe(true);
  });
});
