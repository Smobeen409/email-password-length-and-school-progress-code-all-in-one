//email and passward checking code with passward length restrics.
let email:string="smobeen@gmail.com";
let passward:string="1234567";
let percentage:number=83.5;

if(email=="smobeen@gmail.com" && passward.length>=6  && passward.length<=14){
    console.log("you can login successfully.");
    if(percentage<=100 && percentage>=80){
        console.log(`you got A-One Grade.your percentage is ${percentage}%.\n\n"marvellus"`);
    }
    else if(percentage<=79.9 && percentage>=70){
        console.log(`you got A Grade.your percentage is ${percentage}%.\n\n"weldone"`);
    }
    else if(percentage<=69.9 && percentage>=60){
        console.log(`you got B Grade.your percentage is ${percentage}%.\n\n"good"`);
    }
    else if(percentage<=59.9 && percentage>=50){
        console.log(`you got C Grade.your percentage is ${percentage}%.\n\n"satisfactory"`);
    }
    else if(percentage<=49.8 && percentage>=40){
        console.log(`you got D Grade.your percentage is ${percentage}%.\n\n"not bed"`);
    }else if(percentage<=39.9){
        console.log(`you are faild.\n\n "very poor"`);
    };
}else{console.log("invalid email or passward.please try again.");};