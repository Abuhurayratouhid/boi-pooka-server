# l2a3-cow-hut-backend-assignment-Abuhurayratouhid
l2a3-cow-hut-backend-assignment-Abuhurayratouhid created by GitHub Classroom


# Express Server with Mongoose & TypeScript: CRUD Operations with Pagination and Filtering

This is a sample README file for an Express server implemented with Mongoose. The server supports CRUD (Create, Read, Update, Delete) operations along with pagination and filtering capabilities.



## Application Routes

#Live site: [https://cow-haat-nu.vercel.app/](https://cow-haat-nu.vercel.app/)


### User

- ` /api/v1/auth/signup`:(POST) Creates a new user.
- `/api/v1/users`: (GET) Returns a list of all users.
- `/api/v1/users/64904c0c3a6ea466a1229082`: (GET) Returns the user with the specified ID.
- `/api/v1/users/64904c0c3a6ea466a1229082`: (PATCH) Updates an existing user with the specified ID.
- `/api/v1/users/648f30e9e6d807aed40023e5`: (DELETE) Deletes the user with the specified ID.

### Cows

- `/api/v1/cows`: (POST) Creates a new cow.
- `/api/v1/cows`: (GET) Returns a list of all cows.
- `/api/v1/cows/6490500518f9914f606ef42a`: (GET) Returns the cow with the specified ID.
- `/api/v1/cows/6490500518f9914f606ef42a`: (PATCH) Updates an existing cow with the specified ID.
- `/api/v1/cows/648f5e8f11cb195726399ccc`: (DELETE) Deletes the cow with the specified ID.

### Pagination and Filtering routes of Cows

- `/api/v1/cows?pag=1&limit=10`: (GET) Returns a paginated list of cows.
- `/api/v1/cows?sortBy=price&sortOrder=asc`: (GET) Returns a sorted list of cows by price in ascending order.
- `/api/v1/cows?location=Dhaka`: (GET) Returns a list of cows in the specified location.
- `/api/v1/cows?searchTerm=king`: (GET) Returns a list of cows matching the specified search term.



## Error Handling

- If a user or cow with the specified ID is not found, the server will respond with an error message.
- If a user hits a wrong route, the server will respond with custom NOT FOUND error message.
- Others errors will be handled by GlobalErrorhandler


Happy coding!
