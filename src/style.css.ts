import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
});

const box = style({
  textAlign: "center",
});

const bottomBtn = style({
  width: "100%",
  padding: "12px",
});

const bottomBtnThx = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
});

const productsTitle = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginBottom: "0.5rem",
});

const products = style({
  display: "flex",
  gap: "1rem",
});

const product = style({
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  padding: "1rem",
  display: "flex",
  justifyContent: "space-between",
  gap: "0.2rem",
});

const productTitle = style({
  lineHeight: "24px",
  fontSize: "17px",
  marginBottom: "0.3rem",
});

const bonus = style({
  flex: 1,
});

const gifts = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});

const gift = style({
  border: "2px solid gray",
  borderRadius: "1rem",
  borderColor: "#F2F3F5",
  padding: "0.5rem 1rem",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const checkMark = style({
  position: "absolute",
  right: -3,
  top: -9,
});

const benefits = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
});

const name = style({
  display: "flex",
  flexDirection: "column",
});

const plans = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
});

const plan = style({
  flex: "1 1 calc(50% - 8px)",
  minHeight: "166px",
  border: "2px solid #F2F3F5",
  borderRadius: "1rem",
  boxSizing: "border-box",
  padding: "1rem 1rem 0 1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  cursor: "pointer",
  position: "relative",
});

const benefit = style({
  flex: "1 1 calc(50% - 8px)",
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  boxSizing: "border-box",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const reminder = style({
  boxSizing: "border-box",
  padding: "0.8rem",
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const best = style({
  boxSizing: "border-box",
  padding: "1rem",
  border: "2px solid gray",
  borderRadius: "1rem",
  borderColor: "#F2F3F5",
  position: "relative",
});

const optionsContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const options = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  boxSizing: "border-box",
  backgroundColor: "#F2F3F5",
  borderRadius: "1rem",
  gap: "0.5rem",
  cursor: "pointer",
});

const face = style({
  display: "block",
  width: "65%",
  height: "auto",
  margin: "0 auto",
});

const final = style({
  display: "block",
  width: "50%",
  height: "auto",
  margin: "0 auto",
});

const finalWish = style({
  flex: "1 1 calc(50% - 8px)",
  border: "2px solid gray",
  borderRadius: "1rem",
  borderColor: "#F2F3F5",
  padding: "0.5rem 1rem",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "50%",
  textAlign: "center",
});

const boosts = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const boost = style({
  boxSizing: "border-box",
  padding: "0.5rem",
  display: "flex",
  gap: "0.7rem",
  alignItems: "center",
  borderRadius: "1rem",
  backgroundColor: "#F2F3F5",
});

export const appSt = {
  bottomBtn,
  bottomBtnThx,
  container,
  box,
  productsTitle,
  products,
  productTitle,
  product,
  bonus,
  gifts,
  gift,
  checkMark,
  benefits,
  benefit,
  plans,
  plan,
  reminder,
  best,
  optionsContainer,
  options,
  face,
  name,
  final,
  finalWish,
  boosts,
  boost,
};
