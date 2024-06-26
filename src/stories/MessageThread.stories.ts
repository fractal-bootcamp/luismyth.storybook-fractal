import type { Meta, StoryObj } from '@storybook/react';
import { MessageThread, defaultMessageThreadProps } from '../mycomponents/MessageThread';
import '../index.css';

const meta = {
    title: "Lui Components/ MessageThread",
    component: MessageThread,
} satisfies Meta<typeof MessageThread>;

export default meta

type Story = StoryObj<typeof meta>

export const ExampleThread: Story = {
    args: {messages: defaultMessageThreadProps}
}

const sandwichedMessageThreadProps = [...defaultMessageThreadProps]

sandwichedMessageThreadProps.push(...defaultMessageThreadProps)

sandwichedMessageThreadProps.push(defaultMessageThreadProps[2])
sandwichedMessageThreadProps.push(defaultMessageThreadProps[2])
sandwichedMessageThreadProps.push(defaultMessageThreadProps[2])


export const ThreadWithSandiwichedMessage: Story = {
    args: {messages: sandwichedMessageThreadProps}
}