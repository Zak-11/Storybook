import React, {useState} from 'react';
import {Rating, RatingPropsType} from "./Rating";
import {RatingValueType} from "../UncontrolledRating/UncontrolledRating";
import {Story} from "@storybook/react";


export default {
    title: 'Rating stories',
    component: Rating,

}

const Template: Story<RatingPropsType> = (args) => <Rating {...args} />;

export const EmptyStars  = Template.bind({});
EmptyStars.args = {
    value:1,
    onClick:x=>x
};


export const Rating1  = Template.bind({});
Rating1.args = {
    value:1,
    onClick:x=>x
};


export const Rating2  = Template.bind({});
Rating2.args = {
    value:1,
    onClick:x=>x
};

export const Rating3  = Template.bind({});
Rating3.args = {
    value:1,
    onClick:x=>x
};

export const Rating4 = Template.bind({});
Rating4.args = {
    value:1,
    onClick:x=>x
};

export const Rating5 = Template.bind({});
Rating5.args = {
    value:1,
    onClick:x=>x
};

export const ChangeRating = () => {
    const [rating,setRating] = useState<RatingValueType>(3)
    return<Rating value={rating} onClick={setRating}/>
}
