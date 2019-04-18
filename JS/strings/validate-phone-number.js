function validate(phoneNumber) {
  if (phoneNumber > 8 || phoneNumber < 7) {
    return false;
  }
  for (var i = 0; i < phoneNuber.length; i ++) {
    if  (phoneNumber.length === 8 && phoneNumber.charAt(i) !== '-') {
      return false;
    } else if (phoneNumber.length === 7 && isNaN(phoneNumber.charAt(i))) {
      return false;
    }
  } else if (isNaN(phoneNumber.charAt(i))) {
    return false;
  }
}
return true;
}
