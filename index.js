// import {words} from "words.js"; 
// //console.log(words);


// var original=words[Math.floor(Math.random() * words.length)];
// console.log(original);
// https://drive.google.com/file/d/1RJQM-rI-WCZj-LahWfNtvL3auIvtrNW1/view?usp=share_link
// https://drive.google.com/uc?export=view&id=1RJQM-rI-WCZj-LahWfNtvL3auIvtrNW1
var my_words=null
var original=null
async function random_word()
{
    const response=await fetch("http://127.0.0.1:5500/words_list.json")
    my_words=await response.json()
    console.log(my_words.values)
    var rand_word = my_words.values[Math.floor(Math.random() * my_words.values.length)]
    console.log("inside function = ",rand_word)
    original=rand_word
    // console.log(rand_word)
}
// const response=fetch("http://127.0.0.1:5500/words_list.json")

// // var my_words=response.json()
// console.log(response)
//word = my_words[Math.floor(Math.random() * my_words.length)]

function check_true(word,row)
{
    var word_in_list=my_words.values.indexOf(word);
    if(word_in_list == -1)
    {
        // //row=row-1;
        // for(let i=row*6;i<(row+1)*6;i++)
        // {
        //     console.log("row == ",i)
        //     var wrong_entry=document.getElementById(i);
        // }
        // return 0
        for(var i=0;i<word.length;i++)
        {
            var wrong_val=document.getElementById((row*6)+i+1);
            console.log("inside wrong_data");
            // //wrong_val.style.backgroundColor="blue";
            // wrong_val.classList.add("transition","delay-150","-translate-x-1");
            // wrong_val.classList.add("transition","delay-150","translate-x-0");
            // // wrong_val.classList.remove("bg-blue-500");
            // // wrong_val.classList.add("border-red-500");
            // // wrong_val.classList.add("duration-75");

        }        
    }    
    else
    {    
        var used=[0,0,0,0,0,0]; //6letter zero for checking if the wo rds used or not
        let match=0;
        for(var i=0;i<word.length;i++)
        {
            var box_val=document.getElementById((row*6)+i+1);
            if(original[i] == word[i])
            {
                console.log("inside");
                used[i]=1;
                box_val.style.backgroundColor="green";
                match=match+1;
            }
        }
        if(match == 6)
        {
            return 1
        }
        console.log(used);
        for(var i=0;i<word.length;i++)
        {    
                var box_val=document.getElementById((row*6)+i+1);
                var colour=0;

                //checking if the word is somewhere in the original word 
                for(var j=0;j<word.length;j++)
                {
                    if(original[j] == word[i] && used[j]==0)
                    {
                        console.log("inside 2");
                        box_val.style.backgroundColor="brown";  
                        used[j]=1;
                        colour=1;

                    }
                }
                console.log(used);

                //changing colour to gray if the word is not present
                if(colour == 0 && used[i]==0)
                {
                    box_val.style.backgroundColor="gray";
                }
        }
        return 0;
    }
}    




var keyboard=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','enter','z','x','c','v','b','n','m','del'];
var line=`<div>`;
for(var i=0;i<10;i++)
{
    line=line+`<button id="${keyboard[i]}" class="rounded-lg w-[3rem] h-[3rem] border-2 border-gray-700 mx-1.5 my-1 hover:bg-gray-500">${keyboard[i].toUpperCase()}</button>`;
}
line=line+`</div><div class="ml-9">`;
for(var i=10;i<19;i++)
{
    line=line+`<button id="${keyboard[i]}" class="rounded-lg w-[3rem] h-[3rem] border-2 border-gray-700 mx-1.5 my-1 hover:bg-gray-500">${keyboard[i].toUpperCase()}</button>`;
}
line=line+`</div><div>`;
for(var i=19;i<28;i++)
{
    if(keyboard[i]=="enter" || keyboard[i]=="del")
    {
    line=line+`<button id="${keyboard[i]}" class="rounded-lg w-[5rem] h-[3rem] border-2 border-gray-700 mx-1.5 my-1 hover:bg-gray-500">${keyboard[i].toUpperCase()}</button>`;
    }
    else
    {
    line=line+`<button id="${keyboard[i]}" class="rounded-lg w-[3rem] h-[3rem] border-2 border-gray-700 mx-1.5 my-1 hover:bg-gray-500">${keyboard[i].toUpperCase()}</button>`;
    }
}
line=line+`</div>`;
var key=document.getElementById("keys");
key.innerHTML=line;

