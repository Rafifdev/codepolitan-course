import "./App.css";

const socialMedia = [
  {
    icon: "F",
    href: "https://instagram.com/yoapipp",
  },
  {
    icon: "I",
    href: "https://instagram.com/yoapipp",
  },
  {
    icon: "X",
    href: "https://instagram.com/yoapipp",
  },
  {
    icon: "IN",
    href: "https://instagram.com/yoapipp",
  },
  {
    icon: "G",
    href: "https://instagram.com/yoapipp",
  },
];

function App() {
  return (
    <div className="card">
      <div className="top">
        <HeaderCard />
        <Identity name={"Black Cat"} title={"Meow Engginer"} />
      </div>
      <div className="bottom">
        <Biodata name={"Black Cat"} />
        <Highlight />
      </div>
    </div>
  );
}

function Buttons({index, children, href}) {
  return (
    <button key={index} onClick={() => window.open(href, "_blank")}>
        <i>{children}</i>
    </button>
  );
}

function HeaderCard() {
  const midleIndex = Math.round(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, midleIndex);
  const socialRight = socialMedia.slice(midleIndex);

  return (
    <>
      <div className="social-buttons">
        {socialLeft.map((data, index) => (
          <Buttons key={index} href={data.href}>{data.icon}</Buttons>
        ))}
      </div>
      <div className="social-buttons right">
        {socialRight.map((data, index) => (
          <Buttons key={index}>{data.icon}</Buttons>
        ))}
      </div>
    </>
  );
}

function Identity(props) {
  return (
    <>
      <div className="text">
        <div className="name-wrapper">
          <div className="name">{props.name}</div>
        </div>
        <div className="title">{props.title}</div>
      </div>
    </>
  );
}

function Biodata(props) {
  return (
    <div className="desc">
      <p>
        My name is <b>{props.name}</b> and i am a Developer
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet modi
        odio fugit laudantium temporibus pariatur sit saepe magni possimus,
        asperiores fugiat dicta nulla neque iste harum.
      </p>
    </div>
  );
}

function Badge(props) {
  return (
    <button>
      <div className="height">{props.children}</div>
    </button>
  );
}

function Highlight() {
  return (
    <div className="buttons">
      <Badge>🚀 PhD</Badge>
      <Badge>⚛️ React JS</Badge>
      <Badge>🧑‍💻 Lecture</Badge>
    </div>
  );
}

export default App;
