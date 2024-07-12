import React from 'react'

export default function Alert(props) {
    const cap = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}style={{ padding: '1rem 1rem' }} role="alert">
  <strong>{cap(props.alert.type)}</strong>: {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" ></button> */}
</div>
  )
}
