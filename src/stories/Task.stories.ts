import type { Meta, StoryObj } from '@storybook/react';
import Task, { TaskProps } from '../mycomponents/Task';
import "../index.css";

const meta = {
    title: "LuiComponents/Task",
    component: Task,
    parameters: {
        layout: "centered",
    }
} satisfies Meta<typeof Task>;

export default meta

type Story = StoryObj<typeof meta>

export const Incomplete: Story = {
    args: {
        title: "Sweep the kitchen",
        description: "Get under the cabinets, do a good job.",
        isComplete: false
    }
}

export const Complete: Story = {
    args: {
        title: "Laundry",
        description: "Wash, dry, fold, and put away the clothes and linens.",
        isComplete: true
    }
}