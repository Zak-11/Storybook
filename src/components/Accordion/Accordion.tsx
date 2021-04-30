import React from "react";


export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: string[]
}

//const Template = (args:AccordionPropsType)=> <Accordion { ...args}/>


export function Accordion(props: AccordionPropsType) {

    return <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            { !props.collapsed && <AccordionBody items={props.items}/>}
        </div>

}

 type AccordionTitlePropsType = {
    title: string
    onChange: () => void

}

function AccordionTitle(props: AccordionTitlePropsType)
{return (<h3 onClick={props.onChange}> --- {props.title} ---</h3>)

}

export type AccordionBodyPropsType = {

    items: string[]
}


function AccordionBody(props: AccordionBodyPropsType ) {
    return <ul>
        {props.items.map( i => <li>{i}</li>)}
    </ul>


}


export default Accordion
