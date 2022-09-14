## API DOCUMENTATION


**API URL**

```

https://orange-kloud-blog.herokuapp.com/api
```
This is an example link - [View API](https://orange-kloud-blog.herokuapp.com/api/blog)
<br>

### 1. Authentication

<br>

##### A. LOGIN
|Method|URL|PARAMETER |
|----|----|-----|
|POST|/user/login|  **text**: String <br> **password**: String

##### B. SIGNUP
|Method|URL|PARAMETER |
|----|----|-----|
|POST|/user/login| **name**: String <br> **text**: String <br> **password**: String


<br>

### 2. User

<br>

##### A. GET ALL USER
|Method|URL|PARAMETER|
|----|----|-----|
|GET|/user|  |

##### B. GET BY EMAIL
|Method|URL|PARAMETER |
|----|----|-----|
|POST|/user/getByEmail| **email**: String <br> 

##### C. FOLLOW A USER
|Method|URL|PARAMETER |
|----|----|-----|
|POST|/user/follow| **user**: String <br> **userToFollow**: String

##### D. BLOCK A USER
|Method|URL|PARAMETER |
|----|----|-----|
|POST|/user/block| **user**: String <br> **userToBlock**: String

##### E. GET FOLLOWER LIST OF A USER
|Method|URL|PARAMETER |
|----|----|-----|
|GET|/user/followerList| **email**: String 


##### F. GET COMMON FOLLOWER LIST OF MULTIPLE USER
|Method|URL|PARAMETER |
|----|----|-----|
|GET|/user/commonFollowerList| **email**: Array 

##### G. GET BLOGS BY SPECIFIC USER
|Method|URL|PARAMETER |
|----|----|-----|
|GET|/user/getBlogsByUser| **user**: String <br> **authorEmail**: String


<br>

### 3. BLOGS

<br>

##### A. GET ALL BLOGS
|Method|URL|PARAMETER |
|----|----|-----|
|GET|/blog|  |

##### B. ADD BLOGS
|Method|URL|PARAMETER |
|----|----|-----|
|POST|/blog/add| **title**: String <br>  **description**: String <br>  **user**: String


