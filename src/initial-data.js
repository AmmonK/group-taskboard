const initialData = {
  groups: {
    "silly-moser": { id: "silly-moser", content: "silly-moser" },
    "frosty-elion": { id: "frosty-elion", content: "frosty-elion" },
    "brave-knuth": { id: "brave-knuth", content: "brave-knuth" },
    "stoic-stallman": { id: "stoic-stallman", content: "stoic-stallman" },
    "zen-shaw": { id: "zen-shaw", content: "zen-shaw" },
    "gallant-napier": { id: "gallant-napier", content: "gallant-napier" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Week 1",
      groupIds: [
        "silly-moser",
        "frosty-elion",
        "brave-knuth",
        "stoic-stallman",
        "zen-shaw",
        "gallant-napier"
      ]
    },
    "column-2": {
      id: "column-2",
      title: "Week 2",
      groupIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Week 3",
      groupIds: []
    },
    "column-4": {
      id: "column-4",
      title: "Week 4",
      groupIds: []
    },
    "column-5": {
      id: "column-5",
      title: "Week 5",
      groupIds: []
    },
    "column-6": {
      id: "column-6",
      title: "Week 6",
      groupIds: []
    }
  },
  columnOrder: [
    "column-1",
    "column-2",
    "column-3",
    "column-4",
    "column-5",
    "column-6"
  ]
};

export default initialData;
