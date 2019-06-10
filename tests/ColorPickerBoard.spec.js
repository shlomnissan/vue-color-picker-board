import { mount } from '@vue/test-utils';
import ColorPickerBoard from '../src/ColorPickerBoard.vue';

describe('ColorPickerBoard', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ColorPickerBoard)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
});