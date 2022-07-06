# Using code-gen

- ```
    npx graphql-codegen init
    yarn
    yarn gen
  ```
- We need to create a default file with `.graphql` for adding queries (video timestamp => 1.34.0)
- Then copy paste the query form playground to here
- Also change the settings in codegen.yml file to only get hook based query
- ```
  config:
    withHOC: false
    withComponent: false
    withHooks: true
  ```
- Now everytime we add a new query/mutation we have to use `yarn gen` to auto generate the hooks

---

# CORS

- before applying middleware we have to setup CORS

```
app.use(
 cors({
   origin: "localhost:3500",
   credentials: true,
 })
);
```

- then while applying middle ware we have to `apolloServer.applyMiddleware({ app, cors: false });` set cors as false
- in website (FE) we have to set `credential: "include"`
