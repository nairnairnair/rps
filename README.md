# ROYAL PUNCHING SOCIETY (R.P.S.)

## Project Overview 

Boiled down to their most essential elements, all fighting games are fancy variations on Rock, Paper, Scissors. Two players attempting to read their opponent's decisions and (ideally) responding with decisions that beat or go even with them. When assigned the task of creating an R.P.S. simulator, I knew exactly what kind to make.

Most fighting games have something that could be construed as a world or setting, no matter how incoherent or after-the-fact it may be. So, naturally, mine needed one too:

![Screen Shot 2022-06-14 at 6 22 50 PM](https://user-images.githubusercontent.com/103080131/173714309-90fc29f4-6abe-44e1-bcc0-795f0a0c3462.png)

ROYAL PUNCHING SOCIETY is a pretty obvious backronym but it works well enough. From there, I added a Shrek-esque anachronism-riddled medieval theme that eventually came to be a medieval-stockphoto hybrid. Most of the pictures I wanted to use were watermarked stock photos so I ran with it and made it a core component of the design and worldbuilding. Since things were going to be inherently cheesy due to the heavy use of watermarked stock photos, I wanted it to look like a garish late 90's/early 00's webpage:

![tournamentstart](https://user-images.githubusercontent.com/103080131/173715043-62c22699-8674-47d0-9c08-c0d8b26f3d66.png)

...which it very much does. The first thing I got working was the "Training Mode," which uses basic R.P.S. rules. Rock beats scissors and all that. 

![trainingmode](https://user-images.githubusercontent.com/103080131/173715005-70b6672d-c035-42ce-a218-5659b107245d.png)

For the fighting game, we'd need something slightly more complex, but only slightly. These are the rules of the "Tournament Mode:"

![tournamentrules](https://user-images.githubusercontent.com/103080131/173715148-01619f95-bc27-4d3e-adff-64bf77767047.png)

A system in which 4/5 options only beat one option and lose to one option makes for a lot of ties, which isn't the most exciting gameplay on its own. That's why I added dynamic health bars that change colors as one player scores points against the other. The bars start at green, but here's a close game in which our protagonist Harold the Herald is two hits away from death and one hit away from victory:

![landingahit](https://user-images.githubusercontent.com/103080131/173715096-7ab82040-d554-47c2-bf86-be56b013f735.png)


I also added dynamic portraits as an additional indicator of when you've won a round:

![beatingsporke](https://user-images.githubusercontent.com/103080131/173715240-fc2f5af7-6f9f-4393-a225-cd6be73c97be.png)

...or lost it:

![gettingmixed](https://user-images.githubusercontent.com/103080131/173715209-dc13f64d-c47f-4ea3-84fe-f9adab71ecc9.png)

It's a simple game, but a match between two human players (were such a thing supported) would be a fairly engaging and cerebral experience, as far as simple R.P.S. variations go. As it is, the game has a decent amount of depth due to the varied playstyles of its four selectable opponents. Each has an overall strategy and moves they favor more than others. One character prefers mixing up low and high attacks (but will defend sometimes to prevent getting bodybagged by regular attacks), one strongly prefers defense (and also uses regular attacks to beat out people trying to get through their defenses), another exclusively attacks, and the last is completely random. 

## Technologies Used:

I used CSS, vanilla Javascript and HTML to write the code. I used Figma for my wireframe and GitHub and Google Docs to plan out the project.  

## Code Architecture:

The project is divided up into: 
* main.js: contains the query selectors, event listeners and most of the functions that make the UI and game work
* player.js: contains the Player class, which handles actions taken by the player and opponent
* game.js: contains the Game class, which establishes the rules of the game and what beats/loses to/ties with what
* styles.css: sets most of the styles, except for the health bar, which is done in the JS
* index.html: where the html lives
* opponents.js: contains the arrays used to influence the likelihood of different opponents to use different moves

##Future Features:

I wanted to add a fanfare sound effect to the page to complete the awful 90's webpage vibes but didn't have time to add it. I also wanted to add a function that would cause players using a move three consecutive times to lose the round as a way to encourage thoughtful play and to discourage button mashing. Instead, I have a character reference these cut features, both of which are still *technically* manually possible by choosing to respect the rule of three and by manually playing the included fanfare.mp3 (feel free to try it, it's very compressed). I would love to add these at some point, in addition to more dynamic elements, such as .gifs and changing portraits and dialogue for opponents and the scribe.

##Reflections:

I got way too excited about adding features outside the scope of the project and worked on those first, then realized I didn't even have basic game functionality, so I archived it all and started fresh. It was a challenge packing all of these extra features into this over the span of a few days, but I think it went pretty well. My mentor (Phil Lewis) and rock (Olivia Whitehead) gave me great feedback and helped me troubleshoot a few key issues. I had a ton of fun making this functional, flavorful abomination and I hope you have fun playing it.
