export function validateEmail(email) {
    const emailRegex = /@redberry.ge$/
    return emailRegex.test(email)
}