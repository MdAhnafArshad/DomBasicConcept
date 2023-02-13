console.log('what iis this')

// alert('hello')


 //get the parent Element-1 step
 const hello= document.getElementById('myParent')
 // create the tag Element step-2
 const myNewList = document.createElement('h2')
 //create the header -3
 myNewList.innerText = 'My list header'
 // inject the element dynamically -4
 hello.appendChild(myNewList)




// ---------------------------------------------------------------------------------
 // create and element with a new thing  use on css with a dom.
 const myTags = document.getElementsByTagName('li')
       
 for (const tag of myTags) {
     console.log(tag.style.border = '1px solid skyblue')
     console.log(tag.style.listStyle = 'none')
     console.log(tag.style.margin = '10px')
     console.log(tag.style.textAlign = 'center')
     console.log(tag.style.padding = '10px')
     console.log(tag.style.color = 'green')
 }

 const myParents = document.getElementById('myParent')
 const div = document.createElement('div')
 const h3 = document.createElement('h3')
 h3.innerText = 'Hello MY name is sara. Nice to meet you.'
 div.appendChild(h3)
 myParents.appendChild(div)
 h3.style.color = 'red'
 h3.style.fontSize = '5.5em'
 h3.style.fontWeight = '5.5em'



//  -----------------------------------------------------------------------------------
// create a new count btn
    document.getElementById('box').style.border = '1px solid blue'
    document.getElementById('box').style.margin = '10px'
    document.getElementById('box').style.padding = '10px'
    document.getElementById('box').style.textAlign = 'center'
    // declare the value
    let value = 0
        //add the count number
    const addBtn = document.getElementById('add')
    addBtn.addEventListener('click' , function(){
        value += 1;
        document.getElementById('display').innerText = value;
    })
    //subtract the count number
    const subtractBtn = document.getElementById('subtract').addEventListener('click' , function(){
        value -= 1
        document.getElementById('display').innerText = value;
    })
    

// -------------------------------------------------------------------------------
 //create the new textBox

//  const commentBox = document.getElementById('commentSection')
//  console.log(commentBox.innerText)