import React, {useState} from "react";
import './App.css';

export default function App() {
  const [version, setVersion] = useState(0)

  function handleReset() {
    setVersion(version + 1)
  }

  return (
    <>
      <div>
          <button onClick={handleReset}>Reset</button>
          <Form key={version} />
      </div>
    </>
  );

  function Form () {
      const [formData, setFormData] = useState({
          name: '',
          years: '',
          email: '',
      })
      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({...formData, [name]: value});
      }

      const handleSumbit = (e) => {
          e.preventDefault()

          console.log("Данные пользавателя", formData)
      }

      return (
          <form onSubmit={handleSumbit}>
              <label>
                  Name:
                  <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name....."
                  />
              </label>
              <label>
                  Years:
                  <input
                      type="number"
                      name="years"
                      value={formData.years}
                      onChange={handleChange}
                      placeholder="Enter your years...."

                  />
              </label>
              <label>
                  Email:
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter you @email"
                  />
              </label>
              <button type="submit">Submit</button>

              <div>
                  <p>Name: {formData.name}</p>
                  <p>Years: {formData.years }</p>
                  <p>Email: {formData.email}</p>
              </div>
          </form>
      );
    }
}

