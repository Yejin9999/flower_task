//1. 년 입력
//2. 월 입력
//3. 일 입력
//4. 결과보기 버튼 클릭시
//5. 각 월에 맞는 탄생화와 꽃말 결과 출력

//const yearInput = document.querySelector('#yearInput');
//const dayInput = document.querySelector('#dayInput');
const monthInput = document.querySelector('.month #monthInput');
const resultBtn = document.querySelector('#resultBtn');
const resultP = document.querySelector('.result');
console.log(monthInput,resultBtn,resultP);

const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
];


console.log(birthday_flower[0].month);
console.log(birthday_flower[0].flower);
console.log(birthday_flower[0].content);


resultBtn.addEventListener('click',()=>{
    if(monthInput.value == 1){
        //console.log(birthday_flower[monthInput.value-1].flower)
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 2){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 3){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 4){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 5){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 6){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 7){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 8){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 9){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 10){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 11){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }
    else if(monthInput.value == 12){
        resultP.innerText = birthday_flower[monthInput.value-1].month
        resultP.innerText += birthday_flower[monthInput.value-1].flower
        resultP.innerText += birthday_flower[monthInput.value-1].content
    }else{resultP.innerText = '생년월일을 다시 입력해주세요'}
});




//결과변수만들고 복합대입으로 데이터쌓고 템플릿문자열로 resultP.innerText = 결과변수
//let result='';
//result +=  ` `

