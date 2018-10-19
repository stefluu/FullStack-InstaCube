# README

Ruby version: 2.5.1

1) Create a new rails project:
rails new instacube --api --database=postgresql --skip-turbolinks

2)Set up a StaticPagesController with a root view containing a <main id="root"></main>

3)Update routes.rb file to root to static_pages#root

4)Add to Gemfile:
-under development:
* 'pry-rails'
* 'binding_of_caller'
* 'better_errors'

-in production:
* 'aws-sdk-s3', require: false

5) Create frontend folder:
-frontend
  - actions
  - components
  - reducers
  - store
  - util
  instacube.jsx -> set up to render root

6) Run npm init-y

7) npm install the following:
- webpack 4.40.2
- webpack-cli 3.1.2
- react 16.5.2
- react-dom 16.5.2
- react-redux 5.0.7
- redux 4.0.0
- redux-logger 3.0.6
- @babel/core 7.1.2
- @babel/preset-react 7.0.0
- @babel/preset-env 7.1.0
- babel-loader 8.0.4
- lodash 4.17.11
- redux-thunk 2.3.0
- redux-logger 3.0.6

8) Set up webpack.config.js with following entry point:
  entry: "./frontend/instacube.jsx"

9)run webpack. In package.json:
-under script:
"test": "echo \"Error: no test specified\" && exit 1",
"webpack-start": "webpack --mode=development --watch",
"postinstall": "webpack --mode=production"

10) Install Amazon Web Services in order to access Access Storage and create Active Storage joins table.

11) Create the following migrations/models/controllers:
- users
- images
- likes
- comments
- following
- active storage joins table to be created via Active Storage.

12) Sample State:
- Entities:
  * Users
  * Likes (which represents current users' likes)
  * Images
  * Comments
  * Followings
- Session:
  * currentUserId
  * errors
- ui:
  * modal - triggers open and close of modal
  * imageId - keeps track of current image


13) Make Actions/APIUtil files:
- images_api, likes_api, route_utils, session_api, users_api

14) Make Reducers:
- all_likes, entities, errors, image_id, images, likes, modal, root, session_errors, session, ui, users

15) Create App and Root files

16) Make Store

17) Make containers and components:
- images:
  * index, post, profile_tile
- modal:
  * modal_image_container, modal_image_window, modal_image, modal_window, modal
- nav_bar:
  * nav_bar
- session:
  * errors_list, login, signup
- splash:
  * splash
- users:
  * show

18) preloadedState:
- in document.addEventListener:
  let preloadedState = {}
  const user = window.currentUser;
  if (window.currentUser){
    preloadedState = {
      entities: {
        users: user,
      },
      session: {
        currentUserId: Object.values(user)[0].id
      }
    };
  };

19) Seed database
