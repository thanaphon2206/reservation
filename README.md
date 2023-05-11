# Reservation-api

# How to Run
#### For Manual Input Mode

Open terminal and navigate (`cd`) to this folder and type commands:

```bash
1. npm install
2. npm install yarn
3. yarn dev or npm start
```

#### For run Docker Mode

Please install Docker service first and Open terminal and navigate (`cd`) to this folder and type commands:

```bash
1. docker pull node:18-alpine
2. docker-compose up -d // start service
3. docker-compose down // for stop service
```

### Rule of my Restaurant

* Please call Intitailze API first for the create restaurant.
* One people can be reserve mutiple restaurant and table.


## Reservation Project Structure

```
Reserve\         
 |--logs\                       # Log files             
 |--src\
    |--config\                  # module
    |--controllers\             # Route Handlers/Controllers for API endpoints
       |--booking\              # Controller management
    |--middleware\              # Custom express middlewares
    |--routes\                  # Definition of API endpoints
    |--services\                # Core logic reservation
    |--utils\                   # Helpers/Utility classes and functions
    |--index.js                 # App entry point
 |--.env                        # Environment variables
 |--.gitignore                  # Tooling config file
 |--package-lock.json           # Dependency managment
 |--package.json                # Dependency managment
 |--.env                        # Config environment
 |--.env.example                # Config environment
 |--.ecoststem.config.json      # production mode
 |--README.md                   # About
 ```

 ## API Documentation

#### Entry Endpoint

<details>
<summary><code>GET</code> <code>http://localhost:6699/<b>/</b></code> <code>(Displays introduction about the API)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `text/html`           |`Welcome to Restaurant Table Reservation System's API! 🎉`|

##### Example cURL
> ```javascript
>  curl -i -H 'Accept: text/html' http://localhost:6699/
> ```
</details>

#### API Info

<details>
<summary><code>POST</code> <code>http://localhost:6699/booking/info<b>/info</b></code> <code>(Displays info about the API)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------             
> | `200`         | `application/json`    |  `"status": { "code": 0,"message": "Success"}, "data": { "restaurant": "b", "totalTable": 5, "totalAvaliable": 5, "dateAvaliable":"11-05-2023"}`
> | `400`         | `application/json`    | `"status": { "code": 0,"message": "Success"}, "data": "Not found Restaurant"`|
> | `999`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": ServiceNotAvailable`|
   

##### Example cURL
> ```javascript
> 'Accept: application/json' http://localhost:6699/booking/info req.body { restaurant: "example b" }
> ```
</details>

#### API Info list Position table

<details>
<summary><code>POST</code> <code>http://localhost:6699/booking/info/table<b>/tables</b></code> <code>(Displays list index table restaurant tables)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`    |`"status": { "code": 0,"message": "Success"}, "data": {"restaurant": "b","data": [1,2,3,4,5]}`|
> | `400`         | `application/json`    | `"status": { "code": 0,"message": "Success"}, "data": "Not found Restaurant"`|
> | `999`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": ServiceNotAvailable`|

##### Example cURL
> ```javascript
>  curl -i -H 'Accept: application/json' http://localhost:6699/booking/info/table req.body { restaurant: "example b" }
> ```
</details>

#### API Info list detail booking in Restaurant

<details>
<summary><code>POST</code> <code>http://localhost:6699/booking/info/detail<b>/tables</b></code> <code>(Displays list detail booking restaurant tables)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`    |`"status": { "code": 0,"message": "Success"}, "data": {"restaurant": "b","data": bookingID": "b-1683788823429-aa2"...`|
> | `400`         | `application/json`    | `"status": { "code": 0,"message": "Success"}, "data": "Not found Restaurant"`|
> | `999`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": ServiceNotAvailable`|

##### Example cURL
> ```javascript
>  curl -i -H 'Accept: application/json' http://localhost:6699//booking/info/detail req.body { restaurant: "example b" }
> ```
</details>

#### Intitialze Restaurant

<details>
<summary><code>POST</code> <code>http://localhost:6699/booking/initialize<b>/tables</b></code> <code>(Displays all restaurant tables)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `201`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": {"restaurant": "b","tables": 5}`|
> | `400`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": This restaurant has already created`|
> | `999`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": ServiceNotAvailable`|

##### Example cURL
> ```javascript
>  curl -i -H 'Accept: application/json' http://localhost:6699/booking/initialize req.body { restaurant: "example b, table: 5" }
> ```
</details>

#### Reserve Restaurant

<details>
<summary><code>POST</code> <code>http://localhost:6699/booking/reserve<b>/tables</b></code> <code>(Displays reserve restaurant tables)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": {"bookingID": "b-1683794899208-aa2",..}`|
> | `400`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": Table is not available`|
> | `400`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": Not found Restaurant`|
> | `999`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": ServiceNotAvailable`|

##### Example cURL
> ```javascript
>  curl -i -H 'Accept: application/json' http://localhost:6699/booking/reserve req.body {     "restaurant": "b" "type": "diner_group", "adults": 5,"name": "aa2","email": "tt@gmail.com","phonenumber": "0932222222","date": "09/05/2023" }
> ```
</details>

#### Cancel booking Restaurant

<details>
<summary><code>POST</code> <code>http://localhost:6699/booking/cancel<b>/tables</b></code> <code>(Displays cancel booking restaurant tables)</code></summary>

##### Responses
> | http code     | content-type          | response                                   |
> |---------------|-----------------------|-------------------------------------------               |
> | `200`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": Already cancel booking`|
> | `400`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": Table is not available`|
> | `400`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": Not found Restaurant`|
> | `999`         | `application/json`           |`"status": { "code": 0,"message": "Success"}, "data": ServiceNotAvailable`|

##### Example cURL
> ```javascript
>  curl -i -H 'Accept: application/json' http://localhost:6699/booking/cancel req.body { "restaurant": "b","bookId": "b-1683788823429-aa2"}
> ```
</details>

