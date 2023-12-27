export function validateGeorgianLetters(value) {
    const georgianLetters = /^[\u10D0-\u10F0\s]+$/u
    return georgianLetters.test(value);
}