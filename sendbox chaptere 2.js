const password = '444passw@&&&&';

if (password.length > 12 && password.includes('@')) {  // Check if the password is strong
    console.log("That password might be strong");
} else if (password.length >= 8 || password.includes('@')) {  // Use OR (||) for checking either condition
    console.log("That password is long enough!");
} else {
    console.log("That password is too short!");
}

