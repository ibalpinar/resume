/**
 * I got this script from Stack Overflow user John Friend's answer to
 * a question. You can reach him on GitHub with the username jfriend00.
 * But I don't know if the script belongs to him or not.
 * https://github.com/jfriend00
 *
 * BTW this function's complexity is 17, and must be simplify.
*/

(function(functionName, baseObject) {
   // The public function name defaults to window.documentReady
   // but you can pass in your own object and own function name and those will be used
   // if you want to put them in a different namespace
   functionName = functionName || "documentReady";
   baseObject = baseObject || window;
   var readyList = [];
   var readyFired = false;
   var readyEventHandlersInstalled = false;

   // call this when the document is ready
   // this function protects itself against being called more than once
   function ready() {
       if (!readyFired) {
           // this must be set to true before we start calling callbacks
           readyFired = true;
           for (var i = 0; i < readyList.length; i++) {
               // if a callback here happens to add new ready handlers,
               // the documentReady() function will see that it already fired
               // and will schedule the callback to run right after
               // this event loop finishes so all handlers will still execute
               // in order and no new ones will be added to the readyList
               // while we are processing the list
               readyList[i].fn.call(window, readyList[i].ctx);
           }
           // allow any closures held by these functions to free
           readyList = [];
       }
   }

   function readyStateChange() {
       if ( document.readyState === "complete" ) {
           ready();
       }
   }

   // This is the one public interface
   // documentReady(fn, context);
   // the context argument is optional - if present, it will be passed
   // as an argument to the callback
   baseObject[functionName] = function(callback, context) {
       if (typeof callback !== "function") {
           throw new TypeError("callback for documentReady(fn) must be a function");
       }
       // if ready has already fired, then just schedule the callback
       // to fire asynchronously, but right away
       if (readyFired) {
           setTimeout(function() {callback(context);}, 1);
           return;
       } else {
           // add the function and context to the list
           readyList.push({fn: callback, ctx: context});
       }
       // if document already ready to go, schedule the ready function to run
       if (document.readyState === "complete") {
           setTimeout(ready, 1);
       } else if (!readyEventHandlersInstalled) {
           // otherwise if we don't have event handlers installed, install them
           if (document.addEventListener) {
               // first choice is DOMContentLoaded event
               document.addEventListener("DOMContentLoaded", ready, false);
               // backup is window load event
               window.addEventListener("load", ready, false);
           } else {
               // must be IE
               document.attachEvent("onreadystatechange", readyStateChange);
               window.attachEvent("onload", ready);
           }
           readyEventHandlersInstalled = true;
       }
   }
})("documentReady", window);
