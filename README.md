# Company Manager

A sample project showing off the capabilities of Spring REST Data with JPA


## Getting Started
This is Spring Boot project using Gradle.

### Prerequisites
Java 8+, Gradle 4+

### Running the Application

To start the application run:

`gradle bootRun`

To build an executable jar run:

`gradle build`

This will create a fat jar under the `build/lib` folder. To execute that jar run:

`java -jar build/libs/nt-rest-company-0.1.0.jar`


### Operations

This application has a REST interface and two endpoints:
- **_/companies_** - for managing companies. Each company can be created/read/updated/deleted using the appropriate HTTP method(s)
  
  Each Company has: name, address, city, country, e-mail, phone number and one or many beneficial owners
  
- **_/benf_owners_** - for managing beneficial owners. Each beneficial owner can be created/read/updated/deleted using the appropriate HTTP method(s)
  
  Each Beneficial Owner has a name

#### To List All Companies
Listing all companies is done through `HTTP GET` method: `GET /companies`

__Example:__ `curl http://localhost:8080/companies`

#### To Get Details for a Company
Getting details for a company is done through `HTTP GET` method and the company id: `GET /companies/1`

__Example:__ `curl http://localhost:8080/companies/1`

#### To Create a New Company
Creating a company is done through `HTTP POST` method:  
```http
POST /companies
Content-Type: application/json

{
  "name" : "My Cool Company",
  "address" : "Mayfair", 
  "city" : "London", 
  "country" : "UK"
}
```

**Required fields:** name, address, city, country

__Example:__ `curl http://localhost:8080/companies -i -X POST -H "Content-Type: application/json" -d "{ \"name\" : \"My Cool Company\", \"address\" : \"Mayfair\",  \"city\" : \"London\",  \"country\" : \"UK\"}`

#### To Delete a Company
Deleting a company is done through `HTTP DELETE` method and the company id: `DELETE /companies/1`

__Example:__ `curl -i -X DELETE http://localhost:8080/companies/1`

#### To Partially Update a Company
In case only one or several fields have to be updated without replacing the prior values `HTTP PATCH` method can be used:
```http
PATCH /companies/1
Content-Type: application:json

{
  "city": "Reading"
}
```

__Example:__ `curl http://localhost:8080/companies/1 -i -X PATCH -H "Content-Type: application/json" -d "{\"city\":\"Reading\"}`

#### To Update a Company
The `HTTP PUT` method is used to update a company and all fields that are not set will have values of `null`

Creating a company is done through `HTTP POST` method:  
```http
PUT /companies/1
Content-Type: application/json

{
  "name" : "My Cool Company",
  "address" : "Mayfair", 
  "city" : "London", 
  "country" : "UK"
}
```

**Required fields:** name, address, city, country

__Example:__ `curl http://localhost:8080/companies/1 -i -X PUT -H "Content-Type: application/json" -d "{ \"name\" : \"My Cool Company\", \"address\" : \"Mayfair\",  \"city\" : \"London\",  \"country\" : \"UK\"}`

#### To Add Beneficial Owner to a Company
To associate Beneficial Owner to a Company the owner has to be created first. This can be done the same way as with companies by using the `HTTP POST` method.

__Example:__ `curl http://localhost:8080/benf_owners -i -X POST -H "Content-Type: application/json" -d "{\"name\" : \"neta\"}`

Once the Beneficial Owner is created it can be added to a Company with a `PUT` request that has `Content-Type: text/uri-list`:
```http
PUT /benf_owners/1/company
Content-Type: text/uri-list

http://localhost:8080/companies/1
```

__Example:__ `curl -i -X PUT  -H "Content-Type:text/uri-list" -d "http://localhost:8080/companies/2" http://localhost:8080/benf_owners/1/company`

## Web Client (Bonus)
There is web client served under `/app` (e.g. `http://localhost:8080/app`).
The source code can be found [here](https://github.com/nenko-tabakov/crud-company-ui)

## Authentication
This application currently lacks authentication mechanism. The considered protocol is [OpenID Connect](http://openid.net/connect/) as:
- it is web and mobile friendly
- it does not rely on explicit trust between the application and the identity provider
- has good specification that covers the common use cases 