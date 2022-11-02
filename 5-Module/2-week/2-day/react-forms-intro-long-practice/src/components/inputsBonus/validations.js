const isValidEmail = (email) => {
  return email.trim()
              .match(/^(?!\.)[\w+\-.]+(?<!\.)@[\w-]+(\.[a-z\d-]+)*\.[a-z]+$/i); 
}

const isValidPhone = (phone) => {
  let phoneDigits = phone.replace(/\D/g,'');
  return (phoneDigits.length === 10);
}

export const validateName = (name) => {
  if (!name)
    return ['Please provide a Name'];
  return [];
}

export const validateEmail = (email) => {
  if (!email)
    return ['Please provide an Email'];
  else if (!isValidEmail(email))
    return ['Please provide a valid Email'];
  return [];
}

export const validatePhone = (phone) => {
  if (phone && !isValidPhone(phone)) 
    return ['Please provide a 10-digit Phone number'];
  return [];
}

export const validateBio = (bio) => {
  if (bio.length > 280)
    return ['Please write a shorter Bio (you have ' + bio.length + ' chars)'];
  return [];
}