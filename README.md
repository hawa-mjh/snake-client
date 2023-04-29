# Snake Client Project

Welcome to the Snake Client Project! In this project, you will be playing a multiplayer version of the popular Snake game. Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies. Your goal is to maneuver a dot, grow it by eating pieces of food, and avoid bumping into walls or other players' snakes.

## Prerequisites

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer).

## Installing

To install the Snake Client Project, clone this repository to your local machine using the following command:

```
git clone https://github.com/your-username/snake-client.git
```

After cloning the repository, navigate to the project directory and install the dependencies using the following command:

```
npm install
```

```
npm run play
```

## Usage

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

Once the game is started, you can use the following keys to control your snake:

* W: Move up
* A: Move left
* S: Move down
* D: Move right

In addition, you can also use the following keys to send canned messages to the server, which will be visible to all players:

* 1: "I am on fire!"
* 2: "I am doing so well!"

Have fun playing!

## Author

* [Hawa](https://github.com/hawa-mjh)

## Acknowledgments

* [Lighthouse Labs](https://www.lighthouselabs.ca/) for providing the project idea and server side code.

