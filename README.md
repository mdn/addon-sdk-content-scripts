
This repository contains example add-ons that show how to use content scripts in the Add-on SDK.
Most of these examples are taken from the content scripts documentation: https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts.

Note that although all these examples should work fine and are complete runnable add-ons, they're not intended to be production quality. For example, they might omit error handling or not clean up after themselves.

You're welcome to add more examples! If you do, please update the list below with a link to the example, a very short description of what the example is demonstrating, and a list of the main modules it uses.

**[page-mod-content-script-file](page-mod-content-script-file)**  
Use contentScriptFile to pass a content script stored as a separate file.  

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Loading_content_scripts)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod).

**[page-mod-content-script-insulation](page-mod-content-script-insulation)**
Show how content scripts and page scripts can't directly access each other.
Uses: page-mod.

**[page-mod-content-script-string](page-mod-content-script-string)**
Use contentScript to pass a content script as a string.
https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Loading_content_scripts
Uses: page-mod.

**[page-mod-content-script-two-scripts](page-mod-content-script-two-scripts)**
Use contentScript to pass two content scripts as strings.
Uses: page-mod.

**[page-mod-content-script-two-scripts-jquery](page-mod-content-script-two-scripts-jquery)**
Pass two scripts, one as a file, one as a string.
Uses: page-mod.

**[page-mod-customevent-from-content-script](page-mod-customevent-from-content-script)**
Use custom DOM events to send a message from a content script to a page script.
Uses: page-mod.

**[page-mod-customevent-from-page-script](page-mod-customevent-from-page-script)**
Use custom DOM events to send a message from a page script to a content script.
Uses: page-mod.

**[page-mod-port](page-mod-port)**
Listen for `attach` to get a reference to a page-mod's `worker`, then use `port` to communicate between the main add-on and a content script.
Uses: page-mod.

**[page-mod-port-json](page-mod-port-json)**
Send JSON objects with `port`.
Uses: page-mod.

**[page-mod-unsafewindow](page-mod-unsafewindow)**
Content script using `unsafeWindow` to access variables defined in a page script.
Uses: page-mod.

**[page-mod-windowpostmessage-from-content-script](page-mod-windowpostmessage-from-content-script)
Use `window.postMessage` to send a message from a content script to a page script.
Uses: page-mod.

**[page-mod-windowpostmessage-from-page-script](page-mod-windowpostmessage-from-page-script)
Use `window.postMessage` to send a message from a content script to a page script.
Uses: page-mod.

**[page-worker-button-once](page-mod-windowpostmessage-from-page-script)
Use `port.once()` to receive only the first occurrence of a message.
Uses: page-worker, ui/button/action.

**[page-worker-button-removelistener](page-worker-button-removelistener)
Use `port.removeListener()` to stop listening for messages.
Uses: page-worker, ui/button/action.

**[page-worker-port](page-worker-port)
Use `port` to communicate between the main add-on and a content script.
Uses: page-worker.

**[page-worker-x-domain-iframes](page-worker-x-domain-iframes)
Grant a content script cross-domain privileges, using the `cross-domain-content` option under the [`permissions`](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/package_json#permissions) key, and use that to access content from a different domain inside an iframe.
Uses: page-worker.

**[page-worker-x-domain-xhr](page-worker-x-domain-xhr)
Grant a content script cross-domain privileges, using the `cross-domain-content` option under the [`permissions`](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/package_json#permissions) key, and use that to execute cross-domain XHR. Note that this example requires an API key from the [Met Office DataPoint](http://www.metoffice.gov.uk/datapoint) service.
Uses: page-worker.

**[tabs-button-port](tabs-button-port)
Use `port` to communicate between the main add-on code and a content script.
Uses: tabs, ui/button/action.

**[tabs-cloneinto](tabs-cloneinto)
Use [cloneInto](https://developer.mozilla.org/en-US/docs/Components.utils.cloneInto) to share an object from a content script to a page script.
Uses: tabs.

**[tabs-content-script-options](tabs-content-script-options)
Provide configuration options to a content script with `contentScriptOptions`.
Uses: tabs.

**[tabs-content-script-string](tabs-content-script-string)
Pass a content script as a string.
Uses: tabs.

**[tabs-createobjectin](tabs-createobjectin)
Use [createObjectIn](https://developer.mozilla.org/en-US/docs/Components.utils.createObjectIn) to create a new object in a page script scope, from a content script.
Uses: tabs.

**[tabs-exportfunction](tabs-exportfunction)
Use [exportFunction](https://developer.mozilla.org/en-US/docs/Components.utils.exportFunction) to share an function from a content script to a page script.
Uses: tabs.

**[tabs-port](tabs-port)
Use `port` to communicate between the main add-on code and a content script.
Uses: tabs.
