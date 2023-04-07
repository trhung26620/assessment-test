# Quick Demo Video


https://user-images.githubusercontent.com/65553646/230651667-7f87c937-a50a-4b3c-acd0-1ca1e92e528e.mp4

# Set up 
## Note: My Node version: 16.15.1 
## Clone the repository
```
git clone https://github.com/trhung26620/assessment-test.git
```

## Set up backend
```
cd assessment-test/backend
npm i
```
### Create .env file in `assessment-test/backend` directory as .env-example file

![image](https://user-images.githubusercontent.com/65553646/230653062-a759feb5-d37c-4aec-9858-deacf317784c.png)

### Start server
```
npm start
```

## Set up frontend
```
cd assessment-test/frontend
npm i
```
### Create .env file in `assessment-test/frontend` directory as .env-example file
![image](https://user-images.githubusercontent.com/65553646/230653984-1b813865-5a22-4378-975a-3b1bb2b1e16b.png)

### Start server
```
npm start
```

## Enjoy


# Full Stack Web Developer Challenge
## Task Description
Your task for this challenge is to create a small search engine comprising of two parts, a web-based user interface and a server component that exposes a REST API which provides search results retrieved from a corpus of text that will be provided to you in `corpus/hemingway.txt`.

Your submission will be evaluated for conforming to the specifications outlined below as well as code quality (maintainability, scalability, performance etc.). You are permitted to use any resources and libraries you wish, however, you should be able to justify design choices in your code.


## Requirements
The basic search engine should be capable of the following three operations.

1. Given a query consisting of a single word `w`, display the 3 most similar words in the search corpus according to some similarity metric of your choosing. You should return results even if `w` is not in the corpus.
2. Given a single word `x`, update the search corpus with `x`. The new word `x` should immediately be 
queryable.
3. Given a single word `y`, remove **_the most similar word_** to `y` in the corpus from further search results. 
### User Interface
The user interface should be a browser-based application developed using your JavaScript web framework of choice. It should support the three aforementioned operations. How this is done is completely up to you. Use your creativity and imagination to create a UI that will set your submission apart!

### REST API
The REST API can be implemented using whatever language and frameworks of your choosing. Again, like the UI, it needs to support the three operations listed above. How you choose to accomplish this task is up to you.

## Deliverables
To submit your challenge, fork this repository and provide the link to your forked repository.
You should also update this README to include instructions on how to run your search engine.
Tests are not mandatory but will be considered bonus points if you provide them.

This challenge should take a day at most. It is not expected to be a production ready application and thus will not be evaluated in such a context.
