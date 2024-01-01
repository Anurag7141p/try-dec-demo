import * as Yup from 'yup';

export const signinValidation = Yup.object({
    loginep: Yup.string()
        .matches(
            /^(?:\d{10}|[^\s@]+@[^\s@]+\.[^\s@]+)$/,
            'Invalid email or phone number'
        )
        .required('Please enter a valid email or phone number'),
    Newpassword: Yup.string()
        .min(5, 'Password must be at least 5 characters')
        .required('Please enter a password'),
});

export const signupValidation = Yup.object({
    name: Yup.string().min(3).required("please enter name"),
    phone: Yup.string().min(10).required("please enter phone number"),
    email: Yup.string().email("please Enter Valid email").required("please enter Email"),
    Newpassword: Yup.string().min(5).required("please enter password"),
    cpassword: Yup.string().oneOf([Yup.ref("password")], "password not matched").required("please enter password"),
    loginep: Yup.string()
        .matches(/^[0-9]+$/, 'Invalid email or phone number') // Check if it's a phone number
        .email('Invalid email or phone number') // Check if it's an email
        .required('Please enter a valid email or phone number'),
})
export const HomeValidation = Yup.object({
    storename: Yup.string().min(5, "Storename must be at least 5 characters")
        .trim()
        .required("Please enter Storename"),
    address: Yup.string()
        .required("Please enter address"),
    district: Yup.string().min(3, 'District must be at least 3 characters').required("Please enter District"),
    country: Yup.string().min(3, 'country must be at least 3 characters').required("Please enter Country"),
    state: Yup.string().min(3, 'state must be at least 3 characters').required("Please enter state"),
    pincode: Yup.string().min(6, 'Pincode must be at least 6 characters').required("Please enter pincode"),
    pancard: Yup.string()
        .trim()
        .min(7, 'Pancard must be at least 7 characters')
        .required('Please enter Pancard Number')
        .test('uppercase', 'Pancard must be in uppercase', (value) => {
            if (value !== undefined && value !== null) {
                return value === value.toUpperCase();
            }
            return true;
        }),

    // AddProduct validation
    productname: Yup.string().min(3, 'state must be at least 3 characters').required("Please enter product name"),
    productspe: Yup.string().min(3, 'state must be at least 3 characters').required("Please enter product specification"),
    amount: Yup.string().min(3, 'state must be at least 3 number').required("Please enter amount"),
    discount: Yup.string().min(2, 'state must be at least 2 number').required("Please enter number"),
    dec: Yup.string().min(3, 'state must be at least 3 characters').required("Please enter"),



});
