export const formatInputForUrl = (input) => {
    //remove leading and trailing white space
    input = input.trim();
    input = input.replaceAll(" ", "%");
    return input
};