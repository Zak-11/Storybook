import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


function App(props: any) {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)


    return (

        <div className={"App"}>
            <UncontrolledRating />
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>




            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>


            <OnOff on={switchOn} onChange={(on) => {setSwitchOn(on)}}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}




            {/*
            <UncontrolledAccordion titleValue={"Menu"}/>


            {/*
             <Rating value={3}/>
*/}


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}


function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>


}


export default App
