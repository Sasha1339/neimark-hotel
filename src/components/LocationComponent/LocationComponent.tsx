import {FC, RefObject, Suspense, useContext, useEffect, useRef, useState} from "react";
import styles from "./LocationComponent.module.css";
import {gsap} from "gsap";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {SelectableModel} from "@components/GLBComponent/Model";
import {LocationContext} from "@/providers/LocationContext";
import {ButtonBorder} from "@components/ButtonBorder/ButtonBorder";
import {useNavigate} from "react-router-dom";

const hotel = [
  {
    id: 'Building1',
    number: 1,
    name: 'САХАРОВ',
    description: 'Назван в честь Андрея Дмитриевича Сахарова (1921-1989) - выдающегося физика-теоретика, академика, создателя советской водородной бомбы, лауреата Нобелевской премии мира за 1975 год. Символизирует научную мощь и гражданскую позицию.',
    places: 'Первый корпус призван не только для проживания, но и для встречи наших гостей, здесь будущие студенты смогут пройти необходимую регистрацию и получить данные для входа во внутренние сервисы гостиницы кампуса Неймарк'
  },
  {
    id: 'Building2',
    number: 2,
    name: 'БЕТАНКУР',
    description: 'Назван в честь Августина де Бетанкура (1758-1824) - испано-русского ученого, инженера и архитектора, организатора системы высшего инженерного образования в России. Олицетворяет инженерный гений и практическую науку.',
    places: 'Для жителей второго корпуса открыватся буквально минутная возможность посетить на первом этаже одно из первых открывшихся мест в гостинице - вкуснейшая "Блинная", запах ароматных блинов не оставит равнодушными жителей корпуса "Харитон"'
  },
  {
    id: 'Building3',
    number: 3,
    name: 'ЛОБАЧЕВСКИЙ',
    description: 'Назван в честь Николая Ивановича Лобачевского (1792-1856) - великого русского математика, создателя неевклидовой геометрии. Воплощает революционные идеи и смелость научной мысли.',
    places: 'Одна из самых популярных кофейн находится буквально в нескольких этажах от жителей корпуса "Лобачевский", в Starbucks можно уютно отдохнуть за кружкой кофе'
  },
  {
    id: 'Building4',
    number: 4,
    name: 'КАЛАШНИКОВ',
    description: 'Назван в честь Михаила Тимофеевича Калашникова (1919-2013) - знаменитого конструктора-оружейника, создателя автомата Калашникова. Символизирует инновации и надежность.',
    places: 'Жителям этого корпуса в минутной близости доступен фруктовый магазин, в который можно забежать после групповых тренировок, посещение которых доступно также на первом этаже'
  },
  {
    id: 'Building5',
    number: 5,
    name: 'ЛЯПУНОВ',
    description: 'Назван в честь Александра Михайловича Ляпунова (1857-1918) - выдающегося русского математика и механика, создателя теории устойчивости. Олицетворяет стабильность и фундаментальность.',
    places: 'Корпус "Ляпунов" на первом этаже открыл фотостудию, не забудьте в нее заглянуть, без потрясающих фотографий вы не останитесь'
  },
  {
    id: 'Building6',
    number: 6,
    name: 'СТЕКЛОВ',
    description: 'Назван в честь Владимира Андреевича Стеклова (1864-1926) - русского математика и механика, основателя Физико-математического института РАН. Символизирует академические традиции.',
    places: 'Любите игровые события или турниры онлайн шутеров? Тогда корпус "Стеклов" вам в этом поможет, ведь на первом этаже этого корпуса располагается громадный игровой центр!'
  },
  {
    id: 'Building7',
    number: 7,
    name: 'БРАЙЦЕВ',
    description: 'Назван в честь Сергея Валерьяновича Брайцева (1903-1975) - советского архитектора-реставратора, восстановившего многие памятники архитектуры после войны. Воплощает гармонию и восстановление.',
    places: 'Корпус "Брайцев" грамотно совместил в себе самые популярные маркетплейсы: Яндекс Маркет, Wildberries, все самое нужное теперь в двух шагах!'
  },
  {
    id: 'Building8',
    number: 8,
    name: 'ГАЛОНОВ-ГРЕХОВ',
    description: 'Назван в честь Андрея Викторовича Гапонова-Грехова (1926-2023) - советского и российского физика, академика, специалиста в области радиофизики и электроники. Символизирует современные технологии.',
    places: 'Этот корпус тоже не отстает от трендов, здесь также можно найти на первом этаже компьютерный клуб, в котором можно насладится каткой за любимыми играми'
  },
  {
    id: 'Building9',
    number: 9,
    name: 'АНДРОНОВ',
    description: 'Назван в честь Александра Александровича Андронова (1901-1952) - советского физика и математика, основателя теории нелинейных колебаний. Олицетворяет ритм и гармонию.',
    places: 'Конечно же, куда без любимых мест отдыха? В корпусе "Андронов" находится самая большая гостинная, где можно отдохнуть за кружечкой горячего чай и побеседовать с друзьями'
  },
  {
    id: 'Building10',
    number: 10,
    name: 'ХАРИТОН',
    description: 'Назван в честь Юлия Борисовича Харитона (1904-1996) - выдающегося физика, научного руководителя советского атомного проекта, трижды Героя Социалистического Труда. Воплощает научную точность и ответственность.',
    places: '"Харитон" не оставит вас без возможности печатать, но не бумажных листов, а самых разных фигурок в 3д формате, которе вы только можете себе навоображать!'
  },
  {
    id: 'Building11',
    number: 11,
    name: 'БОГОЛЮБОВ',
    description: 'Назван в честь Николая Николаевича Боголюбова (1909-1992) - советского математика и физика-теоретика, академика, основателя научных школ по нелинейной механике и квантовой теории поля. Символизирует глубину научного познания.',
    places: 'Не важно себя почувсвтвовали? Хоте поговорить? В этом вам поможет центр ментального здоровья, который находится на первом этаже корпуса "Боголюбов"'
  },
  {
    id: 'Building12',
    number: 12,
    name: 'АФРИКАНОВ',
    description: 'Назван в честь Игоря Африканова - советского и российского ученого в области ядерной физики и энергетики. Олицетворяет энергетическую мощь и инновации.',
    places: 'Т-банк решил помочь развитию наших студентов в IT сфере, ведь прямо в корпусе "Африканов" вы можете посетить "IT-технологии"!'
  },
  {
    id: 'Building13',
    number: 13,
    name: 'АЛЕКСЕЕВ',
    description: 'Назван в честь Ростислава Евгеньевича Алексеева (1916-1980) - советского кораблестроителя, создателя судов на подводных крыльях и экранопланов. Воплощает скорость и технический прогресс.',
    places: 'Зал единоборств, парикмахерская или книжный дом, все это прямо на пеhdом этаже корпуса "Алексеев", уверены, вы сможете подобрать любимое занятие или попробовать все сразу!'
  },
  {
    id: 'Building14',
    number: 14,
    name: 'ГИНЗБУРГ',
    description: 'Назван в честь Виталия Лазаревича Гинзбурга (1916-2009) - советского и российского физика-теоретика, академика, лауреата Нобелевской премии по физике 2003 года. Символизирует научное прозрение.',
    places: ''
  },
  {
    id: 'Building15',
    number: 15,
    name: 'НЕЙМАРК',
    description: 'Назван в честь Юлия Исааковича Неймарка (1920-2011) - советского и российского математика, основателя научной школы по теории колебаний и динамическим системам. Олицетворяет математическую элегантность.',
    places: 'Корпус "Неймарк" носит ровно такое же название что и наш кампус, но как и все корпусы направлен на улучшение жизни наших житилей, здесь вы можете найти для себя подходящие стрижки в барбершоп, или почетить одну из популярных кофейн Coffee Like'
  },
  {
    id: 'Building16',
    number: 16,
    name: 'БАТАЛОВА',
    description: 'Назван в честь Галины Яковлевны Баталовой (род. 1935) - советской и российской теннисистки, многократной чемпионки СССР, заслуженного мастера спорта. Воплощает спортивный дух и достижения.',
    places: 'Корпус "Баталова" на первом этаже открыл выставку технологий, которая также погружает любого желающего в IT-атмосферу, кто ее посетит'
  },
  {
    id: 'Building17',
    number: 17,
    name: 'САХАРОВ',
    description: 'Назван в честь Андрея Дмитриевича Сахарова (1921-1989) - выдающегося физика-теоретика, академика, создателя советской водородной бомбы, лауреата Нобелевской премии мира за 1975 год. Символизирует научную мощь и гражданскую позицию.',
    places: 'Т-банк решил помочь развитию наших студентов в IT сфере, ведь прямо в корпусе "Африканов" вы можете посетить "IT-технологии"!'
  },
  {
    id: 'Building18',
    number: 18,
    name: 'АФРАЙМОВИЧ',
    description: 'Назван в честь Виктора Самуиловича Афраймовича (1945-2018) - советского и российского физика и математика, специалиста в области теории динамических систем и хаоса. Символизирует сложность и красоту нелинейных процессов.',
    places: ''
  }
]

