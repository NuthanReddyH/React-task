export const validate = values => {
    const errors = {}
    if (!values.personName) {
      errors.personName = 'Person Name is Required'
    } else if (values.personName.length < 2) {
      errors.personName = 'Minimum be 2 characters or more'
    }
    if(!values.personAddress) {
        errors.personAddress = 'Address is Required'
    }
    
    return errors
  }