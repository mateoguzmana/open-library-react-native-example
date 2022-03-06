# StuDocu

Book's search using OpenLibrary API

![Demo](https://media0.giphy.com/media/tRmqhnOaiEmfGunFeR/giphy.gif?cid=790b7611be740ce396261543f16fa3a38210d349bf02625d&rid=giphy.gif&ct=g)


## Installation

To install StuDocu dependencies, run the following command:

`yarn`

It will install the node modules and the pods.


## Running the project on the command line

- iOS: `yarn ios`
- Android: `yarn android`


### Things I would've done better with more time

- The images from the API have a problem since some of them load as 1x1 pixels, meaning they are invalid. I added a workaround for that to fix it but it is still a bit flaky.
- A better styling, the current implementation is basic.
- More tests, the current implementation contains very basic ones for the utils.
- Maybe a tab navigator with wishlist and reading groups screens would look cool too.


### Troubleshooting

- I do not have M1 but I also don't expect compilation problems with it. Just in case if you do, I'm happy to help solving it :)