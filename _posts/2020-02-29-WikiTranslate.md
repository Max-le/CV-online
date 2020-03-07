---
layout: post
author: Max Lepin
---
# Word translating with Wiktionary

Making a translator based on [Wiktionary.org](https://www.wiktionary.org/).


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

After my research, I decided to give Wiktionary a shot.