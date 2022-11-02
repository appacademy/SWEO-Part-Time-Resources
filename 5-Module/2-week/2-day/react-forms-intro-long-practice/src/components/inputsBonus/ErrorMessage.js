function ErrorMessage ({ error, hasSubmitted }) {
  return (
    <p className="error-message"> 
        {(hasSubmitted && error) ? error : undefined} 
    </p>
  )
}

export default ErrorMessage;
