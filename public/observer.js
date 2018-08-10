window.setupObserver = function (node) {
const $ = document.querySelector.bind(document);
const config = { childList: true, subtree: true, characterData: true, childListOldValue: true, characterDataOldValue: true };
function observerCallback(mutationsList) {
    mutationsList.forEach(mutation => {
let result = "";
console.log(mutation);
      if (mutation.addedNodes.length > 0) result += `added:  ${mutation.addedNodes[0].textContent} `;
      if (mutation.removedNodes.length > 0) result += `removed: ${mutation.removedNodes[0].textContent}`;

	message(result);
}); // forEach

      //observer.disconnect();
      };

let observer = new MutationObserver(observerCallback );
observer.observe(node, config);
return observer;

function message (text) {
//console.log (text);
  $("#observe").innerHTML = `${text}<br>`;

  } // message

  } // setupObserver

