window.setupObserver = function (node) {
const config = { childList: true, characterData: true, childListOldValue: true, characterDataOldValue: true };
function observerCallback(mutationsList) {
    mutationsList.forEach(mutation => {
        console.log ("mutation type: ", mutation.type);
      if (mutation.addedNodes.length > 0) console.log("added: ", mutation.addedNodes[0].textContent);
      if (mutation.removedNodes.length > 0) console.log("removed: ", mutation.removedNodes[0].textContent);
      
      }); // forEach

      //observer.disconnect();
      };

let observer = new MutationObserver(observerCallback );
observer.observe(node, config);
} // setupObserver

window.message = function (text) {
console.log (text);
  /*$("#observe").appendChild(
document.createTextNode(text)
);

$("#observe").appendChild(document.createElement("br"));
*/
  } // message

  