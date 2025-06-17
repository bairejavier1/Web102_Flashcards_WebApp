# Web Development Project 2 - *Flip & Guess*

Submitted by: **Baire Diaz**

This web app: **Flip & Guess is an interactive flashcard web app where users test their knowledge of popular cartoon characters. Each card displays an image, and users must guess the character's name by flipping the card. With each click of the "Next" button, a new cartoon character is shown at random to keep the game fun and engaging.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!

Local Image Support: Replaced unreliable image URLs with locally stored images for faster and more consistent loading.

 - Flip State Reset: Ensured that each time the "Next" button is clicked, the card resets to show the image side first, preventing accidental answer reveals.

 - Random Card Display: Cards are shown in a randomized order rather than sequentially, enhancing replayability and user engagement.

 - Responsive Layout: Layout adapts nicely to different screen sizes, ensuring better accessibility across devices.

 - Image-Based Questions: Used images instead of text for the question side, making the experience more visual and interactive.

 - Project Assets Organization: Properly structured folders (assets/images/, assets/icons/) for better maintainability and scalability.

 - Custom Favicon: Added a custom .jpg favicon for branding and visual identity.

 - Expanded Card Set: Increased the number of cards to 10 well-known cartoon characters, enriching the game content.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://us02web.zoom.us/clips/share/-VbD4395S6mHBZ-KtNeIBw' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with Loom  


## Notes

Describe any challenges encountered while building the app.

- Broken Image Links: Initially, cartoon images were linked via external URLs, but many did not load properly or became unreliable. The solution was to switch to using locally stored images inside the project directory for consistency and speed.

- Image Import Path Issues: When moving images locally, there were import errors due to incorrect file paths or case sensitivity. This required careful folder structuring (assets/images/) and proper import statements within data.js.

- Card Flip State Persisting on Next: A major issue was that when flipping a card to reveal the answer, clicking “Next” sometimes displayed a new card with the answer side already visible. Fixing this required resetting the flip state on every new card render to ensure the image side always appears first.

- Component Coordination: Passing data and state (like card flipping) between multiple components (Flashcard, FlashcardList, App) required a good understanding of React props and useState management.

- Project Asset Organization: Deciding where to store images, icons, and the favicon (between src/assets and public/) required some experimentation and clarification on how Vite handles static assets.

## License

    Copyright [2025] [Baire Diaz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.