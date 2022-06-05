import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";



const FilterProducts = () => {
  return (
    <div>FilterProducts</div>
  )
}

export default FilterProducts




/* 

import { solgarData } from "../../newSolgar"
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { FilterContext } from '../../contexts'

const FilterProducts = () => {
    const [filter, setFilter] = useState("");
    const [products, setProducts] = useState(solgarData);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(12);
    const [context, setContext] = useContext(FilterContext);

    const handleClick = (e) => {
        if (e.target.checked) {
            setContext(e.target.id)
            setCurrentPage(1);
        } else {
            setContext("")
            setCurrentPage(1);
        }
    };

    const filteredProducts = context.toLowerCase();

    useEffect(() => {
        if (filteredProducts !== undefined) {
            if (filteredProducts === "amino asitler ve proteinler") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            }
            else if (filteredProducts === "bitkisel takviyeler") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            }
            else if (filteredProducts === "çocuk ürünleri") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            }
            else if (filteredProducts === "esansiyel yağ asitleri") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            }
            else if (filteredProducts === "kalsiyum grubu") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            }
            else if (filteredProducts === "koenzim q-10") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            }
            else if (filteredProducts === "mineraller") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            }
            else if (filteredProducts === "multivitaminler") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            }
            else if (filteredProducts === "özel takviyeler") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            }
            else if (filteredProducts === "probiyotikler") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            }
            else if (filteredProducts === "vitaminler") {

                setProducts(solgarData.filter((pro) => pro.category.toLowerCase() === filteredProducts))
            } else {
                setProducts(solgarData);
            }
        } else {
            setProducts(solgarData);
        }
    }, [filteredProducts])

    const cbChange = (e) => {
        let cbs = document.getElementsByClassName("isCheck");
        for (let i = 0; i < cbs.length; i++) {
            cbs[i].checked = false;
        }
        e.target.checked = true;
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div className="fPContainer">
            <div className="fpWrapper">
                <div className="fPLeft">
                    <div className="fPLeftTitle">KATEGORİLER</div>
                    <ul className="fPLeftList" onClick={(e) => handleClick(e)}>
                        <li className="fPLeftListItem  " >
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Amino asitler ve Proteinler" />
                            </span>
                            <label htmlFor="Amino asitler ve Proteinler">Amino Asitler ve Proteinler</label>
                        </li>
                        <li className="fPLeftListItem ">
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Bitkisel Takviyeler" />
                            </span>
                            <label htmlFor="Bitkisel Takviyeler">Bitkisel Takviyeler</label>
                        </li>
                        <li className="fPLeftListItem " >
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Çocuk Ürünleri" />
                            </span>
                            <label htmlFor="Çocuk Ürünleri">Çocuk Ürünleri</label>
                        </li>
                        <li className="fPLeftListItem ">
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Esansiyel Yağ Asitleri" />
                            </span>
                            <label htmlFor="Esansiyel Yağ Asitleri">Esansiyel Yağ Asitleri</label>
                        </li>
                        <li className="fPLeftListItem ">
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Kalsiyum Grubu" />
                            </span>
                            <label htmlFor="Kalsiyum Grubu">Kalsiyum Grubu</label>
                        </li>
                        <li className="fPLeftListItem ">
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Koenzim Q-10" />
                            </span>
                            <label htmlFor="Koenzim Q-10">Koenzim Q-10</label>
                        </li>
                        <li className="fPLeftListItem ">
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Mineraller" />
                            </span>
                            <label htmlFor="Mineraller">Mineraller</label>
                        </li>
                        <li className="fPLeftListItem ">
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Multivitaminler" />
                            </span>
                            <label htmlFor="Multivitaminler">Multivitaminler</label>
                        </li>
                        <li className="fPLeftListItem ">
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Özel Takviyeler" />
                            </span>
                            <label htmlFor="Özel Takviyeler">Özel Takviyeler</label>
                        </li>
                        <li className="fPLeftListItem ">
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Probiyotikler" />
                            </span>
                            <label htmlFor="Probiyotikler">Probiyotikler</label>
                        </li>
                        <li className="fPLeftListItem ">
                            <span className="check">
                                <input className="isCheck" onChange={(e) => cbChange(e)} type="checkbox" id="Vitaminler" />
                            </span>
                            <label htmlFor="Vitaminler">Vitaminler</label>
                        </li>
                    </ul>
                </div>
                <div className="fPRight">
                    <div className="fPRightWrapper">
                        <div className="fPRightTitle">TÜM ÜRÜNLER</div>
                        <div className="fPRightCon">
                            {currentProducts.map((product) => (
                                <div key={product.name} className="fPRightProductCon">
                                    <Link style={{ textDecoration: "none", color: "inherit" }} to={`/products/${product.name}`}>
                                        <img className="fPRightProductImg" src={product.image} alt="" />
                                        <div className="fPRightProductCat">{product.category}</div>
                                        <div className="fPRightProductTitle">{product.name}</div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            <div className="paginate">
                <div>
                    {(indexOfFirstProduct + 1) + " - " + Math.min(indexOfLastProduct, products.length) + " / " + products.length}
                </div>
                <div className="arrows">
                    <ArrowBackIos onClick={() => { setCurrentPage(prev => Math.max(prev - 1, 1)) }} />
                    <ArrowForwardIos onClick={() => { setCurrentPage(prev => Math.min(prev + 1, Math.ceil(products.length / productsPerPage))) }} />
                </div>
            </div>
            </div>
        </div>
    )
};


.fPContainer{
    height: 120vh;
    width: 100%;
    background-color: #FFFAF3;
    padding:40px 0px;
}

.fpWrapper{
    height: 100%;
    margin:0px 150px ;
    display: flex;
}
.fPLeft{
    flex:3;
    border-right: 1px solid rgb(173, 160, 86, .5);
}

.fPLeftTitle{
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 10px;
}

.fPLeftList{
    list-style: none;
    padding: 0;
}
.fPLeftListInside{
    list-style: none;
}
input[type=checkbox] {
    position: relative;
    cursor: pointer;
     
}


.fPLeftListItem{
    margin: 20px 0px;
    letter-spacing: 1px;
    font-size: 15px;
}

.fPLeftListItem > label{
    margin-left: 5px;
    cursor: pointer;
}


.fPRight{
    flex:10;
    height: 95%;
}

.fPRightWrapper{
    height: 100%;
    padding: 20px 20px 70px 40px ;
    display: flex;
    flex-direction: column;
}
.fPRightTitle{
    font-size: 30px;
    margin-bottom: 40px;
    font-weight: 600;
}
.fPRightCon{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    overflow-y: scroll;
}

.fPRightCon::-webkit-scrollbar {
    display: none;
}


.fPRightProductCon{
    width: 25%;
    cursor: pointer;
    margin-bottom: 30px;
}
.fPRightProductImg{
    width: 100%;
    
}
    
.fPRightProductCat{
    font-size: 11px;
    color: gold;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
}
.fPRightProductTitle{
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    text-align: center;
}

.paginate{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
}

.arrows{
    cursor: pointer;
}

export default FilterProducts



*/