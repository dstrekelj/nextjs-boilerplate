import { ComponentMeta, ComponentStory } from '@storybook/react';
import { rest } from 'msw';
import mockSearchShowsResponse from '@/stories/mocks/search-shows.json';
import { Search } from './Search.container';

export default {
  title: 'Containers/Search',
  component: Search,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [
        rest.get('/api/shows', (req, res, ctx) => {
          return res(ctx.delay(2000), ctx.json(mockSearchShowsResponse));
        }),
      ],
    },
  },
  argTypes: {
    onChange: {
      action: 'onChange',
    },
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => <Search />;

export const Default = Template.bind({});
Default.args = {};
