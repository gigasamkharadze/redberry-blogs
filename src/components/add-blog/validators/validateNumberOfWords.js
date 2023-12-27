export function validateNumberOfWords(value, numberOfWords) {
    const wordsArr = value.split(" ").filter(word => word !== "");
    return wordsArr.length >= numberOfWords;
}