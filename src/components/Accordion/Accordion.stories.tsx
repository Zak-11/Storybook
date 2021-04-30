import React, {useState} from 'react';
import {Story} from "@storybook/react";
import Accordion, {AccordionPropsType} from "./Accordion";
import {actions} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,

}

const onClickCallback = actions


const Template: Story<AccordionPropsType> = (args) => < Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    onChange: actions,
    titleValue: "MENU",
    collapsed:true,
    items: [],
    onClick: onClickCallback
}

export const UnCollapsedMode= Template.bind({})
UnCollapsedMode.args = {
    onChange: actions,
    titleValue: "USERS",
    collapsed:false,
    items: [{title:"Dimych",value: 1},
        {title:"Valera",value: 2},
        {title:"Viktor",value: 3},
        {title:"Artem",value: 4}],
    onClick: onClickCallback
}



export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion  titleValue ={ "USERS"} collapsed={value}
                       onChange={() => setValue(!value)}
                       items={ [{title:"Dimych",value: 1},
                                {title:"Valera",value: 2},
                                {title:"Viktor",value: 3},
                                {title:"Artem",value: 4}]}


                       onClick={(id) => {alert(`user with ID ${id} should be happy`)} } />

}
