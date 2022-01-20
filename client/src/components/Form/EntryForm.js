import React, { useState } from 'react';


function EntryForm() {
  const [formInput, setFormInput] = useState(
    {
      range: 1,
      text: "",
      keywords: "",
    }
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value)
    setFormInput({
      ...formInput,
      [name]: value
    })
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log(formInput)
  }


  return (
    <div>
      <div >
        <h3 className="form-title">New Journal Entry </h3>
        <form onSubmit={handleFormSubmit}>
          <label for="rating">How was your day? (0 = terrible! 10 = best day ever!)</label>

          <div className="range">

            <input
              className="numLine"
              type="range"
              id="rating"
              name="range"
              min="0"
              max="10"
              step="1"
              required=""
              value={formInput.range}
              onChange={handleChange}
            />


            <ul className="range-labels">
              <li className="active selected">0</li>
              <li>1 </li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
            </ul>
          </div>

          <label >Tell me about your day</label>
          <textarea
            className="textArea1"
            placeholder="Write a short description about your day here"
            required=""
            type="text"
            name="keywords"
            value={formInput.keywords}
            onChange={handleChange}
          >
          </textarea>

          <div >
            <label> Keywords: </label>
            <div>
              <p role="alert" ></p>
              <div>
                <input
                  className="textArea2"
                  type="textarea"
                  name="text"
                  value={formInput.text}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button className="btn form-submit" type="submit">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default EntryForm;
