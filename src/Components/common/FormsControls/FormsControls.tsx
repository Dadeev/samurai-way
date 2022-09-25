import React from 'react';
import style from './FormsControls.module.css'

export const FormControl = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${style.formControl} ${hasError && style.error}`}>
            <div>
                {props.type === 'input'
                    ? <input {...input} {...props}/>
                    : <textarea {...input} {...props}/>}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};
