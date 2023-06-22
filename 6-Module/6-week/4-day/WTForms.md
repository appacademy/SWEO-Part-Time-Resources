# Using WTForms with React for Server-Side Validations

WTForms is a great library for form handling and validation on the server-side. While WTForms does its job well in a traditional HTML form based web application, when it comes to a modern frontend framework like React, which is primarily JavaScript-based and operates asynchronously, WTForms can only provide server-side validation.

React handles forms on its own using a state and controlled components. So, when you submit a form in React, you typically send a POST request to the server with your form data. Server-side, you can use WTForms to validate this data. If the validation fails, you can return the error messages in your response and handle these error messages in React.

Here is an oversimplified example of how you could handle this:

**Flask route:**

```python
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import Form, StringField, validators

app = Flask(__name__)
db = SQLAlchemy(app)

class MyForm(FlaskForm):
    name = StringField('name', [validators.Length(min=4, max=25)])

@app.route('/submit', methods=['POST'])
def submit():
    form = MyForm(request.json)
    if form.validate():
        # If the form data is valid, you can save it to the database.
        return jsonify(success=True)
    else:
        return jsonify(success=False, errors=form.errors)
```

In the above Flask route, we're using `request.json` to bind incoming JSON data to the form. The `validate()` function is then used to check if the form data is valid according to our rules. If it's not, we return a JSON response with the error messages.


**CSRF in `__init__.py`**

```Python
from flask_wtf.csrf import CSRFProtect, generate_csrf

@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response

```

Since we are using a FlaskForm, we have CSRF protection on our forms.  The code above handles adding the CSRF token to the users.  When you use CSRF protection, your form will include a hidden field that contains the CSRF token. When the form is submitted, the server checks that this field is present and has the correct value. If not, the form submission is rejected as potentially malicious.


**React form:**

```jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { someThunk } from "../../store/someStore";

const MyForm = () => {
  const [name, setName] = useState("");
 const sessionUser = useSelector((state) => state.session.user)
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await dispatch(someThunk(name));

      if (!response.data.success) {
        setErrors(response.data.errors);
      } else {
        // Form submission was successful.
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        {errors.name && <div>{errors.name}</div>}
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default MyForm;
```

In this React component, we're sending a POST request to the `/submit` endpoint with the form data when the form is submitted. If the server responds with errors, we're setting them in the component state and displaying them in the form.

Remember, when dealing with forms in a SPA (Single Page Application) like React, it's generally good practice to include client-side validation as well. This provides a better user experience as you can instantly validate and give feedback on form fields without making a round trip to the server. However, never rely only on client-side validation as it can be easily bypassed. Server-side validation is a must for data integrity and security.
