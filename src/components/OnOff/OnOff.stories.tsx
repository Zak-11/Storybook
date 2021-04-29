import React, {useState} from 'react';
import {OnOff, PropsType} from "./OnOff";
import {Story} from "@storybook/react";





export default {
    title: 'OnOff',
    component: OnOff,

}

const Template: Story<PropsType> = (args) => <OnOff {...args} />;


export const OnMode = Template.bind({})
OnMode.args = {on:true, onChange: a=>a}

export const OffMode= Template.bind({})
OffMode.args = {on:false, onChange: a=>a}



export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>

}
