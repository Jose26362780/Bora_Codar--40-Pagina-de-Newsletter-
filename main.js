const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: "700",
  reset: true,
})

scrollReveal.reveal(
  `
 .page span, .page h1,
 .page .subtitle, .page form, 
 footer .card
`,
  { interval: 100 }
)
