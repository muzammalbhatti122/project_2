

import { createStore , combineReducers } from "redux";


let cards4 =  [
    {pic: 'https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-2.png' , module:"Addidas"  ,id:53},
    {pic: 'https://static.nike.com/a/images/t_default/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png' , module:"Nike"  ,id:54 },
    {pic: 'https://www.bataindustrials.cn.com/wp-content/uploads/2014/02/Beat2.png' , module:"Bata"   ,id:55},
    {pic: 'https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw1ae5f51d/original/110382/110382-090-l-glycerin-20-mens-neutral-cushion-running-shoe.png?sw=220&sh=220&sm=fit' , module:"Service"   ,id:56}
    ];
function adCards4(oldData = cards4 , newData){

        return oldData;
}


let cards3 = [
    {pic:'https://www.bataindustrials.co.za/wp-content/uploads/2020/04/Induna-Boot-3-scaled-scaled.png' , modle:'HOOPS 3.0 LOW CLASSICS' , price:3000},
    {pic:'https://thebatacompany.com/ir/auto/storage/Bata_Brand/1-2000/724ea92e-b214-4cd2-b319-8ab8aa48c0f7_image_bata-industrials-florence.png' , modle:'CLOUDFOAM PURE SHOES' , price:4000},
    {pic:'https://www.bataindustrials.co.in/wp-content/uploads/2021/01/IMG_8106.png' , modle:'DAILY 3.0 SHOES' , price : 5000}
];

function adCards3(oldData = cards3 , newData){
    return oldData;
}


