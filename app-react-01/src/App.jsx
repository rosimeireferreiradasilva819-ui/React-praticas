import "./App.css";

import Card from "./components/Card";

const listCars = [
  {
	id: 1,
	brand: "Hyundai",
	model: "HB20",
	km: "65.000",
	category: "Hatch",
	year: "2018",
	price: "55.000,00",
  },
  {
	id: 2,
	brand: "Toyota",
	model: "Hilux",
	km: "100.000",
	category: "Picape",
	year: "2019",
	price: "155.000,00",
  },
  {
	id: 3,
	brand: "Volkswagen",
	model: "T-Cross",
	km: "20.000",
	category: "SUV",
	year: "2021",
	price: "135.000,00",
  },
];

const App = () => {
return (
	<>
	  <h1>Anúncios Recentes</h1>
	  <div className='cards'>
		{listCars.map((car) => (
		  <Card key={car.id} car={car} />
		))}
	  </div>
	</>
  );
}

  
