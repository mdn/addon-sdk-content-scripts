
This repository contains example add-ons that show how to use content scripts in the Add-on SDK.
Most of these examples are taken from the content scripts documentation: https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts.

Note that although all these examples should work fine and are complete runnable add-ons, they're not intended to be production quality. For example, they might omit error handling or not clean up after themselves.

You're welcome to add more examples! If you do, please update the list below with a link to the example, a very short description of what the example is demonstrating, and a list of the main modules it uses.

## Index of examples

**[page-mod-content-script-file](page-mod-content-script-file)**  
Use contentScriptFile to pass a content script stored as a separate file.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Loading_content_scripts)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-content-script-insulation](page-mod-content-script-insulation)**  
Show how content scripts and page scripts can't directly access each other.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Accessing_the_DOM)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-content-script-string](page-mod-content-script-string)**  
Use contentScript to pass a content script as a string.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Loading_content_scripts)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-content-script-two-scripts](page-mod-content-script-two-scripts)**  
Use contentScript to pass two content scripts as strings.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Loading_content_scripts)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-content-script-two-scripts-jquery](page-mod-content-script-two-scripts-jquery)**  
Pass two scripts, one as a file, one as a string.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Loading_content_scripts)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-customevent-from-content-script](page-mod-customevent-from-content-script)**  
Use custom DOM events to send a message from a content script to a page script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts#Content_script_to_page_script_2)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-customevent-from-page-script](page-mod-customevent-from-page-script)**  
Use custom DOM events to send a message from a page script to a content script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts#Page_script_to_content_script_2)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-port](page-mod-port)**  
Listen for `attach` to get a reference to a page-mod's `worker`, then use `port` to communicate between the main add-on and a content script.
Uses: page-mod.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Accessing_port_in_the_add-on_script)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-port-json](page-mod-port-json)**  

Send JSON objects with `port`.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#JSON-serializable_values)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-unsafewindow](page-mod-unsafewindow)**  
Content script using `unsafeWindow` to access variables defined in a page script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts#Access_objects_defined_by_page_scripts)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-windowpostmessage-from-content-script](page-mod-windowpostmessage-from-content-script)**  
Use `window.postMessage` to send a message from a content script to a page script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts#Using_the_DOM_postMessage_API)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-mod-windowpostmessage-from-page-script](page-mod-windowpostmessage-from-page-script)**  
Use `window.postMessage` to send a message from a content script to a page script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts#Using_the_DOM_postMessage_API)
* Modules used: [`page-mod`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod)

**[page-worker-button-once](page-worker-button-once)**  
Use `port.once()` to receive only the first occurrence of a message.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#port.once%28%29)
* Modules used: [`page-worker`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-worker), [`ui/button/action`](https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/ui_button_action)


**[page-worker-button-removelistener](page-worker-button-removelistener)**  
Use `port.removeListener()` to stop listening for messages.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#port.removeListener%28%29)
* Modules used: [`page-worker`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-worker), [`ui/button/action`](https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/ui_button_action)

**[page-worker-port](page-worker-port)**  
Use `port` to communicate between the main add-on and a content script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Accessing_port_in_the_add-on_script)
* Modules used: [`page-worker`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-worker)

**[page-worker-x-domain-iframes](page-worker-x-domain-iframes)**  
Grant a content script cross-domain privileges, using the `cross-domain-content` option under the [`permissions`](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/package_json#permissions) key, and use that to access content from a different domain inside an iframe.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Cross_Domain_Content_Scripts)
* Modules used: [`page-worker`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-worker)

**[page-worker-x-domain-xhr](page-worker-x-domain-xhr)**  
Grant a content script cross-domain privileges, using the `cross-domain-content` option under the [`permissions`](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/package_json#permissions) key, and use that to execute cross-domain XHR. Note that this example requires an API key from the [Met Office DataPoint](http://www.metoffice.gov.uk/datapoint) service.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Cross_Domain_Content_Scripts)
* Modules used: [`page-worker`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-worker)

**[tabs-button-port](tabs-button-port)**  
Use `port` to communicate between the main add-on code and a content script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Accessing_port_in_the_add-on_script)
* Modules used: [`tabs`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/tabs), [`ui/button/action`](https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/ui_button_action)

**[tabs-cloneinto](tabs-cloneinto)**  
Use [cloneInto](https://developer.mozilla.org/en-US/docs/Components.utils.cloneInto) to share an object from a content script to a page script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts#Expose_objects_to_page_scripts)
* Modules used: [`tabs`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/tabs)

**[tabs-content-script-options](tabs-content-script-options)**  
Provide configuration options to a content script with `contentScriptOptions`.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Passing_configuration_options)
* Modules used: [`tabs`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/tabs)

**[tabs-content-script-string](tabs-content-script-string)**  
Pass a content script as a string.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Loading_content_scripts)
* Modules used: [`tabs`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/tabs)

**[tabs-createobjectin](tabs-createobjectin)**  
Use [createObjectIn](https://developer.mozilla.org/en-US/docs/Components.utils.createObjectIn) to create a new object in a page script scope, from a content script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts#Expose_objects_to_page_scripts)
* Modules used: [`tabs`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/tabs)

**[tabs-exportfunction](tabs-exportfunction)**  
Use [exportFunction](https://developer.mozilla.org/en-US/docs/Components.utils.exportFunction) to share a function from a content script to a page script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts/Interacting_with_page_scripts#Expose_objects_to_page_scripts)
* Modules used: [`tabs`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/tabs)

**[tabs-port](tabs-port)**  
Use `port` to communicate between the main add-on code and a content script.

* [MDN docs](https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Content_Scripts#Accessing_port_in_the_add-on_script)
* Modules used: [`tabs`](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/tabs)
