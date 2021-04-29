import React, {useState} from 'react';
import {RatingValueType, UncontrolledRating} from "./UncontrolledRating";
import {actions} from "@storybook/addon-actions";
import {Rating} from "../Rating/Rating";


export default {
    title: 'UncontrolledRating',
    component:UncontrolledRating,

}


export const ChangeRating = () => {
    const [rating,setRating] = useState<RatingValueType>(3)
    return<Rating value={rating} onClick={setRating}/>
}


export const EmptyStars = () => <UncontrolledRating defaultValue={0} onChange={ actions }/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={actions}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={actions}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3}  onChange={actions}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4}  onChange={actions}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={actions}/>

