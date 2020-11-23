const DonarForm = () => {
    return (
        <div class="card" >
            <h1 class="card-title" >Donar Form</h1>
            <div class="card-body">
                <form class="w-50 m-auto" action="/sam">
                    <div class="form-group">
                        <lable>Name:</lable>
                        <input type="text" name="name" required id="name" class="form-control" />
                    </div>
                    <div class="form-group">
                        <lable for="email">Email:</lable>
                        <input type="email" name="email" required id="email" class="form-control" />
                    </div>
                    <div class="form-group">
                        <lable>Age:</lable>
                        <input type="number" name="age" required id="age" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="blood_group">blood_group:</label>
                        <select name="blood_group" id="age" class="form-control">
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
                    <div class="form-group">
                        <lable for="phone">Phone Number:</lable>
                        <input type="tel" name="phone" required id="phone" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <h2>Did you ever test +ve for covid-19 infection?</h2>
                        <div>
                            <input type="radio" name="test" value="yes" required id="t1" class="form" required />
                            <lable for="t1">    Yes</lable>
                        </div>
                        <div>
                            <input type="radio" name="test" value="No" required id="t2" class="form" required />
                            <lable for="t2">    No</lable>
                        </div>
                    </div>
                    <div class="form-group">
                        <lable for="Date1">what was your date of recovery:</lable>
                        <input type="date" name="Date1" required id="Date1" class="form-control" required />
                    </div>
                    <div class="form-group">
                        <h2>Did you ever Donate plasma before if yes when?</h2>
                        <div>
                            <input type="radio" name="test1" value="yes" required id="t1" class="form" required />
                            <lable for="t1">    Yes</lable>
                            <input type="date" name="Date" required id="Date3" class="form-control" required />
                            
                        </div>
                        <div>
                            <input type="radio" name="test1" value="No" required id="t2" class="form" required />
                            <lable for="t2">    No</lable>
                        </div>
                    </div>
                    <button type="submit" class="btn" >submit</button>

                </form>
            </div>

        </div>
    );
};

export default DonarForm;