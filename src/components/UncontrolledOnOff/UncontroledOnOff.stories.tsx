import React from 'react';
import {Story} from "@storybook/react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {actions} from "@storybook/addon-actions";
import {OnOffPropsType} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}
const callback = actions

const Template: Story<OnOffPropsType> = (args) => <UncontrolledOnOff {...args} />;

export const UnOnMode = Template.bind({})
UnOnMode.args = {
    onChange: callback,
    defaultOn: true
}

export const OffMode= Template.bind({})
OffMode.args = {
    onChange:callback,
    defaultOn: false
}



export const ModeChanging = () => {
    return <UncontrolledOnOff onChange={callback}/>
}
