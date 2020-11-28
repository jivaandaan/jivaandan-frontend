import { useState } from 'react';
import { Link } from 'react-router-dom';

const RecipientForm = () => {
  const [recipientData, setRecipientData] = useState({
    name: '',
    email: '',
    age: '',
    bloodGroup: '',
    phone: '',
    isInfected: 'no',
    recoveryDate: '',
    isDonated: 'no',
    donatedDate: '',
  });

  const recipientOnChangeHandler = (e) => {
    const data = { ...recipientData };

    data[e.target.name] = e.target.value;

    setRecipientData(data);
  };

  const {
    name,
    email,
    age,
    bloodGroup,
    phone,
    isInfected,
    recoveryDate,
    isDonated,
  } = recipientData;

  return (
    <div className="section form container">
      <div className="form-container">
        <h1 className="form__title">
          <Link to="/" className="back--btn">
            &larr;
          </Link>
          &nbsp; Recipient Form
        </h1>
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
                value={name}
                onChange={recipientOnChangeHandler}
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
                value={email}
                onChange={recipientOnChangeHandler}
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
                value={age}
                onChange={recipientOnChangeHandler}
              />
            </div>
            <div className="form__group">
              {/* <label htmlFor="blood_group">blood_group:</label> */}
              <select
                name="bloodGroup"
                id="age"
                className="form__input"
                placeholder="Blood Group"
                required
                value={bloodGroup}
                onChange={recipientOnChangeHandler}
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
                type="number"
                name="phone"
                required
                id="phone"
                className="form__input"
                placeholder="Phone Number"
                value={phone}
                onChange={recipientOnChangeHandler}
              />
            </div>
            <div>
              <h2 className="form__question">
                Did you ever test +ve for covid-19 infection?
              </h2>
              <div
                className="form__group"
                value={isInfected}
                onChange={recipientOnChangeHandler}
              >
                <label htmlFor="isInfected-yes"> Yes</label>
                <input
                  type="radio"
                  name="isInfected"
                  value="yes"
                  required
                  id="isInfected-yes"
                  className=""
                />
                <label htmlFor="isInfected-no"> No</label>
                <input
                  type="radio"
                  name="isInfected"
                  value="No"
                  required
                  id="isInfected-no"
                  className=""
                />
              </div>
            </div>
            {isInfected === 'yes' && (
              <div className="form__group">
                <label htmlFor="recoveryDate">
                  What was your date of recovery?
                </label>
                <input
                  type="date"
                  name="recoveryDate"
                  required
                  id="recoveryDate"
                  className="form__input"
                  style={{ width: '20rem' }}
                  value={recoveryDate}
                  onChange={recipientOnChangeHandler}
                />
              </div>
            )}
            <div>
              <h2 className="form__question">
                Did you ever Donate plasma before if yes when?
              </h2>
              <div
                className="form__group"
                value={isDonated}
                onChange={recipientOnChangeHandler}
              >
                <label htmlFor="isDonated-yes">Yes</label>
                <input
                  type="radio"
                  name="isDonated"
                  value="yes"
                  required
                  id="isDonated-yes"
                  className=""
                />
              </div>
              {isDonated === 'yes' && (
                <input
                  type="date"
                  name="donatedDate"
                  required
                  id="donatedDate"
                  className="form__input"
                  // value={donatedDate}
                  onChange={recipientOnChangeHandler}
                  style={{ width: '20rem', marginTop: '1rem' }}
                />
              )}
              <div
                className="form__group"
                value={isDonated}
                onChange={recipientOnChangeHandler}
              >
                <label htmlFor="isDonated-no">No</label>
                <input
                  type="radio"
                  name="isDonated"
                  value="no"
                  required
                  id="isDonated-no"
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
              onClick={() => console.log(recipientData)}
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
