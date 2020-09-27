"use strict";

// const one = "I";
// const twenty = "XX";


const convert = (x) => {

  const input = document.getElementById('input');
  x = Number(input.value);

  let a = Math.floor(x/1000)*1000;
  let b = Math.floor(x/100)*100 - a;
  let c = Math.floor(x/10)*10 - (a+b);
  let d = x - (a+b+c);

  let result = "";

  if (x > 3999) {
    result = "The number has to be smaller than 3999";
  }
  
  if (a == 3000) {
    result += "MMM";
  }

  if (a == 2000) {
    result += "MM";
  }

  if (a == 1000) {
    result += "M";
  }

  if (a == 0) {
    result += "";
  }

  if (b == 900) {
    result += "CM";
  }

  if (b == 800) {
    result += "DCCC";
  }

  if (b == 700) {
    result += "DCC";
  }

  if (b == 600) {
    result += "DC";
  }

  if (b == 500) {
    result += "D";
  }

  if (b == 400) {
    result += "CD";
  }

  if (b == 300) {
    result += "CCC";
  }

  if (b == 200) {
    result += "CC";
  }

  if (b == 100) {
    result += "C";
  }

  if (b == 0) {
    result += "";
  }

  if (c == 90) {
    result += "XC";
  }

  if (c == 80) {
    result += "LXXX";
  }

  if (c == 70) {
    result += "LXX";
  }

  if (c == 60) {
    result += "LX";
  }

  if (c == 50) {
    result += "L";
  }

  if (c == 40) {
    result += "XL";
  }

  if (c == 30 ) {
    result += "XXX";
  }

  if (c == 20) {
    result += "XX";
  }

  if (c == 10) {
    result += "X";
  }

  if (c == 0) {
    result += "";
  }

  if (d == 9) {
    result += "IX";
  }

  if (d == 8) {
    result += "VIII";
  }

  if (d == 7) {
    result += "VII";
  }

  if (d == 6) {
    result += "VI";
  }

  if (d == 5) {
    result += "V";
  }

  if (d == 4) {
    result += "IV";
  }

  if (d == 3) {
    result += "III";
  }

  if (d == 2) {
    result += "II";
  }

  if (d == 1) {
    result += "I";
  }

  if (d == 0) {
    result += "";
  }


 const output = document.getElementById('output');
  output.textContent = result;

}


const input = document.getElementById('input');
input.addEventListener('change', convert);