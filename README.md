# PhotoFolio

![PhotoFolio](path-to-your-image) <!-- Replace this with the actual path to your image -->

PhotoFolio is an online photo album application that allows users to upload, organize, and share their digital photos. The application is built with React and Firebase.

## Features

- **Albums List:** Display a list of albums retrieved from Firestore.
- **Album Form:** Add a new album to the database.
- **Images List:** Display all images inside a selected album.
- **Image Form:** Add or update images in the database.
- **Image Management:** Edit and delete images.
- **Image Carousel:** View images in a modal window with next, previous, and close buttons.
- **Search Functionality:** Filter images inside an album.
- **Loading and Error States:** Display loading spinners and toast messages for async actions and errors.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have a Firebase project set up.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/photofolio.git
    cd photofolio
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create and initialize a new Firestore database in your Firebase project.

4. Create a `.env` file in the root directory and add your Firebase configuration:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

5. Start the development server:
    ```bash
    npm start
    ```

## Components

### AlbumsList

- Displays a list of albums retrieved from Firestore.
- Includes an add button to display the `AlbumForm` component.

### AlbumForm

- Form to add a new album to the database.
- Includes input fields for the album name and buttons for clear and submit actions.

### ImagesList

- Displays all images inside a selected album.
- Includes an add button to display the `ImageForm` component.

### ImageForm

- Form to add or update images in the database.
- Includes input fields for the image title and URL and buttons for clear and submit actions.

### Carousel

- Displays images inside the selected album in a modal window.
- Includes next, previous, and close buttons.

## Testing

### Home Page

- A button with the text content “Add album” should display a form to create a new album.
- Two buttons: “Create an album” to submit and “Cancel” to hide the form.

### Add Image

- Clicking an album displays a new page with images and an “Add image” button.
- Image form with input fields for “Title” and "Image URL" and an “Add” button.

### Update Image

- Hovering over an image displays an “update” option, which opens a form with prefilled values for editing.
- Clicking “Update” submits the form and updates the image.

### Delete Image

- Hovering over an image displays a “delete” option, which deletes the image from the database.

### Notes

- Ensure an album named “first” is present in Firestore for testing purposes.
- Image alt text should be the title entered by the user.
- The home page should render all albums from Firestore on load.

## Libraries

- React
- Firebase
- react-toastify
- react-spinner-material

## Contributing

To contribute to this project, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License.
