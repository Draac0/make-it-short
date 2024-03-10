# make-it-short
Make it short is a URL Shortener project

## High-level architecture

The project will work on the basic concept of routing. The user registers the URL in the make-it-short platform, and we use a unique code to save that URL. When a response comes to the make-it-short server, we use the unique code to redirect the user to the original URL.


## Contribution
- Check the [Contribution](CONTRIBUTING.md) guidelines

## Tech Stack

We will use the following tech stack to build the project:

- Nest.JS (Node.js framework)
- Next.JS (React.js framework)
- Postgres Sql (Database)

## Features
- User can register a URL
- User can get the short URL

## How to run the project

### Backend
`cd backend`

Node version
`v20.11.1`

Install the Nest.js CLI globally by running the following command in your terminal:

`
npm i -g @nestjs/cli
`


### Frontend
`cd frontend`

## Schema Design

### User Table
- id (Primary Key) (UUID)
- created_at (Timestamp)
- updated_at (Timestamp)
- email (String)
- password (String)

### User Routes

- POST /user/register (Register a user) (Public)
- POST /user/login (Log in a user) (Public)

### URL Table
- id (Primary Key) (UUID)
- created_at (Timestamp)
- updated_at (Timestamp)
- original_url (String)
- short_url (String)
- user_id (Foreign Key) (UUID)
- deleted_at (Timestamp)
- expiry_date (Timestamp)
- total_clicks (Integer)
- last_clicked_at (Timestamp)
- last_clicked_by (UUID)
- last_clicked_ip (String)
- last_clicked_device (String)
- last_clicked_browser (String)
- last_clicked_os (String)
- last_clicked_platform (String)
- last_clicked_referer (String)

### URL Routes

- POST /url/register (Register a URL) (Private)
- GET /:short_url (Redirect to the original URL) (Public)
- GET /url/:short_url (Get the URL info) (Private)
- GEt /url (Get all the URLs) (Private)
- DELETE /url/:short_url/delete (Delete the URL) (Private)
- PUT /url/:short_url/update (Update the URL) (Private)


## Future Scope
- User can set the custom short URL
- Users can see the analytics of the short URL
- User can see the QR code of the short URL
- User can see the preview of the short URL
- Users can see the social media preview of the short URL
- more...

