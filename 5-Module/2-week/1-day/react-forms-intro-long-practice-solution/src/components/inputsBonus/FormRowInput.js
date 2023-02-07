import ErrorMessage from "./ErrorMessage";
/*

FormRowInput takes a child Input component, adds an ErrorMessage component, and
wraps them both in a <div> with a class name of 'form-row'.

Passing in multiple input children components will wrap each individual
component in a 'form-row' div and the group in a div of class 'klassName'.

To skip bundling the ErrorMessage, 'skipErrors' can be set to true. (It
defaults to false.) To skip errors when passing in multiple children, skipErrors
must be set to an array with a boolean value for each respective child
component.

*/  

function FormRowInput ({ klassName, skipErrors = false, children }) {
  const inputs = (children instanceof Array) ? (
      <div className={klassName} >
        {children.map ((Component, index) => {
          const { error, hasSubmitted, name } = Component.props;
          return (
            <div className='form-row' key={name}>
              {Component}
              {(!skipErrors || !skipErrors[index]) ? (
                <ErrorMessage error={error} hasSubmitted={hasSubmitted} /> 
              ) : ""}
            </div>
          )
        })}
      </div>) 
    :
      (
          <div className='form-row'>
            {children}
            {!skipErrors ? (
              <ErrorMessage error={children.props.error} 
                            hasSubmitted={children.props.hasSubmitted} /> 
            ) : ""}
          </div>
      );
  return inputs;
}

export default FormRowInput;