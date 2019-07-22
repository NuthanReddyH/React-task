export const validate = values => {
    const errors = {}
    if (!values.companyName) {
      errors.companyName = 'Company Name is Required'
    } else if (values.companyName.length < 2) {
      errors.companyName = 'Minimum be 2 characters or more'
    }
    if(!values.address) {
        errors.address = 'Address is Required'
    }
    if(!values.revenue) {
        errors.revenue = 'Revenue is Required'
    } else if(!values.revenue.match(/^[0-9]*$/)) {
        errors.revenue = 'Enter a valid revenue and it must be a number';
    }
    if(!values.phone) {
        errors.phone = 'Phone is Required'
    } else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.phone)) {
        errors.phone = 'Enter a valid phone number'
    }
    return errors
  }