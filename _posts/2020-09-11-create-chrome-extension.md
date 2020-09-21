---
layout: post
author: Max Lepin
title : "Create & publish your Chrome extension"
tags: [chrome, google, javascript, maps, trip, "cost-saving"]
---

## Introduction

This article will explain how to quickly create an Chrome extension in a practical way.

This only requirement is : 

- Basic knowledge of JavaScript.

---

This article has two purposes :

1. It is my personal notes, so that in 6 months, when I'll have forgotten most of this and I'll want to make my next extension, I won't have to re-discover the wheel, i.e go through official documentation, deciphe it, and extract actionable information.
2. Help other people to understand the topic and produce their products faster. Even if it slightly helps or motivate 3 other persons, I'm happy ☺

Finally, as an example, I'll show how I created a useful extension for planning trips on Google Maps (that can potentially help you save money !). 

## The theory (the boring part)
Although I like the *bottom-up* approach in learning technical stuff such as programming, it is sometimes better to have a more thorough understanding of a concept. 

So, let's tackle the theory first.



If you're reading this, you most probably know what a browser extension is and what they can do, so I won't elucidate that here (though it's done perfectly [there](https://developer.chrome.com/extensions)). 

Let's now understand **how a Chrome extension works**. 

* First of all, the programming language used is **JavaScript** (for the logic of the extension, to make it *do things*).

* The skeleton of your extension will be a file called `manifest.json`. This file basically allows you to describe your extension in a structured way (the "JSON" way) and put every piece of it together.
  Go [here](https://developer.chrome.com/extensions/manifest#overview) for more details about this essential file. You can click each field to know more about what kind of info it contains. 

* The **popup** is what appears when you click on the icon of the extension. Like a web page, a popup is made of 3 files : `popup.html`, `popup.css`, `popup.js`

* The **content script** is the part of your extension that can interact with a web page opened in the browser, more specifically the DOM, just like any JavaScript code. The **content script** can, for example, change the background color of a page to add a nice dark theme. It works in isolated worlds ([check out this 2 min video to understand](https://youtu.be/laLudeUmXHM)).

  * Content scripts will therefore be *injected* to a web page. This can be done in two ways : [programatically or declaratively](https://developer.chrome.com/extensions/content_scripts#functionality)
    * In a nutshell : 	
      * programmatically : code triggered and injected by a event.
      * declaratively : code declared in the `manifest.json`([like this](https://developer.chrome.com/extensions/content_scripts#declaratively)).

  





## References

Additional documentation and references : 

- [Google's official documentation](https://developer.chrome.com/extensions)

Google *requires* your extension to have a [privacy policy]({% post_url 2020-09-15-priv-policy-fuelcal %}).



I give importance to the reader's opinion on the form and the content of this article. [Please let me know what you think](mailto:max.09@outlook.com), or any suggestions for improvement, I'll be grateful !