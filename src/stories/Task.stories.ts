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
        title: 'sweep the kitchen',
        description: 'get under the cabinets, do a good job',
        isComplete: false
    }
}

export const Complete: Story = {
    args: {
        title: 'sweep the kitchen',
        description: 'get under the cabinets, do a good job',
        isComplete: true
    }
}