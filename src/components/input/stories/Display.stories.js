import InputComponent from '../InputComponent';

export default {
  title: 'Input/Display',
  Component: InputComponent,
  // argTypes: {}
};

const Template = (args) => <InputComponent {...args} />;

export const Default = Template.bind({});
export const withPlaceholder = Template.bind({});
export const withErrorMsg = Template.bind({});
export const withHelpfulMsg = Template.bind({});

Default.args = {
  label: 'Search',
};

withPlaceholder.args = {
  label: 'Search',
  placeholder: 'placeholder',
};

withErrorMsg.args = {
  label: 'Search',
  placeholder: 'placeholder',
  inputErrorMsg: 'This is input error message',
};

withHelpfulMsg.args = {
  label: 'Search',
  placeholder: 'placeholder',
  helpfulMsg: 'I hope this message was helpful?',
};
