'use client'

import { ReactNode } from "react";

interface ButtonProps{
onClick:()=>void,
primary?:Boolean,
label?:String,
size?:String,

}
export const Button = (props: ButtonProps) => {
    const { onClick,primary,label,size} = props;
    return (
        <button onClick={onClick} data-testid="button-test">{label}</button>
    )
}
 
