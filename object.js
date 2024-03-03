
const student = [
    {   id:1,
        name:"mukta",
        age:22,
        dob:12-3-2002,
        gender:"female",
        married:"unmarried",
        bike:[
            {
                name:"bmw",
                milage:20,
                color:"black"
        
            },
            {
                name:"yamaha",
                milage:40,
                color:"skyblue"
        
            },
        ],
        address:{
            name:"dhaka",
            road:2
        },
        sibling:[
            {
                name:"vladimir putin",
                car:[
                    "bmw"
                ]
            }
        ]
    },
    {   id:2,
        name:"tanvir",
        age:24,
        dob:25-3-2001,
        gender:"male",
        married:"unmarried",
        bike:[
            {
                name:"bmw",
                milage:30,
                color:"ash"
        
            },
            {
                name:"yamaha",
                milage:40,
                color:"skyblue"
        
            },
        ],
        address:{
            name:"dhaka",
            road:2
        },
        sibling:[
            {
                name:"vladimir putin",
                car:[
                    "bmw"
                ]
            }
        ]
    }
    
    
]


console.log(student[1].sibling[0].car[0])
