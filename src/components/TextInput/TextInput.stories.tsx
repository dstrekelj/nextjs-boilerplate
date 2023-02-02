import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextInput } from './TextInput.component';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onChange: {
      action: 'onChange',
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
