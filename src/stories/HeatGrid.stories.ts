import type { Meta, StoryObj } from '@storybook/react';
import { defaultHeatGridProps, HeatGrid } from '../mycomponents/HeatGrid';
import '../index.css';

const meta = {
    title: "Lui Components/HeatGrid",
    component: HeatGrid,
} satisfies Meta<typeof HeatGrid>;

export default meta

type Story = StoryObj<typeof meta>

export const ExampleHeatGrid: Story = {
    args: {...defaultHeatGridProps}
}

// export const DumbHeatGrid: Story = {};