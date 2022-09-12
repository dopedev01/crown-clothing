 import './Forminput.scss'
const Forminput=({label,...otherinputoptions})=>{
    return(
        
        
<div className="group">
    {label &&(
<label className={
    `${otherinputoptions.value.length>0? 'shrink':''}
form-input-label`}>
    {label}</label>
    )}
<input className='form-input'{...otherinputoptions}/>
</div>
    )
}

export default Forminput;
