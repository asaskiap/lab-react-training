import React from 'react';
import './App.css';

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
  const style = {
    backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
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

  return (
    <div className="card" style={style}>
      <img
        src={{ type } === 'Visa' ? './visa.jpg' : './mastercard.jpg'}
        alt="visalogo"
        height="50"
        width="60"
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
    </div>
  );
}

export default App;
