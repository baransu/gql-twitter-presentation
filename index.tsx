import React from "react";
import { createRoot } from "react-dom/client";
import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  DefaultTemplate,
  SlideLayout,
  codePaneThemes,
} from "spectacle";
// @ts-ignore
import gqlvsrestimg from "./gqlvsrest.jpg";
// @ts-ignore
import gqlerror from "./gqlerror.jpg";
// @ts-ignore
import codegen from "./codegen.jpg";
// @ts-ignore
import partialResults from "./partial-results.117d8efb.png";
// @ts-ignore
import qr from "./qr.png";

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

const Presentation = () => (
  <Deck theme={theme} template={<DefaultTemplate />}>
    <Slide>
      <FlexBox height="100%">
        <Heading>GraphQL from Backend to Frontend</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>
          GraphQL is a query language that allows clients to receive exactly the
          data the need
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>Describe your data</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {describeSnippet}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Ask what you want</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {querySnippet}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Get results</Heading>
      <CodePane language="json" theme={codePaneThemes.atomDark}>
        {responseSnippet}
      </CodePane>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>That's it, thank you for my talk!</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>
          Just kidding!
          <br /> There is much more to it!
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>Demo!</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading>https://twittergql.fly.dev</Heading>
      <FlexBox height="100%" flexDirection="column">
        <Image src={qr} height="100%" />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>
          Let's go back to the <br /> "Describe your data"
        </Heading>
      </FlexBox>
    </Slide>
    <SlideLayout.List
      title="GraphQL Schema"
      items={[
        "Types",
        "Input Types",
        "Interfaces",
        "Unions",
        "Enums",
        "Scalars",
        "Directives",
      ]}
      animateListItems
    />
    <Slide>
      <Heading>Types</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetSchemaType}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Input Types</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetInputType}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Interfaces</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetInterface1}
      </CodePane>
      <Box height="20px" />
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetInterface2}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Unions</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetUnion}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Enums</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetEnum}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Scalars</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetCustomScalar}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Directives</Heading>
      <UnorderedList>
        <ListItem>@include(if: Boolean!)</ListItem>
        <ListItem>@skip(if: Boolean!)</ListItem>
        <ListItem>@deprecated(reason: String)</ListItem>
      </UnorderedList>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetDirective}
      </CodePane>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>
          Now, let's focus on <br />
          "Ask what you want"
        </Heading>
      </FlexBox>
    </Slide>
    <SlideLayout.List
      title="GraphQL Query"
      items={["Queries", "Fragments", "Mutations", "Subscriptions"]}
      animateListItems
    />
    <Slide>
      <Heading>Queries</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetQuery}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Fragments</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetFragment}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Mutations</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetMutation1}
      </CodePane>
      <Box height="20px" />
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetMutation2}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Subscriptions</Heading>
      <CodePane language="graphql" theme={codePaneThemes.atomDark}>
        {snippetSubscription}
      </CodePane>
    </Slide>
    <Slide>
      <FlexBox height="100%">
        <Heading>
          Now we know what the GraphQL language is, let's explore how Backend
          and Frontend implementations may look like
        </Heading>
      </FlexBox>
    </Slide>
    <SlideLayout.List
      title="Backend approach"
      items={[
        "Schema first",
        "Code first",
        "We'll focus on the code first approach",
        "In Elixir!",
      ]}
      animateListItems
    />
    <Slide>
      <Heading>Basic type</Heading>
      <CodePane language="elixir" theme={codePaneThemes.atomDark}>
        {snippetElixirField}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Resolver</Heading>
      <CodePane language="elixir" theme={codePaneThemes.atomDark}>
        {snippetElixirFieldWithArgsAndResolver}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Mutation</Heading>
      <CodePane language="elixir" theme={codePaneThemes.atomDark}>
        {snippetElixirMutation}
      </CodePane>
    </Slide>
    <SlideLayout.List
      title="More advanced topics"
      items={["Context", "Middlewares", "Dataloaders", "Relay Connection"]}
      animateListItems
    />
    <Slide>
      <Heading>Middleware and Context</Heading>
      <CodePane language="elixir" theme={codePaneThemes.atomDark}>
        {snippetElixirMiddlewareContext}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Dataloader</Heading>
      <Text>GraphQL solution to N+1 queries</Text>
    </Slide>
    <Slide>
      <Heading>Without Dataloader</Heading>
      <CodePane language="elixir" theme={codePaneThemes.atomDark}>
        {snippetElixirNoDataloader}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>With Dataloader</Heading>
      <CodePane language="elixir" theme={codePaneThemes.atomDark}>
        {snippetElixirDataloaderUsage}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Dataloader definition</Heading>
      <CodePane language="elixir" theme={codePaneThemes.atomDark}>
        {snippetElixirDataloaderDefinition}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>Relay "Connection" specification</Heading>
      <CodePane language="elixir" theme={codePaneThemes.atomDark}>
        {snippetRelayConnectionSpec}
      </CodePane>
    </Slide>
    <Slide>
      <Heading>In practice</Heading>
      <CodePane language="elixir" theme={codePaneThemes.atomDark}>
        {snippetElixirRelayConnection}
      </CodePane>
    </Slide>
    <SlideLayout.List
      title="Time for Frontend"
      items={[
        "GraphQL over HTTP",
        "GraphQL clients",
        "Codegen",
        "Normalized cache",
        "Partial results",
        "Request policy",
        "Optimistic responses",
      ]}
      animateListItems
    />
    <Slide>
      <Heading>GraphQL over HTTP</Heading>
      <CodePane language="typescript" theme={codePaneThemes.atomDark}>
        {snippetFetch}
      </CodePane>
    </Slide>
    <SlideLayout.List
      title="GraphQL clients"
      items={[
        "Apollo Client",
        "Relay",
        "AWS Amplify",
        "urql",
        "rtk-query-gql",
        "GraphQL Request",
        "graphqurl",
      ]}
      animateListItems
    />
    <SlideLayout.List
      items={[
        "graphql-hooks",
        "GraphQL-WS",
        "Lokka",
        "nanographql",
        "GraphQL-SSE",
        "Grafoo",
        "GraphQL-HTTP",
        "...and probably many more",
      ]}
      animateListItems
    />

    <Slide>
      <Heading>urql - query</Heading>
      <CodePane language="typescript" theme={codePaneThemes.atomDark}>
        {snippetQueryUrql}
      </CodePane>
    </Slide>

    <Slide>
      <Heading>urql - mutation</Heading>
      <CodePane language="typescript" theme={codePaneThemes.atomDark}>
        {snippetMutationUrql}
      </CodePane>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Image src={codegen} height="100%" />
      </FlexBox>
    </Slide>

    <Slide>
      <Heading>@graphql-codegen/cli</Heading>
      <CodePane language="typescript" theme={codePaneThemes.atomDark}>
        {snippetCodegen}
      </CodePane>
    </Slide>

    <SlideLayout.List
      title="But why?"
      items={[
        "Typesafety from Backend to Frontend",
        "Compile time validation",
        "Local documentation",
      ]}
      animateListItems
    />

    <SlideLayout.List
      title="More advanced topics"
      items={[
        "Normalized cache and partial results",
        "Request policy",
        "Optimistic updates",
      ]}
      animateListItems
    />

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Image src={partialResults} width="100%" />
      </FlexBox>
    </Slide>

    <SlideLayout.List
      title="urql request policy"
      items={[
        "cache-first - prefers cached results and falls back to sending an API request when no prior result is cached",
        "cache-and-network - returns cached results but also always sends an API request, which is perfect for displaying data quickly while keeping it up-to-date",
        "network-only - will always send an API request and will ignore cached results",
        "cache-only - will always return cached results or null",
      ]}
      animateListItems
    />

    <Slide>
      <Heading>Optimistic updates</Heading>
      <CodePane language="typescript" theme={codePaneThemes.atomDark}>
        {snippetOptimisticUpdate}
      </CodePane>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Pros and cons</Heading>
      </FlexBox>
    </Slide>
    <SlideLayout.List
      title="Pros"
      items={[
        "Typed!",
        "Self documented",
        "Versionless",
        "Great for mobile - lower transfer, cache friendly",
        "Speed of development (codegen, power to the clients)",
        "Dataloaders",
        "Great for public APIs (e.g. GitHub API)",
      ]}
      animateListItems
    />
    <SlideLayout.List
      title="Cons"
      items={[
        "More complex Frontend",
        "Normalized cache (and caching) is complex",
        "Overkill in smaller projects",
      ]}
      animateListItems
    />
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Image src={gqlvsrestimg} height="100%" />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Image src={gqlerror} height="100%" />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Demo!</Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Thank you!</Heading>
        <UnorderedList>
          <ListItem>
            <a
              href="https://twittergql.fly.dev"
              style={{ color: "rgb(235, 229, 218)" }}
            >
              https://twittergql.fly.dev
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/baransu/gql-twitter"
              style={{ color: "rgb(235, 229, 218)" }}
            >
              https://github.com/baransu/gql-twitter
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://github.com/baransu/gql-twitter-presentation"
              style={{ color: "rgb(235, 229, 218)" }}
            >
              https://github.com/baransu/gql-twitter-presentation
            </a>
          </ListItem>
          <ListItem>
            <a
              href="https://graphql.org/learn/"
              style={{ color: "rgb(235, 229, 218)" }}
            >
              https://graphql.org/learn/
            </a>
          </ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  </Deck>
);

