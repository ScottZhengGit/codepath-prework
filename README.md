# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Scott Zheng**

Time spent: **10** hours spent in total

Link to project: (https://glitch.com/edit/#!/lunar-ninth-angle?path=README.md%3A1%3A0)

## Required Functionality

The following **required** functionality is complete:

- [/] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [/] "Start" button toggles between "Start" and "Stop" when clicked.
- [/] Game buttons each light up and play a sound when clicked.
- [/] Computer plays back sequence of clues including sound and visual cue for each button
- [/] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [/] User wins the game after guessing a complete pattern
- [/] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [/] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [/] Buttons use a pitch (frequency) other than the ones in the tutorial
- [/] More than 4 functional game buttons
- [/] Playback speeds up on each turn
- [/] Computer picks a different pattern each time the game is played
- [/] Player only loses after 3 mistakes (instead of on the first mistake)
- [/] Game button appearance change goes beyond color (e.g. add an image)
- [/] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [/] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [/] Added hearts to implement the number of lives left
- [/] Added difficulty toggles
- [/] Leaderboard
- [/] Username input
- [/] High score tracker

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
Overall
![/] https://recordit.co/E7KyHJ5m2N   

Losing hearts
![/] https://recordit.co/YQRK1brPUM

Difficulty toggle
![/] https://recordit.co/epKpG1K1x6

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   A ton of google, stackoverflow searches. A helpful website to understand the syntax was w3schools.com.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   It was my first time working with html, css, and javascripts so I definelty ran into challenges along the way. I had the most trouble implementing the countdown timer as often the function to subtract from timer will overlap with one another.
   First, I had to locate where the problem originated from, so I looked adjusted my reduction in timer a few times to see if it made any difference. It seemed that the timer gets subtracted by +1 more every run. Usually, I would use a debugger
   and step through the program step by step, however I wasn't sure glitch had one. So I added a bunch of console.log(), to see what was really happening. Once I found out that the countdown timers were being overlapped with one another, I drew
   up potential solutions to the problem. Through some web searches, I realized that I had to take advantage of commands like setTimeout() and clearInterval() to avoid the overlapping.
   I overcame this problem like any problem from my classes, I would locate the problem, try and come up with solutions, and if it were something that I was unfamilar I would seek other resources.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   How do web devlopers manage the different screen sizes that their clients or users might have? There are so many different types of layouts to account for (mobile, tablets). When I opened my project on other screen sizes it would look distorted
   so I was curious to how that as managed.

   How is client side vs server side data managed?

   Are there any differences between mobile and desktop web development?

   Whats a good way of organizing javascript code?

   Not a question, but I am curious to learn more about the backend of web development projects. I am curious to learn more about how the industry works for web development, the responsibilites that vary between
   front end and back end. Also curious as to how Aigle software development would look like, the principles that developers follow.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   1. I would want to store the leaderboard so that if anyones beats it, the next time the website it opened the leaderboard would be saved. If I had a few more hours to work on it, I would learn how to implement a database that can store such information.
   2. I would also want to implement compatability for other device sizes, because it looks distorted otherwise.
   3. I would definetly improve on my code, it's not as clean and concise as I would liked it to be.
   4. Through sharing my project with my friends, one of them told me it was difficult to play the game because they were colorblind. So a way to improve this project would be to implement a color blind mode.
   5. So many improvements to be made!

## Interview Recording URL Link

[My 5-minute Interview Recording] https://drive.google.com/file/d/13LaUaj2aFn9OkJ4z5pNwO55GZ4NHFdVv/view?usp=sharing

## License

    Copyright [Scott Zheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
