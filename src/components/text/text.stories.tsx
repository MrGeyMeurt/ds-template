import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['heading', 'subheading', 'body'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'heading',
    content: 'Here is a text component',
  },
}