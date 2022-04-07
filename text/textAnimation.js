const underscore = document.getElementById('console')
const ghost = document.getElementById('ghost-active')
const text = document.getElementById('text')

setInterval(()=>{
  if(underscore.style.color === "transparent"){

    underscore.style.color = "black"
  }else{

    underscore.style.color = "transparent"
  }
}, 400)

const write = (word)=>{
  const id = setInterval(()=>{
    const lenghtText = text.textContent.length ||0
    if(lenghtText===word.length){
      clearInterval(id)
      setTimeout(()=>{
        eraser(word, 0)
      }, 1100)
      return true
    }else{
      text.textContent += word[lenghtText]
    }
  },80)
}
//CEO DevFolio,Web Developer,Web Designer,Frontend Developer,Graphic Designer
const getWord = (beforeWord)=>{
  const messages = ["Web Developer", "Web Designer", "Frontend Developer", "Backend Developer"];
  const index=messages.indexOf(beforeWord)
  if(index===messages.length-1){
    return messages[0]
  }
  return messages[index+1]
}
const eraser = (word, count)=>{
  let c = count;
  const id = setInterval(()=>{
    const lenghtText = text.textContent.length ||0
    if(lenghtText===0){
      clearInterval(id)
      const newWord = getWord(word)
      write(newWord)
      return true
    }
    text.textContent = word.substring(0, word.length-c)
    c++
  },30)
}
write("Hello World")


/* 
const title = document.getElementById('title-skills')
const text2 = "Skills&Experience"

let c = 0;

const id = setInterval(()=>{
  const sp =title.children.item(c)
  sp.style.opacity = "1"
  sp.style.animation = "vibrate 3ms linear infinite forwards";
 
  if(c===text2.length-1){
    clearInterval(id)
    return true
  }
  c++
}, 80)
 */