let allCard = [
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct1Maain.png?alt=media&token=57390b99-b996-41f8-a184-472b5c21bc90' , name : 'Bata Latest modale' , price:'70$' , id:0 , size:'UK:6.9'},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct2Main.png?alt=media&token=8a15e1a3-6514-4d4f-ab80-135efb35b59c' , name :'Addidas Latest modale', price:'75$' , id:1},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct3Main.avif?alt=media&token=cfb8a965-e230-4bf1-8756-265ed419502f' , name:'Daily Life Shoes' , price:'59%$',id:3},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68' , name:'KAPTIR 3.0 SHOES' , price:'98$',id:4},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct6main.avif?alt=media&token=1926d8ed-373d-4989-9462-a9d2e1f0ccd4' , name:'RACER TR23 SHOES' , price:'88$',id:5},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct8main.avif?alt=media&token=c78d67b3-02ed-4e49-924a-083889aab78b' , name:'ADILETTE SANDALS' , price:'90$',id:6},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct7main.avif?alt=media&token=75513f13-1d32-450f-8333-fb3b66100061' , name:'KANTANA SHOES' , price:'78$' , id:7},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct5main.avif?alt=media&token=76c8eb87-50d3-4493-9573-731d5fce55a2' , name :'Y-3 GAZELLE' , price:'98$',id:8},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be' , name:'RUNFALCON 2.0 SHOES' , price:'110$',id:9},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct9main.png?alt=media&token=cfb49f49-4ebb-4cdf-99ce-d02b9ab09655' , name: 'GAZELLE SHOES' , price:'99$',id:10},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct13main.avif?alt=media&token=e2ff5e69-9671-4e92-8a4f-fde2564de76a' , name :'FORUM BONEGA SHOES' , price:'55$' , id:11},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct12main.avif?alt=media&token=bbeddfbb-90ce-4432-8272-55988e9eb00b' , name:'GAZELLE SHOES' , price:'30$' , id:12},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct3Main.avif?alt=media&token=cfb8a965-e230-4bf1-8756-265ed419502f' , name:'Daily Life Shoes' , price:'59%$' ,id:13},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68' , name:'KAPTIR 3.0 SHOES' , price:'98$' ,id:13},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct6main.avif?alt=media&token=1926d8ed-373d-4989-9462-a9d2e1f0ccd4' , name:'RACER TR23 SHOES' , price:'88$' ,id:15},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct7main.avif?alt=media&token=75513f13-1d32-450f-8333-fb3b66100061' , name:'KANTANA SHOES' , price:'78$' ,id:16},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct5main.avif?alt=media&token=76c8eb87-50d3-4493-9573-731d5fce55a2' , name :'Y-3 GAZELLE' , price:'98$' ,id:17},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be' , name:'RUNFALCON 2.0 SHOES' , price:'110$' ,id:18},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct9main.png?alt=media&token=cfb49f49-4ebb-4cdf-99ce-d02b9ab09655' , name: 'GAZELLE SHOES' , price:'99$' ,id:19},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct13main.avif?alt=media&token=e2ff5e69-9671-4e92-8a4f-fde2564de76a' , name :'FORUM BONEGA SHOES' , price:'55$' ,id:20},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct3Main.avif?alt=media&token=cfb8a965-e230-4bf1-8756-265ed419502f' , name:'Daily Life Shoes' , price:'59%$' ,id:21},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68' , name:'KAPTIR 3.0 SHOES' , price:'98$' ,id:22},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct6main.avif?alt=media&token=1926d8ed-373d-4989-9462-a9d2e1f0ccd4' , name:'RACER TR23 SHOES' , price:'88$' ,id:23},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be' , name:'RUNFALCON 2.0 SHOES' , price:'76$' ,id:24},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct15main.avif?alt=media&token=df4c7a51-fcb5-4a1d-952f-acb93e12b480' , name:'X_PLRBOOST SHOES' , price:'89$' ,id:25},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct8main.avif?alt=media&token=c78d67b3-02ed-4e49-924a-083889aab78b' , name:'ADILETTE SANDALS' , price:'90$' ,id:26},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct8main.avif?alt=media&token=c78d67b3-02ed-4e49-924a-083889aab78b' , name:'ADILETTE SANDALS' , price:'90$' ,id:27},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct7main.avif?alt=media&token=75513f13-1d32-450f-8333-fb3b66100061' , name:'KANTANA SHOES' , price:'78$' ,id:28},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct14main.avif?alt=media&token=c84d6ac3-2cf9-4659-bd50-e9ff47827704' , name:'SLIP-ON SHOES' , price:'90$' ,id:29},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct5main.avif?alt=media&token=76c8eb87-50d3-4493-9573-731d5fce55a2' , name :'Y-3 GAZELLE' , price:'98$' ,id:30},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be' , name:'RUNFALCON 2.0 SHOES' , price:'110$' ,id:31},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct9main.png?alt=media&token=cfb49f49-4ebb-4cdf-99ce-d02b9ab09655' , name: 'GAZELLE SHOES' , price:'99$' ,id:32},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct15main.avif?alt=media&token=df4c7a51-fcb5-4a1d-952f-acb93e12b480' , name:'LITE RACER ADAPT 4.0' , price:'96$' ,id:33},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct13main.avif?alt=media&token=e2ff5e69-9671-4e92-8a4f-fde2564de76a' , name :'FORUM BONEGA SHOES' , price:'55$' ,id:34},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct6main.avif?alt=media&token=1926d8ed-373d-4989-9462-a9d2e1f0ccd4' , name:'RACER TR23 SHOES' , price:'88$' ,id:35},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct8main.avif?alt=media&token=c78d67b3-02ed-4e49-924a-083889aab78b' , name:'ADILETTE SANDALS' , price:'90$' ,id:36},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct1Maain.png?alt=media&token=57390b99-b996-41f8-a184-472b5c21bc90' , name : 'Bata Latest modale' , price:'70$' ,id:37},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct2Main.png?alt=media&token=8a15e1a3-6514-4d4f-ab80-135efb35b59c' , name :'Addidas Latest modale', price:'75$' ,id:38},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct3Main.avif?alt=media&token=cfb8a965-e230-4bf1-8756-265ed419502f' , name:'Daily Life Shoes' , price:'59%$' ,id:39},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct4main.avif?alt=media&token=e7267dcd-3119-4d5b-b872-4cf9e4eefd68' , name:'KAPTIR 3.0 SHOES' , price:'98$' ,id:40},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct6main.avif?alt=media&token=1926d8ed-373d-4989-9462-a9d2e1f0ccd4' , name:'RACER TR23 SHOES' , price:'88$'  ,id:41},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct8main.avif?alt=media&token=c78d67b3-02ed-4e49-924a-083889aab78b' , name:'ADILETTE SANDALS' , price:'90$'  ,id:42},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct7main.avif?alt=media&token=75513f13-1d32-450f-8333-fb3b66100061' , name:'KANTANA SHOES' , price:'78$'  ,id:43},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct5main.avif?alt=media&token=76c8eb87-50d3-4493-9573-731d5fce55a2' , name :'Y-3 GAZELLE' , price:'98$'  ,id:44},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be' , name:'RUNFALCON 2.0 SHOES' , price:'110$'  ,id:45},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct9main.png?alt=media&token=cfb49f49-4ebb-4cdf-99ce-d02b9ab09655' , name: 'GAZELLE SHOES' , price:'99$'  ,id:46},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct13main.avif?alt=media&token=e2ff5e69-9671-4e92-8a4f-fde2564de76a' , name :'FORUM BONEGA SHOES' , price:'55$'  ,id:47},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct8main.avif?alt=media&token=c78d67b3-02ed-4e49-924a-083889aab78b' , name:'ADILETTE SANDALS' , price:'90$'  ,id:48},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct10main.png?alt=media&token=db5ad18d-89d1-49ba-9491-9c806be947be' , name:'RUNFALCON 2.0 SHOES' , price:'110$'  ,id:49},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct8main.avif?alt=media&token=c78d67b3-02ed-4e49-924a-083889aab78b' , name:'ADILETTE SANDALS' , price:'90$'  ,id:50},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct9main.png?alt=media&token=cfb49f49-4ebb-4cdf-99ce-d02b9ab09655' , name: 'GAZELLE SHOES' , price:'99$'  ,id:51},
    {pic:'https://firebasestorage.googleapis.com/v0/b/web-chat-app-b5031.appspot.com/o/image%2Fproduct7main.avif?alt=media&token=75513f13-1d32-450f-8333-fb3b66100061' , name:'KANTANA SHOES' , price:'78$'  ,id:52},


]

function adAllCards(oldData = allCard , newData){
    return oldData;

}


let GoTochek = {
    goTo:[]
}

function adGoToChek(oldData = GoTochek , newData){

    // oldData = {...oldData}
    if(newData.type == 'GOTOCHEKDATA'){
        oldData.goTo.push(newData.find)
    }

            return oldData;
}


let userData = {
    cruntUser : null
}


function adUserData(oldData = userData , newData){

    oldData = {...oldData}
    if(newData.type == 'LOGINHOGYA'){
        oldData.cruntUser = newData.paylode
    }else if(newData.type == 'LOGOUTHOGYA'){
        localStorage.removeItem('meraToken')
        oldData.cruntUser = null;
    }

            return oldData;
}





let reduser = combineReducers({adCards4 , adCards3 , adAllCards , adGoToChek  , adUserData});

export let meraStore = createStore(reduser);


