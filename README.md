# Web Development Project 3 - *Flip & Guess*

Submitted by: **Baire Diaz**

This web app: **Flip & Guess is an interactive web app that lets you test your knowledge of popular cartoon characters by guessing their names based on images. Users can submit guesses, receive instant feedback, flip cards to reveal answers, navigate through the deck, mark cards as mastered to remove them, shuffle the cards for variety, and track their current and longest streaks of correct answers. The app also includes a reset option to start fresh anytime, making learning fun and engaging.**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:


- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [x] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards


The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!
- Answer Input with Validation: Users can type guesses and get instant feedback if their answer is correct, close enough (using fuzzy matching with Levenshtein distance), or incorrect.

- Manual Card Flipping: Cards flip to show the answer only when the user clicks the card, giving more control over the learning process.

- Sequential Navigation: Next and Back buttons let users move through the cards in order, with disabled states at the ends to prevent wrap-around.

- Mark as Mastered: Users can mark cards as mastered to remove them from the active deck, focusing learning on unfamiliar cards.

- Reset Functionality: A Reset button clears mastered cards and streaks so users can restart the deck anytime.

- Shuffle Cards: A Shuffle button randomizes the order of the remaining (non-mastered) cards to keep practice dynamic.

- Streak Tracking: The app tracks and displays both current and longest streaks of correct answers, motivating consistent learning.

- Visual Feedback: Clear visual messages indicate correct, close, or incorrect answers to enhance user experience.

- Robust State Management: Proper handling of current index and card states ensures smooth transitions after actions like mastering or resetting.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://cdn.loom.com/sessions/thumbnails/934337f602ba46fba44ba58fdfa79a68-fb9f3894725f4366-full-play.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with Loom


## Notes

Describe any challenges encountered while building the app.

- Managing state updates to keep flashcards synchronized with user actions like marking cards as mastered, resetting progress, and shuffling the deck.

- Handling card navigation properly when the active card list changes dynamically to avoid glitches and out-of-bounds errors.

- Implementing fuzzy answer matching (Levenshtein distance) to provide forgiving yet accurate feedback on user guesses.

- Designing the UI to allow manual card flipping, clear visual feedback, and smooth user interaction.

- Tracking and displaying user streaks (current and longest) without interfering with other state changes.

- Ensuring the reset and shuffle features update the card list and related states consistently.

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
