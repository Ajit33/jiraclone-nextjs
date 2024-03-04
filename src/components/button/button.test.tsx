'use client'
interface ButtonProps{
onClick:()=>void;
}



export const Button = (props: ButtonProps) => {
    const { onClick} = props;
    const handeler=()=>{
        console.log("hey")
    }
  if(!onclick) return  <button onClick={handeler} data-testid="button-test">Button</button>
    return (
        <button onClick={onClick} data-testid="button-test">Button</button>
    )
}