    

     //importing of first product of this category
    import Beatles_Shirt_White from "../IMAGES/bands/beatlesshirt/beatlesshirtwhite.png";
    import Beatles_Shirt_Black from "../IMAGES/bands/beatlesshirt/beatlesshirtblack.png";
    import Beatles_Shirt_Red from "../IMAGES/bands/beatlesshirt/beatlesshirtred.png";
    import Beatles_Shirt_Blue from "../IMAGES/bands/beatlesshirt/beatlesshirtblue.png";
    import Beatles_Shirt_Yellow from "../IMAGES/bands/beatlesshirt/beatlesshirtyellow.png";

    //importing of second product of this category//
    import Bonham_Shirt_White from "../IMAGES/bands/bonhamshirt/bonhamwhite.png";
    import Bonham_Shirt_Black from "../IMAGES/bands/bonhamshirt/bonhamblack.png";
    import Bonham_Shirt_Red from "../IMAGES/bands/bonhamshirt/bonhamred.png";
    import Bonham_Shirt_Blue from "../IMAGES/bands/bonhamshirt/bonhamblue.png";
    import Bonham_Shirt_Yellow from "../IMAGES/bands/bonhamshirt/bonhamyellow.png";

    //importing of third product of this category//
    import Jimy_Shirt_White from "../IMAGES/bands/jimyshirt/jimyshirtwhite.png";
    import Jimy_Shirt_Black from "../IMAGES/bands/jimyshirt/jimyshirtblack.png";
    import Jimy_Shirt_Red from "../IMAGES/bands/jimyshirt/jimyshirtred.png";
    import Jimy_Shirt_Blue from "../IMAGES/bands/jimyshirt/jimyshirtblue.png";
    import Jimy_Shirt_Yellow from "../IMAGES/bands/jimyshirt/jimyshirtyellow.png";

    //importing of fourth product of this category//
    import Kurt_Shirt_White from "../IMAGES/bands/kurtshirt/kurtshirtwhite.png";
    import Kurt_Shirt_Black from "../IMAGES/bands/kurtshirt/kurtshirtblack.png";
    import Kurt_Shirt_Red from "../IMAGES/bands/kurtshirt/kurtshirtred.png";
    import Kurt_Shirt_Blue from "../IMAGES/bands/kurtshirt/kurtshirtblue.png";
    import Kurt_Shirt_Yellow from "../IMAGES/bands/kurtshirt/kurtshirtyellow.png";

    //importing of fifth product of this category//
    import Ozzy_Shirt_White from "../IMAGES/bands/ozzyshirt/ozzyshirtwhite.png";
    import Ozzy_Shirt_Black from "../IMAGES/bands/ozzyshirt/ozzyshirtblack.png";
    import Ozzy_Shirt_Red from "../IMAGES/bands/ozzyshirt/ozzyshirtred.png";
    import Ozzy_Shirt_Blue from "../IMAGES/bands/ozzyshirt/ozzyshirtblue.png";
    import Ozzy_Shirt_Yellow from "../IMAGES/bands/ozzyshirt/ozzyshirtyellow.png";  



     //Here we create a const called "dataBands" where we store the datas of our category "Artists"//
    const dataArtists = [
                
            {
                "id": 1,
                "image": [Beatles_Shirt_White, Beatles_Shirt_Black, Beatles_Shirt_Red, Beatles_Shirt_Blue, Beatles_Shirt_Yellow], 
                "title": "Beatles shirt",
                "color": ["Blanco", "Negro", "Rojo", "Azul", "Amarillo"],
                "size": ["X", "S", "M", "L", "XL", "XXL", "3XL" ],
                "price": 45000
            },
            {
                "id": 2,
                 "image": [Bonham_Shirt_White, Bonham_Shirt_Black, Bonham_Shirt_Red, Bonham_Shirt_Blue, Bonham_Shirt_Red, Bonham_Shirt_Yellow], 
                "title": "John Bonham shirt",
                "color": ["Blanco", "Negro", "Rojo", "Azul", "Amarillo"],
                "size": ["X", "S", "M", "L", "XL", "XXL", "3XL" ],
                "price": 45000
            },
            {
                "id": 3,
                 "image": [Jimy_Shirt_White, Jimy_Shirt_Black, Jimy_Shirt_Red, Jimy_Shirt_Blue, Jimy_Shirt_Red, Jimy_Shirt_Yellow], 
                "title": "Jimi Hendrix shirt",
                "color": ["Blanco", "Negro", "Rojo", "Azul", "Amarillo"],
                "size": ["X", "S", "M", "L", "XL", "XXL", "3XL" ],
                "price": 45000
            },
            {
                "id": 4,
                "image": [Kurt_Shirt_White, Kurt_Shirt_Black, Kurt_Shirt_Red, Kurt_Shirt_Blue, Kurt_Shirt_Red, Kurt_Shirt_Yellow], 
                "title": "Kurt Cobain shirt",
                "color": ["Blanco", "Negro", "Rojo", "Azul", "Amarillo"],
                "size": ["X", "S", "M", "L", "XL", "XXL", "3XL" ],
                "price": 45000
            },
            {
                "id": 5,
                 "image": [Ozzy_Shirt_White, Ozzy_Shirt_Black, Ozzy_Shirt_Red, Ozzy_Shirt_Red, Ozzy_Shirt_Blue, Ozzy_Shirt_Yellow],
                "title": "Ozzy Osbourne shirt",
                "color": ["Blanco", "Negro", "Rojo", "Azul", "Amarillo"],
                "size": ["X", "S", "M", "L", "XL", "XXL", "3XL" ],
                "price": 45000
            }
            
        
        ]

        export {dataArtists}; 

    
