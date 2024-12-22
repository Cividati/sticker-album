const inputProps = {
    wrapperClass: 'mb-4 mx-5 w-100',
    labelClass: 'text-white',
    label: 'Email',
    id: 'formControlLg',
    type: 'email',
    size: 'lg',
    style: { backgroundColor: 'transparent', color: 'white' }
};

<MDBInput {...inputProps} />




import React, { useState } from 'react'
const CustomInput = ({ ...props }) => {

    return (
        <>
            <div className="input_wrapp">
                <div className='input_container'>
                    {props.icon &&
                        <div className="input_icon">
                            {props.icon}
                        </div>
                    }

                    <input
                        type={text}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        name={props.name}
                    />

                </div>
            </div>
        </>
    )
}


export default CustomInput 

