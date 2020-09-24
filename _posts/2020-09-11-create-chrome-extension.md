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

1. It is personal notes, so that in 6 months, when I'll have forgotten most of this and I'll want to make my next extension, I won't have to re-discover the wheel, i.e go through official documentation, decipher it, and extract actionable information.
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
      * declaratively : code declared in the `manifest.json` ([like this](https://developer.chrome.com/extensions/content_scripts#declaratively)).

>Extensions are event based programs

* Your extension will constantly "listen" to things happening in your browser, and you can intercept those events to react to it and take some action.
  For that, you'll declare in your manifest a **background script**, set persistent to `false` (only in [rare cases](https://developer.chrome.com/extensions/background_pages#persistentWarning), you'll want to set it as true)

  ```
  {
    "name": "Awesome Test Extension",
    ...
    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
    ...
  }
  ```

[Read more about it here](https://developer.chrome.com/extensions/background_pages)

Then, in your script, you'll set up a listener on a particular event just like you would [set up a listener on a button](https://www.w3schools.com/JSREF/met_element_addeventlistener.asp) in the DOM. 

[Have a look at this example](https://developer.chrome.com/extensions/runtime#event-onInstalled), where we listen to the event "first installation of the extension".

* Final important point : **the storage**.
There are two types of storage : *sync* and *local*, so you have the choice. Pretty obviously, *sync* will save your data in your Google account, so if you use the extension in another browser, you'll find the same data. 
**This is useful for user settings**.
Here is how to access the storage : 

```
        chrome.storage.sync.set({key: value}, function() {
          console.log('Value is set to ' + value);
        });
        chrome.storage.sync.get(['key'], function(result) {
          console.log('Value currently is ' + result.key);
        });
```

Find out more about storage [here](https://developer.chrome.com/extensions/storage).




## The practice (the fun part)

This is where everything will come to life. I will demonstrate this with a small project I realized.

### The project : Fuel Calculator
#### Demo

As they say : "A picture's worth a thousand words". So instead of explaining thoroughly what my extension does, check this 1 min video.
<iframe width="800" height="450" src="https://www.youtube.com/embed/OIyrXh__X00" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Why I built this project.

I often ask myself this question : *"How much is this trip going to cost me ?"*, whether it's for commuting to work or a holiday road trip.
I decided to tackle the problem and find a convenient way to calculate that.
Google maps seemed like a good starting point, since I look trip information up there most of the time (you probably do too). With Chrome extentions, it appeared possible to me to "enhance" G Maps to display the cost of a trip as well. 
As a first goal I focused on the fuel cost only, excluding tolls, which I might add as an additional feature later.

#### How I built this project.
*I would also recommend having [this guide](https://developer.chrome.com/extensions/getstarted) opened when you make your first extension*
Here are the steps I took : 

1. Create a `manifest.json` file. As mentioned before, it's the backbone of the extension so it makes sense to write it first.

    a. Declare the name, version and description of my extension (only mandatary entries of the manifest).
    ```
      "name": "Fuel Calculator",
      "version": "1.0",
      "description": "Quickly estimate the cost of a car journey.",
    ```

  b. Find a nice icon and [declare it on the manifest](https://developer.chrome.com/extensions/manifest/icons). I like the [Noun Project](https://thenounproject.com/) for that purpose.

2. Create a background script that will set the default options for the user on installation of the app. 
```
    chrome.runtime.onInstalled.addListener(function() {

    console.log("Thanks for installing Fuel Calculator.")

    chrome.storage.sync.set({currency: 'EUR', litersPerKm: "0.06", costLiterOfFuel: "1.4"}, function() {
      console.log("Defaults user options are set.");

    });
```
  Then declare it in `manifest.json`.
3. Retrieve the distance in the G Maps webpage opened. This is done by the content script. Here is a function illustrating the idea : 
```
   function getTripDistanceFromDOM() {
    let divTripDistance = document.getElementsByClassName("section-directions-trip-distance")[0]; 
    if (divTripDistance == null){
      console.warn("Couldn't get element in DOM ! You may need to wait a bit before calling this function.")
      return null; 
    }
    for (var i = 0; i < divTripDistance.children.length; i++) {
      child = divTripDistance.children[i];
      if (child.innerHTML.includes("km")){ 
        return child.innerHTML;
       }
    }
  }
```
4. Communicate the trip distance to the popup, via the message system. Basically the popup will send a message (type "simple one-time request") to the content script saying : "Hey, message me back the distance trip information". The content script will look for the information (using the function above) and sends a response back.

    [Read more here on message passing](https://developer.chrome.com/extensions/messaging).





## Publish your work (optional)

You will publish your extension on the Chrome Web Store.

Bad news : it isn't free. Good news : it's not that expensive (one-time $5) (especially comparing to the $99/year for Apple Store !).

Otherwise, you just need to follow the registration procedure if it's your first time. I can give you a few additional pieces of information : 

* Google *requires* your extension to have a privacy policy. My first submission was rejected for this reason ([here is mine]({% post_url 2020-09-15-priv-policy-fuelcal %})).
* It can take quite some time to be reviewed, be patient.
* [Paid extensions won't be allowed as of next year](https://developer.chrome.com/webstore/cws-payments-deprecation).



## References

Additional documentation and references : 

- [Google's official documentation](https://developer.chrome.com/extensions)
- Beautiful, well designed and free icons : [The Noun Project](https://thenounproject.com/)
- Proper software versioning : https://en.wikipedia.org/wiki/Software_versioning



I give importance to the reader's opinion on the form and the content of this article. [Please let me know what you think](mailto:max.09@outlook.com?subject=Feedback on article Chrome extension), or any suggestions for improvement, I'll be grateful !

