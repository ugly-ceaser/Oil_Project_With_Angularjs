/////////SELECTORS///////////////

const selector = name => document.querySelector(name);



//////////////Default loaders/////////




    const mainAbout = selector(".about_us")

    const About_1 = selector("#about");
    const About_2 = selector("#profit");
    const About_3 = selector("#dynamic");

    const About_1g = selector("#aboutg");
    const About_2g = selector("#profitg");
    const About_3g = selector("#dynamicg");

   
    const about_1 = () =>{
       About_2.style.display = "none";
        About_3.style.display ="none";
        About_2g.style.display="none";
        About_3g.style.display = "none";
        let abt = 1;

        About_1.style.display ="flex";
        About_1g.style.display="flex";

        anime({
            targets:'#about',
            
            easing: 'easeOutExpo',
            durations: 9000,
            opacity:[0,1]
        })

        anime({
            targets:'#aboutg',
            easing: 'easeOutExpo',
            durations: 9000,
            opacity:[0,1]
        })



    }

    const about_2 = () =>{
        About_1.style.display = "none";
         About_3.style.display ="none";
         About_1g.style.display="none";
         About_3g.style.display = "none";

         About_2.style.display ="flex";
         About_2g.style.display="flex";

         let abt = 2;

         anime({
            targets:'#profit',
            easing: 'easeOutExpo',
            durations: 9000,
            opacity:[0,1]
        })

        anime({
            targets:'#profitg',
            easing: 'easeOutExpo',
            durations: 9000,
            opacity:[0,1]
        })

        
 
     }


     const about_3 = () =>{
        About_1.style.display = "none";
         About_2.style.display ="none";
         About_1g.style.display="none";
         About_2g.style.display = "none";
         let abt = 3;

         About_3.style.display ="flex";
         About_3g.style.display="flex";

         anime({
            targets:'#dynamic',
            easing: 'easeOutExpo',
            durations: 19000,
            opacity:[0,1]
        })

        anime({
            targets:'#dynamicg',
            easing: 'easeOutExpo',
            durations: 19000,
            opacity:[0,1]
        })

 
     }
   
     
    

     about_1()

     const loop = ()=>{
       
           
        

         setTimeout(() => {
                about_2();
            }, 5000)


            
          setTimeout(() => {
                about_3();
            }, 8000)

          setTimeout(() => {
                about_1();
            }, 12000)
        
    
            setTimeout(() => {
                loop()
            },15000)
            
            
     }
     
     loop();
    


     
     
    

    

     
  

    







