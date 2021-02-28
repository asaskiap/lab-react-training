import React from 'react';
import './App.css';
import profiles from './data/berlin.json';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="idCard">
      <img src={picture} alt="pic" />
      <section>
        <p>
          <strong> First Name: </strong> {firstName}
        </p>
        <p>
          <strong> Last Name: </strong> {lastName}
        </p>
        <p>
          <strong> Gender: </strong> {gender}
        </p>
        <p>
          <strong> Height: </strong> {height}
        </p>
        <p>
          <strong> Birth: </strong> {birth.toUTCString()}
        </p>
      </section>
    </div>
  );
};

const Greetings = (props) => {
  let greeting = '';
  switch (props.lang) {
    case 'de':
      greeting = 'Hallo ';
      break;
    case 'fr':
      greeting = 'Bonjour ';
      break;
    case 'es':
      greeting = 'Ola ';
      break;
    default:
      greeting = 'Hello ';
  }
  return (
    <div className="greeting">
      <p>
        {greeting}
        {props.children}
      </p>
    </div>
  );
};

const Random = ({ min, max }) => {
  const rand = Math.floor(Math.random() * max + min);
  return (
    <div className="random">
      <p>
        Random Value between {min} and {max} {'=>'} {rand}
      </p>
    </div>
  );
};

const BoxColor = ({ r, g, b }) => {
  const colorLight = (r + g + b) / 6 > 255 / 2;
  console.log(colorLight);
  const textColor = colorLight ? 'black' : 'white';
  const style = {
    backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
    color: textColor,
  };

  return (
    <div className="colorBox" style={style}>
      rgb({r}, {g}, {b})
    </div>
  );
};

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const style = {
    backgroundColor: bgColor,
    color: color,
  };

  let visa = false;
  if (type === 'Visa') {
    visa = true;
  }

  console.log(visa);

  return (
    <div className="card" style={style}>
      <img
        src={visa ? './img/visa.png' : './img/master-card.svg'}
        alt="visalogo"
        height="40"
        width="80"
      />
      <p className="number">{number}</p>
      <section>
        <p>
          Expires {expirationMonth}/{expirationYear} {bank}
        </p>
        <p>{owner}</p>
      </section>
    </div>
  );
};

const Rating = (props) => {
  const rating = Math.round(props.children);
  if (rating === 0) {
    return (
      <div className="stars">
        <p>&#9734;</p>
        <p>&#9734;</p>
        <p>&#9734;</p>
        <p>&#9734;</p>
        <p>&#9734;</p>
      </div>
    );
  }
  if (rating === 1) {
    return (
      <div className="stars">
        <p>&#9733;</p>
        <p>&#9734;</p>
        <p>&#9734;</p>
        <p>&#9734;</p>
        <p>&#9734;</p>
      </div>
    );
  }
  if (rating === 2) {
    return (
      <div className="stars">
        <p>&#9733;</p>
        <p>&#9733;</p>
        <p>&#9734;</p>
        <p>&#9734;</p>
        <p>&#9734;</p>
      </div>
    );
  }
  if (rating === 3) {
    return (
      <div className="stars">
        <p>&#9733;</p>
        <p>&#9733;</p>
        <p>&#9733;</p>
        <p>&#9734;</p>
        <p>&#9734;</p>
      </div>
    );
  }
  if (rating === 4) {
    return (
      <div className="stars">
        <p>&#9733;</p>
        <p>&#9733;</p>
        <p>&#9733;</p>
        <p>&#9733;</p>
        <p>&#9734;</p>
      </div>
    );
  }
  if (rating === 5) {
    return (
      <div className="stars">
        <p>&#9733;</p>
        <p>&#9733;</p>
        <p>&#9733;</p>
        <p>&#9733;</p>
        <p>&#9733;</p>
      </div>
    );
  }
};

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driverCard">
      <img src={img} alt="img" height="90" />
      <section>
        <p id="name">{name}</p>
        <p id="rating">
          {' '}
          <Rating>{rating}</Rating>
        </p>

        <p>
          {car.model} {car.licensePlate}
        </p>
      </section>
    </div>
  );
};

class LikeButton extends React.Component {
  state = {
    likes: 0,
  };

  incrementLikes = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <button className="likeBtn" onClick={this.incrementLikes}>
        {this.state.likes} Likes
      </button>
    );
  }
}

class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
    };
  }

  toggleImage = () => {
    this.setState({
      img:
        this.state.img === this.props.img
          ? this.props.imgClicked
          : this.props.img,
    });
  };
  render() {
    return (
      <img src={this.state.img} alt="funnyPic" onClick={this.toggleImage} />
    );
  }
}

class Dice extends React.Component {
  state = {
    img: './img/dice-empty.png',
  };

  roll = () => {
    const val = Math.floor(Math.random() * 6) + 1;
    console.log(val);
    this.setState({
      img: `./img/dice${val}.png`,
    });
  };

  render() {
    return (
      <img
        src={this.state.img}
        alt="dice"
        height="300"
        onClick={this.roll}
      ></img>
    );
  }
}

class NumbersTable extends React.Component {
  constructor(props) {
    super(props);
    this.limit = props.limit;
    this.numArr = [];
    for (let i = 1; i < this.limit + 1; i++) {
      this.numArr.push(i);
    }
  }

  style1 = {
    backgroundColor: 'red',
    color: 'white',
    listStyleType: 'none',
    border: '2px solid black',
  };
  style2 = {
    backgroundColor: 'white',
    color: 'black',
    listStyleType: 'none',
    border: '2px solid black',
  };

  render() {
    return (
      <ul className="numbersTable">
        {this.numArr.map((num) => {
          if (num % 2 === 0) {
            return (
              <li key={num} style={this.style1} className="numbersTableItem">
                {num}
              </li>
            );
          } else {
            return (
              <li key={num} style={this.style2} className="numbersTableItem">
                {num}
              </li>
            );
          }
        })}
      </ul>
    );
  }
}

class FaceBook extends React.Component {
  render() {
    console.log(profiles);
    return (
      <div className="FaceBook">
        {profiles.map((person) => {
          return (
            <div className="idCard">
              <img src={person.img} alt="pic" />
              <section>
                <p>
                  <strong> First Name: </strong> {person.firstName}
                </p>
                <p>
                  <strong> Last Name: </strong> {person.lastName}
                </p>
                <p>
                  <strong> Country: </strong> {person.country}
                </p>
              </section>
            </div>
          );
        })}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <div id="creditCards">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButton />
      <LikeButton />

      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />

      <Dice />

      <NumbersTable limit={14} />

      <FaceBook />
    </div>
  );
}

export default App;
