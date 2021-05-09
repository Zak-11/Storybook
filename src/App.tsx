import React, {useState} from 'react';
import './App.css';
import {Accordion, AccordionBody} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {RatingValueType} from "./components/UncontrolledRating/UncontrolledRating";



function App() {

     let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
     let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
     let [switchOn, setSwitchOn] = useState<boolean>(false)



    return (

        <div className={"App"}>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>


            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                       onClick={AccordionBody}
                       items={[{title:"Dimych",value: 1},
                           {title:"Valera",value: 2},
                           {title:"Viktor",value: 3},
                           {title:"Artem",value: 4}]}/>


            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}




export function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>


}


export default App
