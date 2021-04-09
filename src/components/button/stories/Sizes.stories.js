import ButtonComponent from '../ButtonComponent';

export default {
  title: 'Button/Sizes',
  component: ButtonComponent,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'success', 'error'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
    block: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const SmallButton = Template.bind({});
export const MediumButton = Template.bind({});
export const LargeButton = Template.bind({});

SmallButton.args = {
  color: 'primary',
  size: 'sm',
  children: 'Primary',
};

MediumButton.args = {
  color: 'primary',
  size: 'md',
  children: 'Primary',
};

LargeButton.args = {
  color: 'primary',
  size: 'lg',
  children: 'Primary',
};
