import ButtonComponent from '../ButtonComponent';

export default {
  title: 'Button/States',
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
    loading: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const DisabledButton = Template.bind({});
export const LoadingButton = Template.bind({});

DisabledButton.args = {
  color: 'primary',
  size: 'md',
  children: 'Primary',
  disabled: true,
};

LoadingButton.args = {
  color: 'primary',
  size: 'md',
  children: 'Loading',
  loading: true,
};
