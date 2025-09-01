const RATING_RANKS = [
  {
    name: "Excellent",
    color: "#16A34A",
    // value: aggregate?.counts?.find((item) => item.rating === 5)?.count,
    rating: 5,
  },
  {
    name: "Good",
    color: "#22C55E",
    // value: aggregate?.counts?.find((item) => item.rating === 4)?.count,
    rating: 4,
  },
  {
    name: "Average",
    color: "#FDE047",
    // value: aggregate?.counts?.find((item) => item.rating === 3)?.count,
    rating: 3,
  },
  {
    name: "Below Average",
    color: "#EAB308",
    // value: aggregate?.counts?.find((item) => item.rating === 2)?.count,
    rating: 2,
  },
  {
    name: "Poor",
    color: "#FACC15",
    // value: aggregate?.counts?.find((item) => item.rating === 1)?.count,
    rating: 1,
  },
];

export { RATING_RANKS };
