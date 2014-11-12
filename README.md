# TrelloClone

A fun and intuitive project management app

## Interesting Features

1. Leverages jQuery UI library to implement a drag and drop feature
2. Overrides standard Backbone Model#parse methods to create complex Rails-side associations on the client-side

## Setup

1. In the config/initializers/ directory, create a secret_token.rb file with the following line:
  ```
  TrelloClone::Application.config.secret_key_base = '...'
  ```
2. Sign in with username: 'ripe@gmail.com', password: 'password'
3. Enjoy!
