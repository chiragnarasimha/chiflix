import React from 'react'
import { useEffect } from 'react'

function tests() {
    useEffect (() => {
const identifier = setTimeout(() {
console. log ('Checking form validity!');
setFormIsValid (emailIsValid && passwordIsValid);
}, 500);
return ( ) => {
console. log ('CLEANUP');
clearTimeout (identifier) ;
};
}, [emailIsValid, passwordIsValid]);
    
  return (
    <div>tests</div>
  )
}

export default tests