random_word() // callikng the random word function
// original=random_word()
// console.log(original)
var box=`<div class="flex px-[10px] py-[10px] m-0.5">`;
id=1;
for(var i=0;i<5;i++)
{
    for(var j=0;j<6;j++)
    {
        box=box+`<div id="${id}" class="flex items-center justify-center bg-gray-300 w-[3.5rem] h-[3.5rem] px-[10px] py-[10px] m-1 text-xl font-medium"></div>`;
        id=id+1;
    }
    if(i<4)
    {
        box=box+`</div><div class="flex px-[10px] py-[10px] m-0.5">`
    }
    else
    {
        box=box+`</div>`;
    }
}
entry=document.getElementById("entry");
entry.innerHTML=box;

// //event listner for keys
// document.addEventListener(
//     'keydown',
//     (event) => {
//       var name = event.key;
//       // Alert the key name and key code on keydown
//       console.log(name);
      
//       if (name == 'Backspace') {
//         //backspace(word);
//       }
//       else
//       {
//         inp.innerHTML=`<p>${name}</p>`;
//         //addition(word);
//       } 
//     },
//     false
//   );   

// for(var choice=0;choice<5;choice++)
// {
//     var x=6*choice+1;
//     console.log("x == ",x);
//     var id_val=x;
//     var word="";
//     while(id_val<=x+6)
//     {
//         var x=false;
//         while(x==false)
//         {
//             //event listner for keys
//             // document.addEventListener(
//             //     'keydown',
//             //     (event) => {
//             //     var name = event.key;
//             //     // Alert the key name and key code on keydown
//             //     console.log(name);
                
//             //     if (name == 'Backspace') {
//             //         //backspace(word);
//             //         word=word.slice(0,word.length-1);
//             //         console.log(word);
//             //         id_val--;
//             //         x=true;
//             //     }
//             //     else
//             //     {
//             //         //inp.innerHTML=`<p>${name}</p>`;
//             //         //addition(word);
//             //         console.log("id_val == ",id_val);
//             //         var inp=document.getElementById(id_val);
//             //         id_val++;
//             //         console.log(id_val);
//             //         word=word+name;
//             //         x=true;

//             //     } 
//             //     },
//             //     false
//             // );   
//         }
//         id_val++;
//     }
//     }

var row=0;
var col=0;
var word="";
// console.log("outside row = col = ",row," ",col);
// if((row+1)*6 == col)
// {console.log("game ends");}
document.addEventListener(
    'keydown',
    (event) => {
    var name = event.key;
    // Alert the key name and key code on keydown
    console.log(name);
    
    if (name == 'Backspace' && col>0 ) {
        document.getElementById('del').classList.add('bg-gray-300');
        if(row==col/6 -1)
        {
            console.log("row col == ",row," ",col)
            //backspace(word);
            var inp=document.getElementById(col);
            inp.innerHTML="";
            word=word.slice(0,word.length-1);
            console.log(word);
            col--;
        }
        else if(col%6 != 0) //reason for this condition is to not go back to previous rows and delete that data
        {

            console.log("row col == ",row," ",col)
            //backspace(word);
            var inp=document.getElementById(col);
            inp.innerHTML="";
            word=word.slice(0,word.length-1);
            console.log(word);
            col--;

        }
    }
    else if(word.length == 6)
    {
        if(name=='Enter')
        {
            document.getElementById('enter').classList.add('bg-gray-300');
            var check_val=check_true(word,row);
            console.log(word);
            if(check_val==1)
            {
                console.log("you've won");
            }
            if(check_val == 0)
            {
                row=row+1;
                word="";
            }  
            if((row)*6 == col)  
            {console.log("game ends")}
        }
        // console.log(word);
        // row=row+1;
        // word="";
    }
    else
    {
        if(col<(row+1)*6 && name>="a" && name<="z")
        {
            document.getElementById(name).classList.add('bg-gray-300');    
            console.log("inside else part row col =",row," ",col)    
            name=name.toLocaleUpperCase();
            //inp.innerHTML=`<p>${name}</p>`;
            //addition(word);
            var inp=document.getElementById(col+1);
            console.log("input = ",inp);
            inp.innerHTML=name;
            console.log("id_val == ",col);
            col++;
            console.log(col);
            word=word+name;
            console.log(word);
        }
        // else if(col+1 == (row+1)*6)
        // {   
            
        //     row=row+1;
        //     col=col+1;
        // }


    } 
    },
    false
);
document.addEventListener(
    'keyup',
    (event) => {
    var name=event.key;
    if(name == "Backspace")
    {
        document.getElementById('del').classList.remove('bg-gray-300');
    }
    else if(name == "Enter")
    {
        document.getElementById('enter').classList.remove('bg-gray-300');
    } 
    else if(name>="a" && name<="z")
    {
        document.getElementById(name).classList.remove('bg-gray-300');
    }     
    console.log("inside")    
    // highlight.style.backgroundColor="transparent"
    },
    false
);   

