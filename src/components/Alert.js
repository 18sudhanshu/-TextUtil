import React from 'react'

export default function Alert(props) {
    //first latter Capital hone ke liyew ye function bna
    const captalized=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)

    }
  return (
    // captalized is used for 1st Latter in Capital
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{captalized(props.alert.type)}</strong> :{props.alert.msg}
      
    </div>
  )
}
