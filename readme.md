<p align="center">
  <img src="src/img/logo.png" width="350" height="200" />
</p>

# Draw or Attack - Javascript project
"DrawOrAttack" is a card game inspired by Hearthstone, created by Blizzard. At the start of the game, the user receives a set of 3 random cards, and the game begins. The first player to reach 0 health points loses the game. This project holds a special place as it marks a significant milestone in my web development journey. The main goal behind this project was to learn vanilla JavaScript, design patterns such as MVC and Singleton, as well as CSS and HTML.

# [Live DEMO](https://power-space.vercel.app)

<img src="src/img/game-preview.gif" />
<br>
<br>

## Tech stack
The application was developed using the following tools:
- HTML,
- CSS,
- JavaScript
<br>
  
## Getting Started

Follow these steps to install drawOrAttack on your local environment.
<br>
<strong>Clone projects repository</strong>
```
git clone https://github.com/KamilTomczykDev/drawOrAttack.git
```
<strong>Install the packages</strong>
```
npm install
```

<strong>Run the app using terminal</strong>
```
npm start
```
<br>

# Requirements

## General:
- Build a game using vanilla JavaScript.
- Use best practices to provide good performance, scalability and readability of the project.
- Create responsive UI that looks like an oldschool RPG game.

## Start screen:
- Allow user to start the game.
- Create a footer that navigates to authors github and linkedIn profiles.

## Game:
### Game logic:
- Draw first cards to the players hand.
- Przycisk "Draw" musi dołożyć jedną kartę do ręki gracza z talii kart.
- The "Attack" button should subtract the combined attack value of all cards on the board from the opponent's life points.
- If the number of cards in the hand exceeds its limit, the newly drawn card immediately lands in the graveyard.
- At the beginning of each turn, cards with zero remaining turns land in the graveyard.
- At the beginning of each turn, the player gains 1 mana point until reaching the maximum level.
### Enemy:
- Create 3 stages of the enemy with different healing and attacking attributes that change throughout the game.
- Allow the user to view the enemy's description.
- On each turn deal damage to the player and heal enemy's character.
### Player:
- Allow the player to play cards from their hand.
- Allow the player to draw a card from the deck or attack the enemy.
### Cards:
- Display card statistics on the board and in the hand.
- A card with a special ability adds certain values to other cards on the board depending on its type.
- A card is playable in a given turn if its cost does not exceed the currently available mana.
- Each turn, a card loses one turn point, and after losing all turn points, the card lands in the graveyard.
## End game:
- Display the appropriate message depending on the winner of the duel.
<br>

# Implementation

## MVC
While creating the game in Vanilla JavaScript, my code quickly became spaghetti-like, as I expected. I dealt with this by using the MVC design pattern, which separated the data model from the user interface, significantly increasing the code readability and flexibility.

## Singleton
I wanted to use private methods, which are common in OOP, so I encapsulated all game logic into a class. Later, the controller received the appropriate interface, making it easy to create all events in the application. However, I wanted the instance associated with the game state to be unique. I came across the Singleton design pattern, which ensures that no additional instances of this type are created in the code, and I deemed it a good solution to this problem.

# Next Features
- Implement a way to reset the game internally.
- Incorporate more animations and interactions in the game.

# Contact

## [LinkedIn](https://www.linkedin.com/in/kamil-tomczyk-a118952b3/)
I'm currently active on this platform. Feel free to ask any questions about my projects or anything else :)


