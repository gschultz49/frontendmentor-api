// files don't necessarily need an extension
// const checkExtension = fileName => {
//   const extensionRegex = /.[0-9a-z]+$/i;
  
//   const possibleExtension = fileName.match(extensionRegex)[0];
//   console.log(possibleExtension);
//   if (!(possibleExtension.length > 1)) {
//     console.warn(`Extension not found on file: ${fileName}`);
//     return false;
//   } else {
//     return true;
//   }
// };

const checkLeadingSlash = fileName => {
  if (fileName[0] === "/" || fileName[0] === "\\" || fileName[0] === ".") {
    console.warn(`Bad leading character: "${fileName[0]}"`);
    return false;
  }
  return true;
};

const fileFormatIsValid = (fileName: string) => {
  let fileIsValid = true;

  // fileIsValid = checkExtension(fileName);
  fileIsValid = checkLeadingSlash(fileName);

  return fileIsValid;
};

export const isValidImage = (fileName: string) => {
  if (fileFormatIsValid(fileName)) {
    return fileName;
  } else {
    console.warn("File format is invalid");
  }
};
