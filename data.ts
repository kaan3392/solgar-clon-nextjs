type DB = {
    
        id:string,
        title:string
}

export const dropdownButtons:DB[] = [
    {
        
        id:"Amino asitler ve Proteinler",
        title:"Amino asitler ve Proteinler"
    },
    {
        
        id:"Bitkisel Takviyeler",
        title:"Bitkisel Takviyeler"
    },
    {
        
        id:"Cocuk Ürünleri",
        title:"Çocuk Ürünleri"
    },
    {
        
        id:"Esansiyel Yag Asitleri",
        title:"Esansiyel Yağ Asitleri"
    },
    {
        
        id:"Kalsiyum Grubu",
        title:"Kalsiyum Grubu"
    },
    {
        
        id:"Koenzim Q-10",
        title:"Koenzim Q-10"
    },
    {
        
        id:"Mineraller",
        title:"Mineraller"
    },
    {
        
        id:"Multivitaminler",
        title:"Multivitaminler"
    },
    {
        
        id:"Özel Takviyeler",
        title:"Özel Takviyeler"
    },
    {
       
        id:"Probiyotikler",
        title:"Probiyotikler"
    },
    {
        
        id:"Vitaminler",
        title:"Vitaminler"
    },
    {
        
        id:"Vitaminler",
        title:"B Vitaminleri"
    },
    {
        
        id:"",
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

type InterestedProducts = {
    
    id:number,
    title:string,
    img:string,
    categories:string
}

export const interestedProducts:InterestedProducts[] = [
    {
        id:1,
        img:"https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/BC39819E-B5A7-1D33-A583-CF9835074996.webp",
        title:"Balance Rhodiola Complex",
        categories:"ÖZEL TAKVİYELER"
    },
    {
        id:2,
        img:"https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/0859A216-290C-5099-9DFA-FD33CAFF8CBE.webp",
        title:"Rhodiola Root Extract",
        categories:"BİTKİSEL TAKVİYELER"
    },
    {
        id:3,
        img:"https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/0FC81191-A067-5676-9CE6-A9BC8544795C.webp",
        title:"St.John's Wort",
        categories:"BİTKİSEL TAKVİYELER"
    },
    {
        id:4,
        img:"https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/632E00BE-15F4-3513-A037-FBB5E463B226.webp",
        title:"Valerian Root Extract",
        categories:"BİTKİSEL TAKVİYELER"
    },

]