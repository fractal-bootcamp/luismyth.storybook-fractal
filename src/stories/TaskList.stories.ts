import type { Meta, StoryObj } from '@storybook/react';
import { TaskList, defaultTaskListProps } from '../mycomponents/TaskList';
import "../index.css";

const meta = {
    title: "LuiComponents/TaskList",
    component: TaskList,
    parameters: {
        layout: "centered",
    }
} satisfies Meta<typeof TaskList>;

export default meta

type Story = StoryObj<typeof meta>

export const SimpleList: Story = {
    args:  defaultTaskListProps
}
