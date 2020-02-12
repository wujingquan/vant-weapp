import Page from '../../common/page';

Page({
  data: {
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    checkboxLabel: true,
    checkboxSize: true,
    checkboxShape: true,
    list: ['a', 'b', 'c'],
    list1: [
      {
        text: 'a',
        disabled: false,
      },
      {
        text: 'b',
        disabled: false,
      },
      {
        text: 'c',
        disabled: false,
      }
    ],
    result: ['a', 'b'],
    result2: [],
    result3: [],
    activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
    inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
    isDisabled: false
  },

  onChange(event) {
    const { key } = event.currentTarget.dataset;
    this.setData({ [key]: event.detail });
  },

  onClick(event) {
    const { value } = event.currentTarget.dataset;
    this.setData({
      radio3: value
    });
  },

  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },

  noop() {},

  disabled() {
    console.log('disabled');
    this.setData({
      isDisabled: true
    });
  },

  enable() {
    console.log('enable');
    this.setData({
      isDisabled: false
    });
  },

  disabledSigle() {
    this.setData({
      ['list1[1].disabled']: true
    });
  },

  enableSigle() {    
    this.setData({
      ['list1[1].disabled']: false
    });
  }
});
