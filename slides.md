--- { "layout" : "center" }
# GraphQL from Backend to Frontend

---

What is GrapgQL?
GraphQL is a query language that allows clients to receive exactly the data the need

---

Describe your data
<examle schema>

---

Ask what you want
<example query>

---

Get results
<json response>

---

## That’s it, thank you my my talk

---

## Just kidding, there is much more to it

---

## <demo>

---

## I’ll use that application as reference implementation we’ll discuss

---

## Lets go back to the „describe your data”

---

## GraphQL consists of schema and query language

---

## <example of type>

---

## <example of input type>

---

## <interface example>

---

## <union example>

---

## <enum example>

---

## <custom scalar example>

---

## <directives>

---

Query

---

## <example query>

---

<example fragment

---

<example mutation>

---

<example subscription>

--- { "layout" : "list" }

Backend

- schema first
- code first

---

Walkthrough

- fields
- args
- resolvers

---

Advanced

- context
- middleware
- dataloaders
- relay connection

---

Frontend

- fetch example with gql string
- gql clients
- codegen (introspection query)

---

Advanced

- normalized cache
- partial results
- local resolvers
- local state

---

Pros

- typed
- self documented
- versionless
- mobile (lower transfer)
- speed of development (codegen, client queries)
- dataloaders

---

Cons

- More complex frontend because of not that well structured responses
- Normalized cache (and caching) is complex
- Overkill in smaller projects

---

Cool stuff

- graphiql
- pg graphql (supabase)
