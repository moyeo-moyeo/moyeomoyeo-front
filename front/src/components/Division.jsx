import React,{useState,useEffect} from 'react';
import '../css/division.css';

function SelectList(props) {
  const list = [];
  for(let i = 0; i < props.moyeoList.length; i++){
    let data = props.moyeoList[i];
    list.push(<li key={data.key} className='moyeo-select-list'>
      <a id={'/moyeoList/'+data.key} href={'/entryList/'+data.key} onClick={event =>{
        event.preventDefault();
        props.setPaymentList([]);
        props.setPayList([]);
        props.setSumMoney(0);
      }}>{data.title} {data.peoples}</a>
    </li>)
  }

  return <div className='moyeo-select-section'>
    <ul>
      {list}
    </ul>
  </div>
}

function MainCalculator(props) {
  let mainSection,value,answer,persons,place,payment = null;
  for(let i = 0; i < props.moyeoList.length; i++){
    let data = props.moyeoList[i];
    if(props.calculator === '/moyeoList/'+data.key){
      for(let j = 0; j < data.value.length; j++){
        value = <>{value}
          <option>
            {data.value[j]}
          </option>
        </>;
        answer = <>{answer}
        <p className='output-answer-list'>{data.value[j]}님은 0원을 계산하셨습니다.</p>
        </>
      }
      answer = <>{answer}
      <h2 className='output-solution'>???님이 ???님에게 000원을 송금해야 합니다.</h2>
      </>
      mainSection = <>
        <h2 className='main-section-title'>
          <p>{data.title} {data.peoples}</p>
        </h2>
        <div className='main-section-input'>
          <p className='input-title'>입력</p>
          <p className='pay-person'>결제 한 사람</p>
          <form className='input-form'>
            <select id='pay-persons' className='pay-persons' name='people'>
              {value}
            </select>
            <p>사용처</p>
            <input id='input-place' className='input-place'></input>
            <p>결제금액</p>
            <input id='input-payment' className='input-payment' type='text' name='payment'></input>
            <input className='input-submit' type='submit' value='계산 추가하기' onClick={event => {
              event.preventDefault();
              persons = document.getElementById('pay-persons').value;
              place = document.getElementById('input-place').value;
              payment = document.getElementById('input-payment').value;
              props.setPaymentList([...props.paymentList,{ persons : {persons}, place : {place}, payment : {payment}}]);
              props.setSumMoney(Number(props.sumMoney)+Number(payment));
              props.setPayList([...props.payList,<li key={Math.random()} className='output-list'><span className='output-persons'>{persons}</span><span className='output-place'>{place}</span><span className='output-payment'>{payment.toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+"원"}</span></li>]);
            }}></input>
          </form>
        </div>
        <div className='main-section-output'>
          <p className='output-title'>계산</p>
          <p className='pay-list'>결제 목록</p>
          <div className='pay-list-box'><ul>{props.payList}</ul><div className='sum-money'><span className='total-title'>총 결제금액</span><span className='total-payment'>{props.sumMoney.toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+"원"}</span></div></div>
          <p className='output-answer'>계산 결과</p>
          {answer}
          <button className='output-share'>공유</button>
          <button className='output-clear'>초기화</button>
        </div>
      </>
    }
  }
  return <div className='main-calculator'>{mainSection}</div>
}

export default function Division() {

  const [moyeoList,setMoyeoList] = useState([ //임시데이터
    {key : 1, title : "회운님과 약속", peoples : "(2)", value : ["장준수","정회운"]},
    {key : 2, title : "지수님과 약속", peoples : "(2)", value : ["장준수","성지수"]},
    {key : 3, title : "프로젝트 약속", peoples : "(5)", value : ["장준수","정회운","성지수","최강현","황수경"]}
  ]);
  const [calculator,setCalculator] = useState('/moyeoList/'+moyeoList[0].key);
  const [paymentList,setPaymentList] = useState([]);
  const [payList,setPayList] = useState([]);
  const [sumMoney,setSumMoney] = useState(0);

  return <article className="article">
    <div className="division-title">
      <h1>친구랑 N빵 계산하기</h1>
      <p>오늘 친구와 사용한 금액 계산하기</p>
    </div>
    <section className='division-section'>
        <SelectList 
          moyeoList={moyeoList}
          setPaymentList={setPaymentList}
          setPayList={setPayList}
          setSumMoney={setSumMoney}
        />
        <MainCalculator
          calculator={calculator}
          moyeoList={moyeoList}
          paymentList={paymentList}
          payList={payList}
          sumMoney={sumMoney}
          setPaymentList={setPaymentList}
          setPayList={setPayList}
          setSumMoney={setSumMoney}
        />
    </section>
  </article>
}