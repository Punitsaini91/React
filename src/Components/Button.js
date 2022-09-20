import Button  from "@mui/material/Button"
export const InputButton=({title,fn})=>{
    const buttonClicked = (event)=>{
        //console.log(event.target.innerText);
        var val = event.target.innerText;
        fn(val);
        //event - click
        // target - button
        // value - button value
    }

    return(<Button onClick={buttonClicked} variant="contained">{title}</Button>)
}