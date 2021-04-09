import ButtonComponent from '../ButtonComponent';

export default {
  title: 'Button/Colors',
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

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Error = Template.bind({});

Primary.args = {
  color: 'primary',
  size: 'md',
  children: 'Primary',
};

Secondary.args = {
  color: 'secondary',
  size: 'md',
  children: 'Secondary',
};

Success.args = {
  color: 'success',
  size: 'md',
  children: 'Success',
};

Error.args = {
  color: 'error',
  size: 'md',
  children: 'Error',
};
