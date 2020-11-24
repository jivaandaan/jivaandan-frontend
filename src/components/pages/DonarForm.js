const DonarForm = () => {
  return (
    <div className="card">
      <h1 className="card-title">Donor Form</h1>
      <div className="card-body">
        <form className="w-50 m-auto" action="/sam">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              id="name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              required
              id="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              required
              id="age"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="blood_group">blood_group:</label>
            <select name="blood_group" id="age" className="form-control">
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
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              required
              id="phone"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <h2>Did you ever test +ve for covid-19 infection?</h2>
            <div>
              <input
                type="radio"
                name="test"
                value="yes"
                required
                id="t1"
                className="form"
              />
              <label htmlFor="t1"> Yes</label>
            </div>
            <div>
              <input
                type="radio"
                name="test"
                value="No"
                required
                id="t2"
                className="form"
              />
              <label htmlFor="t2"> No</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Date1">what was your date of recovery:</label>
            <input
              type="date"
              name="Date1"
              required
              id="Date1"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <h2>Did you ever Donate plasma before if yes when?</h2>
            <div>
              <input
                type="radio"
                name="test1"
                value="yes"
                required
                id="t1"
                className="form"
              />
              <label htmlFor="t1"> Yes</label>
              <input
                type="date"
                name="Date"
                required
                id="Date3"
                className="form-control"
              />
            </div>
            <div>
              <input
                type="radio"
                name="test1"
                value="No"
                required
                id="t2"
                className="form"
              />
              <label htmlFor="t2"> No</label>
            </div>
          </div>
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonarForm;
