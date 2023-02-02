import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchResultsItem } from './SearchResultsItem.component';

export default {
  title: 'Components/SearchResults/SearchResultsItem',
  component: SearchResultsItem,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SearchResultsItem>;

const Template: ComponentStory<typeof SearchResultsItem> = args => <SearchResultsItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  url: '#',
  name: 'Search result item',
};
