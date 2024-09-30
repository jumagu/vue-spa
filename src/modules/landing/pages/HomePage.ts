import {
  onUpdated,
  onMounted,
  onActivated,
  onUnmounted,
  onDeactivated,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  defineComponent,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  ref,
} from 'vue';

export default defineComponent({
  setup: () => {
    const counter = ref(0);

    console.log('setup');

    onMounted(() => {
      console.log('onMounted');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    onActivated(() => {
      console.log('onActivated');
    });
    onDeactivated(() => {
      console.log('onDeactivated');
    });

    return {
      counter,
    };
  },
});
