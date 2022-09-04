import React, {useState,useEffect} from "react";
import KakaoMapCategory from "../components/KakaoMapCategory";
import '../css/map.css';

export default function Map() {
  const [address,setAddress] = useState('');
  const [searchValue, setSearchValue] = useState('서울시 강서구 강서로 17가길 46');
  
  useEffect(() => {
    KakaoMapCategory(searchValue);
  }, [searchValue]);
  
  useEffect(() => {
    KakaoMapCategory();
  }, []);
  
  const [moyeoList,setMoyeoList] = useState([ //임시데이터
    {key : 1, title : "회운님과 약속", peoples : "(2)", value : ["장준수","정회운"]},
    {key : 2, title : "지수님과 약속", peoples : "(2)", value : ["장준수","성지수"]},
    {key : 3, title : "프로젝트 약속", peoples : "(5)", value : ["장준수","정회운","성지수","최강현","황수경"]}
  ]);
  
  const [listMode, setListMode] = useState(1);
  const list = [];
  
  for(let i = 0; i < moyeoList.length; i++){
    let data = moyeoList[i];
    list.push(<li key={data.key} className='map-moyeo-list'>
      <a id={'/moyeoList/'+data.key} className={'moyeo '+ (listMode === '/moyeoList/'+data.key && 'active')} href={'/entryList/'+data.key} onClick={event =>{
        event.preventDefault();
        setListMode(event.target.id);
      }}>{data.title} {data.peoples}</a>
    </li>)
  }

  const handleChange = event => {
    setAddress(event.target.value);
  }

  const handleSearch = event => {
    event.preventDefault();
    setSearchValue(address);
    console.log(searchValue);
  }
  return <article className="article">
    <div className="map-wrap">
      <ul id="category">
          <li id="CS2" data-order="0"> 
              <span className="category-bg store"></span>
              <span>편의점</span>
          </li>       
          <li id="SW8" data-order="1"> 
              <span className="category-bg subway"></span>
              <span>지하철</span>
          </li>    
          <li id="AT4" data-order="2"> 
              <span className="category-bg tour"></span>
              <span>관광</span>
          </li>  
          <li id="FD6" data-order="3"> 
              <span className="category-bg food"></span>
              <span>음식점</span>
          </li>  
          <li id="CE7" data-order="4"> 
              <span className="category-bg cafe"></span>
              <span>카페</span>
          </li>   
          <li id="OL7" data-order="5"> 
              <span className="category-bg oil"></span>
              <span>주유소</span>
          </li>      
      </ul>
    </div>
    <div id="search-address">
      <input type='text' id="search-bar" name="search" onChange={handleChange} value={address} placeholder="주소를 입력하세요."/>
      <button onClick={handleSearch}>검색</button>
    </div>
    <div id="errer-message"><span className="warning">!</span> 검색 결과가 없습니다. <span className="warning">!</span></div>
    <div id="map"></div>
    <div className="moyeo-list"><ul className='map-list-ul'>{list}</ul></div>
  </article>
}