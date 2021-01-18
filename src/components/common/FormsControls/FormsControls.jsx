import React from "react";
import mod from "./FormsControls.module.css"

const formsControl = (tag) => ({input,meta,...props}) => {

    const hasError = meta.error && meta.touched;

    return (

        <div className={hasError ? mod.warning : ""}>
            {React.createElement(tag, {...input, ...props})}
            {hasError && <div><span className={mod.errorMessage}>{meta.error}</span></div>}
        </div>
    )
}

export const Textarea = formsControl("textarea")
export const Input = formsControl("input")