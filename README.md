# e-commerce-back-end

## Description
A server-based backend which can modify and view an e-commerce database. 

[Github Source Repository](https://github.com/byampols/e-commerce-back-end).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributors](#contributors)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
* Clone the github repository to your desired location.
* Create a file '.env' in the cloned directory which defines the variables: 
  * DB_NAME = 'just_tech_news_db' 
  * DB_USER='your-mysql-username-or-root' 
  * DB_PW = 'your-mysql-password'
* Open the command line, and navigate to the cloned directory. Then type 'npm i' to install the required npm libraries. If node is not installed, please install it before this step.
* Ensure mysql is installed, then type 'mysql -u your-mysql-username-or-root -p' then enter your password.
* Type 'source db/schema.sql' to create the database, then type 'quit' to exit mysql.
* In your preferred code editor, open the files in the 'seeds' directory and modify the default seeds to your liking, or skip this step if you wish to use the default seeds. 
* Back in the command line, type 'node seeds/index.js' to seed the database.
* Type node start to run the database locally, or deploy the code to JAWSDB via Heroku. Deploying to another DB service will require modification to 'config/connection.js'
* The database is now up and running.

## Usage

[Link to a video of the code's usage--also demonstrates the installation instructions](https://drive.google.com/file/d/1vNQ-6uQVvbWgFVt0yrh3IWuM2SLt-PAH/view?usp=sharing)

*  The database will accept calls in the following forms:
* At /api/categories:
  * GET '/'
  * GET '/id' (where id is an existing id of a category)
  * POST '/', body (JSON): 
            {
	            "category_name": "your-category-name"
            }
  * PUT '/', body (JSON):
            {
	            "category_name": "updated-category-name"
            }
  * PUT '/id' (where id is an existing id of a category)
* At /api/products:
  * GET '/'
  * GET '/id' (where id is an existing id of a product)
  * POST '/', body (JSON): 
            {
                "product_name": "your-product-name",
                "price": XX.XX,
                "stock": #,
                "category_id": #,
                "tagIds": [#, #, ...]
            }
  * PUT '/', body (JSON):
            {
                "product_name": "updated-product-name",
                "price": YY.YY,
                "stock": #,
                "category_id": #,
                "tagIds": [#, #, ...]
            }
  * PUT '/id' (where id is an existing id of a product)
* At /api/tags:
  * GET '/'
  * GET '/id' (where id is an existing id of a tag)
  * POST '/', body (JSON): 
            {
	            "tag_name": "your-tag-name"
            }
  * PUT '/', body (JSON):
            {
	            "tag_name": "updated-tag-name"
            }
  * PUT '/id' (where id is an existing id of a tag)

## License

[MIT License](https://opensource.org/licenses/MIT).

## Contributors
* [Ben Yampolsky](https://github.com/byampols)
* [coding-boot-camp](https://github.com/coding-boot-camp/fantastic-umbrella)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [sequelize](https://www.npmjs.com/package/sequelize)
* [Neo_, on working around Sequelize’s unique constraints in belongsToMany associations](https://stackoverflow.com/a/58439584)

## Tests
* After following the installation instructions, use Insomnia Core to test various routes, as shown in the video demonstration.

## Questions
### [My github profile.](https://github.com/byampols)
### [Email me if you have any questions!](byampols@alumni.cmu.edu)