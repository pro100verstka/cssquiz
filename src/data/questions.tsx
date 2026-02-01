import type {Question} from "@/entities/question/model/types";

export const questions: Question[] = [
  {
    id: 1,
    title: "Какой display стоит у div по умолчанию?",
    previewStyle: {width: "100%", height: 60, background: "#e3f2fd"},
    previewContent: null,
    options: ["inline", "block", "flex"],
    correct: 1,
    explanation: "Если элемент начинается с новой строки и занимает всю ширину — значит его display равен block. У div это поведение по умолчанию."
  },
  {
    id: 2,
    title: "Как сделать элементы в строку?",
    previewStyle: {display: "flex", gap: 8},
    previewContent: (
      <>
        <div style={{width: 40, height: 40, background: "#90caf9"}} />
        <div style={{width: 40, height: 40, background: "#42a5f5"}} />
      </>
    ),
    options: ["display: block", "display: inline", "display: flex"],
    correct: 2,
    explanation: "flex располагает дочерние элементы в строку по умолчанию."
  },
  {
    id: 3,
    title: "Как выровнять текст по центру?",
    previewStyle: {
      width: 160,
      padding: 10,
      background: "#fce4ec",
      textAlign: "center"
    },
    previewContent: "Текст",
    options: ["align-items: center", "justify-content: center", "text-align: center"],
    correct: 2,
    explanation: "text-align отвечает за выравнивание текста."
  },
  {
    id: 4,
    title: "Как задать внутренний отступ?",
    previewStyle: {padding: 20, background: "#e8f5e9"},
    previewContent: "Контент",
    options: ["margin", "padding", "gap"],
    correct: 1,
    explanation: "padding — это внутренний отступ элемента."
  },
  {
    id: 5,
    title: "Как задать внешний отступ?",
    previewStyle: {margin: 20, background: "#fff9c4"},
    previewContent: "Блок",
    options: ["padding", "border", "margin"],
    correct: 2,
    explanation: "margin управляет расстоянием между элементами."
  },

  {
    id: 6,
    title: "Как скруглить углы?",
    previewStyle: {
      width: 80,
      height: 80,
      background: "#bbdefb",
      borderRadius: 12
    },
    previewContent: null,
    options: ["border", "border-radius", "box-shadow"],
    correct: 1,
    explanation: "border-radius делает углы закруглёнными."
  },
  {
    id: 7,
    title: "Как добавить тень?",
    previewStyle: {
      width: 80,
      height: 80,
      background: "#fff",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
    },
    previewContent: null,
    options: ["filter", "shadow", "box-shadow"],
    correct: 2,
    explanation: "box-shadow добавляет тень элементу."
  },
  {
    id: 8,
    title: "Как сделать элемент круглым?",
    previewStyle: {
      width: 80,
      height: 80,
      background: "#ce93d8",
      borderRadius: "50%"
    },
    previewContent: null,
    options: ["border-radius: 50%", "circle: true", "round: yes"],
    correct: 0,
    explanation: "border-radius: 50% делает элемент круглым только если его ширина и высота равны. При разных размерах получится овал."
  },
  {
    id: 9,
    title: "Как полностью убрать элемент со страницы, чтобы он не занимал место?",
    previewStyle: {display: "none"},
    previewContent: "Меня не видно",
    options: ["opacity: 0", "visibility: hidden", "display: none"],
    correct: 2,
    explanation: "display: none полностью удаляет элемент из потока документа, поэтому он не занимает место на странице."
  },
  {
    id: 10,
    title: "Как скрыть, но оставить место?",
    previewStyle: {visibility: "hidden"},
    previewContent: "Я невидим",
    options: ["display: none", "opacity: 0", "visibility: hidden"],
    correct: 2,
    explanation: "visibility: hidden скрывает элемент, но место остаётся."
  },

  {
    id: 11,
    title: "Как выровнять flex-элементы по центру по горизонтали?",
    previewStyle: {display: "flex", justifyContent: "center"},
    previewContent: <div
      style={{
        width: 40,
        height: 40,
        background: "#4db6ac"
      }}
    />,
    options: ["justify-content: center", "align-items: center", "text-align: center"],
    correct: 1,
    explanation: "justify-content управляет горизонтальным выравниванием."
  },
  {
    id: 12,
    title: "Как выровнять flex-элементы по центру по вертикали?",
    previewStyle: {display: "flex", alignItems: "center", height: 100},
    previewContent: <div
      style={{
        width: 40,
        height: 40,
        background: "#81c784"
      }}
    />,
    options: ["justify-content", "align-items", "flex-direction"],
    correct: 1,
    explanation: "align-items выравнивает flex-элементы по поперечной оси (по вертикали при flex-direction: row)."
  },
  {
    id: 13,
    title: "Как поменять направление flex?",
    previewStyle: {display: "flex", flexDirection: "column", gap: 6},
    previewContent: (
      <>
        <div style={{width: 40, height: 20, background: "#ffab91"}} />
        <div style={{width: 40, height: 20, background: "#ff7043"}} />
      </>
    ),
    options: ["flex-wrap", "flex-direction", "flex-flow"],
    correct: 1,
    explanation: "flex-direction меняет направление главной оси."
  },
  {
    id: 14,
    title: "Как сделать перенос flex-элементов?",
    previewStyle: {display: "flex", flexWrap: "wrap", width: 100, gap: 4},
    previewContent: Array.from({length: 5}).map((_, i) => (
      <div
        key={i}
        style={{width: 40, height: 20, background: "#90caf9"}}
      />
    )),
    options: ["flex-flow", "flex-wrap", "white-space"],
    correct: 1,
    explanation: "flex-wrap разрешает перенос элементов."
  },
  {
    id: 15,
    title: "Как задать расстояние между flex-элементами?",
    previewStyle: {display: "flex", gap: 12},
    previewContent: (
      <>
        <div style={{width: 30, height: 30, background: "#f48fb1"}} />
        <div style={{width: 30, height: 30, background: "#f06292"}} />
      </>
    ),
    options: ["margin", "gap", "spacing"],
    correct: 1,
    explanation: "gap задаёт расстояние между элементами."
  },

  {
    id: 16,
    title: "Какой position стоит по умолчанию?",
    previewStyle: {width: 100, height: 40, background: "#e0e0e0"},
    previewContent: null,
    options: ["relative", "static", "absolute"],
    correct: 1,
    explanation: "По умолчанию все элементы имеют position: static."
  },
  {
    id: 17,
    title: "Как сдвинуть элемент относительно самого себя?",
    previewStyle: {
      position: "relative",
      top: 10,
      left: 10,
      background: "#bbdefb",
      width: 80,
      height: 40
    },
    previewContent: null,
    options: ["absolute", "relative", "fixed"],
    correct: 1,
    explanation: "position: relative позволяет сдвигать элемент, не вырывая его из потока."
  },
  {
    id: 18,
    title: "Как позиционировать элемент относительно родителя?",
    previewStyle: {
      position: "relative",
      width: 120,
      height: 80,
      background: "#f5f5f5"
    },
    previewContent: (
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 30,
          height: 30,
          background: "#ff7043"
        }}
      />
    ),
    options: ["relative", "absolute", "fixed"],
    correct: 1,
    explanation: "absolute позиционируется относительно ближайшего position-родителя."
  },
  {
    id: 19,
    title: "Как зафиксировать элемент относительно окна?",
    previewStyle: {
      width: 140,
      height: 80,
      background: "#eeeeee",
      position: "relative"
    },
    previewContent: (
      <div
        style={{
          width: 30,
          height: 30,
          background: "#4caf50",
          position: "absolute",
          bottom: 0,
          right: 0
        }}
      />
    ),
    options: ["absolute", "relative", "fixed"],
    correct: 2,
    explanation: "position: fixed фиксирует элемент относительно окна браузера."
  },
  {
    id: 20,
    title: "Что управляет порядком наложения элементов?",
    previewStyle: {position: "relative", width: 100, height: 60},
    previewContent: (
      <>
        <div
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            background: "#ffeb3b",
            zIndex: 1
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 20,
            top: 20,
            width: 50,
            height: 50,
            background: "#f44336",
            zIndex: 2
          }}
        />
      </>
    ),
    options: ["order", "z-index", "layer"],
    correct: 1,
    explanation: "z-index управляет порядком перекрытия элементов."
  },

  {
    id: 21,
    title: "Как обрезать содержимое, выходящее за границы?",
    previewStyle: {
      width: 80,
      height: 40,
      overflow: "hidden",
      background: "#c8e6c9"
    },
    previewContent: "Очень длинный текст",
    options: ["clip", "hidden", "overflow: hidden"],
    correct: 2,
    explanation: "overflow: hidden скрывает всё, что выходит за границы."
  },
  {
    id: 22,
    title: "Как добавить прокрутку при переполнении?",
    previewStyle: {
      width: 80,
      height: 40,
      overflow: "auto",
      background: "#fff9c4"
    },
    previewContent: "Очень длинный текст",
    options: ["scroll", "overflow: auto", "overflow: visible"],
    correct: 1,
    explanation: "overflow: auto добавляет скролл при необходимости."
  },
  {
    id: 23,
    title: "Что включает padding и border в ширину элемента?",
    previewStyle: {
      width: 80,
      padding: 10,
      border: "4px solid #000",
      boxSizing: "border-box",
      background: "#bbdefb"
    },
    previewContent: null,
    options: ["content-box", "border-box", "box-model"],
    correct: 1,
    explanation: "border-box включает padding и border в width."
  },
  {
    id: 24,
    title: "Какая единица зависит от ширины экрана?",
    previewStyle: {width: "50vw", height: 30, background: "#e1bee7"},
    previewContent: null,
    options: ["%", "vw", "em"],
    correct: 1,
    explanation: "vw — это процент от ширины viewport."
  },
  {
    id: 25,
    title: "Какая единица зависит от размера шрифта родителя?",
    previewStyle: {fontSize: 20},
    previewContent: <span style={{fontSize: "1.5em"}}>Текст</span>,
    options: ["px", "rem", "em"],
    correct: 2,
    explanation: "em зависит от font-size родителя."
  },

  {
    id: 26,
    title: "Как задать размер относительно корневого шрифта?",
    previewStyle: {},
    previewContent: <span style={{fontSize: "2rem"}}>Текст</span>,
    options: ["em", "rem", "%"],
    correct: 1,
    explanation: "rem зависит от font-size html."
  },
  {
    id: 27,
    title: "Как изменить курсор при наведении?",
    previewStyle: {
      width: 80,
      height: 40,
      background: "#90caf9",
      cursor: "pointer"
    },
    previewContent: null,
    options: ["cursor: hand", "cursor: click", "cursor: pointer"],
    correct: 2,
    explanation: "cursor: pointer показывает, что элемент кликабельный."
  },
  {
    id: 28,
    title: "Как задать плавное изменение свойств?",
    previewStyle: {
      width: 60,
      height: 30,
      background: "#f48fb1",
      transition: "all 0.3s"
    },
    previewContent: null,
    options: ["animation", "transition", "transform"],
    correct: 1,
    explanation: "transition добавляет плавность изменения CSS-свойств."
  },
  {
    id: 29,
    title: "Как увеличить элемент визуально?",
    previewStyle: {
      width: 40,
      height: 40,
      background: "#aed581",
      transform: "scale(1.2)"
    },
    previewContent: null,
    options: ["translate", "scale", "rotate"],
    correct: 1,
    explanation: "scale увеличивает или уменьшает элемент."
  },
  {
    id: 30,
    title: "Как повернуть элемент?",
    previewStyle: {
      width: 40,
      height: 40,
      background: "#ffcc80",
      transform: "rotate(15deg)"
    },
    previewContent: null,
    options: ["rotate", "skew", "flip"],
    correct: 0,
    explanation: "rotate поворачивает элемент."
  },

  {
    id: 31,
    title: "Как сместить элемент без влияния на поток?",
    previewStyle: {
      width: 40,
      height: 40,
      background: "#ce93d8",
      transform: "translateX(20px)"
    },
    previewContent: null,
    options: ["margin", "translate", "position"],
    correct: 1,
    explanation: "transform: translate не влияет на соседние элементы."
  },
  {
    id: 32,
    title: "Как задать сетку из колонок?",
    previewStyle: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 4
    },
    previewContent: Array.from({length: 6}).map((_, i) => (
      <div
        key={i}
        style={{height: 30, width: 30, background: "#90caf9"}}
      />
    )),
    options: ["flex", "grid", "table"],
    correct: 1,
    explanation: "grid предназначен для построения двумерных сеток."
  },
  {
    id: 33,
    title: "Как задать расстояние между grid-ячейками?",
    previewStyle: {display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8},
    previewContent: (
      <>
        <div style={{height: 30, width: 30, background: "#a5d6a7"}} />
        <div style={{height: 30, width: 30, background: "#81c784"}} />
      </>
    ),
    options: ["margin", "gap", "padding"],
    correct: 1,
    explanation: "gap работает и в flex, и в grid."
  },
  {
    id: 34,
    title: "Как растянуть grid-элемент на 2 колонки?",
    previewStyle: {display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, width: 120},
    previewContent: (
      <>
        <div style={{ height: 30, background: "#90caf9" }} />
        <div style={{ height: 30, background: "#90caf9" }} />
        <div style={{gridColumn: "1 / 3", height: 30, background: "#ffab91"}}
        />
      </>
    ),
    options: ["grid-span", "grid-column", "column-span"],
    correct: 1,
    explanation: "grid-column задаёт, между какими линиями сетки элемент растягивается. Значение 1 / 3 означает: от первой до третьей линии, то есть на две колонки."
  },
  {
    id: 35,
    title: "Как задать минимальную ширину?",
    previewStyle: {minWidth: 80, background: "#e0f2f1", height: 30},
    previewContent: null,
    options: ["width", "max-width", "min-width"],
    correct: 2,
    explanation: "min-width ограничивает минимальный размер элемента."
  },

  {
    id: 36,
    title: "Как ограничить максимальную ширину?",
    previewStyle: {maxWidth: 80,  width: "100%", background: "#ffe0b2", height: 30},
    previewContent: null,
    options: ["width", "min-width", "max-width"],
    correct: 2,
    explanation: "max-width ограничивает рост элемента."
  },
  {
    id: 37,
    title: "Как задать высоту на весь экран?",
    previewStyle: {height: 120, width: 60, background: "#f5f5f5", padding: 6},
    previewContent: (<div style={{height: "100%", background: "#c5cae9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12}}></div>),
    options: ["100%", "100vh", "auto"],
    correct: 1,
    explanation: "100vh задаёт высоту элемента, равную высоте окна браузера (viewport), независимо от родителя."
  },
  {
    id: 38,
    title: "Как сделать текст жирным?",
    previewStyle: {},
    previewContent: <span style={{fontWeight: 700}}>Текст</span>,
    options: ["font-style", "font-weight", "text-bold"],
    correct: 1,
    explanation: "font-weight отвечает за жирность."
  },
  {
    id: 39,
    title: "Как увеличить расстояние между строками?",
    previewStyle: {},
    previewContent: <p style={{lineHeight: 2}}>Строка<br />Строка</p>,
    options: ["letter-spacing", "line-height", "text-gap"],
    correct: 1,
    explanation: "line-height управляет высотой строки."
  },
  {
    id: 40,
    title: "Как изменить цвет текста?",
    previewStyle: {},
    previewContent: <span style={{color: "#f44336"}}>Текст</span>,
    options: ["font-color", "color", "text-color"],
    correct: 1,
    explanation: "color задаёт цвет текста."
  },

  {
    id: 41,
    title: "Как убрать подчёркивание у ссылки?",
    previewStyle: {},
    previewContent: <a style={{textDecoration: "none"}}>Ссылка</a>,
    options: ["text-style: none", "text-decoration: none", "underline: none"],
    correct: 1,
    explanation: "text-decoration управляет подчёркиванием."
  },
  {
    id: 42,
    title: "Как сделать hover-эффект?",
    previewStyle: {width: 60, height: 30, background: "#90caf9"},
    previewContent: null,
    options: [":active", ":focus", ":hover"],
    correct: 2,
    explanation: ":hover применяется при наведении."
  },
  {
    id: 43,
    title: "Как сделать элемент нечувствительным к кликам?",
    previewStyle: {
      width: 60,
      height: 30,
      background: "#eeeeee",
      pointerEvents: "none"
    },
    previewContent: null,
    options: ["pointer-events: none", "disabled (только для кнопок/инпутов)", "cursor: not-allowed"],
    correct: 1,
    explanation: "pointer-events: none делает любой элемент полностью нечувствительным к кликам и другим взаимодействиям. disabled работает только для форм, а cursor только визуально меняет курсор."
  },
  {
    id: 44,
    title: "Как сделать фон на всю область?",
    previewStyle: {
      width: "100%",
      height: 80,
      backgroundImage: "linear-gradient(#90caf9, #42a5f5)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      borderRadius: 6
    },
    previewContent: null,
    options: ["contain", "stretch", "cover"],
    correct: 2,
    explanation:
      "cover растягивает фон на весь блок, сохраняя пропорции и без искажений. Если блок больше фонового изображения, оно не повторяется."
  },
  {
    id: 45,
    title: "Как отключить повтор фона?",
    previewStyle: {
      width: 120, // ширина чтобы эффект виден
      height: 60,
      backgroundImage: "linear-gradient(45deg, #ffcc80 25%, #ffb74d 25%, #ffcc80 50%, #ffb74d 50%, #ffcc80 75%, #ffb74d 75%)",
      backgroundSize: "20px 20px",
      backgroundRepeat: "no-repeat",
      borderRadius: 6
    },
    previewContent: null,
    options: ["repeat: none", "no-repeat", "background-repeat: no-repeat"],
    correct: 2,
    explanation:
      "background-repeat: no-repeat отключает повтор фонового изображения или паттерна. Элемент показывает фон только один раз."
  },

  {
    id: 46,
    title: "Как сделать inline элемент с размерами?",
    previewStyle: {
      display: "inline-block",
      width: 40,
      height: 40,
      background: "#aed581"
    },
    previewContent: null,
    options: ["inline", "block", "inline-block"],
    correct: 2,
    explanation: "inline-block сочетает inline и размеры."
  },
  {
    id: 47,
    title: "Как центрировать block элемент по горизонтали?",
    previewStyle: {
      width: 60,
      height: 30,
      background: "#ffab91",
      margin: "0 auto"
    },
    previewContent: null,
    options: ["text-align", "margin: auto", "justify-content"],
    correct: 1,
    explanation: "margin: 0 auto центрирует блок."
  },
  {
    id: 48,
    title: "Как сделать элемент невидимым, но кликабельным?",
    previewStyle: {width: 60, height: 30, background: "#ccc", opacity: 0},
    previewContent: null,
    options: ["display: none", "visibility: hidden", "opacity: 0"],
    correct: 2,
    explanation: "opacity: 0 скрывает, но элемент остаётся активным."
  },
  {
    id: 49,
    title: "Как задать плавный hover без JS?",
    previewStyle: {
      transition: "background 0.3s",
      background: "#90caf9",
      height: 30
    },
    previewContent: null,
    options: ["animation", "transition", "effect"],
    correct: 1,
    explanation: "transition + :hover дают плавный эффект."
  },
  {
    id: 50,
    title: "Как сделать адаптивную сетку?",
    previewStyle: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(40px,1fr))",
      gap: 4
    },
    previewContent: Array.from({length: 4}).map((_, i) => (
      <div
        key={i}
        style={{height: 30, background: "#81d4fa"}}
      />
    )),
    options: ["flex-wrap", "media queries", "auto-fit + minmax"],
    correct: 2,
    explanation: "auto-fit + minmax создают адаптивную grid-сетку."
  },
  {
    id: 51,
    title: "Какой position вырывает элемент из потока?",
    previewStyle: {
      position: "absolute",
      width: 60,
      height: 30,
      background: "#ffcc80"
    },
    previewContent: null,
    options: ["relative", "absolute", "static"],
    correct: 1,
    explanation: "absolute удаляет элемент из нормального потока документа."
  },
  {
    id: 52,
    title: "Какой position НЕ реагирует на top / left?",
    previewStyle: {width: 60, height: 30, background: "#e0e0e0"},
    previewContent: null,
    options: ["relative", "absolute", "static"],
    correct: 2,
    explanation: "static — стандартный режим, координаты не применяются."
  },
  {
    id: 53,
    title: "Что создаёт новый stacking context?",
    previewStyle: {
      position: "relative",
      zIndex: 1,
      background: "#bbdefb",
      width: 80,
      height: 40
    },
    previewContent: null,
    options: ["z-index без position", "opacity < 1", "margin"],
    correct: 1,
    explanation: "opacity меньше 1 создаёт новый stacking context."
  },
  {
    id: 54,
    title: "Почему z-index не работает?",
    previewStyle: {zIndex: 10, background: "#ffcdd2", width: 80, height: 40},
    previewContent: null,
    options: [
      "Нет position",
      "Слишком маленький z-index",
      "Нужен display: block"
    ],
    correct: 0,
    explanation: "z-index работает только с position != static."
  },
  {
    id: 55,
    title: "Как ограничить текст одной строкой?",
    previewStyle: {
      width: 80,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      background: "#c8e6c9"
    },
    previewContent: "Очень длинный текст",
    options: ["line-clamp", "nowrap + ellipsis", "overflow-x"],
    correct: 1,
    explanation: "Комбинация nowrap + ellipsis обрезает текст."
  },

  {
    id: 56,
    title: "Как выровнять элемент в flex по правому краю?",
    previewStyle: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 4,
      width: 120,   // задаём ширину контейнера
      height: 40,
      background: "#f5f5f5",
      padding: 4,
      borderRadius: 6
    },
    previewContent: (
      <>
        <div style={{ width: 30, height: 30, background: "#90caf9" }} />
      </>
    ),
    options: ["align-items: end", "justify-content: flex-end", "text-align: right"],
    correct: 1,
    explanation:
      "justify-content управляет выравниванием элементов по главной оси (по горизонтали при flex-direction: row). В превью видно, что все элементы сдвинуты к правому краю контейнера."
  },
  {
    id: 57,
    title: "Как сделать колонку flex-элементов?",
    previewStyle: {display: "flex", flexDirection: "column", gap: 6},
    previewContent: (
      <>
        <div style={{height: 20, width: 20, background: "#a5d6a7"}} />
        <div style={{height: 20, width: 20, background: "#81c784"}} />
      </>
    ),
    options: ["flex-wrap", "flex-direction: column", "align-items"],
    correct: 1,
    explanation: "flex-direction: column меняет ось."
  },
  {
    id: 58,
    title: "Как растянуть flex-элемент на всю высоту?",
    previewStyle: {display: "flex", height: 60, alignItems: "stretch"},
    previewContent: <div style={{width: 30, background: "#ffab91"}} />,
    options: ["height: 100%", "align-items: stretch", "flex: 1"],
    correct: 1,
    explanation: "stretch — значение по умолчанию для align-items."
  },
  {
    id: 59,
    title: "Как задать одинаковую ширину flex-элементам?",
    previewStyle: {display: "flex", gap: 4},
    previewContent: (
      <>
        <div style={{flex: 1, background: "#90caf9", height: 30, width: 30}} />
        <div style={{flex: 1, background: "#42a5f5", height: 30, width: 30}} />
      </>
    ),
    options: ["width", "flex: 1", "auto"],
    correct: 1,
    explanation: "flex: 1 равномерно распределяет пространство."
  },
  {
    id: 60,
    title: "Как запретить сжатие flex-элемента?",
    previewStyle: {display: "flex", width: 80},
    previewContent: (
      <>
        <div
          style={{
            width: 60,
            flexShrink: 0,
            background: "#f48fb1",
            height: 30
          }}
        />
        <div style={{background: "#f06292", height: 30}} />
      </>
    ),
    options: ["flex-grow: 0", "flex-shrink: 0", "flex-basis: 0"],
    correct: 1,
    explanation: "flex-shrink управляет сжатием элементов."
  },

  {
    id: 61,
    title: "Как задать минимальную ширину grid-колонки?",
    previewStyle: {
      display: "grid",
      gridTemplateColumns: "minmax(60px, 1fr)",
      gap: 4
    },
    previewContent: <div style={{height: 30, background: "#ce93d8"}} />,
    options: ["auto-fit", "minmax", "fr"],
    correct: 1,
    explanation: "minmax задаёт диапазон размеров."
  },
  {
    id: 62,
    title: "Как автоматически заполнять grid-колонки?",
    previewStyle: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, 40px)",
      gap: 4
    },
    previewContent: Array.from({length: 5}).map((_, i) => (
      <div
        key={i}
        style={{height: 30, background: "#b3e5fc"}}
      />
    )),
    options: ["auto-fit", "auto-fill", "grid-auto"],
    correct: 1,
    explanation: "auto-fill создаёт столько колонок, сколько помещается."
  },
  {
    id: 63,
    title: "Как выровнять grid-элемент по центру ячейки?",
    previewStyle: {
      display: "grid",
      placeItems: "center",
      height: 60,
      width: 60,
      background: "#f5f5f5"
    },
    previewContent: <div
      style={{
        width: 20,
        height: 20,
        background: "#4db6ac"
      }}
    />,
    options: ["align-self", "place-items", "justify-content"],
    correct: 1,
    explanation: "place-items объединяет align-items и justify-items."
  },
  {
    id: 64,
    title: "Как задать автоматическую высоту строки grid?",
    previewStyle: {
      display: "grid",
      gridAutoRows: "minmax(30px, auto)",
      gap: 4
    },
    previewContent: (
      <>
        <div style={{background: "#81d4fa"}}>Коротко</div>
        <div style={{background: "#4fc3f7"}}>Длинный контент</div>
      </>
    ),
    options: ["grid-template-rows", "grid-auto-rows", "row-height"],
    correct: 1,
    explanation: "grid-auto-rows задаёт высоту автоматически создаваемых строк."
  },
  {
    id: 65,
    title: "Как задать фоновый градиент?",
    previewStyle: {
      height: 40,
      width: 40,
      background: "linear-gradient(to right, #42a5f5, #478ed1)"
    },
    previewContent: null,
    options: ["background-color", "gradient()", "linear-gradient"],
    correct: 2,
    explanation: "linear-gradient создаёт градиентный фон."
  },

  {
    id: 66,
    title: "Как позиционировать фон по центру?",
    previewStyle: {
      height: 40,
      width: 40,
      backgroundImage: "linear-gradient(#90caf9,#42a5f5)",
      backgroundPosition: "center"
    },
    previewContent: null,
    options: ["background-align", "background-position", "object-fit"],
    correct: 1,
    explanation: "background-position управляет положением фона."
  },
  {
    id: 67,
    title: "Как выбрать первый элемент списка?",
    previewStyle: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width: 120,
      padding: 6,
      background: "#f5f5f5",
      borderRadius: 6
    },
    previewContent: (
      <>
        <div style={{ height: 20, background: "#ff8a65" }}>1</div>
        <div style={{ height: 20, background: "#90caf9" }}>2</div>
        <div style={{ height: 20, background: "#a5d6a7" }}>3</div>
      </>
    ),
    options: [":first", ":first-child", ":start"],
    correct: 1,
    explanation:
      ":first-child выбирает первый элемент среди соседей. В превью это верхний оранжевый блок."
  },
  {
    id: 68,
    title: "Как выбрать элемент при фокусе?",
    previewStyle: {width: 60, height: 30, background: "#e0e0e0"},
    previewContent: null,
    options: [":hover", ":focus", ":active"],
    correct: 1,
    explanation: ":focus применяется при получении фокуса."
  },
  {
    id: 69,
    title: "Как применить стили только на мобильных устройствах?",
    previewStyle: {
      width: 120,
      height: 40,
      background: "#90caf9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 12,
      borderRadius: 6
    },
    previewContent: (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#90caf9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          color: "#fff",
          borderRadius: 6,
        }}
      >
        Мобильный блок
      </div>
    ),
    options: [
      "@media (max-width: 480px)",
      "@mobile (max-width: 480px)",
      "@screen (max-width: 480px)"
    ],
    correct: 0,
    explanation:
      "Для применения CSS только на устройствах с небольшой шириной используют @media. Пример: @media (max-width: 480px) { ... }"
  },
  {
    id: 70,
    title: "Как проверить ширину экрана в media query?",
    previewStyle: {
      width: 120,
      height: 40,
      background: "#c5cae9",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      fontSize: 12,
      color: "#222"
    },
    previewContent: (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          color: "#222",
          background: "#c5cae9",
          borderRadius: 6
        }}
      >
        Проверка ширины
      </div>
    ),
    options: ["max-width", "device-width", "screen-width"],
    correct: 0,
    explanation:
      "В медиазапросах для проверки ширины текущего viewport используют max-width. Пример: @media (max-width: 480px) { ... }"
  },

  {
    id: 71,
    title: "Как скрыть элемент только на мобильных устройствах?",
    previewStyle: {
      width: 120,
      height: 40,
      background: "#ffcc80",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      fontSize: 12,
      color: "#222"
    },
    previewContent: (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffcc80",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          color: "#222",
          borderRadius: 6
        }}
      >
        Мобильный блок
      </div>
    ),
    options: [
      "display: none (для всех размеров)",
      "@media (max-width: 480px) { display: none; }",
      "visibility: hidden"
    ],
    correct: 1,
    explanation:
      "Чтобы скрыть элемент только на мобильных, используют медиазапросы: @media (max-width: 480px) { display: none; }. Простой display: none скрывает элемент на всех экранах, а visibility: hidden скрывает визуально, но оставляет место."
  },
  {
    id: 72,
    title: "Как задать адаптивный размер текста?",
    previewStyle: {},
    previewContent:
      <span style={{fontSize: "clamp(14px, 2vw, 20px)"}}>Текст</span>,
    options: ["calc()", "clamp()", "minmax()"],
    correct: 1,
    explanation: "clamp задаёт диапазон значений."
  },
  {
    id: 73,
    title: "Как изменить порядок flex-элементов?",
    previewStyle: {display: "flex", gap: 4},
    previewContent: (
      <>
        <div style={{order: 2, background: "#ffab91", width: 30, height: 30}} />
        <div style={{order: 1, background: "#ff7043", width: 30, height: 30}} />
      </>
    ),
    options: ["z-index", "order", "flex-order"],
    correct: 1,
    explanation: "order меняет визуальный порядок элементов."
  },
  {
    id: 74,
    title: "Как задать курсор ожидания?",
    previewStyle: {width: 60, height: 30, background: "#eee", cursor: "wait"},
    previewContent: null,
    options: ["loading", "wait", "progress"],
    correct: 1,
    explanation: "cursor: wait показывает состояние ожидания."
  },
  {
    id: 75,
    title: "Как запретить выделение текста?",
    previewStyle: {userSelect: "none", background: "#cfd8dc", height: 30},
    previewContent: "Нельзя выделить",
    options: ["select: none", "user-select: none", "text-lock"],
    correct: 1,
    explanation: "user-select управляет выделением текста."
  },
  {
    id: 76,
    title: "Почему margin-top не срабатывает у inline элемента?",
    previewStyle: {display: "inline", marginTop: 20, background: "#ffccbc"},
    previewContent: "Текст",
    options: ["inline не поддерживает margin", "нужен display: inline-block", "margin работает только снизу"],
    correct: 1,
    explanation: "inline элементы игнорируют vertical margin — нужен inline-block или block."
  },
  {
    id: 77,
    title: "Как сделать sticky-элемент?",
    previewStyle: {
      position: "sticky",
      top: 0,
      background: "#bbdefb",
      height: 30
    },
    previewContent: "Я липкий",
    options: ["position: fixed", "position: absolute", "position: sticky"],
    correct: 2,
    explanation: "position: sticky сочетает relative и fixed."
  },
  {
    id: 78,
    title: "Почему position: sticky не работает?",
    previewStyle: {},
    previewContent: null,
    options: [
      "Нет top / bottom",
      "Родитель без position",
      "Нужен z-index"
    ],
    correct: 0,
    explanation: "sticky требует указания top / bottom."
  },
  {
    id: 79,
    title: "Как скрыть переполнение только по горизонтали?",
    previewStyle: {overflowX: "hidden", background: "#c8e6c9", width: 80},
    previewContent: "Очень длинный текст",
    options: ["overflow", "overflow-x", "white-space"],
    correct: 1,
    explanation: "overflow-x управляет горизонтальным переполнением."
  },
  {
    id: 80,
    title: "Почему height: 100% не работает?",
    previewStyle: {
      width: 120,
      height: 60,
      background: "#e0e0e0",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: 4,
      borderRadius: 6
    },
    previewContent: (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#90caf9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 10,
          borderRadius: 4
        }}
      >
        Дочерний блок
      </div>
    ),
    options: [
      "Родителю не задана высота",
      "Нужен vh",
      "height работает только у flex"
    ],
    correct: 0,
    explanation:
      "height в процентах зависит от размера родителя. Если у родителя не задана высота, 100% не будет работать. Для полноэкранной высоты используют vh."
  },

  {
    id: 81,
    title: "Как задать высоту относительно окна?",
    previewStyle: {
      width: "100%",
      height: 120,
      background: "#e1bee7",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      borderRadius: 6,
      padding: 8,
      position: "relative"
    },
    previewContent: (
      <div
        style={{
          width: "80%",
          height: "50%",
          background: "#ce93d8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          color: "#fff",
          fontSize: 12
        }}
      >
        50
      </div>
    ),
    options: ["%", "vh", "auto"],
    correct: 1,
    explanation:
      "vh — единица измерения от высоты viewport. В превью мы имитируем 50vh с помощью height: 50% относительно контейнера."
  },
  {
    id: 82,
    title: "Почему text-align не центрирует div?",
    previewStyle: {textAlign: "center", background: "#eee", height: 40},
    previewContent: <div
      style={{
        width: 30,
        height: 30,
        background: "#ff7043"
      }}
    />,
    options: [
      "text-align только для текста",
      "нужен flex",
      "margin не задан"
    ],
    correct: 0,
    explanation: "text-align центрирует inline-контент, а не блоки."
  },
  {
    id: 83,
    title: "Как центрировать div внутри div?",
    previewStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 60
    },
    previewContent: <div
      style={{
        width: 30,
        height: 30,
        background: "#4caf50"
      }}
    />,
    options: ["margin", "flex", "text-align"],
    correct: 1,
    explanation: "Flex — самый простой способ центрирования."
  },
  {
    id: 84,
    title: "Как сделать элемент кликабельным поверх других?",
    previewStyle: {
      width: 120,
      height: 60,
      background: "#f5f5f5",
      position: "relative",
      borderRadius: 6,
      padding: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    previewContent: (
      <>
        <div
          style={{
            width: 60,
            height: 30,
            background: "#ff8a65",
            position: "absolute",
            top: 15,
            left: 10
          }}
        />
        <div
          style={{
            width: 60,
            height: 30,
            background: "#4db6ac",
            position: "absolute",
            top: 10,
            left: 30,
            zIndex: 10
          }}
        />
      </>
    ),
    options: ["position", "z-index", "order"],
    correct: 1,
    explanation:
      "z-index определяет порядок наложения элементов с position != static. Блок с большим z-index окажется сверху и будет кликабельным."
  },
  {
    id: 85,
    title: "Почему z-index не работает у flex-элемента?",
    previewStyle: {
      width: 120,
      height: 60,
      background: "#f5f5f5",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 6,
      padding: 4,
      position: "relative"
    },
    previewContent: (
      <>
        <div
          style={{
            width: 40,
            height: 40,
            background: "#ff8a65",
            zIndex: 10
          }}
        />
        <div
          style={{
            width: 40,
            height: 40,
            background: "#4db6ac"
          }}
        />
      </>
    ),
    options: [
      "flex ломает z-index",
      "нет position",
      "нужен order"
    ],
    correct: 1,
    explanation:
      "z-index работает только у элементов с position != static. В превью верхний блок с z-index не перекрывает соседний, потому что position не задано."
  },

  {
    id: 86,
    title: "Как убрать отступы у body?",
    previewStyle: {
      width: 120,
      height: 60,
      background: "#f5f5f5",
      position: "relative",
      borderRadius: 6,
      padding: 4
    },
    previewContent: (
      <>
        {/* Блок с "отступами" */}
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#ff8a65",
            margin: 8, // имитация дефолтного margin body
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 10,
            borderRadius: 4
          }}
        >
          С отступами
        </div>
      </>
    ),
    options: [
      "body { padding: 0 }",
      "body { margin: 0 }",
      "html { gap: 0 }"
    ],
    correct: 1,
    explanation:
      "Браузеры по умолчанию добавляют margin у body. Чтобы убрать его, используют body { margin: 0 }."
  },
  {
    id: 87,
    title: "Почему inline-block элементы имеют зазор?",
    previewStyle: {
      width: 120,
      height: 40,
      background: "#f5f5f5",
      display: "flex",
      alignItems: "center",
      padding: 4,
      borderRadius: 6,
      fontSize: 10,
      position: "relative"
    },
    previewContent: (
      <div style={{ display: "inline-block", width: "100%" }}>
        <span
          style={{
            display: "inline-block",
            width: 30,
            height: 30,
            background: "#ff8a65",
            marginRight: 4
          }}
        />
        <span
          style={{
            display: "inline-block",
            width: 30,
            height: 30,
            background: "#4db6ac"
          }}
        />
      </div>
    ),
    options: [
      "Из-за margin",
      "Из-за пробелов в HTML",
      "Из-за box-sizing"
    ],
    correct: 1,
    explanation:
      "Пробелы между inline-block элементами в HTML считаются текстом, поэтому появляется зазор. Чтобы убрать зазор, можно использовать font-size: 0 у родителя или комментировать пробелы в HTML."
  },
  {
    id: 88,
    title: "Как убрать зазор между inline-block?",
    previewStyle: {
      width: 120,
      height: 40,
      background: "#f5f5f5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      padding: 4,
      fontSize: 0 // убираем пробелы между inline-block
    },
    previewContent: (
      <>
      <span
        style={{
          display: "inline-block",
          width: 30,
          height: 30,
          background: "#ff8a65"
        }}
      />
        <span
          style={{
            display: "inline-block",
            width: 30,
            height: 30,
            background: "#4db6ac"
          }}
        />
      </>
    ),
    options: [
      "font-size: 0 у родителя",
      "margin: 0",
      "display: block"
    ],
    correct: 0,
    explanation:
      "font-size: 0 у родителя убирает пробелы между inline-block элементами, так как пробелы в HTML считаются текстом."
  },
  {
    id: 89,
    title: "Как сделать плавное появление?",
    previewStyle: {
      opacity: 1,
      transition: "opacity 0.3s",
      background: "#90caf9",
      height: 30,
      width: 30
    },
    previewContent: null,
    options: ["animation", "transition + opacity", "display"],
    correct: 1,
    explanation: "opacity + transition даёт плавность."
  },
  {
    id: 90,
    title: "Почему display нельзя анимировать?",
    previewStyle: {},
    previewContent: null,
    options: [
      "display не числовой",
      "нужен keyframes",
      "браузер запрещает"
    ],
    correct: 0,
    explanation: "display не является анимируемым свойством."
  },

  {
    id: 91,
    title: "Как сделать fade-out без JS?",
    previewStyle: {
      opacity: 0,
      transition: "opacity 0.3s",
      height: 30,
      background: "#ef9a9a"
    },
    previewContent: null,
    options: ["display", "opacity", "visibility"],
    correct: 1,
    explanation: "opacity можно анимировать."
  },
  {
    id: 92,
    title: "Как ограничить количество строк текста?",
    previewStyle: {
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    },
    previewContent: "Очень длинный текст Очень длинный текст Очень длинный текст",
    options: ["text-overflow", "line-clamp", "white-space"],
    correct: 1,
    explanation: "line-clamp ограничивает количество строк."
  },
  {
    id: 93,
    title: "Как сделать изображение адаптивным?",
    previewStyle: {},
    previewContent: null,
    options: ["width: auto", "max-width: 100%", "object-fit"],
    correct: 1,
    explanation: "max-width: 100% предотвращает переполнение."
  },
  {
    id: 94,
    title: "Как растянуть img без искажения?",
    previewStyle: {},
    previewContent: null,
    options: ["background-size", "object-fit: cover", "scale"],
    correct: 1,
    explanation: "object-fit: cover сохраняет пропорции."
  },
  {
    id: 95,
    title: "Как сделать слой поверх всего интерфейса?",
    previewStyle: {
      width: 120,
      height: 80,
      background: "#f5f5f5",
      position: "relative",
      borderRadius: 6,
      overflow: "hidden",
      padding: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    previewContent: (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 10,
          borderRadius: 4
        }}
      >
        Layer
      </div>
    ),
    options: ["absolute", "fixed", "relative"],
    correct: 1,
    explanation:
      "Чтобы слой занимал весь экран, используют position: fixed + inset: 0. В превью мы имитируем это с абсолютным блоком внутри контейнера."
  },

  {
    id: 96,
    title: "Почему кнопка не кликается?",
    previewStyle: {},
    previewContent: null,
    options: [
      "opacity: 0",
      "pointer-events: none",
      "z-index маленький"
    ],
    correct: 1,
    explanation: "pointer-events: none отключает события."
  },
  {
    id: 97,
    title: "Как запретить перенос строки?",
    previewStyle: {whiteSpace: "nowrap", background: "#e0f7fa"},
    previewContent: "Один длинный текст",
    options: ["overflow", "white-space", "text-wrap"],
    correct: 1,
    explanation: "white-space управляет переносами."
  },
  {
    id: 98,
    title: "Как центрировать абсолютно позиционированный элемент?",
    previewStyle: {position: "relative", height: 60},
    previewContent: (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 20,
          height: 20,
          background: "#4caf50"
        }}
      />
    ),
    options: ["margin auto", "flex", "transform"],
    correct: 2,
    explanation: "translate компенсирует смещение на 50%."
  },
  {
    id: 99,
    title: "Как задать одинаковый отступ со всех сторон?",
    previewStyle: {padding: 12, background: "#ffe082"},
    previewContent: null,
    options: ["padding", "margin", "gap"],
    correct: 0,
    explanation: "padding задаёт внутренние отступы."
  },
  {
    id: 100,
    title: "Зачем нужен box-sizing: border-box?",
    previewStyle: {
      width: 80,
      padding: 10,
      border: "4px solid #000",
      boxSizing: "border-box",
      background: "#c5e1a5"
    },
    previewContent: null,
    options: [
      "Для анимаций",
      "Чтобы размеры были предсказуемыми",
      "Для flex"
    ],
    correct: 1,
    explanation: "border-box упрощает работу с размерами."
  },
];
