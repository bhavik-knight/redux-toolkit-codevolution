# redux-toolkit-codevolution
RTK + React: Following codevolution [video playlist](https://youtu.be/0awA5Uw6SJE?si=MZwQ_jngxR38rZQu)

Learnings:
- **Redux**: A predictable *State Container* for JS apps

- 3 Concepts:
  - **Store**: An object, A global application store (single store) that holds the state of all components of the app
  - **Action**: An object, An activity to be performed at the Store. Action has `type` - kinda activity to be performed and `payload` - any additional information
  - **Reducer**: A pure function that takes two parameters [previous state, action] and returns the updated state. The body is *how to* update the state

-  Principles:
   - The global state of the application is stored as **one object**
   - The state is **read-only**, to update a state **dispatch** an *action* - which is an object that describes `what happened` 
   - To specify ***how to** update the state use **reducer** - reducer have [previous state, action] - it performs an action and returns a new state. The application can **subscribe/unsubscribe** to the **redux-store** to track the state
   
![image](https://github.com/user-attachments/assets/eb5d8d96-c44c-4941-a2f1-fdebf9c597a2)
