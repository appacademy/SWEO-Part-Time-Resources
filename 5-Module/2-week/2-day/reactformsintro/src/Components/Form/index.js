import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [bio, setBio] = useState('');
    const [phoneType, setPhoneType] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [staff, setStaff] = useState('');
    const [checked, setChecked] = useState('');

    const phoneTypes = [
        'Home',
        'Work',
        'Mobile'
    ]
    console.log("***name:", name)
    const validate = () => {
        const validationErrors = [];

        if (!name) validationErrors.push('Please provide a Name');

        // I found this regex to match email addresses! It'll get used below
        const regex = /^(?!\.)[\w+\-.]+(?<!\.)@[\w-]+(\.[a-z\d-]+)*\.[a-z]+$/i
        if (!email) {
            validationErrors.push('Please provide an Email');
        }
        // trim off whitespace, see if it matches that mess of regex
        else if (!email.trim().match(regex)) validationErrors.push('Please provide a valid Email');

        // phone validators
        if (phone) { // if its not empty...
            // In the following regex pattern, /\D/ matches any non-digit character.
            // The 'g' flag at the pattern's end signals to match the pattern
            // globally, i.e., replace all instances in phoneDigits, not just the
            // first one.
            let phoneDigits = phone.replace(/\D/g, '');
            if (phoneDigits.length !== 10) {
                validationErrors.push('Please provide a 10-digit Phone number');
            }
        }
        if (phone && !phoneType) { // if there's a phone number, and not a type...
            validationErrors.push('Please select a Phone type');
        }

        if (bio.length > 280) { // No more than 280 chars
            validationErrors.push('Please write a shorter Bio (you have ' + bio.length + ' chars)');
        }
        return validationErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();

        if (errors.length > 0) return setValidationErrors(errors);

        const formInformation = {
            name,
            email,
            phone,
            phoneType,
            bio,
            staff,
            checked
        };
        window.alert("Form Submitted! See console for output")
        console.log(formInformation);
        setName('');
        setEmail('');
        setPhone('');
        setPhoneType('');
        setBio('');
        setStaff('');
        setChecked('');
        setValidationErrors([]);
    };
    return (
        <div className='container'>
            <h2>User Information</h2>
            {validationErrors.length > 0 && (
                <div className='errors'>
                    The following errors were found:
                    <ul>
                        {validationErrors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label htmlFor='name'>Name (required): </label>
                    <input
                        id='name'
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='email'>Email (required):</label>
                    <input
                        id='email'
                        type='text'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='phone'>Phone:</label>
                    <input
                        id='phone'
                        type='text'
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                    <br />
                    <select
                        name='phoneType'
                        onChange={e => setPhoneType(e.target.value)}
                        value={phoneType}
                    >
                        <option value='' disabled>Select a phone type...</option>
                        {phoneTypes.map(phoneType =>
                            <option key={phoneType}>{phoneType}</option>
                        )}
                    </select>
                </div>
                <div className='form-row'>
                    <label htmlFor='bio'>Short Bio (280 chars):</label>
                    <textarea
                        id='bio'
                        name='bio'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    />
                </div>
                <div className='form-row'>
                    <input type="radio" value="Instructor"
                        name="staff" id='staff-instructor'
                        checked={staff === "Instructor" ? "checked" : ""}
                        onChange={(e) => setStaff(e.target.value)}
                    /> Instructor
                    <input type="radio" value="Student"
                        name="staff" id='staff-Student'
                        checked={staff === "Student" ? "checked" : ""}
                        onChange={(e) => setStaff(e.target.value)}
                    /> Student
                    <br />
                    <input type="checkbox" value="yes" id='checked'
                        onChange={({ target: { value, checked } }) => {
                            setChecked((checked ? value : ""))
                        }
                        }
                        checked={checked === '' ? '' : "checked"}
                    /> Sign up for our email list?
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}