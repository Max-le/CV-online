---
layout: post
author: Max Lepin
tags: [languages, translation, linguistics, python, Flask]
---
# Word translation with Wiktionary

Making a translator based on [Wiktionary.org](https://www.wiktionary.org/).

Author : *Max Lepin*

## Introduction
Google translate is without doubt getting more accurate with years, but you can still encounter cases where the translation is not very helpful nor comprehensive. 

Machine translation is extremely difficult ([Video : Why computers suck at translation](https://www.youtube.com/watch?v=GAgp7nXdkLU)), and I reckon it's fair to say that a bilingual human is still way better than any computer to accurately translate meanings across languages.

Therefore, man-made translations, such as one you can find in a dictionary, cover more comprehensively the differents meanings.

## The problem

As an example : I decided to choose the german word *fertig*.

 If all you can understand in German is "Bier" or "Oktoberfest", here's the english translation from Google : ![screenshot Google translation](/assets/img/fertig_En.png)

*Fertig* has two majors meanings :
 1. "ready"
 2. "finished", "done". 

 With no context, *Bist du fertig ?* could equally mean "Are you ready ?" or "Are you finished ?".

However here's want happens if you try to translate the above sentence : 
![fertig](/assets/img/bist_du_fertig.png) 

It totally misses the other aspect of the word. If you don't look up the meaning of the word *fertig* alone, you have no clue that it can also mean "are you finished ?".

But it is worse for other languages : if you try to translate just the word "fertig" to French,  you will get this : 
![french fertig](/assets/img/fertig_Fr.png)

"Prêt" means only "ready", and not "finished", just like in English. Again, half of the definition is missing. 


That is exactly the problem that bother me and motivated me to start this project.

## My project

In my quest to get more reliable translations, I started by searching the right source.

The criterias for the ideal source of information for my project are: 
- Man-made translations (A human actually wrote the definition/translation)
- Many pair of languages availables
- Comprehensive definitions
- Free to use data

And I found **Wiktionary**, which checks all the above points.

Wiktionary's data is really great, but I didn't a regular API, although there is something that feels like a compromise : I can add the parameter ```?action=raw``` on the URL to get some structured raw text.

See the difference by yourself : 
- In a nice view : <https://en.wiktionary.org/wiki/conundrum>
- Raw text :  <https://en.wiktionary.org/wiki/conundrum?action=raw>

#### Parsing 
As you can see, it's just a some raw text so I had to parse the data myself to be able to work with it. 
So I made an algorithm to search and extract the translations : 
1. The translations section of the page is clearly signaled :  ```====Translations====```
2. ```trans-top``` keyword signals a definition for the word
3. ```*``` is generally followed by the name of a language. 
4. After the name of the language can you find the actual translation in that weird structure :
{% raw %}```{{t+|fr|énigme|f}}```.{% endraw %} 
- ```fr``` represents the language ( French here).
- ```m``` is the gender. Can be m, f, n or null.

This structure is pretty consistent, and the rules above pretty much describe how my parsing algorithm works.

This is handled by the scan.py module in [my project](https://github.com/Max-le/wikipython-server).

#### General workflow
A few more words about the general workflow of the back-end : 

- fetcher.py performs the request to Wiktionary. It saves the result as a text file ( called ```word_data.txt```).
- scan.py analyses word_data.txt to extract translations, returning a dictionary.  
- app.py transforms the dictionary into JSON and sends it as a response.

I built the back-end with Flask in Python and the front-end with React. The back-end is running on Heroku, while the front-end React app lives on AWS Amplify. 
### Conclusion 

That was the very first article I wrote for my blog 😊.
Hopefully I'll have time in the future to write more and improve the quality of my projects.


