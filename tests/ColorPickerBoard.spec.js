import { shallowMount } from '@vue/test-utils';
import ColorPickerBoard from '../src/ColorPickerBoard.vue';

describe('ColorPickerBoard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ColorPickerBoard);
  });

  it("is vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("renders correctly", () => {
    expect(wrapper.vm.$el).toMatchSnapshot();
  });

  describe(":props", () => {
    it(":width", () => {
      wrapper.setProps({ width: 100 });
      expect(wrapper.find("#canvas").attributes('width')).toEqual("100");
    });

    it(":height", () => {
      wrapper.setProps({ height: 100 });
      expect(wrapper.find("#canvas").attributes('height')).toEqual("100");
    });

    it(":defaultColor", () => {
      const wrapper = shallowMount(ColorPickerBoard, {
        propsData: {defaultColor: "#FF00AA"}
      });
      expect(wrapper.find("#canvas").element.style.backgroundColor).toEqual("rgb(255, 0, 170)");
    });
  });

  describe("@events", () => {
    it("@onSelection", () => {
      wrapper.find('#canvas').trigger('click');
      expect(wrapper.emitted()["onSelection"]).toBeTruthy();
    });
  });
});