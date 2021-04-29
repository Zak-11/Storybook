import React from 'react';
import {Story} from "@storybook/react";
import  {AccordionPropsType} from "./UncontrolledAccordion";
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,

}

const Template: Story<AccordionPropsType> = (args) => < UncontrolledAccordion {...args} />;

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {

    titleValue: "MENU",


}

export const UnCollapsedMode = Template.bind({})
UnCollapsedMode.args = {
    titleValue: "USERS",


}


export const ModeChanging = () => {

    return < UncontrolledAccordion titleValue={"USERS"}/>

}
