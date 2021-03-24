# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Xavier Loera Flores**

Time spent: **7** hours spent in total

Link to project: https://pewter-speckle-trust.glitch.me 

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [x] Unmute Button
* [x] Mute Button
* [x] Circular Buttons


## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/UbC7Vqc.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/css/css3_buttons.asp
https://www.w3schools.com/howto/howto_css_round_buttons.asp
https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random
https://www.w3schools.com/cssref/css3_pr_background-size.asp
https://www.w3schools.com/jsref/jsref_string.asp
https://www.w3schools.com/js/js_htmldom_html.asp
https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
* I had an error where the sound would not play within Chrome on both my Mac OS system and my friends Windows 10 system. I tested it within the Firefox browser and the sound worked fine. 

* I added some console log commands to test that the function was being called and found that it was. I noticed that the console included another message I was not familiar with. This was the error: "The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page."

* I clicked on the link within the console log and read the Google Developer post. I found that I apparently needed to resume the audio with a user action. 

* I theorized that the audio would work if I resumed the Audio Context object using one of the buttons. Since it worked, I then realized I could implement a mute/unmute button. I created the buttons using a similar logic to how the start and stop button worked where buttons would take turns appearing and disappearing so that only one button is visible at once.

* It worked really well. I was very satisfied with the feature especially since it made the repeating the tests easier without the sound. 



3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
* How do web developers cover all their bases to ensure that their website works as intended on different systems, browsers, and even browser versions? 

* How do developers benchmark and optimize their site so that it loads quickly on devices with a low amount of internet bandwidth?

* How do engineers plan their code ahead so that their projects are maintainable by themselves and others?
   
* How do they ensure that their code is easy to understand by other developers?

* How do engineers decide what to code themselves vs using a function from a library online?

* The prework was already paced and structured to be completed in order of the given steps. How do developers know which tasks to do first and in what order?

* How much time should be spent planning a project vs coding a project vs testing a project?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

* Before adding any more features, I would like to refactor my code so that it is more modular with more functions for many of the operations. For example, I would probably implement a reset timer function and a function to check for win conditions and losing conditions. 

* If I had more hours to work on this project, I would implement an endless version of the game that would not end at the given stop point. It would instead keep going and keep track of how far the user got into the memory game.

* After achieving a high score, I would like to give users the option to save their score on a public leaderboard. I am somewhat familiar with Google Firebase Cloud storage so I would probably use that to store the leaderboard scores. 

* I would also like to give users the option to add more buttons _to increase the difficulty of the game. This would probably involve using a function to set a new color value and pitch sound for each button that is added.

* In order to help with the pacing of the game, I would like to give users the option to also increase the amount of buttons they need to memorize per progress tier.



## License

    Copyright [Xavier Loera Flores]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.