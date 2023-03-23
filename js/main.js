$('.testimonial-content').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:50,
    responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
        1000:{
            items:3
        }
    }
});
$('.event-carousel').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:0,
    responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
        1000:{
            items:1
        }
    }
});

var button=document.querySelector('.menu-card-icon')
var card=document.querySelector('.menu-content-card')
var link1=document.querySelector('.link1')
var link1=document.querySelector('.link1')
var link1=document.querySelector('.link1')
var link1=document.querySelector('.link1')
var link1=document.querySelector('.link1')
var link1=document.querySelector('.link1')
var link1=document.querySelector('.link1')
var link1=document.querySelector('.link1')
$('.testimonial-content').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:50,
    responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
        1000:{
            items:3
        }
    }
});
$('.event-carousel').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:0,
    responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
        1000:{
            items:1
        }
    }
});

var button=document.querySelector('.nav-list-icon')
var closeButton=document.querySelector('.menu-card-icon');
var card=document.querySelector('.menu-content-card');
var link1=document.querySelector('.link1');
var link2=document.querySelector('.link2');
var link3=document.querySelector('.link3');
var link4=document.querySelector('.link4');
var link5=document.querySelector('.link5');
var link6=document.querySelector('.link6');
var link7=document.querySelector('.link7');
var link8=document.querySelector('.link8');
var link8=document.querySelector('.link8');
var link9=document.querySelector('.link9');

button.addEventListener('click',()=>{
    card.style.display='flex';
    card.style.flexDirection='column'
})

const clear = () =>{
    card.style.display='none';
}

closeButton.addEventListener('click',()=>clear());

link1.addEventListener('click',()=>clear());
link2.addEventListener('click',()=>clear());
link3.addEventListener('click',()=>clear());
link4.addEventListener('click',()=>clear());
link5.addEventListener('click',()=>clear());
link6.addEventListener('click',()=>clear());
link7.addEventListener('click',()=>clear());
link8.addEventListener('click',()=>clear());
link9.addEventListener('click',()=>clear());



