// content-script.js

var contentScriptObject = {"greeting" : "hello from add-on"};

unsafeWindow.clonedContentScriptObject = cloneInto(contentScriptObject,
                                                   unsafeWindow);
unsafeWindow.assignedContentScriptObject = contentScriptObject;
