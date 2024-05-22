import type { Meta, StoryObj } from '@storybook/angular';
import { ColorGridSelectComponent } from './color-grid-select.component';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { COLOR_GRID_ITEMS, COLOR_GRID_ITEM_SIZES } from './item';

const KEY_OPTIONS = {
  bubbles: true,
  cancelable: true,
};

const arrowUpKeyboardEvent = new KeyboardEvent('keydown', {
  ...KEY_OPTIONS,
  keyCode: 38,
  key: 'ArrowUp',
});

const arrowDownKeyboardEvent = new KeyboardEvent('keydown', {
  ...KEY_OPTIONS,
  keyCode: 40,
  key: 'ArrowDown',
});

const arrowLeftKeyboardEvent = new KeyboardEvent('keydown', {
  ...KEY_OPTIONS,
  keyCode: 37,
  key: 'ArrowLeft',
});

const arrowRightKeyboardEvent = new KeyboardEvent('keydown', {
  ...KEY_OPTIONS,
  keyCode: 39,
  key: 'ArrowRight',
});

const meta: Meta<ColorGridSelectComponent> = {
  component: ColorGridSelectComponent,
  title: 'ColorGridSelectComponent',
  args: {
    value: COLOR_GRID_ITEMS[0],
    itemSize: COLOR_GRID_ITEM_SIZES[0],
  },
  argTypes: {
    value: {
      control: 'select',
      options: COLOR_GRID_ITEMS,
    },
    itemSize: {
      control: 'radio',
      options: COLOR_GRID_ITEM_SIZES,
    },
    valueChange: { action: 'valueChange' },
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  // render: (args) => ({
  //   props: args,
  //   template: `
  //   <brew-color-grid-select
  //     [value]="value"
  //     [itemSize]="itemSize"
  //     [valueChange]="valueChange($event)"
  //   />

  //   <button>Submit</button>
  // `,
  // }),
};
export default meta;
type Story = StoryObj<ColorGridSelectComponent>;

export const Primary: Story = {
  name: 'Small Mobile',
  args: {
    items: [
      '#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57',
      '#33FFBD', '#33DBFF', '#3375FF', '#5733FF', '#BD33FF',
      '#FF33DB', '#FF3375'
    ],
    itemSize: 'medium',
    disabled: false
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    // Find the first color item by its aria-label
    const firstItem = await canvas.findByRole('option', { name: '#FF5733' });

    // Focus on the first item
    await userEvent.click(firstItem);
    expect(firstItem).toHaveFocus();

    // Navigate right
    firstItem.dispatchEvent(arrowRightKeyboardEvent)
    const secondItem = await canvas.findByRole('option', { name: '#FFBD33' });
    expect(secondItem).toHaveFocus();

    // Navigate down
    await secondItem.dispatchEvent(arrowDownKeyboardEvent);
    const seventhItem = await canvas.findByRole('option', { name: '#33FFBD' });
    expect(seventhItem).toHaveFocus();

    // Navigate up
    seventhItem.dispatchEvent(arrowUpKeyboardEvent);
    expect(secondItem).toHaveFocus();

    // Navigate left
    secondItem.dispatchEvent(arrowLeftKeyboardEvent);
    expect(firstItem).toHaveFocus();
  },
};


export const Secondary: Story = {
  name: 'Large Mobile',
  args: {
    items: [
      '#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57',
      '#33FFBD', '#33DBFF', '#3375FF', '#5733FF', '#BD33FF',
      '#FF33DB', '#FF3375'
    ],
    itemSize: 'medium',
    disabled: false
  },
  parameters: {
    viewport: { defaultViewport: 'mobile2' },
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    // Find the first color item by its aria-label
    const firstItem = await canvas.findByRole('option', { name: '#FF5733' });

    // Focus on the first item
    await userEvent.click(firstItem);
    expect(firstItem).toHaveFocus();

    // Navigate right
    firstItem.dispatchEvent(arrowRightKeyboardEvent)
    const secondItem = await canvas.findByRole('option', { name: '#FFBD33' });
    expect(secondItem).toHaveFocus();

    // Navigate down
    await secondItem.dispatchEvent(arrowDownKeyboardEvent);
    const seventhItem = await canvas.findByRole('option', { name: '#33DBFF' });
    expect(seventhItem).toHaveFocus();

    // Navigate up
    seventhItem.dispatchEvent(arrowUpKeyboardEvent);
    expect(secondItem).toHaveFocus();

    // Navigate left
    secondItem.dispatchEvent(arrowLeftKeyboardEvent);
    expect(firstItem).toHaveFocus();
  },
};
