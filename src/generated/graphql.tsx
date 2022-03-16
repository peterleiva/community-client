import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * An __Avatar__ (also known as a profile picture or userpic) is a graphical
   * representation of a user or the user's character or persona.
   */
  Avatar: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: any;
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: any;
  /** The Cursor is an opaque string in base64 encoding used by connection pattern to navigate between pages */
  Cursor: any;
  /** A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. */
  DID: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /**
   * A string representing a duration conforming to the ISO8601 standard,
   * such as: P1W1DT13H23M34S
   * P is the duration designator (for period) placed at the start of the duration representation.
   * Y is the year designator that follows the value for the number of years.
   * M is the month designator that follows the value for the number of months.
   * W is the week designator that follows the value for the number of weeks.
   * D is the day designator that follows the value for the number of days.
   * T is the time designator that precedes the time components of the representation.
   * H is the hour designator that follows the value for the number of hours.
   * M is the minute designator that follows the value for the number of minutes.
   * S is the second designator that follows the value for the number of seconds.
   *
   * Note the time designator, T, that precedes the time value.
   *
   * Matches moment.js, Luxon and DateFns implementations
   * ,/. is valid for decimal places and +/- is a valid prefix
   */
  Duration: any;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: any;
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: any;
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: any;
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: any;
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: any;
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: any;
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: any;
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: any;
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: any;
  /**
   * A string representing a duration conforming to the ISO8601 standard,
   * such as: P1W1DT13H23M34S
   * P is the duration designator (for period) placed at the start of the duration representation.
   * Y is the year designator that follows the value for the number of years.
   * M is the month designator that follows the value for the number of months.
   * W is the week designator that follows the value for the number of weeks.
   * D is the day designator that follows the value for the number of days.
   * T is the time designator that precedes the time components of the representation.
   * H is the hour designator that follows the value for the number of hours.
   * M is the minute designator that follows the value for the number of minutes.
   * S is the second designator that follows the value for the number of seconds.
   *
   * Note the time designator, T, that precedes the time value.
   *
   * Matches moment.js, Luxon and DateFns implementations
   * ,/. is valid for decimal places and +/- is a valid prefix
   */
  ISO8601Duration: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: any;
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: any;
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: any;
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: any;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: any;
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: any;
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: any;
  /** Floats that will have a value less than 0. */
  NegativeFloat: any;
  /** Integers that will have a value less than 0. */
  NegativeInt: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: any;
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any;
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: any;
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: any;
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: any;
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: any;
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: any;
  /** Floats that will have a value greater than 0. */
  PositiveFloat: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: any;
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: any;
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: any;
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** A currency string, such as $21.25 */
  USCurrency: any;
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: any;
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: any;
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: any;
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: any;
  /** Represents NULL values */
  Void: any;
};

/**
 * Enable backward pagination, slicing can be done with *last*. The *before* is a
 * opaque cursor returned by *pageInfo*'s *startCursor* node
 */
export type BackwardPageInput = {
  /** number of the page or last edges before this cursor */
  before?: InputMaybe<Scalars['Cursor']>;
  /** at most last edges */
  last?: InputMaybe<Scalars['NonNegativeInt']>;
};

/**
 * *Connection* is in compliance with
 * [*GraphQL Cursor Connections Specification*
 * ](https://relay.dev/graphql/connections.htm#sec-Connection-Types)
 * to consistenly handle pagination best practices with support for slicing
 * and *metadata* about the
 * connection itself
 */
export type Connection = {
  /** relationship between two node on the graph */
  edges: Array<Edge>;
  /** additional information about the connection itself */
  pageInfo: PageInfo;
};

export type CreateThreadInput = {
  /** thread additional text */
  message?: InputMaybe<Scalars['String']>;
  /** thread unique title */
  title: Scalars['String'];
};

/** Response object for creating threads */
export type CreateThreadResponse = MutationResponse & {
  __typename?: 'CreateThreadResponse';
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
  /** created thread when the operation is a success */
  thread?: Maybe<Thread>;
};

/**
 * The concept of an [*edge*
 * ](https://relay.dev/graphql/connections.htm#sec-Edge-Types) also proves
 * useful if there is information that is specific to the edge, rather than to
 * one node, which means information about a connection instance.
 */
