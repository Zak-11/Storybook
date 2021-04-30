import React, {useState} from 'react';
import {Story} from "@storybook/react";
import Accordion, {AccordionPropsType} from "./Accordion";
import {actions} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,

}
const callback = actions//("accordion mode change event fired")



const Template: Story<AccordionPropsType> = (args) => < Accordion {...args} />;
const callbacksProps = {
    onChange: callback
}
export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "MENU",
    collapsed:true,
    items: []
}

export const UnCollapsedMode= Template.bind({})
UnCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "USERS",
    collapsed:false,
    items: ["Dimych", "Valera", "Artem", "Viktor"]
}



export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion  titleValue ={ "USERS"} collapsed={true} onChange={() => setValue(!value)} items={ ["Dimych", "Valera", "Artem", "Viktor"]}/>

}
