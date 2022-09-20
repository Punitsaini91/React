import TextField from '@mui/material/TextField';
export const Output = ({expression})=>{
    return (<div>
        <TextField  value={expression} id="outlined-basic" label="" variant="outlined" />
        {/* <input type='text' value={expression} placeholder = 'Type Expression'/> */}
    </div>)
}