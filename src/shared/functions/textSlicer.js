
const textSlicer = (text = "", length = 10, isUseDot) => {

    let slicedText = text.slice(0, length)

    if(isUseDot && text.length > length) {
        slicedText = `${slicedText}...`
    }
    return slicedText
};

const slicer = (text, length = 100) => {
  const textArray = text.split(" ");
  const replaceElement = [",", "|", "।"]

  let characterCount = 0;
  let newText = ''

  textArray.forEach((word, index) => {
    characterCount += word.length
 
    const nextWord = textArray[index + 1] 
    let lastWord = false
    if ( nextWord && (characterCount + nextWord.length) > length) {
      lastWord = true
    }
    if (characterCount <= length) {
      let modifyWord = ` ${word}` 
      if (lastWord) {
        let lastCharacter = modifyWord[modifyWord.length - 1]  
        replaceElement.forEach((ele) => {
          lastCharacter = lastCharacter.replace(ele, "")
        }) 
        modifyWord =   modifyWord.replace(/.$/, lastCharacter)
      }
      newText += modifyWord
    }
  });

export default textSlicer;