import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchForm } from './SearchForm.container';

export default {
  title: 'Components/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onSearch: {
      action: 'onSearch',
    },
  },
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = args => <SearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
