export const comments = [
  {
    id: 1,
    name: "John Doe",
    comments: [
      {
        id: 1,
        body: "This is the root comment.",
        replies: [
          {
            id: 2,
            body: "Reply to root comment.",
            replies: [
              { id: 3, body: "Reply to reply." },
            ],
          },
          { id: 4, body: "Another reply to root comment." },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    comments: [
      {
        id: 5,
        body: "Second root comment.",
        replies: [{ id: 6, body: "Reply to second root comment." }],
      },
    ],
  },
  {
    id: 3,
    name: "David Lee",
    comments: [
      {
        id: 7,
        body: "Third root comment.",
        replies: [
          {
            id: 8,
            body: "Reply to third root comment.",
            replies: [{ id: 9, body: "Reply to reply." }],
          },
        ],
      },
    ],
  },
  { id: 4, name: "Sarah Jones", comments: [{ id: 10, body: "Fourth root comment." }] },
  {
    id: 5,
    name: "Michael Brown",
    comments: [
      {
        id: 11,
        body: "Fifth root comment.",
        replies: [
          {
            id: 12,
            body: "Reply to fifth root comment.",
            replies: [
              { id: 13, body: "Reply to reply." },
              { id: 14, body: "Another reply to reply." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Emily Davis",
    comments: [
      {
        id: 15,
        body: "Sixth root comment.",
        replies: [
          { id: 16, body: "Reply to sixth root comment." },
          {
            id: 17,
            body: "Another reply to sixth root comment.",
            replies: [{ id: 18, body: "Reply to reply." }],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "James Wilson",
    comments: [
      {
        id: 19,
        body: "Seventh root comment.",
        replies: [
          {
            id: 20,
            body: "Reply to seventh root comment.",
            replies: [
              { id: 21, body: "Reply to reply." },
              { id: 22, body: "Another reply to reply." },
            ],
          },
        ],
      },
    ],
  },
  { id: 8, name: "Linda Anderson", comments: [{ id: 23, body: "Eighth root comment." }] },
  {
    id: 9,
    name: "Thomas Moore",
    comments: [{ id: 24, body: "Ninth root comment." }],
  },
  {
    id: 10,
    name: "Patricia Clark",
    comments: [
      {
        id: 26,
        body: "Tenth root comment.",
        replies: [
          {
            id: 27,
            body: "Reply to tenth root comment.",
            replies: [{ id: 28, body: "Reply to reply." }],
          },
          { id: 29, body: "Another reply to tenth root comment." },
        ],
      },
    ],
  },
  { id: 11, name: "Daniel Baker", comments: [{ id: 30, body: "Eleventh root comment." }] },
  { id: 12, name: "Christopher Lewis", comments: [] },
  { id: 13, name: "Barbara Hall", comments: [] },
  { id: 14, name: "Roy Walker", comments: [] },
  { id: 15, name: "Nancy Martinez", comments: [] },
  { id: 16, name: "Paul Hernandez", comments: [] },
  { id: 17, name: "Kenneth Young", comments: [] },
  { id: 18, name: "Deborah Allen", comments: [] },
  { id: 19, name: "Richard Sanchez", comments: [] },
  { id: 20, name: "Sharon Scott", comments: [] },
  { id: 21, name: "Larry Perez", comments: [] },
  { id: 22, name: "Beverly Green", comments: [] },
  { id: 23, name: "Jose Adams", comments: [] },
  { id: 24, name: "Carol Phillips", comments: [] },
  { id: 25, name: "Ronald Mitchell", comments: [] },
  { id: 26, name: "Evelyn Roberts", comments: [] },
  { id: 27, name: "Timothy Anderson", comments: [] },
  { id: 28, name: "Donna Thompson", comments: [] },
  { id: 29, name: "Larry Walker", comments: [] },
  { id: 30, name: "Louise White", comments: [] },
];
