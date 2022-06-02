type DB = {
    
        id:number,
        title:string
}

export const dropdownButtons:DB[] = [
    {
        id:1,
        title:"Amino Asit ve Protein"
    },
    {
        id:2,
        title:"Bitkisel Takviye"
    },
    {
        id:3,
        title:"Çocuk Ürünleri"
    },
    {
        id:4,
        title:"Esansiyel Yağ Asitleri"
    },
    {
        id:5,
        title:"Kalsiyum Grubu"
    },
    {
        id:6,
        title:"Koenzim Q-10"
    },
    {
        id:7,
        title:"Mineraller"
    },
    {
        id:8,
        title:"Multivitaminler"
    },
    {
        id:9,
        title:"Özel Takviyeler"
    },
    {
        id:9,
        title:"Probiyotikler"
    },
    {
        id:10,
        title:"Vitaminler"
    },
    {
        id:11,
        title:"B vitaminleri"
    },
    {
        id:12,
        title:"Tüm Ürünler"
    },
]

type Slider = {
    
    id:number,
    img:string
}

export const slider:Slider[] = [
    
    {
        id:1,
        img:"https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/FADAFB7F-BE4E-D014-8A37-15FD90C675DB.png"
    },
    {
        id:2,
        img:"https://st.myideasoft.com/idea/bs/90/myassets/slider_pictures/pictures_1_5.jpg?revision=1640378967"
    },
    {
        id:3,
        img:"https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/B06312FD-64E1-BE42-A63F-7393FA7ABC69.png"
    },
    {
        id:4,
        img:"https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/F3777BBC-626F-D85B-90E0-13250899EFCB.png"
    },
    {
        id:5,
        img:"https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/D4FD0A80-56E3-1EDB-B7A2-BBA3EC5916E9.png"
    },
    {
        id:6,
        img:"https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/9CD8717E-BD44-AC4F-AD52-B5E6414F3E24.png"
    },
    {
        id:7,
        img:"https://www.solgar.com/wp-content/uploads/2020/04/Solgar-social-facebook.png"
    }

]

type Products = {
    
    id:number,
    img:string,
    categories:string,
    title:string
}

export const products:Products[] = [
    {
        id:1,
        img:"/img/esterc.png",
        categories:"Vitaminler",
        title:"Ester C-plus"
    },
    {
        id:2,
        img:"/img/iron.png",
        categories:"Mineraller",
        title:"Gentle Iron"
    },
    {
        id:3,
        img:"/img/hyalu.png",
        categories:"Özel Takviye",
        title:"Hyarulonic Asitler"
    },
    {
        id:4,
        img:"/img/vitb.png",
        categories:"Vitaminler",
        title:"Vitamin B-12"
    },
    {
        id:5,
        img:"/img/magnez.png",
        categories:"Mineraller",
        title:"Magnesium Citrate"
    },
    {
        id:6,
        img:"/img/quercetin.png",
        categories:"Özel Takviyeler",
        title:"Quercetin Complex"
    },
    {
        id:7,
        img:"/img/d3.png",
        categories:"Vitaminler",
        title:"Vitamin D-3 1000IU"
    },
]

type CategoriesSlide = {
    
    id:number,
    title:string,
    img:string,
}

export const catSlides:CategoriesSlide[]= [
    {
        id:1,
        title:"Probiyotikler",
        img:"https://solgar.com.tr/assets/images/probiyotikler.webp"
    },
    {
        id:2,
        title:"B Vitaminleri",
        img:"https://solgar.com.tr/assets/images/b_vitaminleri.webp"
    },
    {
        id:3,
        title:"Çocuk Ürünleri",
        img:"https://solgar.com.tr/assets/images/cocuk_urunleri.webp"
    },
    {
        id:4,
        title:"Mineraller",
        img:"https://solgar.com.tr/assets/images/mineraller.webp"
    },
    {
        id:5,
        title:"Omega-3",
        img:"https://solgar.com.tr/assets/images/esansiyel_yag_asitleri.webp"
    },
    {
        id:6,
        title:"Multivitaminler",
        img:"https://solgar.com.tr/assets/images/multivitaminler.webp"
    },
    {
        id:7,
        title:"Özel Takviyeler",
        img:"https://solgar.com.tr/assets/images/vitaminler.webp"
    },
]

