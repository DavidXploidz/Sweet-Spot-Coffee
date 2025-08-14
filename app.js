 document.addEventListener("DOMContentLoaded", (event) => {
    generateCards();
    gsap.registerPlugin(MorphSVGPlugin,ScrollTrigger,SplitText)
    // ** Hero animations
    // Animaciones de desvanecido
    gsap.from("#hero-image",{ y: -100, opacity: 0, });
    gsap.to("#hero-image",{ y: 0, duration: 1.5, opacity: 1, ease: "bounce" } , '>'); // '>' sirve para encadenar animaciones
    gsap.to("#hero-image",{ scale: "1.050", duration: 0.4, repeat: 3, ease: "power1.inOut", yoyo: true },  '>');
    // Mutar el svg en varias formas
    gsap.to("#wave_1 path:first-child", { 
        duration: 4, 
        // morphSVG:" #wave_1_shape",
        morphSVG: {
            shape: ["#wave_shape_1", "#wave_shape_2"]
        }, 
        repeat: -1, 
        yoyo: true, 
        repeatDelay: 0.7}, 
    );
    gsap.to("#wave_2 path:first-child", { 
        duration: 4, 
        morphSVG: {
            shape: ["#wave_shape_3", "#wave_shape_4"]
        }, 
        repeat: -1, 
        yoyo: true, 
        repeatDelay: 0.7}, 
    );
    // Para textos animados
    SplitText.create(".hero__title", {
        type: "words, chars",
        onSplit(self) {
            gsap.from(self.chars, {
                duration: 2, 
                y: 100, 
                autoAlpha: 0, 
                stagger: 0.05,
                ease: "elastic",
            });
        }
    });
    // ** Schedule animations
    const cards_schedule = document.querySelectorAll('.schedule__card');
    const tl_schedule = gsap.timeline({
        scrollTrigger: {
            trigger: '.schedule__cards',
            markers: false,
            start: 'top 70%',
            end: 'top+=30%',
            scrub: 1,
        }
    });
    for(let i = 0; i < cards_schedule.length; i++){
        const item = cards_schedule[i];
        if(i % 2){
            tl_schedule.from(item, {x: -100, opacity: 0,})
        }else{
            tl_schedule.from(item, {x: 100, opacity: 0,})
        }
    }
    // ** Food animations
    SplitText.create("#food-title-key", {
        type: "words, chars",
        onSplit(self) {
            gsap.from(self.chars, {
                duration: 2, 
                y: 50, 
                autoAlpha: 0, 
                stagger: 0.05,
                ease: "elastic",
                scrollTrigger: {
                    trigger: ".food__wrapper",
                    toggleActions: "play pause reset reset",
                }
            });
        }
    });
    SplitText.create("#food-subtitle-key", {
        type: "words, chars",
        onSplit(self) {
            gsap.from(self.chars, {
                duration: 2, 
                delay: 0.7,
                y: 30, 
                autoAlpha: 0, 
                stagger: 0.05,
                ease: "elastic",
                scrollTrigger: {
                    trigger: ".food__wrapper",
                    toggleActions: "play pause reset reset",
                }
            });
        }
    });
    const tl_food = gsap.timeline({
        scrollTrigger: {
            trigger: '.food__list',
            markers: true,
            start: 'top 70%',
            end: 'top+=30%',
            scrub: 1,
            // pin: '.food__gallery',
        }
    });
    const food_images = document.querySelectorAll('.food__image')
    for(let i = 0; i < food_images.length; i++){
        const item = food_images[i];
        if(i % 2){
            tl_food.from(item, { scale: 0 })
        }else{
            tl_food.from(item, { scale: 0 })
        }
    }
 });

 function generateCards(){
    const scheduleWrapper = document.querySelector('.schedule__cards');
    const schedule = [
        {
            day: 'Lun',
            hours: 'Cerrado'
        },
        {
            day: 'Mar',
            hours: '08:00 - 22:30'
        },
        {
            day: 'Mier',
            hours: '08:00 - 22:30'
        },
        {
            day: 'Jue',
            hours: '08:00 - 22:30'
        },
        {
            day: 'Vie',
            hours: '08:00 - 22:30'
        },
        {
            day: 'Sab',
            hours: '08:00 - 22:30'
        },
        {
            day: 'Dom',
            hours: '08:00 - 22:30'
        },
    ];
    schedule.map(item => {
        const card = document.createElement('DIV');
        card.classList.add('schedule__card');
        const day = document.createElement('P');
        day.textContent = item.day;
        const hours = document.createElement('SPAN');
        hours.textContent = item.hours;
        card.appendChild(day)
        card.appendChild(hours)
        scheduleWrapper.appendChild(card);
    })
 }