const root = createRoot(document.getElementById("root")!);
root.render(<Presentation />);

const describeSnippet = `
type Project {
  name: String
  tagline: String
  contributors: [User]
}`;
const querySnippet = `
{
  project(name: "GraphQL") {
    tagline
  }
}`;
const responseSnippet = `
{
  "project": {
    "tagline": "A query language for APIs"
  }
}
`;

const snippetSchemaType = `
type Tweet {
  content: String!
  id: ID!
  insertedAt: DateTime!
  likes: Int
  likedBy(limit: Int, offset: Int): [User!]
  user: User!
}
`;

const snippetInputType = `
input UserInput {
  password: String!
  username: String!
}`;

const snippetInterface1 = `
"""An object with an ID."""
interface Node {
  """ID of the object."""
  id: ID!
}`;

const snippetInterface2 = `
"""Product."""
type Product implements Node {
  id: ID!
  # ...
}
`;

const snippetUnion = `
type Book {
  id: ID!
  title: String!
  author: Person!
}

type Movie {
  id: ID!
  title: String!
  cast: [Person!]
}

union Media = Book | Movie
`;

const snippetEnum = `
enum AddressTypeInput {
  billing
  shipping
}
`;

const snippetCustomScalar = `
"""
An ISO 8601-encoded datetime
"""
scalar ISO8601DateTime
`;

