import React, {useEffect} from "react";
import KakaoMapCategory from "./KakaoMapCategory";

export default function Map() {

  useEffect(() => {
    KakaoMapCategory();
  }, []);

  return <article className="article">
    <div className="map_wrap">
      <ul id="category">
          <li id="BK9" data-order="0"> 
              <span className="category_bg bank"></span>
              은행
          </li>       
          <li id="MT1" data-order="1"> 
              <span className="category_bg mart"></span>
              마트
          </li>  
          <li id="PM9" data-order="2"> 
              <span className="category_bg pharmacy"></span>
              약국
          </li>  
          <li id="OL7" data-order="3"> 
              <span className="category_bg oil"></span>
              주유소
          </li>  
          <li id="CE7" data-order="4"> 
              <span className="category_bg cafe"></span>
              카페
          </li>  
          <li id="CS2" data-order="5"> 
              <span className="category_bg store"></span>
              편의점
          </li>      
      </ul>
    </div>
    <div id="Map"></div>
  </article>
}