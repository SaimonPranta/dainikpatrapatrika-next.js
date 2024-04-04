
const textSlicer = (text = "", length = 10, isUseDot) => {

    let slicedText = text.slice(0, length)

    if(isUseDot && text.length > length) {
        slicedText = `${slicedText}...`
    }
    return slicedText
};

export default textSlicer;