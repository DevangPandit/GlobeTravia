const scrollReveal = ScrollReveal();

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollReveal.reveal(".header_div h1", {
    ...ScrollRevealOption,
});

scrollReveal.reveal(".header_form", {
    ...ScrollRevealOption,
    delay: 500,
});

scrollReveal.reveal(".destination_card", {
    ...ScrollRevealOption,
    interval: 500,
});

scrollReveal.reveal(".reviews_card", {
    ...ScrollRevealOption,
    interval: 500,
});