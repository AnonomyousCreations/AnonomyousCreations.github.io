const ScrollElements = document.getElementsByClassName("ExperienceNode");

for (let i = 0; i < ScrollElements.length; i++) {

    const element = ScrollElements[i];
    const focusElement = element.querySelector(".Experience");

     element.onmouseenter = () =>
     {     
         
          focusElement.ontransitionend = () => {
               console.log("Transition ended");
               focusElement.scrollIntoViewIfNeeded();
          }
          
     }
}
