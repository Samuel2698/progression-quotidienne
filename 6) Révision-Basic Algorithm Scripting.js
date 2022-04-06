//!! Il y a plusieurs solutions pour chaque problème, on va voir quelques unes:

//* Convert Celsius to Fahrenheit

function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
 console.log(convertToF(30)); // 86

//* Reverse a String

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) { //! On commence à la fin
      reversedStr += str[i];
    }
    return reversedStr;
  }
  reverseString("hello");


function reverseString(str) {
    return str
      .split("") //! Elle transformera la chaîne en un tableau de caractères
      .reverse() //! prend notre tableau de caractères et les inverse
      .join(""); //! pour remettre la chaîne de caractères comme avant de split()
  }

function inverserMot(str) {
    return str
        .split("")
        .reverse()
        .join("");
}

let resultat = inverserMot("Cristaline");
console.log(resultat); // enilatsirC

function invertirPalabra (str) {
    return str
        .split("")
        .reverse()
        .join("");
}

console.log(invertirPalabra("Hey")); // yeH

//* Factorialize a Number

function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  
  factorialize(5);
  

function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  console.log(factorialize(5)); // 120

//* Find the Longest Word in a String

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
  
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  // 6

//* Return Largest Numbers in Arrays

function largestOfFour(arr) {
    const results = [];
  
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
  
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        } 
      }
      results[i] = largestNumber;
    }
    return results;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  //  [5, 27, 39, 1001]

//* Confirm the Ending

function confirmEnding(str, target) {
    return str.endsWith(target);
  }
  
  console.log(confirmEnding("Bastian", "n")); // true

  function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
  console.log(confirmEnding("Bastian", "m")); // false


//* Repeat a String Repeat a String

function repeatStringNumTimes(str, num) {
    return str.repeat(num);
  }
  
  console.log(repeatStringNumTimes(" abc", 3)); //  abc abc abc

function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";
  
    for (let i = 0; i < num; i++) {
      accumulatedStr += str;
    }
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(str, num) {
    return num < 1 ? ""
    : str + repeatStringNumTimes(str, num - 1);
  }
  
  repeatStringNumTimes("abc", 3);

//* Truncate a String

function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(3, num) + "...";
    } else {
      return str;
    }
  }
  
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  // isket...

function truncateString2(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }
  
  console.log(truncateString2("A-tisket a-tasket A green and yellow basket", 8));
  // A-tisket...

//* Finders Keepers

function findElement(arr, func) {
    return arr.find(func);
    //! find() renvoie la valeur du premier élément qui passe un test
   }
   
   console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
   // 2

function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
  
      if (func(num)) {
        return num;
      }
    }
    return undefined;
  }
  
  findElement([1,2,3,4], num => num % 2 === 0);

//* Boo who

function booWho(bool) {
    return typeof bool === "boolean"; 
  }
  
  console.log(booWho(null)); // false
  console.log(booWho(false)); // true

//! === "boolean" pour les chercher

function booWho2(algo) {
    return typeof algo;
  }
  
  console.log(booWho2(null)); // object
  console.log(booWho2(false)); // bolean
  console.log(booWho2(4)); // number

//* Title Case a Sentence

function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];

    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
// I'm A Little Tea Pot

function vuelveMayuscula(str) {
    const nuevaLetra = str.split(" ");
    const convertidor = [];

    for (let st in nuevaLetra) {
        convertidor[st] = nuevaLetra[st][0].toUpperCase() + nuevaLetra[st].slice(1).toLowerCase();
    }
    return convertidor.join(" ");
}

console.log(vuelveMayuscula("epa chamo, q lo q"));
// Epa Chamo, Q Lo Q

function titleCase(str) {
    return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}

console.log(titleCase("I'm a little tea pot")); 

function nuevaMayuscula(str) {
    return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}
console.log(nuevaMayuscula("tres tristes tigres"));
// Tres Tristes Tigres

//* Slice and Splice







