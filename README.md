# react-dishpoll

# App is Live

preview -

## App Description

A small react app for ranking dishes. Multiple users are able to login into the app and vote for their favourite dishes and see the results of the poll.

Screens and functionalities:

Login Screen: A user is able to login into the app using a username and password. Since there is no backend to query static list of users is provided. Refer to users.json for the static list of users to use

Once logged in the main app has 2 tabs (or equivalent).

Tab 1: Fetch the list of dishes using an API and display the results for the user to vote. Each user is then able to make a selection of 3 dishes from the poll that has been created. Each selection is given points based on the rank (Rank 1 gets 30 points, Rank 2 gets 20, Rank 3 gets 10). User’s selections is saved and displayed it to him on the next screen for poll results. A user is be able to edit his choices anytime even after submission i.e. if Dish 1 was Rank 1, the user can change it to no Rank or Rank 2, if there is another dish with the same rank the other dish will lose its rank

URL to fetch dishes json: https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json

```
Sample dish object
{
    "id": 1,
    "dishName": "Lasagne",
    "description": "Breaded fried chicken with waffles, and a side of maple syrup.",
    "image": "https://loremflickr.com/300/300/food"
}
```

Tab2: Show the dishes in the descending order of the points received from the polling. The logged in user should also be able to see his selections in this list so that he knows where his selected dishes stand in the rankings.

## How to install and run into the local Machine?.

1.Open the terminal onto your local machine and clone the repository using the following command git clone https://github.com/rks1995/react-dishpoll.git 2. Redirect into the project folder and ` cd frontend` inside frontend folder run npm install && npm start
