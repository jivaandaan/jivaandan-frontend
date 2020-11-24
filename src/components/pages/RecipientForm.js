const RecipientForm = () => {
  return (
    <div className="section form container">
      <div className="form-container">
        <h1 className="form__title">Recipient Form</h1>
        <div className="form__body">
          <form className="form__content" action="/sam">
            <div className="form__group">
              {/* <label>Name:</label> */}
              <input
                type="text"
                name="name"
                required
                id="name"
                className="form__input"
                placeholder="Full Name"
              />
            </div>
            <div className="form__group">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                type="email"
                name="email"
                required
                id="email"
                className="form__input"
                placeholder="Email ID"
              />
            </div>
            <div className="form__group">
              {/* <label>Age:</label> */}
              <input
                type="number"
                name="age"
                required
                id="age"
                className="form__input"
                placeholder="Age"
              />
            </div>
            <div className="form__group">
              {/* <label htmlFor="blood_group">blood_group:</label> */}
              <select
                name="blood_group"
                id="age"
                className="form__input"
                placeholder="Blood Group"
                required
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="o+">o+</option>
                <option value="o-">o-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="form__group">
              {/* <label htmlFor="phone">Phone Number:</label> */}
              <input
                type="tel"
                name="phone"
                required
                id="phone"
                className="form__input"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <h2 className="form__question">
                Did you ever test +ve for covid-19 infection?
              </h2>
              <div className="form__group">
                <label htmlFor="t1"> Yes</label>
                <input
                  type="radio"
                  name="test"
                  value="yes"
                  required
                  id="t1"
                  className=""
                />
              </div>
              <div className="form__group">
                <label htmlFor="t2"> No</label>
                <input
                  type="radio"
                  name="test"
                  value="No"
                  required
                  id="t2"
                  className=""
                />
              </div>
            </div>
            <div className="form__group">
              <label htmlFor="Date1">What was your date of recovery?</label>
              <input
                type="date"
                name="Date1"
                required
                id="Date1"
                className="form__input"
                style={{ width: '20rem' }}
              />
            </div>
            <div>
              <h2 className="form__question">
                Did you ever Donate plasma before if yes when?
              </h2>
              <div className="form__group">
                <label htmlFor="t1">Yes</label>
                <input
                  type="radio"
                  name="test1"
                  value="yes"
                  required
                  id="t1"
                  className=""
                />
              </div>
              <input
                type="date"
                name="Date"
                required
                id="Date3"
                className="form__input"
                style={{ width: '20rem', marginTop: '1rem' }}
              />
              <div className="form__group">
                <label htmlFor="t2">No</label>
                <input
                  type="radio"
                  name="test1"
                  value="No"
                  required
                  id="t2"
                  className=""
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn--green"
              style={{
                display: 'block',
                width: '100%',
                fontSize: '2rem',
                margin: '2rem 0 3rem 0',
              }}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecipientForm;
