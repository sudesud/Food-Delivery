import logo from "./logo.png"; // Logo dosyasını içe aktarıyoruz
import search_icon from "./search_icon.png";
import basket_icon from "./basket_icon.png";
import add_icon_green from "./add_icon_green.png";
import add_icon_white from "./add_icon_white.png";
import remove_icon_red from "./remove_icon_red.png";
import face_icon from "./face_icon.png";
import insta_icon from "./insta_icon.png";
import x_icon from "./x_icon.png";
import play_store from "./play_store.png";
import app_store from "./app_store.png";
import closs_icon from "./close_icon.png"
import user_profile from "./user_profile.png"
import bag_icon from "./bag_icon.png"
import logout_icon from "./logout_icon.png"
import packet_icon from "./packet_icon.png"

import menu_1 from './menu_1.jpg'
import menu_3 from './menu_3.jpg'
import menu_4 from './menu_4.jpg'
import menu_5 from './menu_5.jpg'
import menu_6 from './menu_6.jpg'
import food_3 from './food_3.jpg'
import menu_2 from "./menu_2.jpg"


export const assets={ logo,
    search_icon,
    basket_icon,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    face_icon,
    x_icon,
    insta_icon,
    play_store,
    app_store,
    closs_icon,
    user_profile,
    bag_icon,
    logout_icon,
    packet_icon
    

 }; // Export ederek diğer dosyalarda kullanabilir hale getiriyoruz

export const food_list=[
{
    _id:"1",
    name:"Turkish Salad",
    image:menu_6,
    price:12,
    description:"Mevsim yeşillikleriyle yapılmış salata",
    category:"Salad" 
},
{
    _id:"2",
    name:"Kebab Salad",
    image:menu_3,
    price:33,
    description:"Mevsim yeşillikleriyle yapılmış salata",
    category:"Salad"
},
{
    _id:"3",
    name:"kek Salad",
    image:food_3,
    price:23,
    description:"Mevsim yeşillikleriyle yapılmış salata",
    category:"Cake"
}

]


 export const menu_list=[
{
    menu_name:"Meat",
    menu_image:menu_1

},

{
    menu_name:"Desserts",
    menu_image:menu_2
},
{
    menu_name:"Hamburger",
    menu_image:menu_3
},
{
    menu_name:"Pizza",
    menu_image:menu_4
},
{
    menu_name:"Pasta ",
    menu_image:menu_5
}


 ]