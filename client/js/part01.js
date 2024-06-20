const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

// 1. navigation을 선택 후 이벤트 위임을 걸어주세요
//    - addEventListener
//    - e.preventDefault() 사용
// 2. li 수집
//    - e.target
//    - closest
// 3. data-index값 수집
//    - dataset
//    - Attr()
// 4. target에게 is-active 클래스 넣기
//    - elem.classList.add()
// 5. target을 제외한 나머지 li들에게 is-active 클래스 제거하기
//    - elem.classList.remove()
// 6. 이미지 교체
//    - 이미지 가져오기
//    - src 속성 접근하기
//    - src값 변경하기

// const navigation = document.querySelector('.navigation');
const navigation = getNode('.navigation');
const visualImage = document.querySelector('.visual img');

//GSAP 응용
const split = new SplitText('h3', {type:'chars'});

function handleClick(e) {
  e.preventDefault() // 태그의 기본 동작을 방지
  const target = e.target.closest('li');

  if(!target) return;

  const index = target.dataset.index;
  const children = [...navigation.children]
  // const children = Array.from(navigation.children);

  // visualImage.src = e.target.closest('a').href;
  visualImage.src = `./assets/part01/${data[index - 1].src}`;
  visualImage.alt = data[index - 1].alt;

  // for(const li of navigation.children) li.classList.remove('is-active');
  children.forEach(li => li.classList.remove('is-active'));

  target.classList.add('is-active');

  //GSAP 응용
  gsap.from(split.chars, {
    opacity: 0,
    y: 30,
    stagger: 0.03,
    ease: 'power3.inOut',
    immediateRender: false,
  })
}

navigation.addEventListener('click', handleClick);