const snippetDirective = `
query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}
`;

const snippetQuery = `
query Me {
  me {
    id
    username
    avatarUrl
  }
}`;

const snippetFragment = `
fragment Tweet on Tweet {
  id
  content
  insertedAt
  likes
  user {
    ...User
  }
}
`;

const snippetMutation1 = `
mutation SignIn($username: String!, $password: String!) {
  token: signIn(username: $username, password: $password)
}
`;

const snippetMutation2 = `
mutation CreateTweet($content: String!) {
  createTweet(content: $content) {
    ...Tweet
  }
}
`;

const snippetSubscription = `
subscription OnCommentAdded($postID: ID!) {
  commentAdded(postID: $postID) {
    id
    content
  }
}
`;

const snippetElixirField = `
input_object :user_input do
  field :username, non_null(:string)
  field :password, non_null(:string)
end`;

const snippetElixirFieldWithArgsAndResolver = `
object :user do
  field :id, non_null(:id)
  field :username, non_null(:string)

  field :avatar_url, :string do
    resolve(fn _, %{source: %{id: id}} ->
      index = rem(id, 50)
      {:ok, "https://avatar.iran.liara.run/public/#{index}"}
    end)
  end
end
`;

const snippetElixirMutation = `
field :sign_in, non_null(:string) do
  arg(:username, non_null(:string))
  arg(:password, non_null(:string))

  resolve(fn _, args, _ ->
    AccountsResolver.sign_in(args)
  end)
end`;

