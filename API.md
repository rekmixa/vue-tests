# API

## /login (POST)

Form data:  
- login
- password

Response:  
    { "token": "auth token" }

## /logout (POST)

Form data:  
- token

Response:  
    { "success": true }
