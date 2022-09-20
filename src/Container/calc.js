import { Typography } from "@mui/material"
import { useState } from "react"
import { InputButton } from "../Components/Button"
import { Operation } from "../Components/Operation"
import { Output } from "../Components/output"
import Button from '@mui/material/Button';

export const  Calc=()=>{
    const [expression , setExpression ]= useState("");
    const takeValue = (val)=>{
        setExpression(expression+val);
        //expression += val; // expression = expression + val;
        console.log('Expression is ',expression);
    }
    const solveExpression = ()=>{
        setExpression(eval(expression));
    }
    const clearExpression=()=>{
        setExpression(" ")
    }
    return(
    <div >
        <div>

      
       <Typography variant="h2" component="h3">
            calc App
       </Typography>
        <Output  expression = {expression}/>

<table className="centre" >
    <tbody>
        <tr>
            <td><InputButton fn={takeValue} title="(" /></td>
            <td><InputButton fn={takeValue} title=")" /></td>
            <td><InputButton fn={takeValue} title="%" /></td>
            <td><Button variant="contained" color="error" onClick={clearExpression}> CLR </Button></td>
        </tr>
        <tr>
            <td><InputButton fn={takeValue} title="9" /></td>
            <td><InputButton fn={takeValue} title="9" /></td>
            <td><InputButton fn={takeValue} title="9" /></td>
            <td><InputButton fn={takeValue} title="+" /></td>
        </tr>
        <tr>
            <td><InputButton fn={takeValue} title="6" /></td>
            <td><InputButton fn={takeValue} title="5" /></td>
            <td><InputButton fn={takeValue} title="4" /></td>
            <td><InputButton fn={takeValue} title="-" /></td>
        </tr>
        <tr>
            <td><InputButton fn={takeValue} title="3" /></td>
            <td><InputButton fn={takeValue} title="2" /></td>
            <td><InputButton fn={takeValue} title="1" /></td>
            <td><InputButton fn={takeValue} title="*" /></td>
        </tr>
        <tr>
            <td><InputButton fn={takeValue} title="0" /></td>
            <td><InputButton fn={takeValue} title="." /></td>
            <td><InputButton fn={takeValue} title="/" /></td>
            <td><Operation fn={solveExpression}/></td>
        </tr>
    </tbody>
</table>
</div>
    </div>)
}