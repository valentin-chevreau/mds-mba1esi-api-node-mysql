# AtlasMongodb cluster & API REST

## Architecture of the project

![The architecture](https://user-images.githubusercontent.com/32523957/59774388-abc11280-92af-11e9-987d-84822402c519.png)

## Mongodb
### Online
Create your cluster

To create your cluster, go to **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** and sign in with the `Start free` button.

Inquire your account datas and continue.

Then: 
1. Click on **Build a new cluster**
2. Select the **global configurations** (Plateform, Location, Cluster Tier and give it a cluster name...)

Here, I called my cluster `mdsOptimPerf`

3. Click on **Create cluster**

### In local

**Create your cluster** 

`docker network create mongo-cluster`

**Lauch the three instances of mongoDB replicaset**

_First instance: PRIMARY_

`docker run \
-p 30001:27017 \
--name mongo1 \
--net mongo-cluster \
mongo mongod --replSet mongo-set`

_Second instance: SECONDARY_

`docker run \
-p 30002:27017 \
--name mongo2 \
--net mongo-cluster \
mongo mongod --replSet mongo-set`

_Third instance: SECONDARY_

`docker run \
-p 30003:27017 \
--name mongo3 \
--net mongo-cluster \
mongo mongod --replSet mongo-set`

## Installation

**Dépendencies**

Use the `npm install -S` command to get them. 

This command install all dependencies needed in the project, which are presents in the `package.json` file.

**Cluster URL**

Inquire your *Cluster URL* in `db.js` file in `config` directory or comment and uncomment the right configuration.

## Run

Go to the directory project.

To run the app, launch this command:
`npm run start`

## Routes

- **IN GET**

    - To _list_ all tasks: `/members`
    - To _search_ a specific task: `/members/:memberid`

- **IN POST**

    - To _create_ a task: `/member/create`
    This previous command require to give the informations needed to create ("memberName")

- **IN PUT**
    - To _update_ a specific task: `/member/:memberid`
    This previous command require to give the informations to modify ("memberName" for exemple)

- **IN DELETE**
    - To _delete_ a specific task: `/member/delete/:memberid`