import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchResults } from './SearchResults.component';

export default {
  title: 'Components/SearchResults',
  component: SearchResults,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchResults>;

const Template: ComponentStory<typeof SearchResults> = args => <SearchResults {...args} />;

export const NoItems = Template.bind({});
NoItems.args = {
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: [
    {
      id: 1,
      url: '#',
      name: 'Item 1',
    },
    {
      id: 2,
      url: '#',
      name: 'Item 1',
    },
  ],
};
