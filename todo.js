let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");


btn.addEventListener("click", function(){   //when ever button will be clicked then our given fun defn will be executed
    let item=document.createElement("li");  // creting new element(li) which is going to be added in web page
    item.innerText=inp.value;               //the data of li will come from input given by user in input box
    ul.appendChild(item);                   // we have to place this li inside ul
    inp.value="";                           // clearing the input box value after it is listed in web page
   

    let item2=document.createElement("button");  //attaching delete button with each new li created and giving its a name-delete and class-delete
    item2.innerText="delete";
    item2.classList.add("delete");
    item.appendChild(item2);

    
})


let bt=document.querySelectorAll(".delete");  //here bt is an collection of objects

for(b of bt){
b.addEventListener("click", function(){
    let parent=this.parentElement;         // accessing paremt(li), because we have to delete whole that li
    parent.remove();
})}

//here we are not able to delete the new items listed ,with the help of delete button 
// reason is that , the event listners are only for existing elements not for the new elements created
// chatgpt - By default, event listeners in JavaScript are attached to elements that exist when the code is executed. This means if you create new elements dynamically after the initial event listener setup, those new elements won't automatically have the event listeners attached.
// solution - event delegation => chatgpt--Event delegation is a way to handle events efficiently in JavaScript, especially when you have many elements that might need the same event handler, or when elements are added dynamically.
//Imagine you're hosting a party, and instead of greeting each guest individually at the door, you stand in the main room. As people enter, you greet them all from one spot, no matter where they come in. This way, you don't need a greeter at every entrance—you can manage everything from a central place.
//in JavaScript, event delegation works the same way. Instead of attaching an event listener to every single element (like every guest), you attach the listener to a common parent element (like the main room). When an event happens (like a click), it bubbles up from the target element to the parent, where it gets handled. This way, you can manage events for many elements more easily and efficiently.

// in simple term , we will apply the  event listner for the parent element initially only such that it can be automaticaaly work for new child element. we are using the concept of event bubbling