export type Edge = {
  /** Opaque cursor used to navigate through pages */
  cursor: Scalars['Cursor'];
  /**
   * This field must return either a Scalar, Enum, Object, Interface, Union, or
   * a Non-Null wrapper around one of those types. Notably, this field cannot
   * return a list.
   */
  node: Node;
};

/**
 * Enable forward pagination, slicing can be done with *first*. The *after* is a
 * opaque cursor returned by **pageInfo**'s **endCursor** node
 */
export type ForwardPageInput = {
  /** number of the page or edges after this cursor */
  after?: InputMaybe<Scalars['Cursor']>;
  /** at most first edges */
  first?: InputMaybe<Scalars['NonNegativeInt']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createThread: CreateThreadResponse;
};


export type MutationCreateThreadArgs = {
  thread?: InputMaybe<CreateThreadInput>;
};

/** Mutation response basic object which every mutation return type must implement */
export type MutationResponse = {
  /** response code status, can be HTTP or application specific */
  code: Scalars['String'];
  /** message with more details about the operation */
  message: Scalars['String'];
  /** indicates whether the operation was a success */
  success: Scalars['Boolean'];
};

/**
 * Naming is a way to calling users. Community users must have a nickname but
 * not necessary it has first or last names specified
 */
export type Naming = {
  __typename?: 'Naming';
  /** user first name */
  first?: Maybe<Scalars['String']>;
  /** user last name */
  last?: Maybe<Scalars['String']>;
  /** user nickname */
  nick: Scalars['String'];
};

/** Regular node which is returned by Edge type, it must have at least ID type */
export type Node = {
  id: Scalars['ID'];
};

/**
 * [**PageInfo**
 * ](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo)
 * is metadata information about **Connection** used to navigate providing
 * intel about more previous or next pages. For example, *endCursor* can be used
 * in to forwarding pagination argument
 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** corresponds the last node, also known as the last connection's edge */
  endCursor: Scalars['Cursor'];
  /**
   * indicate whether more edges exist following the set defined by the clients
   * arguments
   */
  hasNextPage: Scalars['Boolean'];
  /**
   * indicate whether more edges exist prior to the set defined by the clients
   * arguments
   */
  hasPreviousPage: Scalars['Boolean'];
  /** corresponds the last node, also known as the first connection's edge */
  startCursor: Scalars['Cursor'];
};

/**
 * Enable forward and backward pagination, slicing can be done with *first*
 * and *last*. Opaque cursor is defined by *after* and *before* returned by
 * **pageInfo**'s **endCursor** and *startCursor* node respectively.
 */
export type PageInput = {
  /** number of the page or edges after this cursor */
  after?: InputMaybe<Scalars['Cursor']>;
  /** number of the page or last edges before this cursor */
  before?: InputMaybe<Scalars['Cursor']>;
  /** at most first edges */
  first?: InputMaybe<Scalars['NonNegativeInt']>;
  /** at most last edges */
  last?: InputMaybe<Scalars['NonNegativeInt']>;
};

/**
 * An *Post* is an user-submitted message enclosed into a block containing the
 * user's details and the date and time it was submitted. Posts are contained in
 * threads, where they appear as blocks one after another. The first post starts
 * the thread; this may be called the OP (original post). Posts that follow in
 * the thread are meant to continue discussion about that post, or respond to
 * other replies; it is not uncommon for discussions to be derailed.
 */
export type Post = Node & Timestamps & {
  __typename?: 'Post';
  /** post's author */
  author: User;
  /** post' creation time */
  createdAt: Scalars['DateTime'];
  /** post identifier */
  id: Scalars['ID'];
  /** amount of users who liked the post */
  likes: Scalars['NonNegativeInt'];
  /** summarize the discussion proposed, detailed information about a topic */
  message?: Maybe<Scalars['String']>;
  /** posts which replies to this one */
  replies: PostRepliesConnection;
  /** post' last update time */
  updatedAt: Scalars['DateTime'];
};


