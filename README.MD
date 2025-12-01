# Provider Model
This file defines the schema for the `provider` collection in MongoDB using Mongoose. It includes fields related to the provider's business, contact details, address, and financial information.

## Schema Definition

The `providerSchema` defines the structure of a provider document.

### Fields
- **BuisnessName** *(String, Required)*: Must be at least 3 characters long.
- **contact** *(Object, Required)*:
  - `PhoneNo` *(Number, Required)*: Provider's phone number.
  - `email` *(String, Required, Unique)*: Must be at least 3 characters long.
- **address** *(Object, Required)*:
  - `buildingNo` *(Number)*: Optional building number.
  - `pincode` *(Number, Required)*: Must be exactly 6 digits.
  - `street` *(String, Required)*: Street name.
  - `landmark` *(String)*: Optional landmark.
- **AadhaarNo** *(Number, Unique)*: Must contain exactly 12 digits.
- **PANno** *(String, Unique)*: Unique PAN number.
- **accountHolderName** *(String, Required)*: Name of the account holder.
- **accountNo** *(Number)*: Must be between 9 to 18 digits.
- **UPIid** *(String, Required)*: UPI ID for transactions.

## Model
The schema is compiled into a Mongoose model named `providerModel` and exported for use in other parts of the application.

## Dependencies
- `mongoose` for schema and database operations.
- `bcrypt` and `jsonwebtoken` (although not used yet, can be used for authentication in the future).



# Provider Authentication Controller

This file contains the implementation of the provider authentication system, including registration and login functionality. It utilizes Express.js, Mongoose, and external services for email verification.

## Endpoints

### 1. Register Provider (`registerProvider`)
This endpoint allows new providers to register by submitting their business and personal details. 

#### Request
- **Method:** POST
- **Endpoint:** `/register`
- **Request Body:**
  ```json
  {
    "BuisnessName": "string",
    "contact": {
      "PhoneNo": "string",
      "email": "string"
    },
    "address": {
      "buildingNo": "string",
      "pincode": "string",
      "street": "string",
      "landmark": "string"
    },
    "AadhaarNo": "string",
    "PANno": "string",
    "accountHolderName": "string",
    "accountNo": "string",
    "UPIid": "string"
  }
  ```

#### Functionality
- Validates input data using `express-validator`.
- Checks if the provider already exists based on `AadhaarNo`.
- Generates a 4-digit OTP for email verification and sends it via `mailVerification`.
- Calls `createProvider` service to save the provider's details after OTP is sent.
- Returns the provider details upon successful registration.

#### Responses
- **200 OK:** Provider successfully registered.
- **400 Bad Request:** Validation errors or provider already exists.

### 2. Login Provider (`loginProvider`)
This endpoint verifies if a provider exists based on the business name and email.

#### Request
- **Method:** POST
- **Endpoint:** `/login`
- **Request Body:**
  ```json
  {
    "BuisnessName": "string",
    "contact": {
      "email": "string"
    }
  }
  ```

#### Functionality
- Validates input data using `express-validator`.
- Searches for a provider using the provided email and business name.
- Returns a success response if the provider is found.

#### Responses
- **200 OK:** Provider verified successfully.
- **400 Bad Request:** Validation errors.
- **404 Not Found:** Provider does not exist.

## Dependencies
- `express-validator` for request validation.
- `providerModel` for database operations.
- `createProvider` service for provider creation.
- `mailVerification` for sending email OTPs.
-