const snippetElixirMiddlewareContext = `
field :me, :user do
  middleware(AuthMiddleware)

  resolve(fn _, _args, %{context: %{user: user}} ->
    {:ok, user}
  end)
end`;

const snippetRelayConnectionSpec = `
user {
  id
  name
  friends(first: 10, after: "opaqueCursor") {
    edges {
      cursor
      node {
        id
        name
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}`;

const snippetElixirNoDataloader = `
object :tweet do
  field :id, non_null(:id)
  field :content, non_null(:string)
  field :inserted_at, non_null(:datetime)

  field :user, non_null(:user) do
    resolve(fn _, %{source: %{user_id: user_id}} ->
      Twitter.Users.get_user(user_id)
    end)
  end
end
`;

const snippetElixirDataloaderDefinition = `
def context(ctx) do
  loader =
    Dataloader.new()
    |> Dataloader.add_source(User, Dataloader.Ecto.new(Twitter.Repo))

  Map.put(ctx, :loader, loader)
end
`;

const snippetElixirDataloaderUsage = `
object :tweet do
  field :id, non_null(:id)
  field :content, non_null(:string)
  field :inserted_at, non_null(:datetime)

  field :user, non_null(:user) do
    resolve(dataloader(User))
  end
end
`;

const snippetElixirRelayConnection = `
connection field :tweets, node_type: :tweet do
  resolve(fn pagination_args, _ ->
    Twitter.Tweets.list_tweets(pagination_args)
  end)
end
`;

const snippetFetch = `
fetch('http://localhost:4000/api/graphql', {
  method: 'POST',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: \`{
      me {
        id
        username
        avatarUrl
      }
    }\`
  })
})
.then(res => res.json())
.then(res => console.log(res.data.me))
`;

const snippetMutationUrql = `
export const CreateTweetDocument = gql\`
  mutation CreateTweet($content: String!) {
    createTweet(content: $content) {
      id
    }
  }
\`

const [{data, fetching, error}, executeMutation] = useMutation(CreateTweetDocument);
`;

const snippetQueryUrql = `
export const MeQuery = gql\`
  query Me {
    me {
      id
      username
      avatarUrl
    }
  }
\`

const [{ data, fetching, error }] = useQuery(MeQuery)

if (fetching) return <p>Loading...</p>
if (error) return <p>Oh no... {error.message}</p>
return <p>{data.me.username}</p>
`;

const snippetCodegen = `
const config: CodegenConfig = {
  schema: "http://localhost:4000/api/graphql",
  documents: ["src/gql/**/*.gql"],
  generates: {
    "./schema.gql": {
      plugins: ["schema-ast"],
    },
    "./src/gql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        { "typescript-urql": { withHooks: true } },
      ],
    },
  },
};
`;

const snippetOptimisticUpdate = `
mutation FavoriteTodo(id: $id) {
  favoriteTodo(id: $id) {
    id
    favorite
    updatedAt
  }
}
const cache = cacheExchange({
  optimistic: {
    favoriteTodo(args, cache, info) {
      return {
        __typename: 'Todo',
        id: args.id,
        favorite: true,
      };
    },
  },
});
`;