/**
 * An *Post* is an user-submitted message enclosed into a block containing the
 * user's details and the date and time it was submitted. Posts are contained in
 * threads, where they appear as blocks one after another. The first post starts
 * the thread; this may be called the OP (original post). Posts that follow in
 * the thread are meant to continue discussion about that post, or respond to
 * other replies; it is not uncommon for discussions to be derailed.
 */
export type PostRepliesArgs = {
  page?: InputMaybe<ForwardPageInput>;
};

/**
 * The **PostParticipantsConnection** represents an endpoint of an edge. It
 * defines **totalCount** metadata to count the number of distinct users
 */
export type PostParticipantsConnection = Connection & {
  __typename?: 'PostParticipantsConnection';
  /** user' edges */
  edges: Array<PostParticipantsEdge>;
  /** total number of post's participants edges */
  interactions: Scalars['NonNegativeInt'];
  /** page information */
  pageInfo: PageInfo;
};

/**
 * The **PostParticipantsEdge** is a connection between two nodes, each user
 * edge endpoint doens't have any metadata and returns simple User node
 */
export type PostParticipantsEdge = Edge & {
  __typename?: 'PostParticipantsEdge';
  /** user's edge cursor */
  cursor: Scalars['Cursor'];
  /** node is a plain User type */
  node: User;
};

/**
 * **PostRepliesConnection** represents self relationship between posts
 * indicading a reply. A post can be a reply of another posts
 */
export type PostRepliesConnection = Connection & {
  __typename?: 'PostRepliesConnection';
  /** post's edges */
  edges: Array<PostReplyEdge>;
  /** page information */
  pageInfo: PageInfo;
};

/**
 * **PostReplyEdge** implements Edge's connection pattern, representing an
 * endpoint from a relationship in any direction
 */
export type PostReplyEdge = Edge & {
  __typename?: 'PostReplyEdge';
  /** post's cursor */
  cursor: Scalars['Cursor'];
  /** node presents a simple post */
  node: Post;
};

export type Query = {
  __typename?: 'Query';
  /**
   * Get a list of all threads (also known as original posts), that's a thread
   * starter which originates a conversation. That list represents all top-level
   * posts which can be paginated by the user
   */
  threads: ThreadConnection;
};


export type QueryThreadsArgs = {
  page?: InputMaybe<ForwardPageInput>;
};

/**
 * A thread (sometimes called a topic) is a collection of posts, although this
 * is typically configurable: Options for newest to oldest and for a threaded
 * view (a tree-like view applying logical reply structure before chronological
 * order) can be available. A thread is defined by a title and an opening post
 * (common abbreviation OP, which can also be used to refer to the original
 * poster), which opens whatever dialogue or makes whatever announcement the
 * poster wished. A thread can contain any number of posts, including multiple
 * posts from the same members, even if they are one after the other.
 */
export type Thread = Node & Timestamps & {
  __typename?: 'Thread';
  /** creation time */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** newest reply */
  lastActivity: Scalars['DateTime'];
  /**
   * all unique participants of the thread, which means all its op's replies
   * and its entire subtree
   */
  participants: PostParticipantsConnection;
  /** Original post of the thread, also known as thread starter */
  post: Post;
  /** quantity of replies under original post */
  replies: Scalars['NonNegativeInt'];
  /**
   * A brief introduction to the discussion, it intends to engage people around
   * a conversation
   */
  title: Scalars['String'];
  /** last update time */
  updatedAt: Scalars['DateTime'];
};


/**
 * A thread (sometimes called a topic) is a collection of posts, although this
 * is typically configurable: Options for newest to oldest and for a threaded
 * view (a tree-like view applying logical reply structure before chronological
 * order) can be available. A thread is defined by a title and an opening post
 * (common abbreviation OP, which can also be used to refer to the original
 * poster), which opens whatever dialogue or makes whatever announcement the
 * poster wished. A thread can contain any number of posts, including multiple
 * posts from the same members, even if they are one after the other.
 */
export type ThreadParticipantsArgs = {
  page?: InputMaybe<ForwardPageInput>;
};

/**
 * Thread connection implements Connection defining edges, pageInfo and has the
 * total number of threads in the community. The total number of threads refers
 * to the quantity of raised topics, or beginning of an conversation
 */