type Props = {
  scrollerRef: RefObject<HTMLElement>;
}

export const LocationComponent: FC<Props> = ({scrollerRef}) => {

  const triggerRef = useRef<HTMLElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const locationContext = useContext(LocationContext);

  const navigate = useNavigate()


  useEffect(() => {
    if (locationContext[0]) {
      gsap.from(`.${styles.description_right}`, {y: '100%', opacity: 0, duration: 0.5, ease: 'power1.inOut'})
      gsap.to(`.${styles.description_right}`, {y: '0', opacity: 1, duration: 0.5, ease: 'power1.inOut'})
    }
  }, [locationContext[0]]);


  useEffect(() => {
    if (!scrollerRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 30%",
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.text_header_animated}`, { x: '100vw', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.text_header_animated}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.7 })

    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scroller: scrollerRef.current,
        start: "top 30%",
        scrub: false, // scrub = false, чтобы анимация не зависела от скролла
        once: true,   // анимация срабатывает только один раз
      },
    })
      .from(`.${styles.description_not_building}`, { x: '100vw', opacity: 0, stagger: 0.01, duration: 0.01 })
      .to(`.${styles.description_not_building}`, { x: 0, opacity: 1, stagger: 0.01, duration: 0.7 })



  }, [scrollerRef]);

  const textHeader = 'ВЗГЛЯНИТЕ НА РАСПОЛОЖЕНИЕ НАШИХ КОРПУСОВ';

  return (
    <section ref={triggerRef} className={styles.main}>

      <div ref={contentRef} className={styles.description_section}>
        <span className={styles.hint_span}>ГОСТИНИЦА</span>
        <h1 className={styles.header_about}>{textHeader.split(" ").map((word, wi) => (
          <span key={wi} className={styles.word}>
          {word.split("").map((letter, li) => (
            <span
              key={li}
              className={styles.text_header_animated}
            >
              {letter}
            </span>
          ))}
            <span className={styles.space}>&nbsp;</span>
        </span>
        ))}</h1>
        <div className={styles.content}>
          <div className={styles.content_left}>
            <Canvas shadows camera={{ position: [5, 5, 5] }}>
              <Suspense fallback={null}>
                {/* Освещение */}
                <ambientLight intensity={1} />
                {/*<directionalLight position={[10, 10, 5]} intensity={2} />*/}

                {/* Модель */}
                <SelectableModel url="/glb/neimark-hotel.glb" />

                {/* Управление камерой */}
                <OrbitControls
                  enableZoom={true}
                  minDistance={3}  // Минимальное расстояние камеры
                  maxDistance={5} // Максимальное расстояние камеры
                  minPolarAngle={Math.PI / 8}           // Минимальный угол (0° - сверху)
                  maxPolarAngle={8 * Math.PI / 18}
                  enablePan={false}
                  enableRotate={true}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className={styles.content_right}>
            {locationContext[0] && hotel.find(e => e.id === locationContext[0]) ?
              <div className={styles.description_right}>
                <div>Корпус
                  №{`${hotel.find(e => e.id === locationContext[0])?.number}, "${hotel.find(e => e.id === locationContext[0])?.name}"`}</div>
                <div>
                  <div className={styles.description_header}>Описание</div>
                  <div className={styles.description_text}>{hotel.find(e => e.id === locationContext[0])?.description}</div>
                </div>
                {hotel.find(e => e.id === locationContext[0])?.places && <div>
                  <div className={styles.description_header}>Окружение</div>
                  <div className={styles.description_text}>{hotel.find(e => e.id === locationContext[0])?.places}</div>
                </div>}
                <ButtonBorder className={styles.button} title={'Забронировать номер в этом корпусе'} onClick={() => navigate('/room')} />
              </div> :
                <div className={styles.description_not_building}>Все корпуса гостиницы Неймарк отвечают самым современным стандартам, район гостиницы включает не только корпуса для проживания, но и близкое окружение самых разных заведений, сервисов и не только. <span className={`${styles.description_not_building_white}`}>На этой странице вы можете познакомиться с каждым корпусом поближе</span></div>
              }
          </div>
        </div>
      </div>
    </section>
  )

}