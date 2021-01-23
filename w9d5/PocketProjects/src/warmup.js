
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement("p");
    const pText = document.createTextNode(string);//creates like a text element
    if (htmlElement.children.length !== 0){
        Array.from(htmlElement.children).forEach((child) => {
           htmlElement.removeChild(child) 
        })
    }
    p.appendChild(pText);//adds the text into the p element
    htmlElement.appendChild(p);//inserts p into the htmlElement given
};

htmlGenerator("I <3 Vanilla DOM manipulation.", partyHeader);