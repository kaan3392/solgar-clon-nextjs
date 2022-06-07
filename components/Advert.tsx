import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 115vh;
`;
const Top = styled.div`
  background-color: #f9ecd9;
  display: flex;
  height: 45%;
  width: 100%;
  @media only screen and (max-width: 768px) {
    height: 45%;
  }
`;
const TopLeft = styled.div`
  width: 50%;
  padding: 100px 10px 300px 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    padding: 20px 10px 50px 40px;
  }
`;
const TopLeftTitle = styled.div`
  color: #302519;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }
`;
const TopLeftDesc = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  @media only screen and (max-width: 768px) {
    line-height: 25px;
  }
`;
const TopLeftExtra = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: rgb(100, 92, 45);
`;
const TopRight = styled.div`
  width: 50%;
  height: 100%;
`;
const TopRightCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  position: relative;
`;
const Center = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  
`;
const CenterLeft = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;
const CenterRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: #f9ecd9;
`;
const CenterRightWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 50px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;
const CenterRightTitle = styled.div`
  font-weight: 600;
  font-size: 30px;
  color: brown;
  margin-bottom: 20px;
  text-align: center;
`;
const CenterRightText = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;
const Bottom = styled.div`
  width: 100%;
  height: 15%;
  background-color: #c8a46b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const BottomTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: white;
  margin-bottom: 15px;
`;
const BottomText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: black;
`;

const Advert = () => {
  return (
    <Container>
      <Top>
        <TopLeft>
          <TopLeftTitle>SOLGAR’IN ALTIN STANDART'I 1947'DEN BERİ</TopLeftTitle>
          <TopLeftDesc>
            Solgar® kalitesine ulaşmanın kestirme bir yolu yoktur. 70 yılı aşkın
            bir süredir kendimizi kaliteye ve sağlıklı yaşama adadık. Yıllardır
            devam eden misyonumuz, sürdürülebilir ve kaliteli hammaddeler
            kullanarak, uzun bilimsel araştırmaların ve ciddi kalite kontrol
            testlerinin sonucunda yenilikçi formüller ile ürünler geliştirmektir
          </TopLeftDesc>
          <TopLeftExtra>
            Çünkü Altın Standart'a ulaşmak ekstra çaba gerektirir.
          </TopLeftExtra>
        </TopLeft>
        <TopRight>
          <TopRightCon>
            <Image
              layout="fill"
              objectFit="contain"
              src="https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/9364AC81-C9DB-CC39-BFBA-9C6C671B6E89.png"
              alt=""
            />
          </TopRightCon>
        </TopRight>
      </Top>
      <Center>
        <CenterLeft>
          <Image
           layout="fill"
           objectFit="cover"
            src="https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/CB54AA9F-62A4-5F27-8EDC-FABF2B5D52AB.png"
            alt=""
          />
        </CenterLeft>
        <CenterRight>
          <CenterRightWrapper>
            <CenterRightTitle>
              ALTIN STANDART'I GELİŞTİRMEK İÇİN SÜREKLİ ÇALIŞIYORUZ.
            </CenterRightTitle>
            <CenterRightText>
              Araştırmaya ve Bilime Dayalı Ürünler
            </CenterRightText>
            <CenterRightText>Sürdürülebilir Hammaddeler</CenterRightText>
            <CenterRightText>Global Üretim </CenterRightText>
            <CenterRightText>Sürekli Kalite Kontrol</CenterRightText>
            <CenterRightText>
              Yüksek Kalite Sandartları: USP Su Filtrasyonu, HEPA Hava
              Filtrasyonu
            </CenterRightText>
          </CenterRightWrapper>
        </CenterRight>
      </Center>
      <Bottom>
        <BottomTitle>
          SOLGAR KALİTESİNE ULAŞMANIN KESTİRME BİR YOLU YOKTUR!
        </BottomTitle>
        <BottomText>
          Kalite 1947'den beri yol gösterici ilkemiz olmuştur, çünkü Altın
          Standart'a ulaşmak ekstra çaba gerektirir.
        </BottomText>
      </Bottom>
    </Container>
  );
};

export default Advert;

/*



.advertTopL{
    
}

.advertTopLTitle{

}
.advertTopLDesc{
    
}

.advertTopLExtra{
    
}

.advertTopR{
    
}

.advertTopRCon{
    
}
.advertTopRImg{
    height: 90%;
    object-fit: cover;
}

.advertCenter{
   
}
.advertCenterL{
    
}
.advertCenterImg{
    width: 100%;
    object-fit: cover;
}
.advertCenterR{
   
    
}
.advertCenterRWrapper{
    
}
.advertCenterRTitle{
    
}
.advertCenterRText{
    
}
.advertBottomEnd{
    
}
.advertBottomTitle{
  
}
.advertBottomText{
   
}

const Advert = () => {
    return (
        <div className="advert">
            <div className="advertTop">
                <div className="advertTopL">
                    <div className="advertTopLTitle">
                        SOLGAR’IN ALTIN STANDART'I 1947'DEN BERİ
                    </div>
                    <div className="advertTopLDesc">
                        Solgar® kalitesine ulaşmanın kestirme bir
                        yolu yoktur. 70 yılı aşkın bir süredir
                        kendimizi kaliteye ve sağlıklı yaşama
                        adadık. Yıllardır devam eden misyonumuz,
                        sürdürülebilir ve kaliteli hammaddeler
                        kullanarak, uzun bilimsel araştırmaların
                        ve ciddi kalite kontrol testlerinin
                        sonucunda yenilikçi formüller ile
                        ürünler geliştirmektir
                    </div>
                    <div className="advertTopLExtra">
                        Çünkü Altın Standart'a ulaşmak ekstra çaba gerektirir.
                    </div>
                </div>
                <div className="advertTopR">
                    <div className="advertTopRCon">
                        <img className="advertTopRImg" src="https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/9364AC81-C9DB-CC39-BFBA-9C6C671B6E89.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="advertCenter">
                <div className="advertCenterL">
                    <img className="advertCenterImg" src="https://online.solgar.com.tr/WebSitesData/B7276B31-4A9F-4914-9C8D-5D6BFD175310/mpt_Files/CB54AA9F-62A4-5F27-8EDC-FABF2B5D52AB.png" alt="" />
                </div>
                <div className="advertCenterR">
                    <div className="advertCenterRWrapper">
                        <div className="advertCenterRTitle">ALTIN STANDART'I GELİŞTİRMEK İÇİN SÜREKLİ ÇALIŞIYORUZ.</div>
                        <div className="advertCenterRText">Araştırmaya ve Bilime Dayalı Ürünler</div>
                        <div className="advertCenterRText">Sürdürülebilir Hammaddeler</div>
                        <div className="advertCenterRText">Global Üretim </div>
                        <div className="advertCenterRText">Sürekli Kalite Kontrol</div>
                        <div className="advertCenterRText">Yüksek Kalite Sandartları: USP Su Filtrasyonu, HEPA Hava Filtrasyonu</div>

                    </div>
                </div>
            </div>
            <div className="advertBottomEnd">
                <div className="advertBottomTitle">SOLGAR KALİTESİNE ULAŞMANIN KESTİRME BİR YOLU YOKTUR!</div>
                <div className="advertBottomText">Kalite 1947'den beri yol gösterici ilkemiz olmuştur, çünkü Altın Standart'a ulaşmak ekstra çaba gerektirir.</div>
            </div>
        </div>
    )
}

export default Advert

*/
