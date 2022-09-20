import { Button } from "@mui/material";
export const Operation = ({fn})=>{
    return (
        <Button variant="contained" color="success" onClick={()=>{
        fn();
    }}> = </Button>)
}
    