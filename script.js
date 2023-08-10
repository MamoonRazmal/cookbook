let sample_Talk = [
  "t",
  "u",
  "r",
  "p",
  "e",
  "n",
  "t",
  "i",
  "n",
  "e",
  "a",
  "n",
  "d",
  "t",
  "u",
  "r",
  "t",
  "l",
  "e",
  "s",
];
let whale_talk = [];
let check_Vokals = ["a", "e", "i", "o", "u"];
for (a = 0; a < sample_Talk.length; a++) {
  for (b = 0; b < check_Vokals.length; b++) {
    if ((sample_Talk[a] == check_Vokals[b]) & (sample_Talk[a] === "u")) {
      // whale_talk[b] = [sample_Talk[a]];
      whale_talk.push(sample_Talk[a]);
      whale_talk.push("u");
    } else if ((sample_Talk[a] == check_Vokals[b]) & (sample_Talk[a] === "e")) {
      whale_talk.push("e");
      whale_talk.push(sample_Talk[a]);
    } else if (sample_Talk[a] == check_Vokals[b]) {
      whale_talk.push(sample_Talk[a]);
    }
  }
}

//sample_Talk.foreach((el) =>
//if(el === check_Vokals){
//   console.log(sample_Talk[el]);}
//else{ el == check_Vokals}
for (y = 0; y < whale_talk.length; y++) {
  console.log(whale_talk[y].toUpperCase());
}
