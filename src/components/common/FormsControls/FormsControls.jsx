import React from "react";
import mod from "./FormsControls.module.css"

const formsControl = (tag) => ({input,meta,...props}) => {

    const hasError = meta.error && meta.touched;

    return (

        <div className={hasError ? mod.warning : ""}>
            <div> {React.createElement(tag, {...input, ...props})}</div>
            {hasError && <span className={mod.errorMessage}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = formsControl("textarea")
export const Input = formsControl("input")