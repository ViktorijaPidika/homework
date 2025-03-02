Task 1: Based on requirements create 3 manual test cases

**TC No 1 - happy path:**
Verify that a field validation and sign-up is successful with a valid username, email, and password
 
_Test steps:_
  1. Enter the username from the test data in the “Username” field
  2. Enter email from the test data in the “Email” field 
  3. Enter the password from the test data in the “Password” field
  4. Enter the same password in the “Confirm password” field
  5. Submit form

_Test data:_ 
  1. Username: in between 3-20 alphanumeric characters
  2. Email: valid email address (e.g., example@domain.com)
  3. Password: 8 characters where at least 1 uppercase, 1 lowercase, and 1 number

_Expected result:_
  1. User has successfully signed-up
  2. The field validation has passed
  3. The user has been redirected to the Home Page
  4. The success message "You have registered successfully!" has been displayed


**TC No 2 - negative case:**
Verify that a field validation and sign-up fails with an invalid username, email, and password

_Test steps:_
  1. Enter the username from the test data in the “Username” field
  2. Enter email from the test data in the “Email” field 
  3. Enter the password from the test data in the “Password” field
  4. Enter the same password in the “Confirm password” field
  5. Submit form

_Test data:_ 
  1. Username: in between 3-20 non-alphanumeric characters
  2. Email: invalid email address (e.g., example@domain)
  3. Password: 8 characters where at least one of the conditions are not met - at least 1 uppercase, 1 lowercase, and 1 number

_Expected result:_
  1. The sign-up process is unsuccessful, and user remains on the same page
  2. The field validation fails
  3. Error messages under the fields with the incorrect input are returned


**TC No 3 - edge case:** 
Verify that a field validation and sign-up fails with an incomplete user’s data

_Test steps:_
  1. Enter the username from the test data in the “Username” field
  2. Submit form

_Test data:_ 
 1. Username: in between 3-20 alphanumeric characters

_Expected result:_
 1. The sign-up process is unsuccessful, and user remains on the same page
 2. The field validation fails
 3. Error messages under empty fields are returned

-----------------------------------------------------------------------------------------------------------------------

Task 2: Report at least 1 Bug You have found during the testing

**Issue No.1:** Fields with errors are not highlighted

_What happened?_
The fields with errors are not highlighted 

_How to replicate it?_
  1. Open https://auth-home-task.vercel.app/register
  2. Wait till the page has been fully loaded
  3. Leave all fields empty and click on the submit button

_What was expected?_ 
Fields with errors are highlighted

Example: (video with example of how issue can be replicated and how it looks)

**Issue No.2:** User can complete registration with invalid email address

_What happened?_ 
If a user has provided a valid username and password, registration can be completed with an invalid email address (e.g., example@domain.1). The field validation passes despite the invalid domain ending (e.g., with a numeric value (.1, .23456, etc.) or just 1 character( .c, .k, .i, etc.))

_How to replicate it?_ 
  1. Open https://auth-home-task.vercel.app/register
  2. Wait till the page has been fully loaded
  3. Enter valid data in the “Username” field (e.g. test)
  4. Enter invalid data in the “Email” field (e.g. example@domain.1)
  5. Enter valid data in the “Password” field (Testing1)
  6. Enter same password in the “Confirm” password field
  7. Click on the submit button

_What was expected?_
The field validation fails if an invalid email address has been provided

Example: (video with example of how issue can be replicated and how it looks)

**Issue No.3:** User can sign up multiple times using same data
_What happened?_ 
The user can sign up multiple times with the same data (username and/or email)

_How to replicate it?_
  1. Open https://auth-home-task.vercel.app/register
  2. Wait till the page has been fully loaded
  3. Fill the form with the valid user's data
  4. Click on the submit button
    What will happen? - User will be successfully signed-up
  5. Navigate back to the registration form
  6. Fill out the registration form with the same data
  7. Click on the submit button
    What will happen? - User will again be forwarded to the home page and success message will be returned

_What was expected?_ 
Error message that user with such username and/or email address already exists

Example: (video with example of how issue can be replicated and how it looks)

-----------------------------------------------------------------------------------------------------------------------

Task 3: Based on requirements, automate 1 manual test case using playwright

https://github.com/ViktorijaPidika/homework/tree/main/tests 

-----------------------------------------------------------------------------------------------------------------------

Task 4: Add points to improve form's UI/UX

  1. Add a disclaimer that the user agrees to the Terms of Service and Privacy policy when clicking on the “Register” or add a mandatory checkbox that the user has to check to finalize sign-up (also, hyperlinks to the policies should be added).
  2. The message with the required data format could be shown under the input field when the user is focused on it. 
  3. An option to see/hide password, so that user could see if entered input is correct
  4. Change field borders to green color and return check mark inside it when user’s entered data meet the requirements
  5. Hide the “Confirm password” field and show it only when the user has provided a valid password
  6. Change the input field title fonts to bold
  7. Under the action button, add an option to switch to the login page. The user might have accidentally opened the registration form and already has an account.
  8. If the system specifications allow and it was not yet provided in previous steps, then offer the possibility to sign up using Google/Apple account

-----------------------------------------------------------------------------------------------------------------------

Task 5: Anything You would improve/specify more in the existing requirements

  1. The error message texts could be clarified. At the moment, it says that a clear error message is expected, but it does not specify what those texts are. If texts were provided by the UX writer, they should be added to the task’s requirements.
  2. Clarification is needed of what is expected if the user inputs an already existing username or email
  3. The design added to the task for the reference, especially if this is something newly updated not only technically but also design-wise

-----------------------------------------------------------------------------------------------------------------------

Task 6: What else can be tested?

  1. Different variations of already noted test cases:
     1.1. For the happy path (TC No 1) - if the system allows to input from - to a specific amount of characters, check if validation passes when 1)min, 2) in between, 3) max amount of characters are entered into the input field. This would apply to both the username and the password fields since various inputs are possible.
     1.2. For the negative case (TC No 2) - so many different options are possible - try entering only spaces, try entering characters that are not allowed, or use only part of the required characters (in the password’s case). It would be crucial to understand that functionality does not break when the user makes a mistake within the sign-up process, since this is a very possible scenario in real life.
     1.3. For the edge case (TC No 3) - trying leaving empty different fields, at first each of fields separately and then combining multiple
  3. Check if the design meets requirements
  4. Verify if data is successfully saved and correctly stored in the database and/or internal tools when submitting the form. In these tests, it could also be checked if no data is saved when the user had an unsuccessful sign-up (or saved if such is system specifications) 
  5. Check if no errors are thrown when
     4.1. reloading the page when user has opened page and has not yet interacted with any of the fields
     4.2. reloading the page when user has started interacting with fields
     4.3. submitting the form
     4.4. reloading the page right after the form submission 
  7. Check how the component works on different screen sizes and in different browsers, on different devices
  8. Perform accessibility tests: 1) if the user can navigate to the fields with keyboards only, 2) if the user can fully interact with the form when using accessibility tools (e.g., voice over)
  9. Check how the page works and if the sign-up request does not fail in different network speeds (by throttling the network in the dev tools)
  10. Performance tests

Note:  What kind of tests would be performed depends on what was done within the development process - was it a newly added component/functionality or just a minor update? In the case of a new functionality, in-depth tests would be required, and all tests listed above should be performed, while in the case of minor updates - ensuring it has been updated according to the requirements and has not affected existing functionality (so only a few of the tests mentioned above might be performed). 



