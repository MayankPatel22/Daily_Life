function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbol){
    const Lowercase = "abcdefghijklmnopqrstuvwxyz";
    const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Number = "0123456789";
    const Symbol = "!@#$%^&*_+";

    let allowed = "";
    let password = "";

    allowed += includeLowercase ? Lowercase: "";
    allowed += includeUppercase ? Uppercase: "";
    allowed += includeNumbers ? Number: "";
    allowed += includeSymbol ? Symbol: "";

    console.log(allowed);

    if(length <= 0){
       return `(password length must be 1)`
    }

    if(allowed.length===0){
       return `(At least 1 set of character need to be selected)`;
    }

    for(let i=0;i<length;i++){
       const RandomInd = Math.floor(Math.random()*allowed.length);
       password += allowed[RandomInd];
    }

    return password;

}
  const passwordLength = 12;
  const includeLowercase = true;
  const  includeUppercase = true;
  const includeNumbers = true;
  const includeSymbol = true;

const password = generatePassword(passwordLength,
   includeLowercase,
   includeUppercase,
   includeNumbers,
   includeSymbol);

console.log(`Generated password: ${password}`);