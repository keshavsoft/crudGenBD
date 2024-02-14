<h1 align="center" color="#0000FF">crudgenbd</h1>

[![KeshavSoft Logo](./KeshavSoft.jpg)](https://keshavsoft.com/)

## **Table of Contents** 📚
- [Overview](#Overview)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Purpose of the Project](#purpose-of-the-project)
- [Important Points](#important-points)
- [advanced installation](#advancedinstallation)

### <a name="overview"></a>## **Overview** 🔎
This project focuses on automating CRUD operations for JSON files, making it easy to manage and manipulate data. It offers a user-friendly interface for performing essential actions on JSON files, such as creating, reading, updating, and deleting records.
#### **Key Features** 
- **Dynamic Schema Handling:** Define table schemas using JSON files and dynamically generate CRUD operations.
- **Cross-Platform Compatibility:** Compatible with Windows, Mac, and Linux operating systems.
- **Effortless Setup:** Use provided batch files for Windows or simple commands for other OS to set up the project quickly.
- **Automatic Frontend Setup:** Automatically creates a frontend codebase in the public/JsonCRUD directory.
#### **Technologies Used** 
- **Node.js:** Leveraging the power of JavaScript on the server-side.
- **Express.js:** A minimal and flexible Node.js web application framework for building robust APIs.
- **SQLite:** A lightweight, file-based database for efficient data storage.
- **npm:** The package manager for Node.js used for installing project dependencies.

### <a name="installation"></a>## **Installation** 🚀

1. Create a folder and navigate into it using the command prompt.

2. Clone the repository
   ```
   
   git clone https://github.com/keshavsoft/crudGenBD
   
   ```
3. Change Directory to crudGenBD or Open the cloned folder, navigate to crudGenBD, and open the command prompt.
   ```
   
    cd crudGenBD
   
   ```
4. Run the batch file (For Windows)
   ```
   
   BoilerPlate.bat
   
   ```
   This Above Command runs the following in Windows
   ``
   npm i and node KCode/EntryFile.js
   ``
   
    For Mac or Linux:
      ``
        chmod +x boilerplate.sh and sh boilerplate.sh
     ``
   
 5. For Executing:
   
   ```
   
      npm run start
   
   ```
### <a name="folder-structure"></a>## **Folder Structure**

```plaintext
├── KCode/
│   └── EntryFile.js
├── public/
│   └── JsonCRUD/
│       └── bin/
│           └── (frontend code)
├── KData/
│   └── JSON/
│       └── 316/
│           └── data.db
├── FromTableColumns/
│   └── customers.json
├── FromData/
│   └── (JSON files)
├── bin/
│   └── (backend code)
├── BoilerPlate.bat
├── boilerplate.sh
├── package.json
├── .env
└── README.md
```
### <a name="purpose-of-the-project"></a>## **Purpose of the Project** 🎯
The primary objective is to simplify the process of managing and interacting with JSON files. By automating CRUD operations, this project aims to enhance efficiency and reduce the complexity of handling JSON data.
### <a name="important-points"></a>## **Important Points** 
Date: 24 Jan 2024
Stopped using encrypted SQLite database due to the unavailability of npm modules and limited knowledge within the team.

advanced users
follow the below steps also

create .env file
KS_SECRET_FORLOGIN=9848163021

from Keshav

table name : Users, is needed for user management

### <a name="advancedinstallation"></a>## **Advanced Installation** 🚀

the below steps avoids, npm installation, there by saving internet bandwidth.

Follow Installation steps 1, 2, 3 then 

4. Run the batch file (For Windows)
   ```
   
   BoilerPlate.bat -npm
   
   ```
   
 5. For Executing:
   
   ```
      npm run start
   
   ```

to rerun the application for new schema

1. delete bin folder in the root ( backend )
2. delete data folder in KData/JSON ( data location )

define you config in kcode folder