export type ThreadConnection = Connection & {
  __typename?: 'ThreadConnection';
  /** connections between thread and posts */
  edges: Array<ThreadEdge>;
  /** additional information about the pagination */
  pageInfo: PageInfo;
  /** number of threads in total */
  total: Scalars['NonNegativeInt'];
};

/** Thread edge implements Edge defining node and cursor but has specific metadata */
export type ThreadEdge = Edge & {
  __typename?: 'ThreadEdge';
  /** opaque cursor */
  cursor: Scalars['Cursor'];
  /** node is a simple thread */
  node: Thread;
};

/**
 * The **Timestamps** is metadata information about a particular object. It
 * tells when it was created and last updated. Notice: updatedAt doesn't store
 * historical data only the last update date
 */
export type Timestamps = {
  /** create date and time */
  createdAt: Scalars['DateTime'];
  /** last update date and time */
  updatedAt: Scalars['DateTime'];
};

/**
 * Refers to utilizers of the system. At first people can initiate an
 * *original post (OP)*, beginning a topic or just join a conversation through
 * posting in the threads. Users in this system are used to provide customized
 * experience in the application. They aren't tracked in any form
 */
export type User = Node & Timestamps & {
  __typename?: 'User';
  /** user avatar, a image representing its persona */
  avatar?: Maybe<Scalars['Avatar']>;
  /** creation date and time */
  createdAt: Scalars['DateTime'];
  /** user identifier */
  id: Scalars['ID'];
  /** user names */
  name: Naming;
  /** last update date and time */
  updatedAt: Scalars['DateTime'];
};

export type GetThreadsQueryVariables = Exact<{
  page?: InputMaybe<ForwardPageInput>;
}>;


export type GetThreadsQuery = { __typename?: 'Query', threads: { __typename?: 'ThreadConnection', total: any, pageInfo: { __typename?: 'PageInfo', endCursor: any, hasNextPage: boolean }, edges: Array<{ __typename?: 'ThreadEdge', node: { __typename?: 'Thread', id: string, title: string, lastActivity: any, replies: any, participants: { __typename?: 'PostParticipantsConnection', interactions: any, edges: Array<{ __typename?: 'PostParticipantsEdge', node: { __typename?: 'User', id: string, avatar?: any | null } }> }, post: { __typename?: 'Post', id: string, message?: string | null, likes: any, author: { __typename?: 'User', id: string, avatar?: any | null, name: { __typename?: 'Naming', nick: string } } } } }> } };


export const GetThreadsDocument = gql`
    query GetThreads($page: ForwardPageInput) {
  threads(page: $page) {
    total
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        title
        lastActivity
        replies
        participants {
          edges {
            node {
              id
              avatar
            }
          }
          interactions
        }
        post {
          id
          message
          likes
          author {
            id
            avatar
            name {
              nick
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetThreadsQuery__
 *
 * To run a query within a React component, call `useGetThreadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetThreadsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetThreadsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetThreadsQuery(baseOptions?: Apollo.QueryHookOptions<GetThreadsQuery, GetThreadsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetThreadsQuery, GetThreadsQueryVariables>(GetThreadsDocument, options);
      }
export function useGetThreadsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetThreadsQuery, GetThreadsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetThreadsQuery, GetThreadsQueryVariables>(GetThreadsDocument, options);
        }
export type GetThreadsQueryHookResult = ReturnType<typeof useGetThreadsQuery>;
export type GetThreadsLazyQueryHookResult = ReturnType<typeof useGetThreadsLazyQuery>;
export type GetThreadsQueryResult = Apollo.QueryResult<GetThreadsQuery, GetThreadsQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Connection": [
      "PostParticipantsConnection",
      "PostRepliesConnection",
      "ThreadConnection"
    ],
    "Edge": [
      "PostParticipantsEdge",
      "PostReplyEdge",
      "ThreadEdge"
    ],
    "MutationResponse": [
      "CreateThreadResponse"
    ],
    "Node": [
      "Post",
      "Thread",
      "User"
    ],
    "Timestamps": [
      "Post",
      "Thread",
      "User"
    ]
  }
};
      export default result;
    