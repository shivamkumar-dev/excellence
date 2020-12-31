# Excellence Test

# API's

## ***CANDIDATES***
### -- GET & POST
* Url:  https://excellence-test.herokuapp.com/api/candidates
* Description: This will get or post records of candidates
* GET: No payload required
* POST: 
    ```javascript
    {
     "name": "Name of Candidate (string)",
     "email": "Email of Candidate (string)"
    }
    ```
  * Example: 
      ```javascript
      {
       "name": "Shivam Kumar",
       "email": "shivam66.sk@gmail.com"
      }
      ```
### -- PUT & DELETE
* Url:  https://excellence-test.herokuapp.com/api/candidates/:id
  * Example: https://excellence-test.herokuapp.com/api/candidates/5fec9fddbfec271dc45951ec
* Description: This will get, update and delete records of a candidate
* DELETE: No payload required
* PUT: 
    ```javascript
    {
     "name": "Updated Name (string)",
     "email": "Updated Email (string)"
    }
    ```
    
## ***TEST-SCORES***
### -- GET & POST
* Url:  https://excellence-test.herokuapp.com/api/test-scores
* Description: This will get or post records of test-scores
* GET: No payload required
* POST: 
    ```javascript
      {
      "candidateId": "ID of Candidate (string)",
      "firstRound": Score in First Round (Number),
      "secondRound": Score in Second Round (Number),
      "thirdRound": Score in Third Round (Number)
      }
    ```
  * Example: 
      ```javascript
      {
      "candidateId": "5fed926e0c45f320ecd72348",
      "firstRound": 8,
      "secondRound": 6,
      "thirdRound": 7
      }
      ```
### -- PUT & DELETE
* Url:  https://excellence-test.herokuapp.com/api/test-scores/:id
  * Example: https://excellence-test.herokuapp.com/api/test-scores/5fed91e90c45f320ecd72341
* Description: This will get, update and delete records of a candidate
* DELETE: No payload required
* PUT: 
    ```javascript
    {
    "candidateId": "ID of Candidate (string)",
    "firstRound": Updated Score in First Round (Number),
    "secondRound": Updated Score in Second Round (Number),
    "thirdRound": Updated Score in Third Round (Number)
    }
    ```
    
## ***HIGHEST SCORING CANDIDATE***
### -- GET 
* Url:  https://excellence-test.herokuapp.com/api/scores/highest
* Description: This will get the highest scoring candidate
* GET: No payload required

## ***AVERAGE SCORES***
### -- GET 
* Url:  https://excellence-test.herokuapp.com/api/scores/average
* Description: This will get average scores for all candidates
* GET: No payload required
