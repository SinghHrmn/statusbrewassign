import type { Meta, StoryObj } from '@storybook/angular';
import {
  COLOR_GRID_ITEMS,
  COLOR_GRID_ITEM_SIZES,
  ColorGridItemComponent,
} from './item.component';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ColorGridItemComponent> = {
  component: ColorGridItemComponent,
  title: 'ItemComponent',
};
export default meta;
type Story = StoryObj<ColorGridItemComponent>;

export const Primary: Story = {
  name: 'Selectable',
  args: {
    value: COLOR_GRID_ITEMS[0],
    size: COLOR_GRID_ITEM_SIZES[0],
    checked: false,
  },
  argTypes: {
    value: {
      control: 'select',
      options: COLOR_GRID_ITEMS,
    },
    size: {
      control: 'radio',
      options: COLOR_GRID_ITEM_SIZES,
    },
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    const item = await canvas.findByRole('option')
    await userEvent.click(item);
    expect(item).toHaveAttribute('aria-selected', "true");
  }
};

export const Secondary: Story = {
  name: 'Disabled Item',
  args: {
    value: COLOR_GRID_ITEMS[0],
    size: COLOR_GRID_ITEM_SIZES[0],
    checked: false,
    disabled: true
  },
  argTypes: {
    value: {
      control: 'select',
      options: COLOR_GRID_ITEMS,
    },
    size: {
      control: 'radio',
      options: COLOR_GRID_ITEM_SIZES,
    },
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    const item = await canvas.findByRole('option')
    await userEvent.click(item);
    expect(item).toHaveAttribute('aria-selected', "false");
  }
};
