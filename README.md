# Wanderlust

A full-stack travel listing web application where users can explore, create, edit, and review vacation stays and unique destinations around the world.

## Features

* User Authentication & Authorization
* Create, Edit, and Delete Listings
* Upload Listing Images
* Interactive Maps for Locations
* Add and Manage Reviews
* Category-Based Filtering
* Search Listings by Destination
* Responsive Design
* Flash Messages and Form Validation

## Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap
* EJS

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport Local Strategy

### Cloud Services

* Cloudinary (Image Storage)
* Mapbox (Location Maps)

## Project Structure

```bash
Wanderlust/
│
├── models/
├── routes/
├── controllers/
├── views/
├── public/
│   ├── css/
│   └── js/
├── middleware.js
├── cloudConfig.js
├── app.js
└── package.json
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/Pramod-Kumar-Pandey/wanderlust.git
cd wanderlust
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token
```

### Run the Application

```bash
node app.js
```

or

```bash
npm start
```

The application will run on:

```bash
http://localhost:8080
```

## Main Functionalities

### Listings

* View all listings
* Create new listings
* Edit existing listings
* Delete listings

### Reviews

* Add reviews
* Delete reviews
* Rating system

### User Authentication

* Register
* Login
* Logout

### Search & Filters

* Search destinations
* Filter listings by category:

  * Trending
  * Rooms
  * Iconic Cities
  * Mountains
  * Castles
  * Amazing Pools
  * Camping
  * Farms
  * Arctic
  * Domes
  * Boats

![Project Screenshot](https://github.com/user-attachments/assets/0f52a58e-3701-4abf-9702-ad85643b292d)


## Future Improvements

* Wishlist/Favorites
* Booking System
* Payment Integration
* Advanced Search Filters
* User Profile Pages
* AI-Based Travel Recommendations

## Author

Pramod Pandey

## License

This project is licensed under the MIT License.
